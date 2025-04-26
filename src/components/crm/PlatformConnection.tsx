
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Link, Webhook } from "lucide-react";

interface PlatformConnectionProps {
  name: string;
  description: string;
  apiEndpoint: string;
  isConnected: boolean;
}

interface ConnectionFormData {
  apiKey: string;
  webhookUrl: string;
}

export const PlatformConnection: React.FC<PlatformConnectionProps> = ({
  name,
  description,
  apiEndpoint,
  isConnected
}) => {
  const { toast } = useToast();
  const form = useForm<ConnectionFormData>();

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
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Connect {name}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="apiKey"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>API Key</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Enter your API key" {...field} />
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
                        <Input placeholder="https://api.yourplatform.com/webhook" {...field} />
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
