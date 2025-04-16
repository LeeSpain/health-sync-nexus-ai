
import React from 'react';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cva } from "class-variance-authority";

type AgentAvatarProps = {
  name: string;
  color: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  status?: 'active' | 'inactive' | 'training' | 'maintenance';
  showStatus?: boolean;
  role?: string;
};

const avatarSizes = cva("", {
  variants: {
    size: {
      sm: "h-8 w-8 text-xs",
      md: "h-10 w-10 text-sm",
      lg: "h-14 w-14 text-base",
      xl: "h-20 w-20 text-lg font-bold",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const statusColors = {
  active: "bg-green-500",
  inactive: "bg-gray-400",
  training: "bg-amber-500",
  maintenance: "bg-blue-500",
};

export const AgentAvatar: React.FC<AgentAvatarProps> = ({ 
  name, 
  color,
  size = 'md',
  status,
  showStatus = false,
  role,
}) => {
  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };
  
  return (
    <div className="relative inline-flex items-center">
      <Avatar className={avatarSizes({ size })}>
        <AvatarFallback 
          style={{ 
            backgroundColor: `${color}25`, // Using 25% opacity
            color: color,
            fontWeight: 'bold'
          }}
          data-testid="agent-avatar"
        >
          {getInitials(name)}
        </AvatarFallback>
      </Avatar>
      
      {showStatus && status && (
        <div 
          className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${statusColors[status]}`}
          data-testid="agent-status"
        />
      )}
      
      {role && size === 'xl' && (
        <Badge 
          variant="secondary"
          className="absolute -bottom-3 px-2 text-xs font-normal"
        >
          {role}
        </Badge>
      )}
    </div>
  );
};
