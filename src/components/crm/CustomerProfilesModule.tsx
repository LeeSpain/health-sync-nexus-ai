
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity, Users, Calendar, FileText, Heart, Tag, MessageSquare } from "lucide-react";

export const CustomerProfilesModule = () => {
  // Mock data for customer profile
  const customerProfile = {
    id: "cus_12345",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    platforms: ["iHealth-Sync", "Nurse-Sync"],
    status: "Active",
    subscription: "Premium",
    deviceUsage: {
      lastActive: "2 hours ago",
      avgDailyUse: "45 minutes",
      preferredDevice: "Health Monitor X3"
    },
    careProvider: "Dr. Michael Chen (MedicSync)",
    familyNetwork: ["David Johnson (Spouse)", "Emma Johnson (Child)"],
    tags: ["Chronic Care", "Remote Monitoring", "Premium"]
  };

  const activities = [
    { id: 1, platform: "iHealth-Sync", action: "Device Reading", detail: "Blood Pressure: 120/80", time: "2 hours ago" },
    { id: 2, platform: "Nurse-Sync", action: "Appointment", detail: "Virtual check-in with Nurse Emily", time: "Yesterday" },
    { id: 3, platform: "MedicSync", action: "Prescription", detail: "Prescription renewal by Dr. Chen", time: "2 days ago" },
    { id: 4, platform: "iHealth-Sync", action: "Alert", detail: "Abnormal heart rate detected", time: "3 days ago" },
    { id: 5, platform: "Nurse-Sync", action: "Message", detail: "Care plan update discussion", time: "5 days ago" }
  ];

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Customer Profiles</CardTitle>
        <CardDescription>Comprehensive 360° view of customer information across platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-bold">{customerProfile.name}</h3>
              <p className="text-sm text-muted-foreground">{customerProfile.email} • {customerProfile.phone}</p>
            </div>
            <Badge>{customerProfile.status}</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="p-3 border rounded-md">
              <h4 className="font-medium text-sm mb-1">Platforms</h4>
              <div className="flex gap-2">
                {customerProfile.platforms.map(platform => (
                  <Badge key={platform} variant="outline">{platform}</Badge>
                ))}
              </div>
            </div>
            <div className="p-3 border rounded-md">
              <h4 className="font-medium text-sm mb-1">Subscription</h4>
              <p>{customerProfile.subscription}</p>
            </div>
            <div className="p-3 border rounded-md">
              <h4 className="font-medium text-sm mb-1">Care Provider</h4>
              <p>{customerProfile.careProvider}</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="timeline">
              <Activity className="h-4 w-4 mr-2" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="network">
              <Users className="h-4 w-4 mr-2" />
              Network
            </TabsTrigger>
            <TabsTrigger value="devices">
              <Calendar className="h-4 w-4 mr-2" />
              Devices
            </TabsTrigger>
            <TabsTrigger value="tags">
              <Tag className="h-4 w-4 mr-2" />
              Tags
            </TabsTrigger>
            <TabsTrigger value="notes">
              <MessageSquare className="h-4 w-4 mr-2" />
              Notes
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="timeline">
            <ScrollArea className="h-[300px] pr-2">
              <div className="space-y-4 mt-4">
                {activities.map(activity => (
                  <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.platform === 'iHealth-Sync' ? 'bg-purple-500' : 
                      activity.platform === 'Nurse-Sync' ? 'bg-green-500' : 
                      'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.detail}</p>
                        </div>
                        <div className="flex items-center">
                          <Badge variant="outline" className="text-xs">{activity.platform}</Badge>
                          <span className="text-xs text-muted-foreground ml-2">{activity.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="network">
            <div className="p-4 text-center">
              <Heart className="h-16 w-16 mx-auto text-muted-foreground" />
              <h3 className="mt-2 font-medium">Family/Caregiver Network</h3>
              <p className="text-muted-foreground">
                {customerProfile.familyNetwork.join(", ")}
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="devices">
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-md p-3">
                  <h4 className="font-medium">Last Active</h4>
                  <p className="text-muted-foreground">{customerProfile.deviceUsage.lastActive}</p>
                </div>
                <div className="border rounded-md p-3">
                  <h4 className="font-medium">Avg. Daily Use</h4>
                  <p className="text-muted-foreground">{customerProfile.deviceUsage.avgDailyUse}</p>
                </div>
                <div className="border rounded-md p-3 col-span-2">
                  <h4 className="font-medium">Preferred Device</h4>
                  <p className="text-muted-foreground">{customerProfile.deviceUsage.preferredDevice}</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tags">
            <div className="p-4">
              <div className="flex flex-wrap gap-2">
                {customerProfile.tags.map(tag => (
                  <Badge key={tag} className="px-3 py-1">{tag}</Badge>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="notes">
            <div className="p-4 text-center text-muted-foreground">
              <FileText className="h-16 w-16 mx-auto" />
              <p className="mt-2">No notes available yet</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
