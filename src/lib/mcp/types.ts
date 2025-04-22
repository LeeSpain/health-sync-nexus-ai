/**
 * Model Context Protocol (MCP) Types
 * Standardized definitions for the MCP protocol implementation
 */

// Tool Definitions
export interface MCPToolDefinition {
  name: string;
  description: string;
  inputs: MCPInputSchema;
  outputs: MCPOutputSchema;
  url?: string;
  version?: string;
  metadata?: Record<string, any>;
  guardrails?: MCPGuardrails;
}

export interface MCPInputSchema {
  type: "object";
  properties: Record<string, MCPPropertySchema>;
  required?: string[];
}

export interface MCPOutputSchema {
  type: "object";
  properties: Record<string, MCPPropertySchema>;
}

export interface MCPPropertySchema {
  type: string;
  description?: string;
  enum?: string[];
  format?: string;
  items?: MCPPropertySchema; // For arrays
  properties?: Record<string, MCPPropertySchema>; // For nested objects
  required?: string[]; // For nested objects
}

// Tool Requests and Responses
export interface MCPToolRequest {
  tool: string;
  inputs: Record<string, any>;
  context?: Record<string, any>;
  metadata?: {
    agentId?: string;
    requestId?: string;
    timestamp?: string;
    priority?: 'low' | 'medium' | 'high' | 'critical';
  };
}

export interface MCPToolResponse {
  tool: string;
  outputs: Record<string, any>;
  status: 'success' | 'error' | 'partial';
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  metrics?: {
    latency?: number;
    tokens?: number;
    confidence?: number;
  };
}

// Guardrails
export interface MCPGuardrails {
  confidenceThreshold?: number;
  inputValidation?: Record<string, (value: any) => boolean>;
  outputFilters?: Record<string, (value: any) => any>;
  fallbackMessage?: string;
  maxRetries?: number;
  timeoutMs?: number;
  requiresHumanApproval?: boolean;
}

// MCP Host and Client
export interface MCPHost {
  registerTool: (tool: MCPToolDefinition) => void;
  unregisterTool: (toolName: string) => void;
  executeTool: (request: MCPToolRequest) => Promise<MCPToolResponse>;
  listTools: () => MCPToolDefinition[];
  getTool: (toolName: string) => MCPToolDefinition | null;
}

export interface MCPClient {
  discoverTools: () => Promise<MCPToolDefinition[]>;
  callTool: (request: MCPToolRequest) => Promise<MCPToolResponse>;
}

// MCP Server
export interface MCPServer {
  url: string;
  name: string;
  description: string;
  tools: MCPToolDefinition[];
  status: 'online' | 'offline' | 'degraded';
}

// Analytics and Reporting
export interface MCPToolAnalytics {
  toolName: string;
  totalCalls: number;
  successRate: number;
  averageLatency: number;
  errorRate: number;
  escalationRate: number;
  humanInterventionRate: number;
  usageByAgent: Record<string, number>;
  mostCommonInputs: Record<string, any>[];
  byTimePeriod: {
    daily: Record<string, number>;
    weekly: Record<string, number>;
    monthly: Record<string, number>;
  };
}

// Tool Execution Status for Real-time Tracking
export type MCPToolExecutionStatus = 
  | 'pending' 
  | 'in-progress' 
  | 'completed' 
  | 'failed' 
  | 'timeout' 
  | 'escalated';

export interface MCPToolExecution {
  id: string;
  toolName: string;
  agentId: string;
  inputs: Record<string, any>;
  outputs?: Record<string, any>;
  status: MCPToolExecutionStatus;
  startTime: string;
  endTime?: string;
  error?: string;
  metrics?: {
    latencyMs: number;
    confidence: number;
  };
  userFeedback?: {
    rating: number;
    comment?: string;
  };
}
