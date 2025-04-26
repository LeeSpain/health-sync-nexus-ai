
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CircleDollarSign, ArrowUpRight, ArrowDownRight, AlertCircle, CheckCircle2 } from "lucide-react";

export const SubscriptionManagementModule = () => {
  // Mock data for subscriptions
  const subscriptions = [
    {
      id: "sub_1",
      customer: "Sarah Johnson",
      plan: "Premium Health Monitor",
      platform: "iHealth-Sync",
      status: "Active",
      billingCycle: "Monthly",
      amount: 49.99,
      nextBilling: "2025-05-15",
      renewalRisk: "Low"
    },
    {
      id: "sub_2",
      customer: "Robert Thompson",
      plan: "Care Provider Pro",
      platform: "NurseSync",
      status: "Active",
      billingCycle: "Annual",
      amount: 599.00,
      nextBilling: "2025-10-03",
      renewalRisk: "Medium"
    },
    {
      id: "sub_3",
      customer: "Emily Davis",
      plan: "Remote Monitoring Basic",
      platform: "iHealth-Sync",
      status: "Trial",
      billingCycle: "Monthly",
      amount: 0,
      nextBilling: "2025-05-02",
      renewalRisk: "High"
    },
    {
      id: "sub_4",
      customer: "Michael Wilson",
      plan: "Clinical Access Bundle",
      platform: "MedicSync",
      status: "Overdue",
      billingCycle: "Monthly",
      amount: 129.99,
      nextBilling: "2025-04-20",
      renewalRisk: "Critical"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-600";
      case "Trial": return "bg-blue-100 text-blue-600";
      case "Overdue": return "bg-red-100 text-red-600";
      case "Canceled": return "bg-gray-100 text-gray-600";
      default: return "bg-slate-100 text-slate-600";
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "iHealth-Sync": return "text-purple-500";
      case "NurseSync": return "text-green-500";
      case "MedicSync": return "text-blue-500";
      default: return "text-gray-500";
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case "Low": return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "Medium": return <AlertCircle className="h-4 w-4 text-amber-500" />;
      case "High": return <ArrowDownRight className="h-4 w-4 text-orange-500" />;
      case "Critical": return <ArrowUpRight className="h-4 w-4 text-red-500" />;
      default: return null;
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CircleDollarSign className="h-5 w-5 text-muted-foreground" />
          <div>
            <CardTitle>Subscription Management</CardTitle>
            <CardDescription>Unified subscription tracking across platforms</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Billing</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Next Billing</TableHead>
              <TableHead>Renewal Risk</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptions.map(sub => (
              <TableRow key={sub.id}>
                <TableCell className="font-medium">{sub.customer}</TableCell>
                <TableCell>{sub.plan}</TableCell>
                <TableCell className={getPlatformColor(sub.platform)}>{sub.platform}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(sub.status)}>
                    {sub.status}
                  </Badge>
                </TableCell>
                <TableCell>{sub.billingCycle}</TableCell>
                <TableCell className="font-medium">€{sub.amount.toFixed(2)}</TableCell>
                <TableCell>{sub.nextBilling}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {getRiskIcon(sub.renewalRisk)}
                    {sub.renewalRisk}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
