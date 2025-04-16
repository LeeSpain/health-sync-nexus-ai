
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
import { ArrowRightCircle, GitBranch, ShieldAlert, MessageSquare, Clock, Edit, UserCheck, GitMerge, Zap, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EscalationsPage = () => {
  const [activeTab, setActiveTab] = useState("flow");
  
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
              <BreadcrumbPage>Escalation Rules</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Escalation Rules</h1>
            <p className="text-muted-foreground mt-1">
              Configure the escalation path between agents and set triggers for automatic handoffs.
            </p>
          </div>
          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Edit Rules
          </Button>
        </div>
        
        <Tabs defaultValue="flow" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="flow">Escalation Flow</TabsTrigger>
            <TabsTrigger value="triggers">Triggers & Conditions</TabsTrigger>
            <TabsTrigger value="history">Escalation History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="flow" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Agent Escalation Hierarchy</CardTitle>
                <CardDescription>The sequential flow of conversation handoffs between agents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4 py-4">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <span className="font-bold text-primary text-lg">Anna</span>
                    </div>
                    <Badge className="mb-1">Initial Contact</Badge>
                    <span className="text-sm text-muted-foreground">General Support & Triage</span>
                  </div>
                  
                  <ArrowRightCircle className="h-8 w-8 rotate-90 text-muted-foreground" />
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-2">
                      <span className="font-bold text-amber-500 text-lg">Emma</span>
                    </div>
                    <Badge variant="outline" className="mb-1">First Escalation</Badge>
                    <span className="text-sm text-muted-foreground">Specialized Knowledge & Complex Issues</span>
                  </div>
                  
                  <ArrowRightCircle className="h-8 w-8 rotate-90 text-muted-foreground" />
                  
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-2">
                      <span className="font-bold text-destructive text-lg">Julia</span>
                    </div>
                    <Badge variant="destructive" className="mb-1">Critical Escalation</Badge>
                    <span className="text-sm text-muted-foreground">Emergency Response & High Priority</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GitBranch className="mr-2 h-5 w-5" />
                    Escalation Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ShieldAlert className="mr-2 h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Medical Emergency</p>
                        <p className="text-sm text-muted-foreground">Direct to Julia, bypass intermediate steps</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <MessageSquare className="mr-2 h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Technical Questions</p>
                        <p className="text-sm text-muted-foreground">Escalate to Emma after 3 failed attempts</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="mr-2 h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-sm text-muted-foreground">Escalate if no resolution within 5 minutes</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserCheck className="mr-2 h-5 w-5" />
                    Automatic Routing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <GitMerge className="mr-2 h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Sentiment Detection</p>
                        <p className="text-sm text-muted-foreground">Routes based on detected user frustration level</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="mr-2 h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Keyword Triggers</p>
                        <p className="text-sm text-muted-foreground">Specific keywords route to appropriate agent</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Settings className="mr-2 h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">User History</p>
                        <p className="text-sm text-muted-foreground">Previous escalations inform routing decisions</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="triggers" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Escalation Triggers & Conditions</CardTitle>
                <CardDescription>Configure when conversations automatically transfer between agents</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Trigger Name</TableHead>
                      <TableHead>From Agent</TableHead>
                      <TableHead>To Agent</TableHead>
                      <TableHead>Condition</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Emergency Keywords</TableCell>
                      <TableCell>Any</TableCell>
                      <TableCell>Julia</TableCell>
                      <TableCell>Contains: "emergency", "urgent", "help now"</TableCell>
                      <TableCell><Badge variant="default">Active</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Technical Support</TableCell>
                      <TableCell>Anna</TableCell>
                      <TableCell>Emma</TableCell>
                      <TableCell>Contains: "technical", "broken", "error"</TableCell>
                      <TableCell><Badge variant="default">Active</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Negative Sentiment</TableCell>
                      <TableCell>Anna</TableCell>
                      <TableCell>Emma</TableCell>
                      <TableCell>Sentiment score < -0.5 for 3 messages</TableCell>
                      <TableCell><Badge variant="default">Active</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Response Timeout</TableCell>
                      <TableCell>Any</TableCell>
                      <TableCell>Next Level</TableCell>
                      <TableCell>No resolution within 5 minutes</TableCell>
                      <TableCell><Badge variant="default">Active</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Failed Authentication</TableCell>
                      <TableCell>Anna</TableCell>
                      <TableCell>Emma</TableCell>
                      <TableCell>3 failed login attempts</TableCell>
                      <TableCell><Badge variant="outline">Disabled</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Add New Trigger</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Escalations</CardTitle>
                <CardDescription>History of conversation transfers between agents</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Conversation ID</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>To</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2025-04-16 09:32 AM</TableCell>
                      <TableCell className="font-medium">CONV-2587</TableCell>
                      <TableCell>Anna</TableCell>
                      <TableCell>Julia</TableCell>
                      <TableCell>Emergency keywords detected</TableCell>
                      <TableCell><Badge variant="default">Completed</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2025-04-15 03:18 PM</TableCell>
                      <TableCell className="font-medium">CONV-2583</TableCell>
                      <TableCell>Anna</TableCell>
                      <TableCell>Emma</TableCell>
                      <TableCell>Technical support required</TableCell>
                      <TableCell><Badge variant="default">Completed</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2025-04-15 11:45 AM</TableCell>
                      <TableCell className="font-medium">CONV-2581</TableCell>
                      <TableCell>Emma</TableCell>
                      <TableCell>Julia</TableCell>
                      <TableCell>Critical information requested</TableCell>
                      <TableCell><Badge variant="default">Completed</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2025-04-14 02:09 PM</TableCell>
                      <TableCell className="font-medium">CONV-2575</TableCell>
                      <TableCell>Anna</TableCell>
                      <TableCell>Emma</TableCell>
                      <TableCell>Negative sentiment detected</TableCell>
                      <TableCell><Badge variant="default">Completed</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2025-04-14 10:22 AM</TableCell>
                      <TableCell className="font-medium">CONV-2572</TableCell>
                      <TableCell>Anna</TableCell>
                      <TableCell>Emma</TableCell>
                      <TableCell>Response timeout</TableCell>
                      <TableCell><Badge variant="outline">Timed Out</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">Export Data</Button>
                <Button variant="ghost" size="sm">View All</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default EscalationsPage;
