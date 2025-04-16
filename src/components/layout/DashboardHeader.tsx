
import React from 'react';
import { Bell, Settings, User, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DashboardHeader() {
  return (
    <header className="w-full border-b bg-card/80 backdrop-blur-sm sticky top-0 z-30">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-600 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center font-semibold text-isabella-DEFAULT">
                I
              </div>
            </div>
            <span className="font-semibold text-xl hidden sm:inline-block">Isabella</span>
            <span className="text-xs text-muted-foreground hidden md:inline-block">
              GHS Command Center
            </span>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2 sm:space-x-4">
          <div className="w-full max-w-sm hidden md:flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground mr-2" />
            <Input
              type="search"
              placeholder="Search commands..."
              className="bg-background/60 focus-visible:ring-1 focus-visible:ring-amber-400/40 h-9"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>System Preferences</DropdownMenuItem>
              <DropdownMenuItem>Voice Settings</DropdownMenuItem>
              <DropdownMenuItem>API Configuration</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
