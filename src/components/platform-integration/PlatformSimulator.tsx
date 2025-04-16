
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AgentType, PlatformType } from '@/lib/agent-integration/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Mic, MicOff } from 'lucide-react';
import { AgentAvatar } from '../agents/AgentAvatar';
import { useAgentService } from '@/hooks/use-agent-service';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PlatformSimulatorProps {
  agentType: AgentType;
  platformType: PlatformType;
}

export function PlatformSimulator({ agentType, platformType }: PlatformSimulatorProps) {
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'agent', content: string}[]>([]);
  const { getAgentConfig, loading } = useAgentService();
  const [agentConfig, setAgentConfig] = useState<any>(null);

  React.useEffect(() => {
    loadAgentConfig();
  }, [agentType]);

  const loadAgentConfig = async () => {
    const config = await getAgentConfig(agentType);
    if (config) {
      setAgentConfig(config);

      // Add a welcome message
      setMessages([{
        role: 'agent',
        content: `Hello, I'm ${config.name}. How can I assist you today?`
      }]);
    }
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { role: 'user', content: input }]);

    // Simulate agent response
    setTimeout(() => {
      let response = '';
      switch (agentType) {
        case 'anna':
          response = "I'm here to help you with your wellness journey. Would you like me to remind you about your medication or help set up your device?";
          break;
        case 'emma':
          response = "I see you're working on a care plan. Let me assist you with the latest nursing protocols and best practices.";
          break;
        case 'julia':
          response = "I've analyzed the patient records and can provide a summary of recent changes. Would you like me to assist with documentation?";
          break;
        default:
          response = "How can I assist you further?";
      }

      setMessages(prev => [...prev, { role: 'agent', content: response }]);
    }, 1000);

    // Clear input
    setInput('');
  };

  const toggleMicrophone = () => {
    setIsListening(!isListening);
  };

  // Get platform-specific styling
  const getPlatformStyle = (): { color: string, gradient: string } => {
    switch (platformType) {
      case 'ihealth-sync':
        return { color: '#A390E4', gradient: 'from-purple-300 to-purple-600' };
      case 'nurse-sync':
        return { color: '#10B981', gradient: 'from-green-300 to-green-600' };
      case 'medic-sync':
        return { color: '#60A5FA', gradient: 'from-blue-300 to-blue-600' };
      default:
        return { color: '#CBD5E1', gradient: 'from-gray-300 to-gray-600' };
    }
  };

  const style = getPlatformStyle();

  if (loading || !agentConfig) {
    return <div className="flex justify-center p-4">Loading platform...</div>;
  }

  return (
    <Card className="shadow-md border-t-4" style={{ borderTopColor: style.color }}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br ${style.gradient} flex items-center justify-center">
              <span className="text-white text-xs font-bold">{platformType.charAt(0).toUpperCase()}</span>
            </div>
            <div>
              <CardTitle className="text-base">{platformType.charAt(0).toUpperCase() + platformType.slice(1)}</CardTitle>
              <CardDescription className="text-xs">Connected to {agentConfig.name}</CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>

      <Tabs defaultValue="chat" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="voice">Voice</TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="space-y-4">
          <CardContent className="pt-4">
            <ScrollArea className="h-[300px] pr-4">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${message.role === 'user' ? 'bg-primary/10 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl' : 'bg-muted rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'} p-3`}>
                      {message.role === 'agent' && (
                        <div className="flex items-center mb-1">
                          <AgentAvatar name={agentConfig.name} color={style.color} size="sm" />
                          <span className="font-medium text-xs ml-2">{agentConfig.name}</span>
                        </div>
                      )}
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>

          <CardFooter>
            <div className="flex w-full space-x-2">
              <Input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder={`Ask ${agentConfig.name} something...`}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </TabsContent>

        <TabsContent value="voice" className="space-y-4">
          <CardContent className="flex flex-col items-center justify-center h-[300px]">
            <Button 
              variant="outline" 
              size="lg" 
              className={`rounded-full h-24 w-24 ${isListening ? 'bg-primary/10 animate-pulse' : ''}`}
              onClick={toggleMicrophone}
            >
              {isListening ? <Mic className="h-8 w-8" /> : <MicOff className="h-8 w-8" />}
            </Button>
            <p className="mt-4 text-center">
              {isListening 
                ? `Listening... Speak to ${agentConfig.name}` 
                : `Tap to speak with ${agentConfig.name}`
              }
            </p>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
