
import React from 'react';
import { EmailStatus, EmailPriority } from '@/lib/email-system/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  InBox, 
  ArrowUpRight, 
  Pause,
  Flag,
  Filter,
  X
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface EmailFiltersProps {
  selectedStatuses: EmailStatus[];
  selectedPriorities: EmailPriority[];
  onStatusChange: (statuses: EmailStatus[]) => void;
  onPriorityChange: (priorities: EmailPriority[]) => void;
  onClearFilters: () => void;
}

export function EmailFilters({
  selectedStatuses,
  selectedPriorities,
  onStatusChange,
  onPriorityChange,
  onClearFilters
}: EmailFiltersProps) {
  const statusFilters: { value: EmailStatus; label: string; icon: React.ReactNode }[] = [
    { value: 'unread', label: 'Unread', icon: <InBox className="h-4 w-4" /> },
    { value: 'assigned', label: 'Assigned', icon: <ArrowUpRight className="h-4 w-4" /> },
    { value: 'in-progress', label: 'In Progress', icon: <Clock className="h-4 w-4" /> },
    { value: 'waiting', label: 'Waiting', icon: <Pause className="h-4 w-4" /> },
    { value: 'resolved', label: 'Resolved', icon: <CheckCircle2 className="h-4 w-4" /> },
    { value: 'escalated', label: 'Escalated', icon: <AlertTriangle className="h-4 w-4" /> },
  ];

  const priorityFilters: { value: EmailPriority; label: string; color: string }[] = [
    { value: 'low', label: 'Low', color: 'bg-blue-100 text-blue-800' },
    { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'high', label: 'High', color: 'bg-orange-100 text-orange-800' },
    { value: 'critical', label: 'Critical', color: 'bg-red-100 text-red-800' },
  ];

  const toggleStatus = (status: EmailStatus) => {
    if (selectedStatuses.includes(status)) {
      onStatusChange(selectedStatuses.filter(s => s !== status));
    } else {
      onStatusChange([...selectedStatuses, status]);
    }
  };

  const togglePriority = (priority: EmailPriority) => {
    if (selectedPriorities.includes(priority)) {
      onPriorityChange(selectedPriorities.filter(p => p !== priority));
    } else {
      onPriorityChange([...selectedPriorities, priority]);
    }
  };

  const hasActiveFilters = selectedStatuses.length > 0 || selectedPriorities.length > 0;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Status
            {selectedStatuses.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {selectedStatuses.length}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {statusFilters.map((status) => (
            <DropdownMenuItem
              key={status.value}
              className="flex items-center gap-2"
              onSelect={(e) => {
                e.preventDefault();
                toggleStatus(status.value);
              }}
            >
              <div className="flex items-center gap-2 flex-1">
                {status.icon}
                {status.label}
              </div>
              {selectedStatuses.includes(status.value) && (
                <CheckCircle2 className="h-4 w-4" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="gap-1">
            <Flag className="h-4 w-4" />
            Priority
            {selectedPriorities.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {selectedPriorities.length}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {priorityFilters.map((priority) => (
            <DropdownMenuItem
              key={priority.value}
              className="flex items-center gap-2"
              onSelect={(e) => {
                e.preventDefault();
                togglePriority(priority.value);
              }}
            >
              <div className="flex items-center gap-2 flex-1">
                <Badge variant="outline" className={priority.color}>
                  {priority.label}
                </Badge>
              </div>
              {selectedPriorities.includes(priority.value) && (
                <CheckCircle2 className="h-4 w-4" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          className="gap-1"
          onClick={onClearFilters}
        >
          <X className="h-4 w-4" />
          Clear filters
        </Button>
      )}

      <div className="ml-auto flex flex-wrap gap-2">
        {selectedStatuses.map((status) => {
          const statusInfo = statusFilters.find((s) => s.value === status);
          return (
            <Badge
              key={status}
              variant="secondary"
              className="gap-1 cursor-pointer"
              onClick={() => toggleStatus(status)}
            >
              {statusInfo?.icon}
              {statusInfo?.label}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          );
        })}
        {selectedPriorities.map((priority) => {
          const priorityInfo = priorityFilters.find((p) => p.value === priority);
          return (
            <Badge
              key={priority}
              variant="secondary"
              className="gap-1 cursor-pointer"
              onClick={() => togglePriority(priority)}
            >
              {priorityInfo?.label}
              <X className="h-3 w-3 ml-1" />
            </Badge>
          );
        })}
      </div>
    </div>
  );
}
