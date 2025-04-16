
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
  CloudCog
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

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("general");
  
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
          <Button>
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
            
            {activeTab !== "general" && activeTab !== "api" && activeTab !== "voice" && (
              <Card>
                <CardHeader>
                  <CardTitle>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Settings</CardTitle>
                  <CardDescription>This settings page is under development</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
                    {activeTab === "language" && <Languages className="h-8 w-8 text-muted-foreground" />}
                    {activeTab === "security" && <Shield className="h-8 w-8 text-muted-foreground" />}
                    {activeTab === "users" && <Users className="h-8 w-8 text-muted-foreground" />}
                    {activeTab === "notifications" && <Bell className="h-8 w-8 text-muted-foreground" />}
                    {activeTab === "advanced" && <ServerCog className="h-8 w-8 text-muted-foreground" />}
                  </div>
                  <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
                  <p className="text-muted-foreground text-center max-w-md mb-6">
                    The {activeTab} settings module is currently under development and will be available in an upcoming release.
                  </p>
                </CardContent>
                <CardFooter className="border-t px-6 py-4 flex justify-center">
                  <Button variant="outline">Return to Dashboard</Button>
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
