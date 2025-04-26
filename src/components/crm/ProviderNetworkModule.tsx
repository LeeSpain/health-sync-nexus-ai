
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ProviderNetworkModule = () => {
  // Mock data for providers
  const providers = [
    {
      id: "prov_1",
      name: "Dr. Michael Chen",
      platform: "MedicSync",
      specialty: "Cardiology",
      credentials: "MD, FACC",
      availability: "High",
      performanceScore: 4.8,
      patients: 42
    },
    {
      id: "prov_2",
      name: "Nurse Emily Wilson",
      platform: "NurseSync",
      specialty: "Chronic Care",
      credentials: "RN, BSN",
      availability: "Medium",
      performanceScore: 4.9,
      patients: 38
    },
    {
      id: "prov_3",
      name: "Dr. Sarah Johnson",
      platform: "MedicSync",
      specialty: "Internal Medicine",
      credentials: "MD",
      availability: "Low",
      performanceScore: 4.6,
      patients: 56
    },
    {
      id: "prov_4",
      name: "Nurse Thomas Garcia",
      platform: "NurseSync",
      specialty: "Geriatric Care",
      credentials: "RN, MSN",
      availability: "High",
      performanceScore: 4.7,
      patients: 31
    }
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "High": return "text-green-600 bg-green-100";
      case "Medium": return "text-amber-600 bg-amber-100";
      case "Low": return "text-red-600 bg-red-100";
      default: return "text-slate-600 bg-slate-100";
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Provider Network Management</CardTitle>
        <CardDescription>Healthcare provider database connecting NurseSync and MedicSync professionals</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Provider</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Credentials</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Patients</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {providers.map(provider => (
                <TableRow key={provider.id}>
                  <TableCell className="font-medium">{provider.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={
                      provider.platform === "MedicSync" ? "border-blue-500 text-blue-500" : 
                      "border-green-500 text-green-500"
                    }>
                      {provider.platform}
                    </Badge>
                  </TableCell>
                  <TableCell>{provider.specialty}</TableCell>
                  <TableCell>{provider.credentials}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getAvailabilityColor(provider.availability)}>
                      {provider.availability}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="font-medium">{provider.performanceScore}</span>
                      <div className="w-20 bg-gray-200 h-2 rounded-full ml-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${(provider.performanceScore / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{provider.patients}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
