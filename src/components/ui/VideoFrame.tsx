
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoFrameProps {
  videoUrl: string;
}

export function VideoFrame({ videoUrl }: VideoFrameProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);
  
  if (!isVisible) return null;
  
  return (
    <div 
      className={`fixed top-4 right-4 z-50 rounded-lg shadow-lg overflow-hidden border border-purple-200 bg-white dark:bg-gray-900 transition-all duration-300 ${
        isMinimized ? 'w-14 h-14 hover:opacity-90' : 'w-80 md:w-96'
      }`}
    >
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-2 flex items-center justify-between">
        <h4 className={`text-sm font-medium ${isMinimized ? 'hidden' : 'block'}`}>Demo Video</h4>
        <div className="flex gap-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 rounded-full hover:bg-white/20"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? (
              <span className="w-4 h-4">+</span>
            ) : (
              <span className="w-4 h-4">-</span>
            )}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 rounded-full hover:bg-white/20"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {!isMinimized && videoId && (
        <div className="aspect-video bg-black">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      
      {isMinimized && (
        <div className="flex items-center justify-center h-full bg-primary">
          <span className="text-white text-xs">Video</span>
        </div>
      )}
    </div>
  );
}
