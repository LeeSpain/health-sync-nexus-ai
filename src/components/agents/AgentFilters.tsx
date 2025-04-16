
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export const AgentFilters: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const handleAddFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };
  
  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search agents..." 
            className="pl-8 h-9 w-full" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="absolute right-2.5 top-2.5" 
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-9">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Type</DropdownMenuLabel>
              <DropdownMenuItem onSelect={() => handleAddFilter('Type: Frontline')}>
                Frontline Agent
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleAddFilter('Type: Medical')}>
                Medical Agent
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleAddFilter('Type: Admin')}>
                Admin Agent
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Performance</DropdownMenuLabel>
              <DropdownMenuItem onSelect={() => handleAddFilter('Performance: High')}>
                High Performance
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleAddFilter('Performance: Medium')}>
                Medium Performance
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleAddFilter('Performance: Low')}>
                Needs Attention
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Training</DropdownMenuLabel>
              <DropdownMenuItem onSelect={() => handleAddFilter('Training: Recent')}>
                Recently Trained
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleAddFilter('Training: Outdated')}>
                Needs Training
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Select>
          <SelectTrigger className="w-[180px] h-9">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort options</SelectLabel>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              <SelectItem value="performance-high">Performance (High-Low)</SelectItem>
              <SelectItem value="performance-low">Performance (Low-High)</SelectItem>
              <SelectItem value="conversations">Most Conversations</SelectItem>
              <SelectItem value="last-trained">Last Trained</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {activeFilters.map(filter => (
            <Badge key={filter} variant="secondary" className="flex items-center gap-1">
              {filter}
              <X 
                className="h-3 w-3 cursor-pointer" 
                onClick={() => handleRemoveFilter(filter)}
              />
            </Badge>
          ))}
          {activeFilters.length > 1 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-6 px-2 text-xs"
              onClick={() => setActiveFilters([])}
            >
              Clear all
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
