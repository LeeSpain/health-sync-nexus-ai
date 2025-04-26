import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus, Users, Calendar, Package, BarChart3, FileText, MessageSquare } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';

export const ImplementationPlanContent: React.FC = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for the CRM
  const customers = [
    { 
      id: 1, 
      name: "Oak Valley Hospital", 
      type: "Healthcare Provider", 
      status: "Active", 
      subscription: "Enterprise",
      lastContact: "2025-04-24",
      avatar: "OV"
    },
    { 
      id: 2, 
      name: "MedConnect Group", 
      type: "Healthcare Network", 
      status: "Active", 
      subscription: "Professional",
      lastContact: "2025-04-22",
      avatar: "MC"
    },
    { 
      id: 3, 
      name: "Sunshine Elderly Care", 
      type: "Senior Care Facility", 
      status: "Pending", 
      subscription: "Standard",
      lastContact: "2025-04-20",
      avatar: "SE"
    },
    { 
      id: 4, 
      name: "HealthFirst Clinic", 
      type: "Private Practice", 
      status: "Inactive", 
      subscription: "Basic",
      lastContact: "2025-04-15",
      avatar: "HC"
    },
    { 
      id: 5, 
      name: "Westside Medical Center", 
      type: "Medical Center", 
      status: "Active", 
      subscription: "Enterprise",
      lastContact: "2025-04-23",
      avatar: "WM"
    }
  ];
  
  const recentActivities = [
    { id: 1, type: "Call", customer: "Oak Valley Hospital", date: "Today, 10:45 AM", description: "Discussion about upgrading to Enterprise plan" },
    { id: 2, type: "Email", customer: "MedConnect Group", date: "Yesterday", description: "Sent follow-up on integration requirements" },
    { id: 3, type: "Meeting", customer: "Sunshine Elderly Care", date: "Apr 24, 2025", description: "Demo of new features" },
    { id: 4, type: "Task", customer: "HealthFirst Clinic", date: "Apr 22, 2025", description: "Prepare renewal proposal" },
    { id: 5, type: "Note", customer: "Westside Medical Center", date: "Apr 21, 2025", description: "Added contact information for IT department" }
  ];
  
  const upcomingEvents = [
    { id: 1, title: "Demo: New Features", date: "Apr 28, 2025", time: "10:00 AM", customer: "Oak Valley Hospital" },
    { id: 2, title: "Contract Renewal", date: "Apr 29, 2025", time: "2:30 PM", customer: "MedConnect Group" },
    { id: 3, title: "Training Session", date: "May 2, 2025", time: "11:00 AM", customer: "Sunshine Elderly Care" }
  ];
  
  // Translation object
  const translations = {
    en: {
      title: "GHS Command CRM",
      overview: "Dashboard Overview",
      search: "Search customers, contacts, or activities...",
      customers: "Customers",
      addCustomer: "Add Customer",
      activities: "Recent Activities",
      calendar: "Upcoming Events",
      analytics: "Performance Metrics",
      newCustomers: "New Customers",
      retention: "Customer Retention",
      revenue: "Monthly Revenue",
      tasks: "Active Tasks",
      viewAll: "View All",
      customerTypes: "Customer Types",
      subscriptionDistribution: "Subscription Distribution",
      patientMonitoring: "Patient Monitoring",
      deviceManagement: "Device Management",
      communications: "Communications",
      documentation: "Documentation"
    },
    es: {
      title: "CRM de GHS Command",
      overview: "Vista General del Panel",
      search: "Buscar clientes, contactos o actividades...",
      customers: "Clientes",
      addCustomer: "Añadir Cliente",
      activities: "Actividades Recientes",
      calendar: "Próximos Eventos",
      analytics: "Métricas de Rendimiento",
      newCustomers: "Nuevos Clientes",
      retention: "Retención de Clientes",
      revenue: "Ingresos Mensuales",
      tasks: "Tareas Activas",
      viewAll: "Ver Todo",
      customerTypes: "Tipos de Clientes",
      subscriptionDistribution: "Distribución de Suscripciones",
      patientMonitoring: "Monitoreo de Pacientes",
      deviceManagement: "Gestión de Dispositivos",
      communications: "Comunicaciones",
      documentation: "Documentación"
    },
    nl: {
      title: "GHS Command CRM",
      overview: "Dashboard Overzicht",
      search: "Zoek klanten, contacten of activiteiten...",
      customers: "Klanten",
      addCustomer: "Klant Toevoegen",
      activities: "Recente Activiteiten",
      calendar: "Aankomende Evenementen",
      analytics: "Prestatiemetrieken",
      newCustomers: "Nieuwe Klanten",
      retention: "Klantbehoud",
      revenue: "Maandelijkse Omzet",
      tasks: "Actieve Taken",
      viewAll: "Alles Bekijken",
      customerTypes: "Klanttypes",
      subscriptionDistribution: "Abonnementsverdeling",
      patientMonitoring: "Patiëntmonitoring",
      deviceManagement: "Apparaatbeheer",
      communications: "Communicatie",
      documentation: "Documentatie"
    }
  };

  // Get translations based on current language
  const t = translations[language] || translations.en;
  
  // Filter customers based on search query
  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-6">
      {/* Header with search */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold">{t.title}</h2>
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t.search}
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      {/* Main CRM Tabs */}
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
          <TabsTrigger value="dashboard">{t.overview}</TabsTrigger>
          <TabsTrigger value="customers">{t.customers}</TabsTrigger>
          <TabsTrigger value="patient-monitoring">{t.patientMonitoring}</TabsTrigger>
          <TabsTrigger value="device-management">{t.deviceManagement}</TabsTrigger>
          <TabsTrigger value="communications">{t.communications}</TabsTrigger>
          <TabsTrigger value="documentation">{t.documentation}</TabsTrigger>
        </TabsList>
        
        {/* Dashboard Tab */}
        <TabsContent value="dashboard" className="space-y-6 mt-6">
          {/* Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{t.newCustomers}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12</div>
                <p className="text-xs text-muted-foreground">+8% from last month</p>
                <Progress value={65} className="h-1 mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{t.retention}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">93%</div>
                <p className="text-xs text-muted-foreground">+2% from last month</p>
                <Progress value={93} className="h-1 mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{t.revenue}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€428,500</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
                <Progress value={75} className="h-1 mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">{t.tasks}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">8 due today</p>
                <Progress value={40} className="h-1 mt-2" />
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Activities and Calendar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="md:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-medium">{t.activities}</CardTitle>
                <Button variant="ghost" size="sm">{t.viewAll}</Button>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[320px]">
                  <div className="p-4 pt-0">
                    {recentActivities.map(activity => (
                      <div key={activity.id} className="flex items-start gap-4 py-3 border-t">
                        <div>
                          <Badge variant="outline" className="font-normal">
                            {activity.type}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.customer}</p>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                        </div>
                        <div className="text-xs text-muted-foreground whitespace-nowrap">
                          {activity.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-medium">{t.calendar}</CardTitle>
                <Button variant="ghost" size="sm">{t.viewAll}</Button>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[320px]">
                  <div className="p-4 pt-0">
                    {upcomingEvents.map(event => (
                      <div key={event.id} className="flex items-start gap-4 py-3 border-t">
                        <div className="flex-none bg-primary/10 text-primary rounded-md p-2 text-center min-w-[60px]">
                          <div className="text-xs font-medium">{event.date.split(' ')[0]}</div>
                          <div className="text-sm">{event.time}</div>
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-muted-foreground">{event.customer}</p>
                        </div>
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Customers Tab */}
        <TabsContent value="customers" className="space-y-6 mt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{t.customers}</h3>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              {t.addCustomer}
            </Button>
          </div>
          
          <div className="grid gap-4">
            {filteredCustomers.map(customer => (
              <Card key={customer.id} className="overflow-hidden">
                <div className="flex items-center p-4">
                  <Avatar className="h-9 w-9 mr-4">
                    <AvatarFallback>{customer.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 grid gap-1">
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{customer.name}</div>
                      <Badge 
                        variant={customer.status === "Active" ? "default" : 
                                customer.status === "Pending" ? "secondary" : "outline"}
                      >
                        {customer.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center justify-between">
                      <span>{customer.type}</span>
                      <span>Last contact: {customer.lastContact}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="ml-2">View</Button>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                <CardFooter className="bg-muted/50 p-2 text-xs flex justify-between">
                  <span>Subscription: {customer.subscription}</span>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3" />
                    <Calendar className="h-3 w-3" />
                    <Package className="h-3 w-3" />
                    <BarChart3 className="h-3 w-3" />
                    <FileText className="h-3 w-3" />
                    <MessageSquare className="h-3 w-3" />
                  </div>
                </CardFooter>
              </Card>
            ))}
            
            {filteredCustomers.length === 0 && (
              <div className="text-center py-10">
                <p className="text-muted-foreground">No customers found matching your search</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        {/* Other Tabs - These would be fully implemented in a complete CRM, showing stubs for now */}
        <TabsContent value="patient-monitoring" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.patientMonitoring}</CardTitle>
              <CardDescription>Monitor patient data across all connected devices</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Patient monitoring dashboard would be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="device-management" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.deviceManagement}</CardTitle>
              <CardDescription>Manage all connected healthcare devices</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Device management interface would be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="communications" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.communications}</CardTitle>
              <CardDescription>Manage all customer communications</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Communications dashboard would be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="documentation" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.documentation}</CardTitle>
              <CardDescription>Access and manage customer documentation</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <p className="text-muted-foreground">Documentation management would be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
