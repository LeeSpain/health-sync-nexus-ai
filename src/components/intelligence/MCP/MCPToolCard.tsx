
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { 
  Terminal, 
  Info, 
  Zap, 
  Settings, 
  Check, 
  X,
  ArrowRight
} from 'lucide-react';
import { MCPToolDefinition } from '@/lib/mcp/types';
import { useMCP } from '@/hooks/use-mcp';
import { AgentType } from '@/lib/agent-integration/types';

interface MCPToolCardProps {
  tool: MCPToolDefinition;
  agentId: AgentType;
}

export function MCPToolCard({ tool, agentId }: MCPToolCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [detailView, setDetailView] = useState<'info' | 'execute' | 'settings'>('info');
  const [inputs, setInputs] = useState<Record<string, any>>({});
  const [outputData, setOutputData] = useState<Record<string, any> | null>(null);
  const { loading, executeTool } = useMCP(agentId);
  
  const handleInputChange = (key: string, value: any) => {
    setInputs(prev => ({
      ...prev,
      [key]: value
    }));
  };
  
  const handleExecute = async () => {
    try {
      const response = await executeTool(tool.name, inputs);
      if (response.status === 'success') {
        setOutputData(response.outputs);
      }
    } catch (error) {
      console.error('Error executing tool:', error);
    }
  };
  
  const renderInputFields = () => {
    const properties = tool.inputs.properties;
    const requiredInputs = tool.inputs.required || [];
    
    return Object.entries(properties).map(([key, schema]) => (
      <div key={key} className="mb-3">
        <Label htmlFor={key} className="flex items-center gap-1">
          {schema.description || key}
          {requiredInputs.includes(key) && (
            <span className="text-red-500">*</span>
          )}
        </Label>
        <Input
          id={key}
          placeholder={`Enter ${key}`}
          className="mt-1"
          value={inputs[key] || ''}
          onChange={(e) => handleInputChange(key, e.target.value)}
          required={requiredInputs.includes(key)}
        />
      </div>
    ));
  };
  
  const renderToolDetails = () => {
    switch (detailView) {
      case 'info':
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Terminal className="mr-2 h-5 w-5" />
                {tool.name}
              </DialogTitle>
              <DialogDescription>
                {tool.description}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Input Schema</h4>
                <pre className="bg-muted p-3 rounded-md text-xs overflow-auto max-h-40">
                  {JSON.stringify(tool.inputs, null, 2)}
                </pre>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Output Schema</h4>
                <pre className="bg-muted p-3 rounded-md text-xs overflow-auto max-h-40">
                  {JSON.stringify(tool.outputs, null, 2)}
                </pre>
              </div>
            </div>
          </>
        );
        
      case 'execute':
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5" />
                Execute {tool.name}
              </DialogTitle>
              <DialogDescription>
                Provide input parameters to execute this tool
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="space-y-4">
                {renderInputFields()}
                
                {outputData && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Output</h4>
                    <pre className="bg-muted p-3 rounded-md text-xs overflow-auto max-h-40">
                      {JSON.stringify(outputData, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOutputData(null)}>
                Clear
              </Button>
              <Button onClick={handleExecute} disabled={loading}>
                {loading ? 'Processing...' : 'Execute Tool'}
              </Button>
            </DialogFooter>
          </>
        );
        
      case 'settings':
        return (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Settings className="mr-2 h-5 w-5" />
                Tool Settings
              </DialogTitle>
              <DialogDescription>
                Configure guardrails and tool behavior
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium mb-1">Confidence Threshold</h4>
                  <div className="flex items-center gap-2">
                    <Input 
                      type="number" 
                      min="0" 
                      max="1" 
                      step="0.05" 
                      value={tool.guardrails?.confidenceThreshold || 0.5}
                      className="w-24"
                      readOnly
                    />
                    <span className="text-xs text-muted-foreground">
                      Minimum confidence score required for execution
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Maximum Retries</h4>
                  <div className="flex items-center gap-2">
                    <Input 
                      type="number" 
                      min="0" 
                      max="5" 
                      value={tool.guardrails?.maxRetries || 0}
                      className="w-24"
                      readOnly
                    />
                    <span className="text-xs text-muted-foreground">
                      Number of retry attempts on failure
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Human Approval</h4>
                  <div className="flex items-center gap-2">
                    {tool.guardrails?.requiresHumanApproval ? (
                      <Badge className="bg-amber-100 text-amber-800">Required</Badge>
                    ) : (
                      <Badge variant="outline">Not Required</Badge>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Fallback Message</h4>
                  <div className="text-sm bg-muted p-2 rounded-md">
                    {tool.guardrails?.fallbackMessage || "No fallback message configured"}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };
  
  return (
    <>
      <Card className="hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex justify-between items-center">
            <span className="flex items-center">
              <Terminal className="mr-2 h-4 w-4 text-indigo-500" />
              {tool.name}
            </span>
            <Badge variant="outline" className="text-xs">
              {tool.version || 'v1'}
            </Badge>
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {tool.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex flex-wrap gap-1 mb-2">
            {tool.guardrails?.requiresHumanApproval && (
              <Badge variant="outline" className="bg-amber-50 text-amber-700 text-xs">
                Human Approval
              </Badge>
            )}
            {tool.guardrails?.confidenceThreshold && tool.guardrails.confidenceThreshold > 0.8 && (
              <Badge variant="outline" className="bg-red-50 text-red-700 text-xs">
                High Confidence
              </Badge>
            )}
            {tool.inputs.required && tool.inputs.required.length > 0 && (
              <Badge variant="outline" className="bg-blue-50 text-blue-700 text-xs">
                {tool.inputs.required.length} Required Inputs
              </Badge>
            )}
          </div>
          
          <div className="text-xs text-muted-foreground">
            <div className="flex items-center justify-between mb-1">
              <span>Confidence Threshold:</span>
              <span>{tool.guardrails?.confidenceThreshold || 'None'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Max Retries:</span>
              <span>{tool.guardrails?.maxRetries || 'None'}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-2 border-t">
          <div className="flex justify-between w-full">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs"
              onClick={() => {
                setDetailView('info');
                setIsDialogOpen(true);
              }}
            >
              <Info className="h-3 w-3 mr-1" />
              Details
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs"
              onClick={() => {
                setDetailView('settings');
                setIsDialogOpen(true);
              }}
            >
              <Settings className="h-3 w-3 mr-1" />
              Settings
            </Button>
            <Button 
              variant="default" 
              size="sm" 
              className="text-xs"
              onClick={() => {
                setDetailView('execute');
                setIsDialogOpen(true);
                setInputs({});
                setOutputData(null);
              }}
            >
              <Zap className="h-3 w-3 mr-1" />
              Execute
            </Button>
          </div>
        </CardFooter>
      </Card>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <div className="mb-4 border-b">
            <div className="flex space-x-1">
              <Button
                variant={detailView === 'info' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setDetailView('info')}
                className="rounded-b-none"
              >
                <Info className="h-4 w-4 mr-1" />
                Info
              </Button>
              <Button
                variant={detailView === 'execute' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setDetailView('execute')}
                className="rounded-b-none"
              >
                <Zap className="h-4 w-4 mr-1" />
                Execute
              </Button>
              <Button
                variant={detailView === 'settings' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setDetailView('settings')}
                className="rounded-b-none"
              >
                <Settings className="h-4 w-4 mr-1" />
                Settings
              </Button>
            </div>
          </div>
          
          {renderToolDetails()}
        </DialogContent>
      </Dialog>
    </>
  );
}
