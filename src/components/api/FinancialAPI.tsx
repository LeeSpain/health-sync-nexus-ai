
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FinancialTransaction {
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

export function FinancialAPI() {
  // Sample financial data for demonstration
  const transactions: FinancialTransaction[] = [
    {
      id: "tr_1234",
      date: "2025-04-20",
      amount: 2500.00,
      currency: "USD",
      type: "income",
      platform: "iHealth-Sync",
      category: "Subscription",
      status: "completed",
      description: "Monthly platform subscription"
    },
    {
      id: "tr_1235",
      date: "2025-04-19",
      amount: 1800.00,
      currency: "USD",
      type: "income",
      platform: "Nurse-Sync",
      category: "Service Fee",
      status: "completed",
      description: "Service integration fee"
    },
    {
      id: "tr_1236",
      date: "2025-04-18",
      amount: 750.00,
      currency: "USD",
      type: "expense",
      platform: "Medic-Sync",
      category: "API Usage",
      status: "completed",
      description: "External API consumption charges"
    },
    {
      id: "tr_1237",
      date: "2025-04-17",
      amount: 1200.00,
      currency: "USD",
      type: "income",
      platform: "iHealth-Sync",
      category: "Add-on",
      status: "pending",
      description: "Premium feature access"
    }
  ];

  // Calculate totals
  const totalIncome = transactions.reduce((acc, t) => t.type === 'income' ? acc + t.amount : acc, 0);
  const totalExpense = transactions.reduce((acc, t) => t.type === 'expense' ? acc + t.amount : acc, 0);
  const totalNet = totalIncome - totalExpense;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Transactions API</CardTitle>
        <CardDescription>
          Track and manage financial data across all GHS platforms
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-mono text-xs">{transaction.id}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.platform}</TableCell>
                <TableCell>
                  <Badge variant={transaction.type === 'income' ? 'default' : 'destructive'}>
                    {transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell className={`font-medium ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'income' ? '+' : '-'}
                  {transaction.currency} {transaction.amount.toFixed(2)}
                </TableCell>
                <TableCell>
                  <Badge variant={
                    transaction.status === 'completed' ? 'outline' : 
                    transaction.status === 'pending' ? 'secondary' : 'destructive'
                  }>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} className="font-bold text-right">Total Income</TableCell>
              <TableCell className="text-green-700 font-semibold">
                +USD {totalIncome.toFixed(2)}
              </TableCell>
              <TableCell />
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} className="font-bold text-right">Total Expenses</TableCell>
              <TableCell className="text-red-700 font-semibold">
                -USD {totalExpense.toFixed(2)}
              </TableCell>
              <TableCell />
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} className="font-bold text-right">Net Total</TableCell>
              <TableCell className={`font-bold ${totalNet >= 0 ? 'text-green-800' : 'text-red-800'}`}>
                {totalNet >= 0 ? "+" : "-"}USD {Math.abs(totalNet).toFixed(2)}
              </TableCell>
              <TableCell />
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
