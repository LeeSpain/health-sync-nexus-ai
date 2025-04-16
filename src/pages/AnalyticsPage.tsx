
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
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  Legend 
} from 'recharts';
import { Download, Calendar, Filter, RefreshCcw, Users, MessageSquare, GitBranch, Activity } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Sample data for charts
const conversationData = [
  { name: 'Monday', Anna: 65, Emma: 42, Julia: 13, total: 120 },
  { name: 'Tuesday', Anna: 59, Emma: 40, Julia: 15, total: 114 },
  { name: 'Wednesday', Anna: 80, Emma: 48, Julia: 17, total: 145 },
  { name: 'Thursday', Anna: 81, Emma: 41, Julia: 19, total: 141 },
  { name: 'Friday', Anna: 56, Emma: 37, Julia: 11, total: 104 },
  { name: 'Saturday', Anna: 55, Emma: 30, Julia: 5, total: 90 },
  { name: 'Sunday', Anna: 40, Emma: 22, Julia: 3, total: 65 }
];

const escalationData = [
  { name: 'Technical', value: 35 },
  { name: 'Medical', value: 25 },
  { name: 'Timeout', value: 20 },
  { name: 'Sentiment', value: 15 },
  { name: 'Manual', value: 5 }
];

const agentPerformanceData = [
  { name: 'Anna', resolution: 82, satisfaction: 78, response: 92 },
  { name: 'Emma', resolution: 89, satisfaction: 85, response: 87 },
  { name: 'Julia', resolution: 95, satisfaction: 90, response: 81 }
];

// Colors for pie chart
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE'];

const AnalyticsPage = () => {
  const [timeframe, setTimeframe] = useState("week");
  
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
              <BreadcrumbPage>Analytics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-muted-foreground mt-1">
              Monitor system performance metrics, agent statistics, and user engagement.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="week">
              <SelectTrigger className="w-36">
                <Calendar className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Last 24 Hours</SelectItem>
                <SelectItem value="week">Last 7 Days</SelectItem>
                <SelectItem value="month">Last 30 Days</SelectItem>
                <SelectItem value="quarter">Last Quarter</SelectItem>
                <SelectItem value="year">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <RefreshCcw className="h-4 w-4" />
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-5">
              <div>
                <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
                <CardDescription>Last 7 days</CardDescription>
              </div>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">779</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">↑12%</span> vs previous period
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-5">
              <div>
                <CardTitle className="text-sm font-medium">Escalation Rate</CardTitle>
                <CardDescription>Last 7 days</CardDescription>
              </div>
              <GitBranch className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23.4%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-rose-500 font-medium">↑2.1%</span> vs previous period
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between py-5">
              <div>
                <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
                <CardDescription>Last 7 days</CardDescription>
              </div>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87.2%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-emerald-500 font-medium">↑1.3%</span> vs previous period
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="conversations" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="conversations">Conversations</TabsTrigger>
            <TabsTrigger value="escalations">Escalations</TabsTrigger>
            <TabsTrigger value="performance">Agent Performance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="conversations" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Conversation Volume</CardTitle>
                <CardDescription>Total conversations handled by each agent over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ChartContainer 
                    config={{
                      Anna: { color: "#8884d8" },
                      Emma: { color: "#82ca9d" },
                      Julia: { color: "#ffc658" },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={conversationData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar dataKey="Anna" stackId="a" fill="#8884d8" />
                        <Bar dataKey="Emma" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="Julia" stackId="a" fill="#ffc658" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <div className="flex justify-between w-full text-sm">
                  <div>
                    <p className="font-medium">Total Conversations</p>
                    <p className="text-2xl font-bold">779</p>
                  </div>
                  <div>
                    <p className="font-medium">Average per Day</p>
                    <p className="text-2xl font-bold">111.3</p>
                  </div>
                  <div>
                    <p className="font-medium">Peak Day</p>
                    <p className="text-2xl font-bold">Wednesday</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="escalations" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Escalation Reasons</CardTitle>
                  <CardDescription>Distribution of escalation triggers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartContainer
                      config={{
                        Technical: { color: "#8884d8" },
                        Medical: { color: "#82ca9d" },
                        Timeout: { color: "#ffc658" },
                        Sentiment: { color: "#ff8042" },
                        Manual: { color: "#0088FE" },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={escalationData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {escalationData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <RechartsTooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Escalation Trend</CardTitle>
                  <CardDescription>Weekly escalation volume over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ChartContainer
                      config={{
                        "Anna → Emma": { color: "#8884d8" },
                        "Emma → Julia": { color: "#82ca9d" },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={[
                            { name: 'Week 1', 'Anna → Emma': 24, 'Emma → Julia': 8 },
                            { name: 'Week 2', 'Anna → Emma': 28, 'Emma → Julia': 10 },
                            { name: 'Week 3', 'Anna → Emma': 26, 'Emma → Julia': 7 },
                            { name: 'Week 4', 'Anna → Emma': 22, 'Emma → Julia': 5 },
                            { name: 'Week 5', 'Anna → Emma': 30, 'Emma → Julia': 12 },
                            { name: 'Week 6', 'Anna → Emma': 25, 'Emma → Julia': 9 }
                          ]}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <RechartsTooltip />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="Anna → Emma" 
                            stroke="#8884d8" 
                            activeDot={{ r: 8 }} 
                          />
                          <Line 
                            type="monotone" 
                            dataKey="Emma → Julia" 
                            stroke="#82ca9d" 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Agent Performance Metrics</CardTitle>
                <CardDescription>Comparing key performance indicators across agents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[350px]">
                  <ChartContainer
                    config={{
                      resolution: { color: "#8884d8" },
                      satisfaction: { color: "#82ca9d" },
                      response: { color: "#ffc658" },
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={agentPerformanceData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Bar dataKey="resolution" name="Resolution Rate %" fill="#8884d8" />
                        <Bar dataKey="satisfaction" name="User Satisfaction %" fill="#82ca9d" />
                        <Bar dataKey="response" name="Response Time %" fill="#ffc658" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <div className="w-full text-sm">
                  <p className="text-muted-foreground mb-2">Performance Indicators (higher is better)</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#8884d8] mr-2"></div>
                        <span className="text-xs">Resolution Rate</span>
                      </div>
                      <p className="text-xs text-muted-foreground">% of conversations successfully resolved</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#82ca9d] mr-2"></div>
                        <span className="text-xs">User Satisfaction</span>
                      </div>
                      <p className="text-xs text-muted-foreground">% positive feedback from users</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#ffc658] mr-2"></div>
                        <span className="text-xs">Response Time</span>
                      </div>
                      <p className="text-xs text-muted-foreground">% of responses within target time</p>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

// Helper component for custom tooltips
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded p-2 shadow-md">
        <p className="font-medium">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
        <p className="font-medium mt-1">
          Total: {payload[0].payload.total}
        </p>
      </div>
    );
  }

  return null;
};

// Helper function for custom pie chart labels
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 1.1;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="#888" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize={12}
    >
      {`${name} (${(percent * 100).toFixed(0)}%)`}
    </text>
  );
};

export default AnalyticsPage;
