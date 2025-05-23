
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { ArrowUpRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ChartContainer } from "@/components/ui/chart";

// Platform-wise sample data (only the three active income streams)
const platformRevenue = [
  { name: 'iHealth-Sync', revenue: 42000, expenses: 16500 },
  { name: 'Nurse-Sync', revenue: 34000, expenses: 9600 },
  { name: 'Medic-Sync', revenue: 26500, expenses: 8700 },
];

// Calculate totals (euros) - profit is revenue - expenses, and total profit is sum of per-platform profits
const totalRevenue = platformRevenue.reduce((sum, item) => sum + item.revenue, 0);
const totalExpenses = platformRevenue.reduce((sum, item) => sum + item.expenses, 0);
const totalProfit = totalRevenue - totalExpenses;

const revenueChange = 8.5;
const expenseChange = 4.2;
const profitChange = 12.3;

const monthlyTrend = [
  { name: 'Jan', income: 68000, expenses: 34000 },
  { name: 'Feb', income: 71000, expenses: 33000 },
  { name: 'Mar', income: 76000, expenses: 35500 },
  { name: 'Apr', income: 82000, expenses: 34700 },
];

// Euro formatting helper
const euro = (value: number) =>
  "€ " + value.toLocaleString('de-DE', { minimumFractionDigits: 2 });

export function FinancialOverview() {
  // Per-platform as before, but no Command
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Financial Overview (Euros)</h2>
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
            <div className="text-2xl font-bold">{euro(totalRevenue)}</div>
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
            <div className="text-2xl font-bold">{euro(totalExpenses)}</div>
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
            <div className="text-2xl font-bold">{euro(totalProfit)}</div>
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

      {/* Per-Platform breakdown grid */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Platform Breakdown in Euros</h3>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {platformRevenue.map((platform, idx) => (
            <Card 
              key={platform.name} 
              className="border-2 border-primary/20 hover:scale-105 transition-transform duration-200 hover:shadow-lg"
              style={{
                borderColor:
                  idx === 0 ? '#f6c665' : idx === 1 ? '#d4e157' : '#81d4fa',
                background: "#fff",
              }}
            >
              <CardHeader>
                <CardTitle
                  className="text-base"
                  style={{
                    color:
                      idx === 0 ? '#ea384c' : idx === 1 ? '#388e3c' : '#0288d1',
                  }}
                >
                  {platform.name}
                </CardTitle>
                <CardDescription>
                  <span className="block font-medium">
                    Revenue: <span className="font-semibold text-green-600">
                      {euro(platform.revenue)}
                    </span>
                  </span>
                  <span className="block font-medium">
                    Expenses: <span className="font-semibold text-red-500">
                      {euro(platform.expenses)}
                    </span>
                  </span>
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <Card>
            <CardHeader>
              <CardTitle style={{ color: '#ea384c' }}>Combined Totals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Revenue:</span>
                  <span className="text-green-600 font-semibold">{euro(totalRevenue)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Expenses:</span>
                  <span className="text-red-500 font-semibold">{euro(totalExpenses)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Net Profit:</span>
                  <span className={`font-semibold ${totalProfit >= 0 ? 'text-green-700' : 'text-red-700'}`}>{euro(totalProfit)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Platform (Quarterly, €)</CardTitle>
            <CardDescription>Current quarterly distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer
                config={{
                  revenue: { color: "#0088FE" },
                  expenses: { color: "#FF8042" },
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
                    <Tooltip formatter={(value) => "€" + Number(value).toLocaleString('de-DE')} />
                    <Legend />
                    <Bar dataKey="revenue" name="Revenue (€)" fill="#0088FE" />
                    <Bar dataKey="expenses" name="Expenses (€)" fill="#FF8042" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Monthly Financial Trend (Euros)</CardTitle>
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
                    <Tooltip formatter={(value) => "€" + Number(value).toLocaleString('de-DE')} />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="income" 
                      name="Income (€)" 
                      stroke="#0088FE" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="expenses" 
                      name="Expenses (€)" 
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
