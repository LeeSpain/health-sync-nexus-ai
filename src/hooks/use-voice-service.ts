
import { useState } from 'react';
import { VoiceCall, VoiceSettings } from '@/lib/voice-system/types';
import { toast } from 'sonner';

const DEFAULT_VOICE_SETTINGS: VoiceSettings = {
  voiceId: 'EXAVITQu4vr4xnSDxMaL', // Sarah voice
  modelId: 'eleven_multilingual_v2',
  stability: 0.5,
  similarityBoost: 0.75,
  style: 0.5,
  useSpeakerBoost: true
};

export function useVoiceService() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [currentCall, setCurrentCall] = useState<VoiceCall | null>(null);
  const [settings, setSettings] = useState<VoiceSettings>(DEFAULT_VOICE_SETTINGS);

  const startCall = async (agentId: string) => {
    if (isCallActive) {
      toast.error('A call is already in progress');
      return;
    }

    setIsCallActive(true);
    const newCall: VoiceCall = {
      id: `call_${Date.now()}`,
      agentId,
      userId: 'current-user', // In a real app, this would come from auth
      startTime: new Date().toISOString(),
      status: 'connecting'
    };
    
    setCurrentCall(newCall);
    toast.success('Starting voice call...');

    // Request microphone access
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setCurrentCall({ ...newCall, status: 'in-progress' });
    } catch (error) {
      toast.error('Microphone access denied');
      endCall(newCall.id);
    }
  };

  const endCall = (callId: string) => {
    if (currentCall?.id === callId) {
      setCurrentCall({
        ...currentCall,
        status: 'ended',
        endTime: new Date().toISOString()
      });
      setIsCallActive(false);
      toast.success('Call ended');
    }
  };

  const updateSettings = (newSettings: Partial<VoiceSettings>) => {
    setSettings({ ...settings, ...newSettings });
  };

  return {
    isCallActive,
    currentCall,
    settings,
    startCall,
    endCall,
    updateSettings
  };
}
