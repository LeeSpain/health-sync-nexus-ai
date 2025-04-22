import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CopyIcon, CheckIcon, ArrowDownToLine } from "lucide-react";
import { toast } from "sonner";
import { FinancialAPIDocumentation } from "./FinancialAPIDocumentation";

interface EndpointExample {
  request: string;
  response: string;
}

interface APIEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  requiresAuth: boolean;
  parameters?: { name: string; type: string; description: string; required: boolean }[];
  responseSchema: string;
  example: EndpointExample;
}

interface APISection {
  title: string;
  description: string;
  baseUrl: string;
  endpoints: APIEndpoint[];
}

export function APIDocumentation() {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);
  
  const apiSections: APISection[] = [
    {
      title: "Agent Management API",
      description: "Endpoints for managing AI agents across platforms",
      baseUrl: "https://api.ghscommand.com/v1/agents",
      endpoints: [
        {
          method: 'GET',
          path: '/configurations',
          description: 'Retrieve all agent configurations',
          requiresAuth: true,
          responseSchema: `{
  agents: Array<{
    id: string;
    name: string;
    type: 'anna' | 'emma' | 'julia' | 'isabella';
    platform: 'ihealth-sync' | 'nurse-sync' | 'medic-sync' | 'command';
    personality: {
      tone: string;
      style: string;
      communication: string;
    };
    knowledgeBaseId: string;
    isActive: boolean;
    escalatesTo: string | null;
  }>
}`,
          example: {
            request: 'GET /v1/agents/configurations',
            response: `{
  "agents": [
    {
      "id": "1",
      "name": "Anna",
      "type": "anna",
      "platform": "ihealth-sync",
      "personality": {
        "tone": "Gentle, warm, emotionally supportive",
        "style": "Conversational and accessible",
        "communication": "Simple explanations with reminders"
      },
      "knowledgeBaseId": "kb-anna-001",
      "isActive": true,
      "escalatesTo": "emma"
    },
    // ...other agents
  ]
}`
          }
        },
        {
          method: 'GET',
          path: '/configuration/:agentType',
          description: 'Retrieve configuration for a specific agent',
          requiresAuth: true,
          parameters: [
            { name: 'agentType', type: 'string', description: 'Type of agent (anna, emma, julia, isabella)', required: true }
          ],
          responseSchema: `{
  id: string;
  name: string;
  type: 'anna' | 'emma' | 'julia' | 'isabella';
  platform: 'ihealth-sync' | 'nurse-sync' | 'medic-sync' | 'command';
  personality: {
    tone: string;
    style: string;
    communication: string;
  };
  knowledgeBaseId: string;
  isActive: boolean;
  escalatesTo: string | null;
}`,
          example: {
            request: 'GET /v1/agents/configuration/anna',
            response: `{
  "id": "1",
  "name": "Anna",
  "type": "anna",
  "platform": "ihealth-sync",
  "personality": {
    "tone": "Gentle, warm, emotionally supportive",
    "style": "Conversational and accessible",
    "communication": "Simple explanations with reminders"
  },
  "knowledgeBaseId": "kb-anna-001",
  "isActive": true,
  "escalatesTo": "emma"
}`
          }
        },
        {
          method: 'PUT',
          path: '/configuration/:agentType',
          description: 'Update configuration for a specific agent',
          requiresAuth: true,
          parameters: [
            { name: 'agentType', type: 'string', description: 'Type of agent (anna, emma, julia, isabella)', required: true }
          ],
          responseSchema: `{
  id: string;
  name: string;
  type: 'anna' | 'emma' | 'julia' | 'isabella';
  platform: 'ihealth-sync' | 'nurse-sync' | 'medic-sync' | 'command';
  personality: {
    tone: string;
    style: string;
    communication: string;
  };
  knowledgeBaseId: string;
  isActive: boolean;
  escalatesTo: string | null;
}`,
          example: {
            request: `PUT /v1/agents/configuration/anna
{
  "personality": {
    "tone": "Updated tone",
    "style": "Updated style",
    "communication": "Updated communication"
  },
  "isActive": true
}`,
            response: `{
  "id": "1",
  "name": "Anna",
  "type": "anna",
  "platform": "ihealth-sync",
  "personality": {
    "tone": "Updated tone",
    "style": "Updated style",
    "communication": "Updated communication"
  },
  "knowledgeBaseId": "kb-anna-001",
  "isActive": true,
  "escalatesTo": "emma"
}`
          }
        }
      ]
    },
    {
      title: "Event Synchronization API",
      description: "Endpoints for synchronizing events and metrics across platforms",
      baseUrl: "https://api.ghscommand.com/v1/events",
      endpoints: [
        {
          method: 'POST',
          path: '/sync',
          description: 'Sync an event from a platform to GHS Command',
          requiresAuth: true,
          parameters: [
            { name: 'type', type: 'string', description: 'Event type (metrics, conversation, escalation)', required: true },
            { name: 'agentId', type: 'string', description: 'ID of the agent generating the event', required: true },
            { name: 'platform', type: 'string', description: 'Platform source (ihealth-sync, nurse-sync, medic-sync)', required: true },
            { name: 'data', type: 'object', description: 'Event data payload', required: true }
          ],
          responseSchema: `{
  success: boolean;
  message: string;
  eventId: string;
}`,
          example: {
            request: `POST /v1/events/sync
{
  "type": "metrics",
  "agentId": "anna",
  "platform": "ihealth-sync",
  "timestamp": "2025-04-22T14:30:00Z",
  "data": {
    "conversationsCount": 152,
    "averageResponseTime": 1.8,
    "sentimentScore": 0.87,
    "topTopic": "medication reminders",
    "escalationCount": 3,
    "successfulResolutions": 149
  }
}`,
            response: `{
  "success": true,
  "message": "Event synchronized successfully",
  "eventId": "evt_1234567890"
}`
          }
        },
        {
          method: 'POST',
          path: '/escalation',
          description: 'Report an escalation from one agent to another',
          requiresAuth: true,
          parameters: [
            { name: 'fromAgent', type: 'string', description: 'Agent escalating the conversation', required: true },
            { name: 'toAgent', type: 'string', description: 'Agent receiving the escalation', required: true },
            { name: 'reason', type: 'string', description: 'Reason for escalation', required: true },
            { name: 'conversationId', type: 'string', description: 'ID of the conversation being escalated', required: true }
          ],
          responseSchema: `{
  success: boolean;
  message: string;
  escalationId: string;
}`,
          example: {
            request: `POST /v1/events/escalation
{
  "fromAgent": "anna",
  "toAgent": "emma",
  "reason": "Medical question beyond scope",
  "conversationId": "conv_1234567890"
}`,
            response: `{
  "success": true,
  "message": "Escalation recorded successfully",
  "escalationId": "esc_1234567890"
}`
          }
        }
      ]
    },
    {
      title: "MCP Tools API",
      description: "Endpoints for accessing and executing Model Context Protocol tools",
      baseUrl: "https://api.ghscommand.com/v1/mcp",
      endpoints: [
        {
          method: 'GET',
          path: '/tools',
          description: 'Discover available MCP tools',
          requiresAuth: true,
          responseSchema: `{
  tools: Array<{
    name: string;
    description: string;
    inputSchema: object;
    outputSchema: object;
  }>
}`,
          example: {
            request: 'GET /v1/mcp/tools',
            response: `{
  "tools": [
    {
      "name": "create_ticket",
      "description": "Create a support ticket in the system",
      "inputSchema": {
        "type": "object",
        "properties": {
          "subject": {"type": "string"},
          "description": {"type": "string"},
          "priority": {"type": "string", "enum": ["low", "medium", "high", "critical"]}
        },
        "required": ["subject", "description"]
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "ticket_id": {"type": "string"},
          "status": {"type": "string"},
          "created_at": {"type": "string", "format": "date-time"}
        }
      }
    },
    // ...other tools
  ]
}`
          }
        },
        {
          method: 'POST',
          path: '/execute',
          description: 'Execute an MCP tool',
          requiresAuth: true,
          parameters: [
            { name: 'tool', type: 'string', description: 'Name of the tool to execute', required: true },
            { name: 'inputs', type: 'object', description: 'Tool input parameters', required: true },
            { name: 'context', type: 'object', description: 'Optional execution context', required: false },
            { name: 'metadata', type: 'object', description: 'Additional metadata for the execution', required: false }
          ],
          responseSchema: `{
  tool: string;
  outputs: object;
  status: 'success' | 'error';
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  metrics?: {
    latency: number;
    confidence: number;
  };
}`,
          example: {
            request: `POST /v1/mcp/execute
{
  "tool": "create_ticket",
  "inputs": {
    "subject": "Patient Unable to Access Portal",
    "description": "Patient reports error message when trying to log in",
    "priority": "high"
  },
  "metadata": {
    "agentId": "anna",
    "requestId": "req_1234567890",
    "timestamp": "2025-04-22T15:30:00Z"
  }
}`,
            response: `{
  "tool": "create_ticket",
  "outputs": {
    "ticket_id": "TKT-4321",
    "status": "open",
    "created_at": "2025-04-22T15:30:05Z"
  },
  "status": "success",
  "metrics": {
    "latency": 532,
    "confidence": 0.95
  }
}`
          }
        }
      ]
    },
    {
      title: "Authentication API",
      description: "Endpoints for authenticating platforms and agents",
      baseUrl: "https://api.ghscommand.com/v1/auth",
      endpoints: [
        {
          method: 'POST',
          path: '/token',
          description: 'Generate an authentication token for API access',
          requiresAuth: false,
          parameters: [
            { name: 'platformId', type: 'string', description: 'ID of the platform requesting access', required: true },
            { name: 'apiKey', type: 'string', description: 'API key for the platform', required: true }
          ],
          responseSchema: `{
  token: string;
  expiresAt: string;
  platformId: string;
}`,
          example: {
            request: `POST /v1/auth/token
{
  "platformId": "ihealth-sync",
  "apiKey": "apk_1234567890"
}`,
            response: `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresAt": "2025-04-23T14:30:00Z",
  "platformId": "ihealth-sync"
}`
          }
        },
        {
          method: 'POST',
          path: '/refresh',
          description: 'Refresh an expired authentication token',
          requiresAuth: true,
          responseSchema: `{
  token: string;
  expiresAt: string;
  platformId: string;
}`,
          example: {
            request: 'POST /v1/auth/refresh',
            response: `{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresAt": "2025-04-24T14:30:00Z",
  "platformId": "ihealth-sync"
}`
          }
        }
      ]
    }
  ];
  
  const handleCopyCode = (code: string, endpoint: string) => {
    navigator.clipboard.writeText(code);
    setCopiedEndpoint(endpoint);
    toast.success("Code copied to clipboard");
    
    setTimeout(() => {
      setCopiedEndpoint(null);
    }, 2000);
  };
  
  const handleDownloadAPI = () => {
    const jsonData = JSON.stringify(apiSections, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ghs-command-api-documentation.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("API Documentation downloaded");
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">GHS Command API</h1>
          <p className="text-muted-foreground mt-1">
            Complete API documentation for GHS platform integration
          </p>
        </div>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
          onClick={handleDownloadAPI}
        >
          <ArrowDownToLine className="h-4 w-4" />
          Download API Docs
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Authentication</CardTitle>
          <CardDescription>
            All API requests (except token generation) require authorization. Include the JWT token in the Authorization header:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-md font-mono text-sm">
            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
          </div>
        </CardContent>
      </Card>
      
      {/* Add Financial API Documentation */}
      <FinancialAPIDocumentation />
      
      <Tabs defaultValue={apiSections[0].title} className="w-full">
        <TabsList className="mb-4">
          {apiSections.map((section) => (
            <TabsTrigger key={section.title} value={section.title}>
              {section.title}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {apiSections.map((section) => (
          <TabsContent key={section.title} value={section.title} className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
                <div className="text-sm font-mono mt-2">
                  Base URL: {section.baseUrl}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {section.endpoints.map((endpoint) => (
                    <div key={endpoint.path} className="pb-6 border-b last:border-0 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge className={
                            endpoint.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                            endpoint.method === 'POST' ? 'bg-green-100 text-green-800' :
                            endpoint.method === 'PUT' ? 'bg-amber-100 text-amber-800' :
                            'bg-red-100 text-red-800'
                          }>
                            {endpoint.method}
                          </Badge>
                          <h3 className="font-mono text-base font-medium">{endpoint.path}</h3>
                        </div>
                        {endpoint.requiresAuth && (
                          <Badge variant="outline" className="text-xs">
                            Requires Auth
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-sm mb-4">{endpoint.description}</p>
                      
                      {endpoint.parameters && endpoint.parameters.length > 0 && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Parameters</h4>
                          <div className="bg-muted rounded-md overflow-hidden">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b">
                                  <th className="px-4 py-2 text-left">Name</th>
                                  <th className="px-4 py-2 text-left">Type</th>
                                  <th className="px-4 py-2 text-left">Description</th>
                                  <th className="px-4 py-2 text-left">Required</th>
                                </tr>
                              </thead>
                              <tbody>
                                {endpoint.parameters.map((param, idx) => (
                                  <tr key={param.name} className={idx % 2 === 0 ? 'bg-background/50' : ''}>
                                    <td className="px-4 py-2 font-mono text-xs">{param.name}</td>
                                    <td className="px-4 py-2 font-mono text-xs">{param.type}</td>
                                    <td className="px-4 py-2 text-xs">{param.description}</td>
                                    <td className="px-4 py-2 text-xs">{param.required ? 'Yes' : 'No'}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Response Schema</h4>
                        <div className="bg-muted p-4 rounded-md font-mono text-xs whitespace-pre">
                          {endpoint.responseSchema}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium mb-2">Example</h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <p className="text-xs text-muted-foreground">Request</p>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2"
                                onClick={() => handleCopyCode(endpoint.example.request, `${endpoint.method}-${endpoint.path}-req`)}
                              >
                                {copiedEndpoint === `${endpoint.method}-${endpoint.path}-req` ? (
                                  <CheckIcon className="h-3.5 w-3.5" />
                                ) : (
                                  <CopyIcon className="h-3.5 w-3.5" />
                                )}
                              </Button>
                            </div>
                            <div className="bg-black text-white p-3 rounded-md font-mono text-xs whitespace-pre">
                              {endpoint.example.request}
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <p className="text-xs text-muted-foreground">Response</p>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 px-2"
                                onClick={() => handleCopyCode(endpoint.example.response, `${endpoint.method}-${endpoint.path}-res`)}
                              >
                                {copiedEndpoint === `${endpoint.method}-${endpoint.path}-res` ? (
                                  <CheckIcon className="h-3.5 w-3.5" />
                                ) : (
                                  <CopyIcon className="h-3.5 w-3.5" />
                                )}
                              </Button>
                            </div>
                            <div className="bg-black text-white p-3 rounded-md font-mono text-xs whitespace-pre">
                              {endpoint.example.response}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
