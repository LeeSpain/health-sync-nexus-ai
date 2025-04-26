
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Link, Webhook, Code, KeyRound } from "lucide-react";

interface PlatformConnectionProps {
  name: string;
  description: string;
  apiEndpoint: string;
  isConnected: boolean;
}

interface ConnectionFormData {
  apiKey: string;
  webhookUrl: string;
  apiSecret?: string;
  syncSettings?: {
    customerData: boolean;
    providerData: boolean;
    documentData: boolean;
    subscriptionData: boolean;
    syncFrequency: "realtime" | "hourly" | "daily";
  };
}

export const PlatformConnection: React.FC<PlatformConnectionProps> = ({
  name,
  description,
  apiEndpoint,
  isConnected
}) => {
  const { toast } = useToast();
  const form = useForm<ConnectionFormData>();
  const [activeTab, setActiveTab] = useState("connection");

  // API schema that defines what fields will be synchronized across platforms
  const apiSchema = {
    customerProfile: {
      id: "string",
      name: "string",
      email: "string",
      phone: "string",
      platforms: "string[]",
      status: "string",
      subscription: "string",
      deviceUsage: {
        lastActive: "string",
        avgDailyUse: "string",
        preferredDevice: "string"
      },
      careProvider: "string",
      familyNetwork: "string[]",
      tags: "string[]"
    },
    providerNetwork: {
      id: "string",
      name: "string",
      platform: "string",
      specialty: "string",
      credentials: "string",
      availability: "string",
      performanceScore: "number",
      patients: "number"
    },
    documentManagement: {
      id: "string",
      name: "string",
      type: "string",
      platform: "string",
      lastUpdated: "string",
      status: "string",
      size: "string",
      contentUrl: "string"
    },
    subscriptionManagement: {
      id: "string",
      customer: "string",
      plan: "string",
      platform: "string",
      status: "string",
      billingCycle: "string",
      amount: "number",
      nextBilling: "string",
      renewalRisk: "string"
    }
  };

  const onSubmit = async (data: ConnectionFormData) => {
    console.log(`Connecting to ${name}:`, data);
    // In a real app, this would make an API call to validate and store the connection
    
    toast({
      title: "Connection successful",
      description: `Successfully connected to ${name}`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
        </div>
      </CardHeader>
      <CardContent>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              {isConnected ? (
                <>
                  <Link className="w-4 h-4 mr-2" />
                  Manage Connection
                </>
              ) : (
                <>
                  <Webhook className="w-4 h-4 mr-2" />
                  Connect Platform
                </>
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Connect {name}</DialogTitle>
            </DialogHeader>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 w-full mb-4">
                <TabsTrigger value="connection">Connection</TabsTrigger>
                <TabsTrigger value="sync">Sync Settings</TabsTrigger>
                <TabsTrigger value="schema">API Schema</TabsTrigger>
              </TabsList>
              
              <TabsContent value="connection" className="mt-0">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="apiKey"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>API Key</FormLabel>
                          <FormControl>
                            <div className="flex gap-2">
                              <KeyRound className="w-4 h-4 mt-3 text-muted-foreground" />
                              <Input type="password" placeholder="Enter your API key" className="flex-1" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="apiSecret"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>API Secret (Optional)</FormLabel>
                          <FormControl>
                            <Input type="password" placeholder="Enter your API secret" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="webhookUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Webhook URL (Optional)</FormLabel>
                          <FormControl>
                            <div className="flex gap-2">
                              <Webhook className="w-4 h-4 mt-3 text-muted-foreground" />
                              <Input placeholder="https://api.yourplatform.com/webhook" className="flex-1" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      {isConnected ? 'Update Connection' : 'Connect Platform'}
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              
              <TabsContent value="sync" className="mt-0">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Data to Synchronize</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="customer-data" className="rounded text-primary" defaultChecked />
                          <label htmlFor="customer-data">Customer Data</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="provider-data" className="rounded text-primary" defaultChecked />
                          <label htmlFor="provider-data">Provider Data</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="document-data" className="rounded text-primary" defaultChecked />
                          <label htmlFor="document-data">Document Data</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="subscription-data" className="rounded text-primary" defaultChecked />
                          <label htmlFor="subscription-data">Subscription Data</label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Sync Frequency</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="sync-realtime" name="sync-frequency" className="text-primary" defaultChecked />
                          <label htmlFor="sync-realtime">Real-time</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="sync-hourly" name="sync-frequency" className="text-primary" />
                          <label htmlFor="sync-hourly">Hourly</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="radio" id="sync-daily" name="sync-frequency" className="text-primary" />
                          <label htmlFor="sync-daily">Daily</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">Save Sync Settings</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="schema" className="mt-0">
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <p>This is the API schema that defines how data will be synchronized between platforms.</p>
                  </div>
                  
                  <div className="rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Code className="w-4 h-4 mr-2" />
                        <span className="text-sm font-medium">API Schema</span>
                      </div>
                      <Button variant="outline" size="sm">Copy</Button>
                    </div>
                    <Textarea 
                      className="mt-2 font-mono text-xs"
                      rows={12}
                      value={JSON.stringify(apiSchema, null, 2)}
                      readOnly
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>API Endpoint: {apiEndpoint}</p>
          <p className="mt-1">Status: {isConnected ? 'Connected' : 'Not Connected'}</p>
        </div>
      </CardContent>
    </Card>
  );
};
