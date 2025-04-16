
import React, { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Globe, 
  Bell, 
  Shield, 
  Users, 
  Key, 
  Mic, 
  Languages, 
  Lock, 
  Save, 
  RefreshCw, 
  Clock,
  UserCog,
  ServerCog,
  Database,
  Webhook,
  CloudCog,
  KeyRound,
  AlertTriangle,
  FileKey,
  UserCheck,
  UserPlus,
  UserX,
  Eye,
  EyeOff,
  GlobeIcon,
  Check,
  MessageSquare,
  AlertCircle,
  History,
  Upload,
  Download,
  CalendarClock,
  Trash2,
  Archive,
  Fingerprint,
  Mail,
  PhoneCall,
  BellRing,
  MessagesSquare,
  PlusCircle
} from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");
  
  const handleSaveChanges = () => {
    toast.success("Settings saved successfully", {
      description: "Your changes have been applied",
    });
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Settings</h1>
          <Button onClick={handleSaveChanges}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
        
        <p className="text-muted-foreground">
          Configure system preferences, API connections, voice settings, and user access controls.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <Card>
              <CardContent className="p-4">
                <nav className="flex flex-col space-y-1">
                  <Button 
                    variant={activeTab === "general" ? "default" : "ghost"} 
                    className="justify-start"
                    onClick={() => setActiveTab("general")}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    General
                  </Button>
                  <Button 
                    variant={activeTab === "api" ? "default" : "ghost"} 
                    className="justify-start"
                    onClick={() => setActiveTab("api")}
                  >
                    <Key className="mr-2 h-4 w-4" />
                    API Connections
                  </Button>
                  <Button 
                    variant={activeTab === "voice" ? "default" : "ghost"} 
                    className="justify-start"
                    onClick={() => setActiveTab("voice")}
                  >
                    <Mic className="mr-2 h-4 w-4" />
                    Voice Settings
                  </Button>
                  <Button 
                    variant={activeTab === "language" ? "default" : "ghost"} 
                    className="justify-start"
                    onClick={() => setActiveTab("language")}
                  >
                    <Languages className="mr-2 h-4 w-4" />
                    Language
                  </Button>
                  <Button 
                    variant={activeTab === "security" ? "default" : "ghost"} 
                    className="justify-start"
                    onClick={() => setActiveTab("security")}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Security
                  </Button>
                  <Button 
                    variant={activeTab === "users" ? "default" : "ghost"} 
                    className="justify-start"
                    onClick={() => setActiveTab("users")}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    User Access
                  </Button>
                  <Button 
                    variant={activeTab === "notifications" ? "default" : "ghost"} 
                    className="justify-start"
                    onClick={() => setActiveTab("notifications")}
                  >
                    <Bell className="mr-2 h-4 w-4" />
                    Notifications
                  </Button>
                  <Button 
                    variant={activeTab === "advanced" ? "default" : "ghost"} 
                    className="justify-start"
                    onClick={() => setActiveTab("advanced")}
                  >
                    <ServerCog className="mr-2 h-4 w-4" />
                    Advanced
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-3/4">
            {activeTab === "general" && (
              <Card>
                <CardHeader>
                  <CardTitle>General Settings</CardTitle>
                  <CardDescription>Configure basic system preferences and appearance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="system-name">System Name</Label>
                        <Input id="system-name" defaultValue="GHS Agent Command" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="version">Version</Label>
                        <div className="flex items-center gap-2">
                          <Input id="version" value="1.0" readOnly className="bg-muted" />
                          <Badge variant="outline">Stable</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Interface Settings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="theme">Theme</Label>
                        <Select defaultValue="system">
                          <SelectTrigger id="theme">
                            <SelectValue placeholder="Select theme" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select defaultValue="utc">
                          <SelectTrigger id="timezone">
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="utc">UTC</SelectItem>
                            <SelectItem value="est">Eastern Time (ET)</SelectItem>
                            <SelectItem value="cst">Central Time (CT)</SelectItem>
                            <SelectItem value="mst">Mountain Time (MT)</SelectItem>
                            <SelectItem value="pst">Pacific Time (PT)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="session-timeout">Session Timeout</Label>
                        <span className="text-sm text-muted-foreground">30 minutes</span>
                      </div>
                      <Input 
                        id="session-timeout" 
                        type="range" 
                        min="5" 
                        max="120" 
                        step="5" 
                        defaultValue="30" 
                      />
                      <p className="text-xs text-muted-foreground">
                        Amount of inactive time before automatically logging out
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="show-welcome">Show Welcome Screen</Label>
                        <p className="text-xs text-muted-foreground">Display welcome screen at startup</p>
                      </div>
                      <Switch id="show-welcome" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="animations">Interface Animations</Label>
                        <p className="text-xs text-muted-foreground">Enable UI animations and transitions</p>
                      </div>
                      <Switch id="animations" defaultChecked />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Settings</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="data-collection">Usage Data Collection</Label>
                        <p className="text-xs text-muted-foreground">Collect anonymous usage data to improve the system</p>
                      </div>
                      <Switch id="data-collection" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-backup">Automatic Backups</Label>
                        <p className="text-xs text-muted-foreground">Schedule regular system backups</p>
                      </div>
                      <Switch id="auto-backup" defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="backup-frequency">Backup Frequency</Label>
                      <Select defaultValue="daily">
                        <SelectTrigger id="backup-frequency">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hourly">Hourly</SelectItem>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset to Defaults</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            )}
            
            {activeTab === "api" && (
              <Card>
                <CardHeader>
                  <CardTitle>API Connections</CardTitle>
                  <CardDescription>Configure API keys and external service integrations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">AI Provider Configuration</h3>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CloudCog className="h-5 w-5" />
                          <span className="font-medium">OpenAI</span>
                        </div>
                        <Badge className="bg-emerald-500">Connected</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="openai-key">API Key</Label>
                        <div className="flex gap-2">
                          <Input id="openai-key" type="password" value="sk-••••••••••••••••••••••••••••••" readOnly className="flex-1" />
                          <Button variant="outline" size="icon">
                            <RefreshCw className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="openai-model">Default Model</Label>
                        <Select defaultValue="gpt-4">
                          <SelectTrigger id="openai-model">
                            <SelectValue placeholder="Select model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gpt-4">GPT-4</SelectItem>
                            <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
                            <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="openai-enabled">Enabled</Label>
                          <p className="text-xs text-muted-foreground">Use this provider for agent responses</p>
                        </div>
                        <Switch id="openai-enabled" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CloudCog className="h-5 w-5" />
                          <span className="font-medium">Azure OpenAI</span>
                        </div>
                        <Badge variant="outline">Not Connected</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="azure-key">API Key</Label>
                        <Input id="azure-key" placeholder="Enter Azure OpenAI API Key" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="azure-endpoint">Endpoint</Label>
                        <Input id="azure-endpoint" placeholder="https://your-resource.openai.azure.com" />
                      </div>
                      
                      <Button>Connect Azure OpenAI</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Other Integrations</h3>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="h-5 w-5" />
                          <span className="font-medium">Database Connection</span>
                        </div>
                        <Badge className="bg-emerald-500">Connected</Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="db-host">Host</Label>
                          <Input id="db-host" value="db.example.com" readOnly className="bg-muted" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="db-port">Port</Label>
                          <Input id="db-port" value="5432" readOnly className="bg-muted" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="db-name">Database Name</Label>
                        <Input id="db-name" value="ghs_production" readOnly className="bg-muted" />
                      </div>
                      
                      <Button variant="outline">Test Connection</Button>
                    </div>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Webhook className="h-5 w-5" />
                          <span className="font-medium">Webhook Configuration</span>
                        </div>
                        <Badge variant="outline">Not Configured</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="webhook-url">Webhook URL</Label>
                        <Input id="webhook-url" placeholder="https://your-server.com/webhook" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Webhook Events</Label>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Switch id="event-escalation" />
                            <Label htmlFor="event-escalation">Escalation Events</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Switch id="event-error" />
                            <Label htmlFor="event-error">Error Events</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Switch id="event-training" />
                            <Label htmlFor="event-training">Training Updates</Label>
                          </div>
                        </div>
                      </div>
                      
                      <Button>Save Webhook Configuration</Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset All Connections</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            )}
            
            {activeTab === "voice" && (
              <Card>
                <CardHeader>
                  <CardTitle>Voice Settings</CardTitle>
                  <CardDescription>Configure text-to-speech and speech-to-text settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Text-to-Speech Settings</h3>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mic className="h-5 w-5" />
                          <span className="font-medium">ElevenLabs</span>
                        </div>
                        <Badge className="bg-emerald-500">Connected</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="elevenlabs-key">API Key</Label>
                        <div className="flex gap-2">
                          <Input id="elevenlabs-key" type="password" value="••••••••••••••••••••••••••••••" readOnly className="flex-1" />
                          <Button variant="outline" size="icon">
                            <RefreshCw className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="tts-model">Model</Label>
                          <Select defaultValue="eleven_multilingual_v2">
                            <SelectTrigger id="tts-model">
                              <SelectValue placeholder="Select model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="eleven_multilingual_v2">Eleven Multilingual v2</SelectItem>
                              <SelectItem value="eleven_turbo_v2">Eleven Turbo v2</SelectItem>
                              <SelectItem value="eleven_english_v1">Eleven English v1</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="voice-stability">Voice Stability</Label>
                          <div className="flex items-center gap-2">
                            <Input 
                              id="voice-stability" 
                              type="range" 
                              min="0" 
                              max="100" 
                              step="1" 
                              defaultValue="75" 
                              className="flex-1"
                            />
                            <span className="text-sm w-8 text-center">75%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="anna-voice">Anna Voice</Label>
                          <Select defaultValue="sarah">
                            <SelectTrigger id="anna-voice">
                              <SelectValue placeholder="Select voice" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sarah">Sarah</SelectItem>
                              <SelectItem value="rachel">Rachel</SelectItem>
                              <SelectItem value="emily">Emily</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="emma-voice">Emma Voice</Label>
                          <Select defaultValue="charlotte">
                            <SelectTrigger id="emma-voice">
                              <SelectValue placeholder="Select voice" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="charlotte">Charlotte</SelectItem>
                              <SelectItem value="alice">Alice</SelectItem>
                              <SelectItem value="jessica">Jessica</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="julia-voice">Julia Voice</Label>
                          <Select defaultValue="lily">
                            <SelectTrigger id="julia-voice">
                              <SelectValue placeholder="Select voice" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lily">Lily</SelectItem>
                              <SelectItem value="grace">Grace</SelectItem>
                              <SelectItem value="olivia">Olivia</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <Button variant="outline">Test Voice Output</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Speech-to-Text Settings</h3>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="stt-provider">Speech Recognition Provider</Label>
                        </div>
                        <Select defaultValue="browser">
                          <SelectTrigger id="stt-provider" className="w-[240px]">
                            <SelectValue placeholder="Select provider" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="browser">Browser Built-in</SelectItem>
                            <SelectItem value="azure">Azure Speech Services</SelectItem>
                            <SelectItem value="google">Google Speech-to-Text</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="continuous-listening">Continuous Listening</Label>
                          <p className="text-xs text-muted-foreground">Keep microphone active between commands</p>
                        </div>
                        <Switch id="continuous-listening" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="noise-suppression">Noise Suppression</Label>
                          <p className="text-xs text-muted-foreground">Filter background noise during speech recognition</p>
                        </div>
                        <Switch id="noise-suppression" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-punctuation">Auto Punctuation</Label>
                          <p className="text-xs text-muted-foreground">Automatically add punctuation to recognized text</p>
                        </div>
                        <Switch id="auto-punctuation" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset to Defaults</Button>
                  <Button>Save Voice Settings</Button>
                </CardFooter>
              </Card>
            )}
            
            {activeTab === "language" && (
              <Card>
                <CardHeader>
                  <CardTitle>Language Settings</CardTitle>
                  <CardDescription>Configure language preferences and translation settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Language</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="default-language">Default System Language</Label>
                      <Select defaultValue="en">
                        <SelectTrigger id="default-language">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English (US)</SelectItem>
                          <SelectItem value="en-gb">English (UK)</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="pt">Portuguese</SelectItem>
                          <SelectItem value="zh">Chinese (Simplified)</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">Primary language for the admin interface</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="date-format">Date & Time Format</Label>
                        <p className="text-xs text-muted-foreground">Configure how dates and times are displayed</p>
                      </div>
                      <Select defaultValue="us" className="w-[200px]">
                        <SelectTrigger id="date-format">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">MM/DD/YYYY, 12-hour</SelectItem>
                          <SelectItem value="eu">DD/MM/YYYY, 24-hour</SelectItem>
                          <SelectItem value="iso">YYYY-MM-DD, 24-hour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Agent Conversation Languages</h3>
                    
                    <div className="space-y-2">
                      <Label>Supported Languages</Label>
                      <p className="text-xs text-muted-foreground mb-2">Languages agents can use to communicate with users</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lang-en" defaultChecked />
                          <Label htmlFor="lang-en">English</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lang-es" defaultChecked />
                          <Label htmlFor="lang-es">Spanish</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lang-fr" />
                          <Label htmlFor="lang-fr">French</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lang-de" />
                          <Label htmlFor="lang-de">German</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lang-pt" />
                          <Label htmlFor="lang-pt">Portuguese</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lang-it" />
                          <Label htmlFor="lang-it">Italian</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lang-zh" />
                          <Label htmlFor="lang-zh">Chinese</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="lang-ja" />
                          <Label htmlFor="lang-ja">Japanese</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-translation">Automatic Translation</Label>
                        <p className="text-xs text-muted-foreground">Translate messages between agents and users when languages differ</p>
                      </div>
                      <Switch id="auto-translation" defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="translation-provider">Translation Provider</Label>
                      <Select defaultValue="openai">
                        <SelectTrigger id="translation-provider">
                          <SelectValue placeholder="Select provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="openai">OpenAI</SelectItem>
                          <SelectItem value="google">Google Translate</SelectItem>
                          <SelectItem value="azure">Azure Translator</SelectItem>
                          <SelectItem value="deepl">DeepL API</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Localization</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="contextual-terms">Contextual Health Terminology</Label>
                        <p className="text-xs text-muted-foreground">Adapt medical terms to regional preferences</p>
                      </div>
                      <Switch id="contextual-terms" defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="terminology-set">Default Medical Terminology</Label>
                      <Select defaultValue="us-standard">
                        <SelectTrigger id="terminology-set">
                          <SelectValue placeholder="Select terminology set" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us-standard">US Standard</SelectItem>
                          <SelectItem value="uk-standard">UK Standard</SelectItem>
                          <SelectItem value="eu-standard">EU Standard</SelectItem>
                          <SelectItem value="who-standard">WHO Standard</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">Base medical terminology standards to follow</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="inclusive-language">Inclusive Language</Label>
                        <p className="text-xs text-muted-foreground">Use inclusive and gender-neutral terminology</p>
                      </div>
                      <Switch id="inclusive-language" defaultChecked />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset to Defaults</Button>
                  <Button onClick={handleSaveChanges}>Save Changes</Button>
                </CardFooter>
              </Card>
            )}
            
            {activeTab === "security" && (
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Configure authentication, encryption, and access control settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Authentication</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="auth-method">Primary Authentication Method</Label>
                      <Select defaultValue="2fa">
                        <SelectTrigger id="auth-method">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="password">Password Only</SelectItem>
                          <SelectItem value="2fa">Two-Factor Authentication</SelectItem>
                          <SelectItem value="sso">Single Sign-On (SSO)</SelectItem>
                          <SelectItem value="biometric">Biometric + Password</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="password-expiry">Password Expiration</Label>
                        <p className="text-xs text-muted-foreground">Require password changes periodically</p>
                      </div>
                      <Switch id="password-expiry" defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password-expiry-days">Password Expiry Period</Label>
                      <Select defaultValue="90">
                        <SelectTrigger id="password-expiry-days">
                          <SelectValue placeholder="Select period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="60">60 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="180">180 days</SelectItem>
                          <SelectItem value="365">365 days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="failed-attempts">Account Lockout</Label>
                        <p className="text-xs text-muted-foreground">Lock accounts after multiple failed login attempts</p>
                      </div>
                      <Switch id="failed-attempts" defaultChecked />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Protection</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="conversation-encryption">Conversation Encryption</Label>
                        <p className="text-xs text-muted-foreground">Enable end-to-end encryption for all conversations</p>
                      </div>
                      <Switch id="conversation-encryption" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="pii-redaction">PII Redaction</Label>
                        <p className="text-xs text-muted-foreground">Automatically detect and redact personal identifiable information</p>
                      </div>
                      <Switch id="pii-redaction" defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="data-retention">Data Retention Period</Label>
                      <Select defaultValue="365">
                        <SelectTrigger id="data-retention">
                          <SelectValue placeholder="Select period" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 days</SelectItem>
                          <SelectItem value="90">90 days</SelectItem>
                          <SelectItem value="180">180 days</SelectItem>
                          <SelectItem value="365">1 year</SelectItem>
                          <SelectItem value="730">2 years</SelectItem>
                          <SelectItem value="1825">5 years</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">How long to keep conversation data before automatic deletion</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Compliance</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="hipaa-compliance">HIPAA Compliance Mode</Label>
                        <p className="text-xs text-muted-foreground">Enable additional security features for HIPAA compliance</p>
                      </div>
                      <Switch id="hipaa-compliance" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="audit-logging">Enhanced Audit Logging</Label>
                        <p className="text-xs text-muted-foreground">Maintain detailed logs of all system access and activities</p>
                      </div>
                      <Switch id="audit-logging" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="ip-restriction">IP Restriction</Label>
                        <p className="text-xs text-muted-foreground">Limit system access to specific IP addresses or ranges</p>
                      </div>
                      <Switch id="ip-restriction" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset to Defaults</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            )}
            
            {activeTab === "users" && (
              <Card>
                <CardHeader>
                  <CardTitle>User Access</CardTitle>
                  <CardDescription>Manage user accounts and permission settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">System Users</h3>
                    <Button size="sm">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add User
                    </Button>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Active</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="font-medium text-xs">JD</span>
                            </div>
                            <span>John Doe</span>
                          </div>
                        </TableCell>
                        <TableCell>john.doe@example.com</TableCell>
                        <TableCell>
                          <Badge>Administrator</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>Now</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <UserCog className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="font-medium text-xs">JS</span>
                            </div>
                            <span>Jane Smith</span>
                          </div>
                        </TableCell>
                        <TableCell>jane.smith@example.com</TableCell>
                        <TableCell>
                          <Badge variant="outline">Supervisor</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>2 hours ago</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <UserCog className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="font-medium text-xs">RJ</span>
                            </div>
                            <span>Robert Johnson</span>
                          </div>
                        </TableCell>
                        <TableCell>robert.j@example.com</TableCell>
                        <TableCell>
                          <Badge variant="outline">Agent Manager</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                            Away
                          </Badge>
                        </TableCell>
                        <TableCell>1 day ago</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <UserCog className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Role Permissions</h3>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          <span className="font-medium">Administrator</span>
                        </div>
                        <Badge>System Role</Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="admin-manage-users">Manage Users</Label>
                            <Switch id="admin-manage-users" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="admin-manage-agents">Manage Agents</Label>
                            <Switch id="admin-manage-agents" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="admin-system-settings">System Settings</Label>
                            <Switch id="admin-system-settings" defaultChecked />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="admin-view-analytics">View Analytics</Label>
                            <Switch id="admin-view-analytics" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="admin-api-access">API Access</Label>
                            <Switch id="admin-api-access" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="admin-export-data">Export Data</Label>
                            <Switch id="admin-export-data" defaultChecked />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          <span className="font-medium">Supervisor</span>
                        </div>
                        <Badge variant="outline">Custom Role</Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="super-manage-users">Manage Users</Label>
                            <Switch id="super-manage-users" />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="super-manage-agents">Manage Agents</Label>
                            <Switch id="super-manage-agents" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="super-system-settings">System Settings</Label>
                            <Switch id="super-system-settings" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="super-view-analytics">View Analytics</Label>
                            <Switch id="super-view-analytics" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="super-api-access">API Access</Label>
                            <Switch id="super-api-access" />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="super-export-data">Export Data</Label>
                            <Switch id="super-export-data" defaultChecked />
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm">Edit Role</Button>
                    </div>
                    
                    <Button variant="outline">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Create New Role
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset to Defaults</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            )}
            
            {activeTab === "notifications" && (
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Configure system alerts and notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notification Channels</h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BellRing className="h-4 w-4" />
                          <Label htmlFor="in-app">In-App Notifications</Label>
                        </div>
                        <Switch id="in-app" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <Label htmlFor="email">Email Notifications</Label>
                        </div>
                        <Switch id="email" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MessagesSquare className="h-4 w-4" />
                          <Label htmlFor="sms">SMS Notifications</Label>
                        </div>
                        <Switch id="sms" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <PhoneCall className="h-4 w-4" />
                          <Label htmlFor="phone">Phone Call Alerts</Label>
                        </div>
                        <Switch id="phone" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Alert Types</h3>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-red-500" />
                          <span className="font-medium">Critical Alerts</span>
                        </div>
                        <Badge className="bg-red-500">High Priority</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="alert-system-down">System Outages</Label>
                          <div className="flex items-center gap-2">
                            <Checkbox id="alert-system-down-email" defaultChecked />
                            <Mail className="h-4 w-4" />
                            <Checkbox id="alert-system-down-sms" defaultChecked />
                            <MessagesSquare className="h-4 w-4" />
                            <Checkbox id="alert-system-down-call" defaultChecked />
                            <PhoneCall className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="alert-security">Security Breaches</Label>
                          <div className="flex items-center gap-2">
                            <Checkbox id="alert-security-email" defaultChecked />
                            <Mail className="h-4 w-4" />
                            <Checkbox id="alert-security-sms" defaultChecked />
                            <MessagesSquare className="h-4 w-4" />
                            <Checkbox id="alert-security-call" />
                            <PhoneCall className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="alert-api-disconnection">API Disconnections</Label>
                          <div className="flex items-center gap-2">
                            <Checkbox id="alert-api-email" defaultChecked />
                            <Mail className="h-4 w-4" />
                            <Checkbox id="alert-api-sms" />
                            <MessagesSquare className="h-4 w-4" />
                            <Checkbox id="alert-api-call" />
                            <PhoneCall className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-amber-500" />
                          <span className="font-medium">Important Notifications</span>
                        </div>
                        <Badge className="bg-amber-500">Medium Priority</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="notification-escalations">Agent Escalations</Label>
                          <div className="flex items-center gap-2">
                            <Checkbox id="notification-escalations-app" defaultChecked />
                            <BellRing className="h-4 w-4" />
                            <Checkbox id="notification-escalations-email" defaultChecked />
                            <Mail className="h-4 w-4" />
                            <Checkbox id="notification-escalations-sms" />
                            <MessagesSquare className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="notification-capacity">System Capacity Warnings</Label>
                          <div className="flex items-center gap-2">
                            <Checkbox id="notification-capacity-app" defaultChecked />
                            <BellRing className="h-4 w-4" />
                            <Checkbox id="notification-capacity-email" defaultChecked />
                            <Mail className="h-4 w-4" />
                            <Checkbox id="notification-capacity-sms" />
                            <MessagesSquare className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="notification-user-activity">Unusual User Activity</Label>
                          <div className="flex items-center gap-2">
                            <Checkbox id="notification-activity-app" defaultChecked />
                            <BellRing className="h-4 w-4" />
                            <Checkbox id="notification-activity-email" defaultChecked />
                            <Mail className="h-4 w-4" />
                            <Checkbox id="notification-activity-sms" />
                            <MessagesSquare className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Bell className="h-5 w-5 text-blue-500" />
                          <span className="font-medium">General Notifications</span>
                        </div>
                        <Badge className="bg-blue-500">Low Priority</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="notification-updates">System Updates</Label>
                          <div className="flex items-center gap-2">
                            <Checkbox id="notification-updates-app" defaultChecked />
                            <BellRing className="h-4 w-4" />
                            <Checkbox id="notification-updates-email" defaultChecked />
                            <Mail className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="notification-reports">Analytics Reports</Label>
                          <div className="flex items-center gap-2">
                            <Checkbox id="notification-reports-app" defaultChecked />
                            <BellRing className="h-4 w-4" />
                            <Checkbox id="notification-reports-email" defaultChecked />
                            <Mail className="h-4 w-4" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="notification-new-users">New User Registrations</Label>
                          <div className="flex items-center gap-2">
                            <Checkbox id="notification-users-app" defaultChecked />
                            <BellRing className="h-4 w-4" />
                            <Checkbox id="notification-users-email" />
                            <Mail className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notification Schedule</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="do-not-disturb">Do Not Disturb Mode</Label>
                        <p className="text-xs text-muted-foreground">Disable all notifications during specified hours</p>
                      </div>
                      <Switch id="do-not-disturb" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quiet-start">Quiet Hours Start</Label>
                        <Select defaultValue="22">
                          <SelectTrigger id="quiet-start">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }).map((_, i) => (
                              <SelectItem key={i} value={String(i)}>
                                {i === 0 ? "12:00 AM" : i < 12 ? `${i}:00 AM` : i === 12 ? "12:00 PM" : `${i - 12}:00 PM`}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quiet-end">Quiet Hours End</Label>
                        <Select defaultValue="7">
                          <SelectTrigger id="quiet-end">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 24 }).map((_, i) => (
                              <SelectItem key={i} value={String(i)}>
                                {i === 0 ? "12:00 AM" : i < 12 ? `${i}:00 AM` : i === 12 ? "12:00 PM" : `${i - 12}:00 PM`}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Active Days</Label>
                      <div className="flex flex-wrap gap-2">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                          <div key={day} className="flex items-center space-x-2">
                            <Checkbox id={`day-${day.toLowerCase()}`} defaultChecked={day !== "Saturday" && day !== "Sunday"} />
                            <Label htmlFor={`day-${day.toLowerCase()}`}>{day}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset to Defaults</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            )}
            
            {activeTab === "advanced" && (
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Settings</CardTitle>
                  <CardDescription>Configure system-level and technical settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Performance</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="concurrent-agents">Maximum Concurrent Agents</Label>
                        <p className="text-xs text-muted-foreground">Limit the number of agents running simultaneously</p>
                      </div>
                      <Select defaultValue="10" className="w-[100px]">
                        <SelectTrigger id="concurrent-agents">
                          <SelectValue placeholder="Select limit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="10">10</SelectItem>
                          <SelectItem value="20">20</SelectItem>
                          <SelectItem value="50">50</SelectItem>
                          <SelectItem value="100">100</SelectItem>
                          <SelectItem value="unlimited">Unlimited</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="rate-limiting">API Rate Limiting</Label>
                        <p className="text-xs text-muted-foreground">Restrict API requests per minute to prevent overloading</p>
                      </div>
                      <Switch id="rate-limiting" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="cache-responses">Cache Agent Responses</Label>
                        <p className="text-xs text-muted-foreground">Store common responses to improve response times</p>
                      </div>
                      <Switch id="cache-responses" defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="log-level">System Log Level</Label>
                      <Select defaultValue="info">
                        <SelectTrigger id="log-level">
                          <SelectValue placeholder="Select log level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="error">Error Only</SelectItem>
                          <SelectItem value="warn">Warning</SelectItem>
                          <SelectItem value="info">Information</SelectItem>
                          <SelectItem value="debug">Debug</SelectItem>
                          <SelectItem value="trace">Trace (Verbose)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Maintenance</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                        <p className="text-xs text-muted-foreground">Temporarily disable the system for maintenance</p>
                      </div>
                      <Switch id="maintenance-mode" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="scheduled-maintenance">Scheduled Maintenance</Label>
                      <div className="flex items-center gap-2">
                        <Input type="datetime-local" id="scheduled-maintenance" className="flex-1" />
                        <Select defaultValue="60" className="w-[120px]">
                          <SelectTrigger id="maintenance-duration">
                            <SelectValue placeholder="Duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="60">1 hour</SelectItem>
                            <SelectItem value="120">2 hours</SelectItem>
                            <SelectItem value="240">4 hours</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Schedule system maintenance with automatic notifications
                      </p>
                    </div>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <h4 className="font-medium">System Maintenance Actions</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Button variant="outline" className="justify-start">
                          <History className="mr-2 h-4 w-4" />
                          View System Logs
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Download className="mr-2 h-4 w-4" />
                          Backup System Data
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <Upload className="mr-2 h-4 w-4" />
                          Restore From Backup
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Clear System Cache
                        </Button>
                      </div>
                      
                      <Button variant="destructive" className="w-full">
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        Reset System to Factory Defaults
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Management</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="data-export-format">Data Export Format</Label>
                      <Select defaultValue="json">
                        <SelectTrigger id="data-export-format">
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="csv">CSV</SelectItem>
                          <SelectItem value="json">JSON</SelectItem>
                          <SelectItem value="xml">XML</SelectItem>
                          <SelectItem value="xlsx">Excel (XLSX)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-cleanup">Automatic Data Cleanup</Label>
                        <p className="text-xs text-muted-foreground">Periodically remove old temporary files and logs</p>
                      </div>
                      <Switch id="auto-cleanup" defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="database-optimization">Database Optimization Schedule</Label>
                      <Select defaultValue="weekly">
                        <SelectTrigger id="database-optimization">
                          <SelectValue placeholder="Select schedule" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="manual">Manual Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Danger Zone</Label>
                      <div className="border border-destructive/30 rounded-md p-4 space-y-4 bg-destructive/5">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-destructive">Purge Conversation History</h4>
                            <p className="text-xs text-muted-foreground">
                              Permanently delete all conversation records older than the selected period
                            </p>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Purge Data
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Confirm Data Purge</DialogTitle>
                                <DialogDescription>
                                  This action cannot be undone. This will permanently delete selected conversation data.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 py-4">
                                <div className="space-y-2">
                                  <Label htmlFor="purge-period">Select Period</Label>
                                  <Select defaultValue="365">
                                    <SelectTrigger id="purge-period">
                                      <SelectValue placeholder="Select period" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="30">Older than 30 days</SelectItem>
                                      <SelectItem value="90">Older than 90 days</SelectItem>
                                      <SelectItem value="180">Older than 6 months</SelectItem>
                                      <SelectItem value="365">Older than 1 year</SelectItem>
                                      <SelectItem value="all">All conversation data</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Checkbox id="confirm-purge" />
                                  <Label htmlFor="confirm-purge">
                                    I understand this action cannot be undone
                                  </Label>
                                </div>
                              </div>
                              <DialogFooter>
                                <Button variant="outline">Cancel</Button>
                                <Button variant="destructive">Confirm Purge</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset to Defaults</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;

