
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Settings, BarChart2, Zap, Terminal } from 'lucide-react';
import { useMCP } from '@/hooks/use-mcp';
import { MCPToolDefinition } from '@/lib/mcp/types';
import { MCPToolCard } from './MCPToolCard';
import { MCPToolMetrics } from './MCPToolMetrics';
import { AgentType } from '@/lib/agent-integration/types';

interface MCPToolsPanelProps {
  agentId?: AgentType;
}

export function MCPToolsPanel({ agentId = 'isabella' }: MCPToolsPanelProps) {
  const [activeTab, setActiveTab] = useState('tools');
  const [tools, setTools] = useState<MCPToolDefinition[]>([]);
  const { 
    loading, 
    initializeMCP, 
    getAvailableTools, 
    getToolAnalytics,
    getExecutionHistory
  } = useMCP(agentId);
  
  useEffect(() => {
    // Initialize MCP system
    initializeMCP();
    
    // Load available tools
    const loadTools = async () => {
      const availableTools = await getAvailableTools();
      setTools(availableTools);
    };
    
    loadTools();
  }, []);
  
  const renderToolsList = () => {
    if (loading && tools.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">Loading tools...</p>
        </div>
      );
    }
    
    if (tools.length === 0) {
      return (
        <div className="text-center py-8">
          <Terminal className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
          <p className="text-sm text-muted-foreground">No tools available</p>
          <Button className="mt-4" onClick={() => initializeMCP()}>
            Initialize MCP
          </Button>
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tools.map(tool => (
          <MCPToolCard key={tool.name} tool={tool} agentId={agentId} />
        ))}
      </div>
    );
  };
  
  const renderAnalytics = () => {
    if (tools.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">No tools available for analytics</p>
        </div>
      );
    }
    
    return (
      <div className="space-y-6">
        {tools.map(tool => {
          const analytics = getToolAnalytics(tool.name);
          return (
            <MCPToolMetrics 
              key={tool.name} 
              toolName={tool.name} 
              analytics={analytics} 
            />
          );
        })}
      </div>
    );
  };
  
  const renderExecutionHistory = () => {
    const executions = getExecutionHistory();
    
    if (executions.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">No execution history available</p>
        </div>
      );
    }
    
    return (
      <div className="space-y-2">
        {executions.slice(0, 10).map(execution => (
          <div key={execution.id} className="p-3 rounded-lg border bg-card">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-sm">{execution.toolName}</h4>
                <p className="text-xs text-muted-foreground">
                  Agent: {execution.agentId} • 
                  {new Date(execution.startTime).toLocaleString()}
                </p>
              </div>
              <Badge
                variant="outline"
                className={
                  execution.status === 'completed' ? 'bg-green-50 text-green-700' :
                  execution.status === 'failed' ? 'bg-red-50 text-red-700' :
                  execution.status === 'escalated' ? 'bg-amber-50 text-amber-700' :
                  'bg-blue-50 text-blue-700'
                }
              >
                {execution.status}
              </Badge>
            </div>
            {execution.outputs && (
              <div className="mt-2">
                <p className="text-xs font-medium">Output:</p>
                <pre className="text-xs bg-muted p-2 rounded overflow-x-auto mt-1">
                  {JSON.stringify(execution.outputs, null, 2)}
                </pre>
              </div>
            )}
            {execution.error && (
              <p className="text-xs text-red-500 mt-1">
                Error: {execution.error}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="mr-2 h-5 w-5 text-indigo-500" />
          Model Context Protocol (MCP)
        </CardTitle>
        <CardDescription>
          Agent tool orchestration and execution management
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tools" onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="tools">
              <Terminal className="h-4 w-4 mr-2" />
              Available Tools
            </TabsTrigger>
            <TabsTrigger value="analytics">
              <BarChart2 className="h-4 w-4 mr-2" />
              Tool Analytics
            </TabsTrigger>
            <TabsTrigger value="history">
              <Zap className="h-4 w-4 mr-2" />
              Execution History
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="tools" className="mt-0">
            {renderToolsList()}
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-0">
            {renderAnalytics()}
          </TabsContent>
          
          <TabsContent value="history" className="mt-0">
            {renderExecutionHistory()}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
