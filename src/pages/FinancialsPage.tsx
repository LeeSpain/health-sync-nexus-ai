
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
import { FinancialOverview } from '@/components/dashboard/FinancialOverview';
import { FinancialAPI } from '@/components/api/FinancialAPI';
import { 
  Calendar, 
  Download, 
  Filter, 
  RefreshCcw, 
  DollarSign, 
  CreditCard, 
  Landmark, 
  ArrowDownToLine 
} from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const FinancialsPage = () => {
  const [timeframe, setTimeframe] = useState("month");
  
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
              <BreadcrumbPage>Financial Management</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Financial Management</h1>
            <p className="text-muted-foreground mt-1">
              Track and manage all platform finances, incoming and outgoing funds. <b>All figures displayed in euros.</b>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="month">
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
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <DollarSign className="h-4 w-4 mr-1 text-green-500" />
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€126,000</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">↑8.5%</span> vs last period
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <CreditCard className="h-4 w-4 mr-1 text-red-500" />
                Total Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€43,000</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-red-500">↑4.2%</span> vs last period
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Landmark className="h-4 w-4 mr-1 text-blue-500" />
                Net Profit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€83,000</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">↑12.3%</span> vs last period
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <FinancialOverview />
          </TabsContent>
          
          <TabsContent value="transactions" className="space-y-4">
            <FinancialAPI />
            
            <div className="flex justify-end">
              <Button className="flex items-center gap-2">
                <ArrowDownToLine className="h-4 w-4" />
                Export Transactions
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Financial Reports</CardTitle>
                <CardDescription>Generate and download financial reports</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="p-4 hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                      </div>
                      <h3 className="font-medium">Revenue Report</h3>
                      <p className="text-xs text-muted-foreground">Detailed breakdown of all revenue sources (in euros)</p>
                    </div>
                  </Card>
                  
                  <Card className="p-4 hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="font-medium">Expense Report</h3>
                      <p className="text-xs text-muted-foreground">Analysis of all expenses by category (in euros)</p>
                    </div>
                  </Card>
                  
                  <Card className="p-4 hover:bg-muted/50 cursor-pointer transition-colors">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Landmark className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="font-medium">Profit & Loss</h3>
                      <p className="text-xs text-muted-foreground">Complete P&amp;L statement (euros)</p>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default FinancialsPage;

