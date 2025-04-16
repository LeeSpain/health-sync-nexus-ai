
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
            {/* General Settings Tab */}
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
                        <div>
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
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <div>
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
                      <div>
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
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset to Defaults</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            )}
            
            {/* API Connections Tab */}
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
                        <div>
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
            
            {/* Voice Settings Tab */}
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
                          <div>
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
                          <div>
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
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="emma-voice">Emma Voice</Label>
                          <div>
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
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="julia-voice">Julia Voice</Label>
                          <div>
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
                        <div>
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
            
            {/* Language Tab */}
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
                      <div>
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
                      </div>
                      <p className="text-xs text-muted-foreground">Primary language for the admin interface</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="date-format">Date & Time Format</Label>
                        <p className="text-xs text-muted-foreground">Configure how dates and times are displayed</p>
                      </div>
                      <div className="w-[200px]">
                        <Select defaultValue="us">
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
                      <div>
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
                      <div>
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
                      </div>
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
            
            {/* Security Tab */}
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
                      <div>
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
                      <div>
                        <Select defaultValue="90">
                          <SelectTrigger id="password-expiry-days">
                            <SelectValue placeholder="Select period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30 days</SelectItem>
                            <SelectItem value="60">60 days</SelectItem>
                            <SelectItem value="90">90 days</SelectItem>
                            <SelectItem value="180">180 days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Access Control</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="ip-restriction">IP Restrictions</Label>
                        <p className="text-xs text-muted-foreground">Limit access to specific IP addresses</p>
                      </div>
                      <Switch id="ip-restriction" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="allowed-ips">Allowed IP Addresses</Label>
                      <Input id="allowed-ips" placeholder="e.g. 192.168.1.1, 10.0.0.0/24" />
                      <p className="text-xs text-muted-foreground">Comma-separated list of IPs or CIDR ranges</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="session-concurrent">Concurrent Sessions</Label>
                        <p className="text-xs text-muted-foreground">Allow multiple active sessions per user</p>
                      </div>
                      <Switch id="session-concurrent" defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="max-sessions">Maximum Concurrent Sessions</Label>
                      <div>
                        <Select defaultValue="3">
                          <SelectTrigger id="max-sessions">
                            <SelectValue placeholder="Select limit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 session</SelectItem>
                            <SelectItem value="2">2 sessions</SelectItem>
                            <SelectItem value="3">3 sessions</SelectItem>
                            <SelectItem value="5">5 sessions</SelectItem>
                            <SelectItem value="10">10 sessions</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Security</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="data-encryption">Encryption at Rest</Label>
                        <p className="text-xs text-muted-foreground">Encrypt stored data and files</p>
                      </div>
                      <Switch id="data-encryption" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="tls-required">TLS Required</Label>
                        <p className="text-xs text-muted-foreground">Require secure connections for all API endpoints</p>
                      </div>
                      <Switch id="tls-required" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sensitive-redaction">Sensitive Data Redaction</Label>
                        <p className="text-xs text-muted-foreground">Redact PII and sensitive information from logs</p>
                      </div>
                      <Switch id="sensitive-redaction" defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="data-retention">Data Retention Period</Label>
                      <div>
                        <Select defaultValue="180">
                          <SelectTrigger id="data-retention">
                            <SelectValue placeholder="Select period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30 days</SelectItem>
                            <SelectItem value="90">90 days</SelectItem>
                            <SelectItem value="180">180 days</SelectItem>
                            <SelectItem value="365">1 year</SelectItem>
                            <SelectItem value="730">2 years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <p className="text-xs text-muted-foreground">How long to keep conversation data before deletion</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset to Defaults</Button>
                  <Button onClick={handleSaveChanges}>Save Changes</Button>
                </CardFooter>
              </Card>
            )}
            
            {/* User Access Tab */}
            {activeTab === "users" && (
              <Card>
                <CardHeader>
                  <CardTitle>User Access Management</CardTitle>
                  <CardDescription>Configure user roles, permissions, and access controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">System Users</h3>
                    <Button>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Add User
                    </Button>
                  </div>
                  
                  <div className="border rounded-md">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">John Doe</TableCell>
                          <TableCell>john.doe@example.com</TableCell>
                          <TableCell>Administrator</TableCell>
                          <TableCell>
                            <Badge className="bg-emerald-500">Active</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon">
                                <UserCog className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <UserX className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Jane Smith</TableCell>
                          <TableCell>jane.smith@example.com</TableCell>
                          <TableCell>Manager</TableCell>
                          <TableCell>
                            <Badge className="bg-emerald-500">Active</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon">
                                <UserCog className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <UserX className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Robert Johnson</TableCell>
                          <TableCell>robert.johnson@example.com</TableCell>
                          <TableCell>Viewer</TableCell>
                          <TableCell>
                            <Badge variant="outline">Inactive</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon">
                                <UserCog className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <UserX className="h-4 w-4 text-destructive" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Role Management</h3>
                    
                    <div className="border rounded-md">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Role Name</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Users</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Administrator</TableCell>
                            <TableCell>Full system access including user management</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">Edit Permissions</Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Manager</TableCell>
                            <TableCell>Can manage agents and view analytics</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">Edit Permissions</Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Viewer</TableCell>
                            <TableCell>Read-only access to dashboard and analytics</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">Edit Permissions</Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button variant="outline">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Create New Role
                      </Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Access Control Settings</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="invite-only">User Registration</Label>
                      <div className="flex items-center gap-2">
                        <Select defaultValue="invite">
                          <SelectTrigger id="invite-only">
                            <SelectValue placeholder="Select registration method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="invite">Invite Only</SelectItem>
                            <SelectItem value="approval">Registration with Approval</SelectItem>
                            <SelectItem value="open">Open Registration</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <p className="text-xs text-muted-foreground">Control how new users can join the system</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="audit-logging">Audit Logging</Label>
                        <p className="text-xs text-muted-foreground">Log all user actions for compliance and security</p>
                      </div>
                      <Switch id="audit-logging" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="failed-attempts">Account Lockout</Label>
                        <p className="text-xs text-muted-foreground">Lock accounts after failed login attempts</p>
                      </div>
                      <Switch id="failed-attempts" defaultChecked />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lockout-threshold">Lockout Threshold</Label>
                      <div>
                        <Select defaultValue="5">
                          <SelectTrigger id="lockout-threshold">
                            <SelectValue placeholder="Select threshold" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3">3 attempts</SelectItem>
                            <SelectItem value="5">5 attempts</SelectItem>
                            <SelectItem value="10">10 attempts</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <p className="text-xs text-muted-foreground">Number of failed attempts before account lockout</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset to Defaults</Button>
                  <Button onClick={handleSaveChanges}>Save Changes</Button>
                </CardFooter>
              </Card>
            )}
            
            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Configure system and user notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Notifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="system-alerts">System Alerts</Label>
                          <p className="text-xs text-muted-foreground">Critical system errors and warnings</p>
                        </div>
                        <Switch id="system-alerts" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="maintenance-notices">Maintenance Notices</Label>
                          <p className="text-xs text-muted-foreground">Scheduled maintenance and downtime alerts</p>
                        </div>
                        <Switch id="maintenance-notices" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="performance-alerts">Performance Alerts</Label>
                          <p className="text-xs text-muted-foreground">Resource usage and performance warnings</p>
                        </div>
                        <Switch id="performance-alerts" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="security-alerts">Security Alerts</Label>
                          <p className="text-xs text-muted-foreground">Security-related events and potential threats</p>
                        </div>
                        <Switch id="security-alerts" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Agent Notifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="agent-escalations">Agent Escalations</Label>
                          <p className="text-xs text-muted-foreground">Notify when agents escalate conversations</p>
                        </div>
                        <Switch id="agent-escalations" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="agent-training">Training Updates</Label>
                          <p className="text-xs text-muted-foreground">Notifications about agent training progress</p>
                        </div>
                        <Switch id="agent-training" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="agent-errors">Error Reports</Label>
                          <p className="text-xs text-muted-foreground">Agent error reports and issues</p>
                        </div>
                        <Switch id="agent-errors" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notification Channels</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BellRing className="h-4 w-4" />
                          <div>
                            <Label htmlFor="in-app">In-App Notifications</Label>
                            <p className="text-xs text-muted-foreground">Display notifications in the dashboard</p>
                          </div>
                        </div>
                        <Switch id="in-app" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <div>
                            <Label htmlFor="email">Email Notifications</Label>
                            <p className="text-xs text-muted-foreground">Send notifications to registered email addresses</p>
                          </div>
                        </div>
                        <Switch id="email" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MessagesSquare className="h-4 w-4" />
                          <div>
                            <Label htmlFor="sms">SMS Notifications</Label>
                            <p className="text-xs text-muted-foreground">Send text message alerts for critical events</p>
                          </div>
                        </div>
                        <Switch id="sms" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Webhook className="h-4 w-4" />
                          <div>
                            <Label htmlFor="webhook-notifications">Webhook Notifications</Label>
                            <p className="text-xs text-muted-foreground">Send notifications to configured webhook endpoints</p>
                          </div>
                        </div>
                        <Switch id="webhook-notifications" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email-recipients">Email Recipients</Label>
                      <Input id="email-recipients" defaultValue="admin@example.com, alerts@example.com" />
                      <p className="text-xs text-muted-foreground">Comma-separated list of email recipients</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="notification-frequency">Notification Frequency</Label>
                      <div>
                        <Select defaultValue="immediate">
                          <SelectTrigger id="notification-frequency">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate</SelectItem>
                            <SelectItem value="hourly">Hourly Digest</SelectItem>
                            <SelectItem value="daily">Daily Digest</SelectItem>
                            <SelectItem value="weekly">Weekly Digest</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset to Defaults</Button>
                  <Button onClick={handleSaveChanges}>Save Changes</Button>
                </CardFooter>
              </Card>
            )}
            
            {/* Advanced Tab */}
            {activeTab === "advanced" && (
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Settings</CardTitle>
                  <CardDescription>Configure system-level and advanced features</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Configuration</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="debug-mode">Debug Mode</Label>
                        <p className="text-xs text-muted-foreground">Enable detailed logging for troubleshooting</p>
                      </div>
                      <Switch id="debug-mode" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="log-level">Logging Level</Label>
                      <div>
                        <Select defaultValue="info">
                          <SelectTrigger id="log-level">
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="error">Error</SelectItem>
                            <SelectItem value="warn">Warning</SelectItem>
                            <SelectItem value="info">Info</SelectItem>
                            <SelectItem value="debug">Debug</SelectItem>
                            <SelectItem value="trace">Trace</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="performance-mode">Performance Mode</Label>
                        <p className="text-xs text-muted-foreground">Optimize for performance over features</p>
                      </div>
                      <Switch id="performance-mode" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cache-strategy">Caching Strategy</Label>
                      <div>
                        <Select defaultValue="balanced">
                          <SelectTrigger id="cache-strategy">
                            <SelectValue placeholder="Select strategy" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="aggressive">Aggressive Caching</SelectItem>
                            <SelectItem value="balanced">Balanced</SelectItem>
                            <SelectItem value="minimal">Minimal Caching</SelectItem>
                            <SelectItem value="disabled">Disabled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Data Management</h3>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <h4 className="font-medium">Database Maintenance</h4>
                      
                      <div className="space-y-2">
                        <Label htmlFor="maintenance-window">Maintenance Window</Label>
                        <div>
                          <Select defaultValue="weekend">
                            <SelectTrigger id="maintenance-window">
                              <SelectValue placeholder="Select window" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="daily">Daily (2AM-4AM)</SelectItem>
                              <SelectItem value="weekend">Weekend (Saturday 1AM-5AM)</SelectItem>
                              <SelectItem value="monthly">Monthly (First Sunday, 1AM-6AM)</SelectItem>
                              <SelectItem value="manual">Manual Only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline">
                          <Database className="mr-2 h-4 w-4" />
                          Run Vacuum
                        </Button>
                        <Button variant="outline">
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Rebuild Indexes
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <h4 className="font-medium">Backup & Restore</h4>
                      
                      <div className="space-y-2">
                        <Label>Backup Storage</Label>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="backup-local" defaultChecked />
                          <Label htmlFor="backup-local">Local Storage</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="backup-s3" defaultChecked />
                          <Label htmlFor="backup-s3">S3 Compatible Storage</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="backup-azure" />
                          <Label htmlFor="backup-azure">Azure Blob Storage</Label>
                        </div>
                      </div>
                      
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline">
                          <Download className="mr-2 h-4 w-4" />
                          Backup Now
                        </Button>
                        <Button variant="outline">
                          <Upload className="mr-2 h-4 w-4" />
                          Restore
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4 space-y-4">
                      <h4 className="font-medium">Data Cleanup</h4>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="auto-cleanup">Automatic Data Cleanup</Label>
                          <p className="text-xs text-muted-foreground">Periodically remove old data</p>
                        </div>
                        <Switch id="auto-cleanup" defaultChecked />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cleanup-age">Cleanup Age Threshold</Label>
                        <div>
                          <Select defaultValue="180">
                            <SelectTrigger id="cleanup-age">
                              <SelectValue placeholder="Select threshold" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="30">30 days</SelectItem>
                              <SelectItem value="90">90 days</SelectItem>
                              <SelectItem value="180">180 days</SelectItem>
                              <SelectItem value="365">1 year</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Purge Old Data
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Confirm Data Purge</DialogTitle>
                              <DialogDescription>
                                This action will permanently delete data older than the selected threshold. 
                                This cannot be undone.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="purge-confirm">Type "CONFIRM" to proceed</Label>
                                <Input id="purge-confirm" placeholder="CONFIRM" />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="outline">Cancel</Button>
                              <Button variant="destructive">Purge Data</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">System Health</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="health-checks">Automated Health Checks</Label>
                          <p className="text-xs text-muted-foreground">Periodically check system components</p>
                        </div>
                        <Switch id="health-checks" defaultChecked />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="health-frequency">Health Check Frequency</Label>
                        <div>
                          <Select defaultValue="15">
                            <SelectTrigger id="health-frequency">
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="5">Every 5 minutes</SelectItem>
                              <SelectItem value="15">Every 15 minutes</SelectItem>
                              <SelectItem value="30">Every 30 minutes</SelectItem>
                              <SelectItem value="60">Every hour</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button variant="outline">
                          <Activity className="mr-2 h-4 w-4" />
                          Run Health Check Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-between">
                  <Button variant="ghost">Reset to Defaults</Button>
                  <Button onClick={handleSaveChanges}>Save Changes</Button>
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
