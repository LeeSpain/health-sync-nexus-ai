
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal } from 'lucide-react';

export const AgentFilters: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input 
          type="search" 
          placeholder="Search agents..." 
          className="pl-8 h-9 w-[150px] sm:w-[200px] md:w-[250px]" 
        />
      </div>
      <Button variant="outline" size="sm" className="h-9">
        <SlidersHorizontal className="h-4 w-4 mr-2" />
        Filters
      </Button>
    </div>
  );
};
