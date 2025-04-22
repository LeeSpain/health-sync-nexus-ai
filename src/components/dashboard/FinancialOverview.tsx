
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Tooltip, 
  Legend 
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ChartContainer } from "@/components/ui/chart";

export function FinancialOverview() {
  // Sample data for the financial overview
  const platformRevenue = [
    { name: 'iHealth-Sync', revenue: 45000, expenses: 15000, profit: 30000 },
    { name: 'Nurse-Sync', revenue: 35000, expenses: 12000, profit: 23000 },
    { name: 'Medic-Sync', revenue: 28000, expenses: 9000, profit: 19000 },
    { name: 'Command', revenue: 18000, expenses: 7000, profit: 11000 },
  ];

  const monthlyTrend = [
    { name: 'Jan', income: 75000, expenses: 42000 },
    { name: 'Feb', income: 82000, expenses: 45000 },
    { name: 'Mar', income: 88000, expenses: 46000 },
    { name: 'Apr', income: 96000, expenses: 48000 },
  ];

  const incomeDistribution = [
    { name: 'Subscriptions', value: 55 },
    { name: 'Service Fees', value: 25 },
    { name: 'Add-ons', value: 15 },
    { name: 'Other', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const totalRevenue = platformRevenue.reduce((sum, item) => sum + item.revenue, 0);
  const totalExpenses = platformRevenue.reduce((sum, item) => sum + item.expenses, 0);
  const totalProfit = platformRevenue.reduce((sum, item) => sum + item.profit, 0);
  
  // Calculate the percentage change (fictional for this example)
  const revenueChange = 8.5;
  const expenseChange = 4.2;
  const profitChange = 12.3;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Financial Overview</h2>
        <Button variant="outline" size="sm">
          View All Transactions
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
            <div className="flex items-center mt-1">
              <Badge className="bg-green-100 text-green-800">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                {revenueChange}%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalExpenses.toLocaleString()}</div>
            <div className="flex items-center mt-1">
              <Badge className="bg-amber-100 text-amber-800">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                {expenseChange}%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Net Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalProfit.toLocaleString()}</div>
            <div className="flex items-center mt-1">
              <Badge className="bg-green-100 text-green-800">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                {profitChange}%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">vs last month</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Platform</CardTitle>
            <CardDescription>Current quarterly distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer
                config={{
                  revenue: { color: "#0088FE" },
                  expenses: { color: "#FF8042" },
                  profit: { color: "#00C49F" },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={platformRevenue}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Legend />
                    <Bar dataKey="revenue" name="Revenue" fill="#0088FE" />
                    <Bar dataKey="expenses" name="Expenses" fill="#FF8042" />
                    <Bar dataKey="profit" name="Profit" fill="#00C49F" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Monthly Financial Trend</CardTitle>
            <CardDescription>Last 4 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer
                config={{
                  income: { color: "#0088FE" },
                  expenses: { color: "#FF8042" },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyTrend}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="income" 
                      name="Income" 
                      stroke="#0088FE" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="expenses" 
                      name="Expenses" 
                      stroke="#FF8042" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
