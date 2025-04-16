
import { useState } from 'react';
import agentService from '@/lib/agent-integration/agent-service';
import { AgentConfiguration, AgentType, AgentPerformanceMetrics } from '@/lib/agent-integration/types';

export function useAgentService() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const getAgentConfig = async (agentType: AgentType) => {
    setLoading(true);
    setError(null);
    try {
      const config = await agentService.getAgentConfiguration(agentType);
      setLoading(false);
      return config;
    } catch (err) {
      setError('Failed to fetch agent configuration');
      setLoading(false);
      console.error(err);
      return null;
    }
  };
  
  const getAllAgentConfigs = async () => {
    setLoading(true);
    setError(null);
    try {
      const configs = await agentService.getAllAgentConfigurations();
      setLoading(false);
      return configs;
    } catch (err) {
      setError('Failed to fetch agent configurations');
      setLoading(false);
      console.error(err);
      return [];
    }
  };
  
  const updateAgentConfig = async (agentType: AgentType, updates: Partial<AgentConfiguration>) => {
    setLoading(true);
    setError(null);
    try {
      const updatedConfig = await agentService.updateAgentConfiguration(agentType, updates);
      setLoading(false);
      return updatedConfig;
    } catch (err) {
      setError('Failed to update agent configuration');
      setLoading(false);
      console.error(err);
      return null;
    }
  };
  
  return {
    loading,
    error,
    getAgentConfig,
    getAllAgentConfigs,
    updateAgentConfig
  };
}
