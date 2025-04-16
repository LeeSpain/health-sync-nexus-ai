
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
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Code, 
  FileText, 
  Brain, 
  Check, 
  History, 
  GitBranch, 
  Upload, 
  FileUp, 
  Clock, 
  BarChart, 
  Download,
  ChevronRight,
  PlusCircle,
  AlertTriangle,
  CheckCircle,
  RotateCcw
} from 'lucide-react';
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const TrainingPage = () => {
  const [activeTab, setActiveTab] = useState("prompts");
  
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
              <BreadcrumbPage>Training Module</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Training Module</h1>
            <p className="text-muted-foreground mt-1">
              Manage prompts, behaviors, and knowledge for all agents.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Training Update
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">Anna</CardTitle>
                <Badge variant="outline" className="ml-2">Primary</Badge>
              </div>
              <CardDescription>General Support & Triage</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Training Status</span>
                <Badge className="bg-emerald-500">Active</Badge>
              </div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Last Updated</span>
                <span className="text-muted-foreground">2 days ago</span>
              </div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Knowledge Base</span>
                <span className="text-muted-foreground">128 documents</span>
              </div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Performance Score</span>
                <span className="font-medium">87/100</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                Manage Training
                <ChevronRight className="ml-auto h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">Emma</CardTitle>
                <Badge variant="outline" className="ml-2">Specialist</Badge>
              </div>
              <CardDescription>Technical & Complex Issues</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Training Status</span>
                <Badge className="bg-amber-500">Updating</Badge>
              </div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Last Updated</span>
                <span className="text-muted-foreground">In progress</span>
              </div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Knowledge Base</span>
                <span className="text-muted-foreground">205 documents</span>
              </div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Performance Score</span>
                <span className="font-medium">92/100</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                Manage Training
                <ChevronRight className="ml-auto h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">Julia</CardTitle>
                <Badge variant="outline" className="ml-2">Critical</Badge>
              </div>
              <CardDescription>Emergency Response</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Training Status</span>
                <Badge variant="outline">Review Needed</Badge>
              </div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Last Updated</span>
                <span className="text-muted-foreground">2 weeks ago</span>
              </div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Knowledge Base</span>
                <span className="text-muted-foreground">97 documents</span>
              </div>
              <div className="flex items-center justify-between text-sm mb-1">
                <span>Performance Score</span>
                <span className="font-medium">79/100</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                Manage Training
                <ChevronRight className="ml-auto h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <Tabs defaultValue="prompts" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="prompts">Prompt Templates</TabsTrigger>
            <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
            <TabsTrigger value="behaviors">Behaviors</TabsTrigger>
            <TabsTrigger value="history">Training History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="prompts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" />
                  Prompt Templates
                </CardTitle>
                <CardDescription>Configure the base instructions for each agent</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Template Name</TableHead>
                      <TableHead>Agent</TableHead>
                      <TableHead>Last Modified</TableHead>
                      <TableHead>Version</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Base Instructions</TableCell>
                      <TableCell>All Agents</TableCell>
                      <TableCell>2025-04-14</TableCell>
                      <TableCell>v2.5</TableCell>
                      <TableCell><Badge className="bg-emerald-500">Active</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Medical Emergency Response</TableCell>
                      <TableCell>Julia</TableCell>
                      <TableCell>2025-04-12</TableCell>
                      <TableCell>v3.1</TableCell>
                      <TableCell><Badge className="bg-emerald-500">Active</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Technical Support Flow</TableCell>
                      <TableCell>Emma</TableCell>
                      <TableCell>2025-04-15</TableCell>
                      <TableCell>v1.8</TableCell>
                      <TableCell><Badge className="bg-amber-500">Testing</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Initial Greeting</TableCell>
                      <TableCell>Anna</TableCell>
                      <TableCell>2025-04-10</TableCell>
                      <TableCell>v4.2</TableCell>
                      <TableCell><Badge className="bg-emerald-500">Active</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Escalation Guidelines</TableCell>
                      <TableCell>All Agents</TableCell>
                      <TableCell>2025-04-08</TableCell>
                      <TableCell>v2.0</TableCell>
                      <TableCell><Badge className="bg-emerald-500">Active</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Edit</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add New Template
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="knowledge" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Knowledge Base
                </CardTitle>
                <CardDescription>Manage knowledge documents for agent training</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-end mb-4 gap-2">
                  <Button variant="outline" size="sm">
                    <FileUp className="mr-2 h-4 w-4" />
                    Upload Document
                  </Button>
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Import From URL
                  </Button>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Used By</TableHead>
                      <TableHead>Uploaded</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Medical_Protocol_2025.pdf</TableCell>
                      <TableCell>PDF</TableCell>
                      <TableCell>Julia, Emma</TableCell>
                      <TableCell>2025-03-15</TableCell>
                      <TableCell>4.2 MB</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Company_FAQs.xlsx</TableCell>
                      <TableCell>Spreadsheet</TableCell>
                      <TableCell>All Agents</TableCell>
                      <TableCell>2025-02-28</TableCell>
                      <TableCell>1.8 MB</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Product_Manual_v3.docx</TableCell>
                      <TableCell>Document</TableCell>
                      <TableCell>Anna, Emma</TableCell>
                      <TableCell>2025-04-01</TableCell>
                      <TableCell>5.7 MB</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Crisis_Response_Guide.pdf</TableCell>
                      <TableCell>PDF</TableCell>
                      <TableCell>Julia</TableCell>
                      <TableCell>2025-03-22</TableCell>
                      <TableCell>3.1 MB</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">API_Documentation.md</TableCell>
                      <TableCell>Markdown</TableCell>
                      <TableCell>Emma</TableCell>
                      <TableCell>2025-04-10</TableCell>
                      <TableCell>0.5 MB</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">View</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-sm text-muted-foreground">
                  Total: 430 documents (1.2 GB)
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="behaviors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Brain className="mr-2 h-5 w-5" />
                  Agent Behaviors
                </CardTitle>
                <CardDescription>Configure how agents interact and respond</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Anna — Primary Agent</h3>
                      <Badge className="bg-emerald-500">Active</Badge>
                    </div>
                    <Separator className="my-2" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Personality Traits</h4>
                        <div className="space-y-2">
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Friendliness</span>
                              <span>High</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Formality</span>
                              <span>Medium</span>
                            </div>
                            <Progress value={60} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Thoroughness</span>
                              <span>Medium-High</span>
                            </div>
                            <Progress value={75} className="h-2" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Response Parameters</h4>
                        <div className="space-y-2">
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Response Length</span>
                              <span>Medium</span>
                            </div>
                            <Progress value={50} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Technical Detail</span>
                              <span>Low</span>
                            </div>
                            <Progress value={25} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Empathetic Responses</span>
                              <span>High</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Behavior
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Emma — Specialist Agent</h3>
                      <Badge className="bg-amber-500">Updating</Badge>
                    </div>
                    <Separator className="my-2" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Personality Traits</h4>
                        <div className="space-y-2">
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Friendliness</span>
                              <span>Medium</span>
                            </div>
                            <Progress value={60} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Formality</span>
                              <span>Medium-High</span>
                            </div>
                            <Progress value={70} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Thoroughness</span>
                              <span>Very High</span>
                            </div>
                            <Progress value={95} className="h-2" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Response Parameters</h4>
                        <div className="space-y-2">
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Response Length</span>
                              <span>Long</span>
                            </div>
                            <Progress value={80} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Technical Detail</span>
                              <span>High</span>
                            </div>
                            <Progress value={85} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Empathetic Responses</span>
                              <span>Medium</span>
                            </div>
                            <Progress value={50} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Behavior
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Julia — Emergency Agent</h3>
                      <Badge variant="outline">Review Needed</Badge>
                    </div>
                    <Separator className="my-2" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Personality Traits</h4>
                        <div className="space-y-2">
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Friendliness</span>
                              <span>Medium-High</span>
                            </div>
                            <Progress value={65} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Formality</span>
                              <span>High</span>
                            </div>
                            <Progress value={80} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Thoroughness</span>
                              <span>Very High</span>
                            </div>
                            <Progress value={90} className="h-2" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Response Parameters</h4>
                        <div className="space-y-2">
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Response Length</span>
                              <span>Concise</span>
                            </div>
                            <Progress value={30} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Technical Detail</span>
                              <span>Medium-High</span>
                            </div>
                            <Progress value={70} className="h-2" />
                          </div>
                          <div>
                            <div className="flex items-center justify-between text-sm">
                              <span>Empathetic Responses</span>
                              <span>Very High</span>
                            </div>
                            <Progress value={95} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-2 bg-amber-50 border border-amber-200 rounded text-sm flex items-start">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Performance analysis indicates Julia may need recalibration for improved emergency response times. Recommended review.</span>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Behavior
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <History className="mr-2 h-5 w-5" />
                  Training History
                </CardTitle>
                <CardDescription>Record of all training updates and version changes</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Agent</TableHead>
                      <TableHead>Change</TableHead>
                      <TableHead>By</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>2025-04-15 14:30</TableCell>
                      <TableCell>Knowledge Base</TableCell>
                      <TableCell>Emma</TableCell>
                      <TableCell>Added 12 new technical documents</TableCell>
                      <TableCell>admin@ghs.com</TableCell>
                      <TableCell><Badge className="bg-amber-500">Indexing</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Details</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2025-04-14 09:15</TableCell>
                      <TableCell>Prompt</TableCell>
                      <TableCell>Anna</TableCell>
                      <TableCell>Updated greeting template v4.1 → v4.2</TableCell>
                      <TableCell>admin@ghs.com</TableCell>
                      <TableCell><Badge className="bg-emerald-500">Complete</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Details</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2025-04-12 16:45</TableCell>
                      <TableCell>Behavior</TableCell>
                      <TableCell>Julia</TableCell>
                      <TableCell>Adjusted response parameters</TableCell>
                      <TableCell>admin@ghs.com</TableCell>
                      <TableCell><Badge className="bg-emerald-500">Complete</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Details</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2025-04-10 11:20</TableCell>
                      <TableCell>Knowledge Base</TableCell>
                      <TableCell>All Agents</TableCell>
                      <TableCell>Quarterly policy update</TableCell>
                      <TableCell>admin@ghs.com</TableCell>
                      <TableCell><Badge className="bg-emerald-500">Complete</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Details</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2025-04-08 14:10</TableCell>
                      <TableCell>Prompt</TableCell>
                      <TableCell>All Agents</TableCell>
                      <TableCell>Updated escalation guidelines</TableCell>
                      <TableCell>admin@ghs.com</TableCell>
                      <TableCell><Badge className="bg-emerald-500">Complete</Badge></TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Details</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <BarChart className="mr-2 h-4 w-4" />
                  Training Impact Report
                </Button>
                <Button variant="outline" size="sm">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Rollback to Previous Version
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default TrainingPage;
