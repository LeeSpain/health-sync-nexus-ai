
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Clock } from "lucide-react";

export const DocumentManagementModule = () => {
  // Mock data for documents
  const documents = [
    {
      id: "doc_1",
      name: "Patient Consent Form",
      type: "Legal",
      platform: "MedicSync",
      lastUpdated: "2025-04-12",
      status: "Active",
      size: "1.2 MB"
    },
    {
      id: "doc_2",
      name: "Device Setup Instructions",
      type: "Technical",
      platform: "iHealth-Sync",
      lastUpdated: "2025-04-10",
      status: "Active",
      size: "3.5 MB"
    },
    {
      id: "doc_3",
      name: "Care Plan Template",
      type: "Clinical",
      platform: "NurseSync",
      lastUpdated: "2025-04-05",
      status: "In Review",
      size: "0.8 MB"
    },
    {
      id: "doc_4",
      name: "Service Agreement",
      type: "Legal",
      platform: "All Platforms",
      lastUpdated: "2025-03-28",
      status: "Active",
      size: "2.1 MB"
    },
    {
      id: "doc_5",
      name: "Compliance Checklist",
      type: "Compliance",
      platform: "All Platforms",
      lastUpdated: "2025-03-15",
      status: "Expired",
      size: "0.5 MB"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "text-green-600 bg-green-100";
      case "In Review": return "text-amber-600 bg-amber-100";
      case "Expired": return "text-red-600 bg-red-100";
      default: return "text-slate-600 bg-slate-100";
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "iHealth-Sync": return "border-purple-500 text-purple-500";
      case "NurseSync": return "border-green-500 text-green-500";
      case "MedicSync": return "border-blue-500 text-blue-500";
      default: return "border-gray-500 text-gray-500";
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Document Management</CardTitle>
            <CardDescription>Centralized repository for all customer-related documents</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Upload New
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Document</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map(doc => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                  {doc.name}
                </TableCell>
                <TableCell>{doc.type}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={getPlatformColor(doc.platform)}>
                    {doc.platform}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {doc.lastUpdated}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(doc.status)}>
                    {doc.status}
                  </Badge>
                </TableCell>
                <TableCell>{doc.size}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
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
