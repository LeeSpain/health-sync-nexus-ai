
export type VoiceCallStatus = 'connecting' | 'in-progress' | 'ended' | 'failed';

export interface VoiceCall {
  id: string;
  agentId: string;
  userId: string;
  startTime: string;
  endTime?: string;
  status: VoiceCallStatus;
  transcription?: string;
  sentiment?: number;
}

export interface VoiceSettings {
  voiceId: string;
  modelId: string;
  stability: number;  // 0-1
  similarityBoost: number; // 0-1
  style: number; // 0-1
  useSpeakerBoost: boolean;
}
