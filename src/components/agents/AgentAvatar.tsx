
import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type AgentAvatarProps = {
  name: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
};

export const AgentAvatar: React.FC<AgentAvatarProps> = ({ 
  name, 
  color,
  size = 'md' 
}) => {
  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };
  
  const getSizeClass = (size: string) => {
    switch(size) {
      case 'sm': return 'h-8 w-8 text-xs';
      case 'lg': return 'h-12 w-12 text-lg';
      default: return 'h-10 w-10 text-sm';
    }
  };

  return (
    <Avatar className={getSizeClass(size)}>
      <AvatarFallback 
        style={{ 
          backgroundColor: `${color}25`, // Using 25% opacity
          color: color,
          fontWeight: 'bold'
        }}
      >
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
};
