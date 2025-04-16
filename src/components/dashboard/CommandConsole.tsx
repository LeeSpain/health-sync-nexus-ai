
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Send } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CommandConsole() {
  const [command, setCommand] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [commandHistory, setCommandHistory] = useState<{
    command: string;
    response: string;
    timestamp: string;
  }[]>([
    {
      command: "Show me active conversations from Anna",
      response: "Anna currently has 8 active conversations. Top topics: medication reminders, device setup assistance, and wellness check-ins.",
      timestamp: "11:24 AM"
    },
    {
      command: "Summarize Emma's escalations today",
      response: "Emma has escalated 3 cases to Julia today. All escalations were related to medical equipment issues requiring technical expertise.",
      timestamp: "10:15 AM"
    }
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;

    // Mock response - in a real app, this would come from your AI backend
    const mockResponse = "I'm processing your command: " + command;
    
    // Add command to history
    setCommandHistory([
      {
        command,
        response: mockResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      },
      ...commandHistory
    ]);
    
    // Clear input
    setCommand('');
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // In a real app, this would connect to speech recognition API
  };

  return (
    <Card className="ghs-card shadow-md border-amber-300 animate-enter">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <div className="mr-2 h-6 w-6 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">I</span>
          </div>
          Isabella Command Console
        </CardTitle>
      </CardHeader>
      
      <Tabs defaultValue="text" className="w-full">
        <TabsList className="mx-6 grid w-auto grid-cols-2">
          <TabsTrigger value="text">Text Commands</TabsTrigger>
          <TabsTrigger value="voice">Voice Commands</TabsTrigger>
        </TabsList>
        
        <TabsContent value="text" className="space-y-4">
          <CardContent className="pt-4">
            <div className="h-[300px] overflow-y-auto space-y-4 pr-2">
              {commandHistory.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-xs">You</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.command}</p>
                        <span className="text-xs text-muted-foreground">{item.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start ml-10">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-white text-xs font-bold">I</span>
                    </div>
                    <div>
                      <p className="text-sm">{item.response}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          
          <CardFooter>
            <form onSubmit={handleCommandSubmit} className="w-full flex space-x-2">
              <Input
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="Type a command for Isabella..."
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </TabsContent>
        
        <TabsContent value="voice" className="space-y-4">
          <CardContent className="pt-6 text-center">
            <div className="h-[300px] flex flex-col items-center justify-center">
              <div className={`h-24 w-24 rounded-full ${isListening ? 'bg-amber-100 animate-pulse' : 'bg-muted'} flex items-center justify-center mb-4`}>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`h-16 w-16 rounded-full ${isListening ? 'bg-amber-400 text-white' : 'bg-secondary'}`}
                  onClick={toggleListening}
                >
                  {isListening ? (
                    <Mic className="h-8 w-8" />
                  ) : (
                    <MicOff className="h-8 w-8" />
                  )}
                </Button>
              </div>
              
              <h3 className="text-lg font-medium mb-2">
                {isListening ? 'Listening...' : 'Click to Start Voice Command'}
              </h3>
              
              <p className="text-sm text-muted-foreground max-w-md">
                {isListening 
                  ? 'Speak clearly. Say "Isabella" followed by your command.' 
                  : 'Voice command allows you to interact with Isabella hands-free. Enable your microphone to start.'}
              </p>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-center">
            <p className="text-xs text-muted-foreground">
              {isListening 
                ? 'Voice recognition active. Click the microphone to stop.' 
                : 'Voice commands require microphone permissions.'}
            </p>
          </CardFooter>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
