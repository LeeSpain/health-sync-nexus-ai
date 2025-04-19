
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mic, MicOff, Settings } from 'lucide-react';
import { useVoiceService } from '@/hooks/use-voice-service';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function VoiceControl({ agentId }: { agentId: string }) {
  const { isCallActive, currentCall, settings, startCall, endCall, updateSettings } = useVoiceService();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Voice Controls</span>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Voice Settings</SheetTitle>
              </SheetHeader>
              <div className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>Stability</Label>
                  <Slider
                    value={[settings.stability]}
                    min={0}
                    max={1}
                    step={0.1}
                    onValueChange={([value]) => updateSettings({ stability: value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Similarity Boost</Label>
                  <Slider
                    value={[settings.similarityBoost]}
                    min={0}
                    max={1}
                    step={0.1}
                    onValueChange={([value]) => updateSettings({ similarityBoost: value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Style</Label>
                  <Slider
                    value={[settings.style]}
                    min={0}
                    max={1}
                    step={0.1}
                    onValueChange={([value]) => updateSettings({ style: value })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Speaker Boost</Label>
                  <Switch
                    checked={settings.useSpeakerBoost}
                    onCheckedChange={(checked) => updateSettings({ useSpeakerBoost: checked })}
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center">
          {isCallActive ? (
            <Button
              variant="destructive"
              size="lg"
              className="w-32 h-32 rounded-full"
              onClick={() => currentCall && endCall(currentCall.id)}
            >
              <MicOff className="h-12 w-12" />
            </Button>
          ) : (
            <Button
              variant="default"
              size="lg"
              className="w-32 h-32 rounded-full"
              onClick={() => startCall(agentId)}
            >
              <Mic className="h-12 w-12" />
            </Button>
          )}
        </div>
        
        {currentCall && (
          <div className="flex flex-col items-center gap-2">
            <Badge variant={currentCall.status === 'in-progress' ? 'default' : 'secondary'}>
              {currentCall.status}
            </Badge>
            {currentCall.status === 'in-progress' && (
              <span className="text-sm text-muted-foreground">
                Call duration: {Math.floor((Date.now() - new Date(currentCall.startTime).getTime()) / 1000)}s
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
