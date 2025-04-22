
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CopyIcon, CheckIcon } from "lucide-react";
import { toast } from "sonner";

export function FinancialAPIDocumentation() {
  const [copiedEndpoint, setCopiedEndpoint] = React.useState<string | null>(null);
  
  const handleCopyCode = (code: string, endpoint: string) => {
    navigator.clipboard.writeText(code);
    setCopiedEndpoint(endpoint);
    toast.success("Code copied to clipboard");
    
    setTimeout(() => {
      setCopiedEndpoint(null);
    }, 2000);
  };
  
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Financial API</CardTitle>
        <CardDescription>
          Endpoints for managing financial transactions across all platforms
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* GET Transactions Endpoint */}
        <div className="pb-6 border-b last:border-0 last:pb-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-100 text-blue-800">GET</Badge>
              <h3 className="font-mono text-base font-medium">/v1/financials/transactions</h3>
            </div>
            <Badge variant="outline" className="text-xs">
              Requires Auth
            </Badge>
          </div>
          
          <p className="text-sm mb-4">Retrieve all financial transactions</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Parameters</h4>
            <div className="bg-muted rounded-md overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Type</th>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-left">Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-background/50">
                    <td className="px-4 py-2 font-mono text-xs">platform</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 text-xs">Filter by platform name</td>
                    <td className="px-4 py-2 text-xs">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">type</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 text-xs">Filter by transaction type (income, expense)</td>
                    <td className="px-4 py-2 text-xs">No</td>
                  </tr>
                  <tr className="bg-background/50">
                    <td className="px-4 py-2 font-mono text-xs">startDate</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 text-xs">Start date for filtering transactions (ISO format)</td>
                    <td className="px-4 py-2 text-xs">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">endDate</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 text-xs">End date for filtering transactions (ISO format)</td>
                    <td className="px-4 py-2 text-xs">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Response Schema</h4>
            <div className="bg-muted p-4 rounded-md font-mono text-xs whitespace-pre">
{`{
  transactions: Array<{
    id: string;
    date: string;
    amount: number;
    currency: string;
    type: 'income' | 'expense';
    platform: string;
    category: string;
    status: 'pending' | 'completed' | 'failed';
    description: string;
  }>,
  meta: {
    total: number;
    totalIncome: number;
    totalExpenses: number;
    netProfit: number;
  }
}`}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Example</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-muted-foreground">Request</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2"
                    onClick={() => handleCopyCode("GET /v1/financials/transactions?platform=ihealth-sync&type=income&startDate=2025-04-01&endDate=2025-04-30", "get-transactions-req")}
                  >
                    {copiedEndpoint === "get-transactions-req" ? (
                      <CheckIcon className="h-3.5 w-3.5" />
                    ) : (
                      <CopyIcon className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
                <div className="bg-black text-white p-3 rounded-md font-mono text-xs whitespace-pre">
                  GET /v1/financials/transactions?platform=ihealth-sync&type=income&startDate=2025-04-01&endDate=2025-04-30
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-muted-foreground">Response</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2"
                    onClick={() => handleCopyCode(`{
  "transactions": [
    {
      "id": "tr_1234",
      "date": "2025-04-20",
      "amount": 2500.00,
      "currency": "USD",
      "type": "income",
      "platform": "iHealth-Sync",
      "category": "Subscription",
      "status": "completed",
      "description": "Monthly platform subscription"
    },
    {
      "id": "tr_1237",
      "date": "2025-04-17",
      "amount": 1200.00,
      "currency": "USD",
      "type": "income",
      "platform": "iHealth-Sync",
      "category": "Add-on",
      "status": "pending",
      "description": "Premium feature access"
    }
  ],
  "meta": {
    "total": 2,
    "totalIncome": 3700.00,
    "totalExpenses": 0,
    "netProfit": 3700.00
  }
}`, "get-transactions-res")}
                  >
                    {copiedEndpoint === "get-transactions-res" ? (
                      <CheckIcon className="h-3.5 w-3.5" />
                    ) : (
                      <CopyIcon className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
                <div className="bg-black text-white p-3 rounded-md font-mono text-xs whitespace-pre">
{`{
  "transactions": [
    {
      "id": "tr_1234",
      "date": "2025-04-20",
      "amount": 2500.00,
      "currency": "USD",
      "type": "income",
      "platform": "iHealth-Sync",
      "category": "Subscription",
      "status": "completed",
      "description": "Monthly platform subscription"
    },
    {
      "id": "tr_1237",
      "date": "2025-04-17",
      "amount": 1200.00,
      "currency": "USD",
      "type": "income",
      "platform": "iHealth-Sync",
      "category": "Add-on",
      "status": "pending",
      "description": "Premium feature access"
    }
  ],
  "meta": {
    "total": 2,
    "totalIncome": 3700.00,
    "totalExpenses": 0,
    "netProfit": 3700.00
  }
}`}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* POST Transaction Endpoint */}
        <div className="pb-6 border-b last:border-0 last:pb-0">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-100 text-green-800">POST</Badge>
              <h3 className="font-mono text-base font-medium">/v1/financials/transactions</h3>
            </div>
            <Badge variant="outline" className="text-xs">
              Requires Auth
            </Badge>
          </div>
          
          <p className="text-sm mb-4">Record a new financial transaction</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Parameters</h4>
            <div className="bg-muted rounded-md overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Type</th>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-left">Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-background/50">
                    <td className="px-4 py-2 font-mono text-xs">amount</td>
                    <td className="px-4 py-2 font-mono text-xs">number</td>
                    <td className="px-4 py-2 text-xs">Transaction amount</td>
                    <td className="px-4 py-2 text-xs">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">currency</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 text-xs">Currency code (e.g., USD)</td>
                    <td className="px-4 py-2 text-xs">Yes</td>
                  </tr>
                  <tr className="bg-background/50">
                    <td className="px-4 py-2 font-mono text-xs">type</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 text-xs">Transaction type (income, expense)</td>
                    <td className="px-4 py-2 text-xs">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">platform</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 text-xs">Platform name</td>
                    <td className="px-4 py-2 text-xs">Yes</td>
                  </tr>
                  <tr className="bg-background/50">
                    <td className="px-4 py-2 font-mono text-xs">category</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 text-xs">Transaction category</td>
                    <td className="px-4 py-2 text-xs">Yes</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">description</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 text-xs">Transaction description</td>
                    <td className="px-4 py-2 text-xs">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Response Schema</h4>
            <div className="bg-muted p-4 rounded-md font-mono text-xs whitespace-pre">
{`{
  success: boolean;
  transaction: {
    id: string;
    date: string;
    amount: number;
    currency: string;
    type: 'income' | 'expense';
    platform: string;
    category: string;
    status: 'pending' | 'completed' | 'failed';
    description: string;
  }
}`}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Example</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-muted-foreground">Request</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2"
                    onClick={() => handleCopyCode(`POST /v1/financials/transactions
{
  "amount": 1500.00,
  "currency": "USD",
  "type": "income",
  "platform": "Nurse-Sync",
  "category": "Service Fee",
  "description": "Integration service fee"
}`, "post-transaction-req")}
                  >
                    {copiedEndpoint === "post-transaction-req" ? (
                      <CheckIcon className="h-3.5 w-3.5" />
                    ) : (
                      <CopyIcon className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
                <div className="bg-black text-white p-3 rounded-md font-mono text-xs whitespace-pre">
{`POST /v1/financials/transactions
{
  "amount": 1500.00,
  "currency": "USD",
  "type": "income",
  "platform": "Nurse-Sync",
  "category": "Service Fee",
  "description": "Integration service fee"
}`}
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-muted-foreground">Response</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2"
                    onClick={() => handleCopyCode(`{
  "success": true,
  "transaction": {
    "id": "tr_1238",
    "date": "2025-04-22",
    "amount": 1500.00,
    "currency": "USD",
    "type": "income",
    "platform": "Nurse-Sync",
    "category": "Service Fee",
    "status": "completed",
    "description": "Integration service fee"
  }
}`, "post-transaction-res")}
                  >
                    {copiedEndpoint === "post-transaction-res" ? (
                      <CheckIcon className="h-3.5 w-3.5" />
                    ) : (
                      <CopyIcon className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
                <div className="bg-black text-white p-3 rounded-md font-mono text-xs whitespace-pre">
{`{
  "success": true,
  "transaction": {
    "id": "tr_1238",
    "date": "2025-04-22",
    "amount": 1500.00,
    "currency": "USD",
    "type": "income",
    "platform": "Nurse-Sync",
    "category": "Service Fee",
    "status": "completed",
    "description": "Integration service fee"
  }
}`}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Financial Summary Endpoint */}
        <div>
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-blue-100 text-blue-800">GET</Badge>
              <h3 className="font-mono text-base font-medium">/v1/financials/summary</h3>
            </div>
            <Badge variant="outline" className="text-xs">
              Requires Auth
            </Badge>
          </div>
          
          <p className="text-sm mb-4">Get financial summary across all platforms</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Parameters</h4>
            <div className="bg-muted rounded-md overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Type</th>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-left">Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-background/50">
                    <td className="px-4 py-2 font-mono text-xs">period</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 text-xs">Time period (day, week, month, quarter, year)</td>
                    <td className="px-4 py-2 text-xs">No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">startDate</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 text-xs">Custom start date (ISO format)</td>
                    <td className="px-4 py-2 text-xs">No</td>
                  </tr>
                  <tr className="bg-background/50">
                    <td className="px-4 py-2 font-mono text-xs">endDate</td>
                    <td className="px-4 py-2 font-mono text-xs">string</td>
                    <td className="px-4 py-2 text-xs">Custom end date (ISO format)</td>
                    <td className="px-4 py-2 text-xs">No</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">Response Schema</h4>
            <div className="bg-muted p-4 rounded-md font-mono text-xs whitespace-pre">
{`{
  summary: {
    totalRevenue: number;
    totalExpenses: number;
    netProfit: number;
    profitMargin: number;
    changeFromPrevious: {
      revenue: number;
      expenses: number;
      profit: number;
    }
  },
  byPlatform: Array<{
    platform: string;
    revenue: number;
    expenses: number;
    profit: number;
  }>,
  byCategory: Array<{
    category: string;
    amount: number;
    percentage: number;
  }>
}`}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-2">Example</h4>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-muted-foreground">Request</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2"
                    onClick={() => handleCopyCode("GET /v1/financials/summary?period=month", "get-summary-req")}
                  >
                    {copiedEndpoint === "get-summary-req" ? (
                      <CheckIcon className="h-3.5 w-3.5" />
                    ) : (
                      <CopyIcon className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
                <div className="bg-black text-white p-3 rounded-md font-mono text-xs whitespace-pre">
                  GET /v1/financials/summary?period=month
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs text-muted-foreground">Response</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 px-2"
                    onClick={() => handleCopyCode(`{
  "summary": {
    "totalRevenue": 126000,
    "totalExpenses": 43000,
    "netProfit": 83000,
    "profitMargin": 65.8,
    "changeFromPrevious": {
      "revenue": 8.5,
      "expenses": 4.2,
      "profit": 12.3
    }
  },
  "byPlatform": [
    {
      "platform": "iHealth-Sync",
      "revenue": 45000,
      "expenses": 15000,
      "profit": 30000
    },
    {
      "platform": "Nurse-Sync",
      "revenue": 35000,
      "expenses": 12000,
      "profit": 23000
    },
    {
      "platform": "Medic-Sync",
      "revenue": 28000,
      "expenses": 9000,
      "profit": 19000
    },
    {
      "platform": "Command",
      "revenue": 18000,
      "expenses": 7000,
      "profit": 11000
    }
  ],
  "byCategory": [
    {
      "category": "Subscriptions",
      "amount": 69300,
      "percentage": 55
    },
    {
      "category": "Service Fees",
      "amount": 31500,
      "percentage": 25
    },
    {
      "category": "Add-ons",
      "amount": 18900,
      "percentage": 15
    },
    {
      "category": "Other",
      "amount": 6300,
      "percentage": 5
    }
  ]
}`, "get-summary-res")}
                  >
                    {copiedEndpoint === "get-summary-res" ? (
                      <CheckIcon className="h-3.5 w-3.5" />
                    ) : (
                      <CopyIcon className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
                <div className="bg-black text-white p-3 rounded-md font-mono text-xs whitespace-pre">
{`{
  "summary": {
    "totalRevenue": 126000,
    "totalExpenses": 43000,
    "netProfit": 83000,
    "profitMargin": 65.8,
    "changeFromPrevious": {
      "revenue": 8.5,
      "expenses": 4.2,
      "profit": 12.3
    }
  },
  "byPlatform": [
    {
      "platform": "iHealth-Sync",
      "revenue": 45000,
      "expenses": 15000,
      "profit": 30000
    },
    {
      "platform": "Nurse-Sync",
      "revenue": 35000,
      "expenses": 12000,
      "profit": 23000
    },
    {
      "platform": "Medic-Sync",
      "revenue": 28000,
      "expenses": 9000,
      "profit": 19000
    },
    {
      "platform": "Command",
      "revenue": 18000,
      "expenses": 7000,
      "profit": 11000
    }
  ],
  "byCategory": [
    {
      "category": "Subscriptions",
      "amount": 69300,
      "percentage": 55
    },
    {
      "category": "Service Fees",
      "amount": 31500,
      "percentage": 25
    },
    {
      "category": "Add-ons",
      "amount": 18900,
      "percentage": 15
    },
    {
      "category": "Other",
      "amount": 6300,
      "percentage": 5
    }
  ]
}`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
