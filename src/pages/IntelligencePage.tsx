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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Zap, 
  BarChart3, 
  MessageSquare, 
  Lightbulb, 
  Sparkles, 
  Gauge, 
  TrendingUp, 
  AlertCircle,
  ArrowUpRight
} from "lucide-react";
import { VoiceControl } from '@/components/voice/VoiceControl';

const IntelligencePage = () => {
  const [activeTab, setActiveTab] = useState("insights");
  
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
              <BreadcrumbPage>Intelligence Center</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Intelligence Center</h1>
            <p className="text-muted-foreground mt-1">
              Advanced AI insights, analytics, and optimization tools
            </p>
          </div>
          <Button>
            <Brain className="mr-2 h-4 w-4" />
            Run Analysis
          </Button>
        </div>
        
        <Tabs defaultValue="insights" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="insights">AI Insights</TabsTrigger>
            <TabsTrigger value="optimization">System Optimization</TabsTrigger>
            <TabsTrigger value="analytics">Advanced Analytics</TabsTrigger>
          </TabsList>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <TabsContent value="insights" className="space-y-4 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                      Conversation Intelligence
                    </CardTitle>
                    <CardDescription>
                      AI-powered insights from customer conversations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Sentiment Analysis</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700">Positive</Badge>
                      </div>
                      <Progress value={72} className="h-2" />
                      <p className="text-xs text-muted-foreground">72% positive sentiment across conversations</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Topic Detection</span>
                        <Badge variant="outline">5 Key Topics</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-xs bg-muted rounded-md p-2 flex justify-between">
                          <span>Medication Questions</span>
                          <span className="font-medium">32%</span>
                        </div>
                        <div className="text-xs bg-muted rounded-md p-2 flex justify-between">
                          <span>Appointment Scheduling</span>
                          <span className="font-medium">28%</span>
                        </div>
                        <div className="text-xs bg-muted rounded-md p-2 flex justify-between">
                          <span>Insurance Coverage</span>
                          <span className="font-medium">18%</span>
                        </div>
                        <div className="text-xs bg-muted rounded-md p-2 flex justify-between">
                          <span>Test Results</span>
                          <span className="font-medium">12%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Intent Recognition</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Information Seeking</span>
                          <span>45%</span>
                        </div>
                        <Progress value={45} className="h-1.5" />
                        
                        <div className="flex justify-between text-xs">
                          <span>Problem Resolution</span>
                          <span>30%</span>
                        </div>
                        <Progress value={30} className="h-1.5" />
                        
                        <div className="flex justify-between text-xs">
                          <span>Scheduling</span>
                          <span>15%</span>
                        </div>
                        <Progress value={15} className="h-1.5" />
                        
                        <div className="flex justify-between text-xs">
                          <span>Complaints</span>
                          <span>10%</span>
                        </div>
                        <Progress value={10} className="h-1.5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lightbulb className="mr-2 h-5 w-5 text-amber-500" />
                      Emerging Patterns
                    </CardTitle>
                    <CardDescription>
                      Newly detected trends and patterns
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                        <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm">Increasing Interest in Preventative Care</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            25% increase in questions about preventative health measures over the last month.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm">Medication Side Effect Concerns</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Spike in questions about side effects for recently prescribed medications.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                        <Sparkles className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm">New Treatment Interest</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Growing questions about new treatment options mentioned in recent news.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="optimization" className="space-y-4 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Gauge className="mr-2 h-5 w-5 text-blue-500" />
                      System Performance
                    </CardTitle>
                    <CardDescription>
                      AI system performance metrics and optimization
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Response Accuracy</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700">94.8%</Badge>
                      </div>
                      <Progress value={94.8} className="h-2" />
                      <p className="text-xs text-muted-foreground">Based on user feedback and validation</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Average Response Time</span>
                        <Badge variant="outline">1.2 seconds</Badge>
                      </div>
                      <Progress value={85} className="h-2" />
                      <p className="text-xs text-muted-foreground">15% faster than previous month</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Knowledge Coverage</span>
                        <Badge variant="outline">92.3%</Badge>
                      </div>
                      <Progress value={92.3} className="h-2" />
                      <p className="text-xs text-muted-foreground">Percentage of questions successfully answered</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Escalation Rate</span>
                        <Badge variant="outline" className="bg-amber-50 text-amber-700">7.2%</Badge>
                      </div>
                      <Progress value={7.2} className="h-2" />
                      <p className="text-xs text-muted-foreground">Percentage of conversations requiring human intervention</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Brain className="mr-2 h-5 w-5 text-purple-500" />
                      AI Model Optimization
                    </CardTitle>
                    <CardDescription>
                      Fine-tuning and model improvement metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 rounded-lg border bg-card">
                        <ArrowUpRight className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm">Recent Model Improvements</h4>
                          <p className="text-xs text-muted-foreground mt-1">
                            Latest fine-tuning improved medical terminology accuracy by 12%
                          </p>
                          <div className="mt-2">
                            <Badge variant="outline" className="text-xs mr-1">Medical Terms</Badge>
                            <Badge variant="outline" className="text-xs mr-1">Symptom Recognition</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <span className="text-sm font-medium">Training Progress</span>
                        <div className="grid grid-cols-4 gap-1">
                          <div className="h-2 rounded-full bg-green-500"></div>
                          <div className="h-2 rounded-full bg-green-500"></div>
                          <div className="h-2 rounded-full bg-green-500"></div>
                          <div className="h-2 rounded-full bg-muted"></div>
                        </div>
                        <p className="text-xs text-muted-foreground">Phase 3/4 complete - Final optimization in progress</p>
                      </div>
                      
                      <div className="space-y-2">
                        <span className="text-sm font-medium">Knowledge Base Updates</span>
                        <div className="text-xs text-muted-foreground">
                          <div className="flex justify-between mb-1">
                            <span>New medical procedures</span>
                            <span>Added 2 days ago</span>
                          </div>
                          <div className="flex justify-between mb-1">
                            <span>Updated insurance information</span>
                            <span>Added 5 days ago</span>
                          </div>
                          <div className="flex justify-between">
                            <span>New medication guidelines</span>
                            <span>Added 1 week ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics" className="space-y-4 mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-indigo-500" />
                      Conversation Analytics
                    </CardTitle>
                    <CardDescription>
                      Detailed metrics on conversation performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <span className="text-sm font-medium">Conversation Volume by Hour</span>
                      <div className="h-24 flex items-end gap-1">
                        {[15, 25, 35, 45, 65, 55, 40, 50, 60, 35, 30, 20, 25, 30, 40, 50, 45, 40, 35, 30, 25, 20, 15, 10].map((value, i) => (
                          <div 
                            key={i} 
                            className="flex-1 bg-primary/80 rounded-t-sm" 
                            style={{ height: `${value}%` }}
                          ></div>
                        ))}
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>12 AM</span>
                        <span>6 AM</span>
                        <span>12 PM</span>
                        <span>6 PM</span>
                        <span>12 AM</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-sm font-medium">Conversation Metrics</span>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Avg. Conversation Length</span>
                            <span className="font-medium">4.2 min</span>
                          </div>
                          <Progress value={70} className="h-1.5" />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>First Response Time</span>
                            <span className="font-medium">8 sec</span>
                          </div>
                          <Progress value={90} className="h-1.5" />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Resolution Rate</span>
                            <span className="font-medium">92%</span>
                          </div>
                          <Progress value={92} className="h-1.5" />
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>User Satisfaction</span>
                            <span className="font-medium">4.8/5</span>
                          </div>
                          <Progress value={96} className="h-1.5" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-sm font-medium">Agent Performance Comparison</span>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                          <span className="text-xs">Anna</span>
                          <Progress value={88} className="h-1.5 flex-1" />
                          <span className="text-xs font-medium">88%</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                          <span className="text-xs">Emma</span>
                          <Progress value={92} className="h-1.5 flex-1" />
                          <span className="text-xs font-medium">92%</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div>
                          <span className="text-xs">Julia</span>
                          <Progress value={95} className="h-1.5 flex-1" />
                          <span className="text-xs font-medium">95%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="mr-2 h-5 w-5 text-green-500" />
                      Conversation Quality
                    </CardTitle>
                    <CardDescription>
                      Qualitative analysis of conversation effectiveness
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <span className="text-sm font-medium">Top Performing Responses</span>
                        <div className="space-y-2">
                          <div className="p-2 rounded-md bg-muted text-xs">
                            <div className="font-medium mb-1">Medication Explanation</div>
                            <p className="text-muted-foreground">Clear explanation of medication dosage and potential side effects</p>
                            <div className="mt-1 flex justify-between">
                              <Badge variant="outline" className="text-xs">98% helpful</Badge>
                              <span className="text-muted-foreground">Used 128 times</span>
                            </div>
                          </div>
                          
                          <div className="p-2 rounded-md bg-muted text-xs">
                            <div className="font-medium mb-1">Appointment Scheduling</div>
                            <p className="text-muted-foreground">Efficient process for scheduling follow-up appointments</p>
                            <div className="mt-1 flex justify-between">
                              <Badge variant="outline" className="text-xs">95% helpful</Badge>
                              <span className="text-muted-foreground">Used 87 times</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <span className="text-sm font-medium">Areas for Improvement</span>
                        <div className="space-y-2">
                          <div className="p-2 rounded-md border border-amber-200 bg-amber-50 text-xs">
                            <div className="font-medium mb-1 text-amber-800">Insurance Explanations</div>
                            <p className="text-amber-700">Responses about insurance coverage could be more detailed</p>
                            <div className="mt-1">
                              <Badge variant="outline" className="text-xs bg-amber-100 text-amber-800">72% helpful</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
            
            <div className="space-y-6">
              <VoiceControl agentId="current-agent-id" />
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="mr-2 h-5 w-5 text-purple-500" />
                    AI Recommendations
                  </CardTitle>
                  <CardDescription>
                    System-generated insights and suggestions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg border bg-card">
                      <h4 className="font-medium text-sm">Knowledge Base Update Needed</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Recent conversations indicate outdated information about the new diabetes treatment protocol.
                      </p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm" className="text-xs h-7">Update Knowledge Base</Button>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg border bg-card">
                      <h4 className="font-medium text-sm">Response Optimization</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Responses about insurance coverage could be improved with more specific details.
                      </p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm" className="text-xs h-7">View Suggestions</Button>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg border bg-card">
                      <h4 className="font-medium text-sm">Training Opportunity</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Adding more examples of appointment rescheduling scenarios could improve handling.
                      </p>
                      <div className="mt-2">
                        <Button variant="outline" size="sm" className="text-xs h-7">Add Training Data</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                  <CardDescription>
                    Current status of AI systems and integrations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Natural Language Processing</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700">Operational</Badge>
                      </div>
                      <Progress value={100} className="h-1.5 bg-green-100" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Knowledge Base Sync</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700">Operational</Badge>
                      </div>
                      <Progress value={100} className="h-1.5 bg-green-100" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Voice Processing</span>
                        <Badge variant="outline" className="bg-green-50 text-green-700">Operational</Badge>
                      </div>
                      <Progress value={100} className="h-1.5 bg-green-100" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">EHR Integration</span>
                        <Badge variant="outline" className="bg-amber-50 text-amber-700">Partial Outage</Badge>
                      </div>
                      <Progress value={65} className="h-1.5 bg-amber-100" />
                      <p className="text-xs text-muted-foreground">Scheduled maintenance until 2:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default IntelligencePage;
