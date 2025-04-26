
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '@/hooks/useLanguage';

export const ImplementationPlanContent: React.FC = () => {
  const { language } = useLanguage();

  // Multi-language content
  const content = {
    en: {
      executiveSummary: {
        title: "Executive Summary",
        content: "This document outlines the comprehensive plan for implementing a state-of-the-art Customer Relationship Management (CRM) system integrated with the existing GHS Command Console. The CRM will serve as the business nerve center connecting the entire healthcare ecosystem (iHealth-Sync, NurseSync, and MedicSync), enabling unified customer management, enhanced business intelligence, and optimized operations across all platforms."
      },
      projectScope: {
        title: "Project Scope",
        content: "The GHS Command CRM will extend the current command console with comprehensive customer management capabilities while maintaining consistent design language, multi-language support, and seamless integration with existing components including the Isabella AI assistant."
      },
      implementationApproach: {
        title: "Implementation Approach",
        content: "The project will be executed with specific functional capabilities while building toward the complete CRM ecosystem."
      },
      technologyStack: {
        title: "Technology Stack",
        items: [
          "Frontend: React with TypeScript, using existing UI component library",
          "Backend: Extension of current API architecture with new CRM endpoints",
          "Database: Enhanced data schema maintaining relationships with existing platforms",
          "Authentication: Leveraging existing role-based access control system",
          "AI Integration: Extended capabilities for Isabella to handle CRM-specific commands",
          "Analytics: Integration with existing analytics framework"
        ]
      },
      coreInfrastructure: {
        title: "1. Core CRM Infrastructure",
        sections: [
          {
            title: "Customer Profiles Module",
            items: [
              "360° view of customer information across all platforms",
              "Activity timeline showing interactions across all touchpoints",
              "Device usage statistics from iHealth-Sync",
              "Care provider relationships from NurseSync and MedicSync",
              "Subscription status and billing information",
              "Family/caregiver network visualization",
              "Custom fields and tagging capabilities",
              "Notes and internal communication tools"
            ]
          },
          {
            title: "Provider Network Management",
            items: [
              "Healthcare provider database connecting NurseSync and MedicSync professionals",
              "Credential verification and tracking",
              "Specialty and expertise management",
              "Availability and capacity tracking",
              "Performance metrics and quality scores",
              "Compensation and incentive management",
              "Training and development tracking"
            ]
          },
          {
            title: "Relationship Management",
            items: [
              "Family/caregiver network mapping",
              "Provider-patient relationship history",
              "Referral tracking and attribution",
              "Network visualization tools",
              "Connection strength analysis",
              "Communication preference management",
              "Relationship health scoring"
            ]
          },
          {
            title: "Document Management",
            items: [
              "Centralized repository for all customer-related documents",
              "Contract and agreement management",
              "Compliance documentation and audit trails",
              "Template management for common documents",
              "Version control and approval workflows",
              "Secure sharing capabilities",
              "OCR for document digitization"
            ]
          }
        ]
      },
      businessOperations: {
        title: "2. Business Operations",
        sections: [
          {
            title: "Subscription Management",
            items: [
              "Unified subscription tracking across platforms",
              "Billing and payment processing",
              "Subscription lifecycle management",
              "Upgrade/downgrade workflows",
              "Cancellation prevention tools",
              "Revenue recognition and reporting",
              "Bundle and package management"
            ]
          },
          {
            title: "Calendar System",
            items: [
              "Cross-platform appointment calendar",
              "Color-coding for different platforms and event types",
              "Provider availability management",
              "Scheduling conflict resolution",
              "Appointment reminder automation",
              "Resource allocation management",
              "Calendar export and sync capabilities",
              "AI integration for scheduling assistance"
            ]
          },
          {
            title: "Inventory and Supply Chain",
            items: [
              "Device inventory management",
              "Order processing and fulfillment",
              "Supply chain visibility",
              "Return and warranty management",
              "Inventory forecasting",
              "Warehouse and distribution management",
              "Device assignment and tracking",
              "Maintenance and servicing schedules"
            ]
          },
          {
            title: "Marketing Automation",
            items: [
              "Campaign management across platforms",
              "Customer segmentation tools",
              "Email and notification templates",
              "Campaign performance analytics",
              "A/B testing capabilities",
              "Drip campaign automation",
              "Cross-selling and upselling tools",
              "Personalization engine"
            ]
          }
        ]
      },
      advancedFeatures: {
        title: "3. Advanced Features",
        sections: [
          {
            title: "Customer Journey Mapping",
            items: [
              "Visual journey mapping across platforms",
              "Milestone tracking and celebration",
              "Conversion funnel analysis",
              "Drop-off point identification",
              "Journey optimization tools",
              "Comparison to ideal journey paths",
              "Behavioral pattern recognition",
              "Next-best-action recommendations"
            ]
          },
          {
            title: "Service Level Management",
            items: [
              "SLA tracking for support and clinical responses",
              "Performance metrics and dashboards",
              "Escalation rule management",
              "Quality assurance monitoring",
              "Response time optimization",
              "Workload balancing tools",
              "Compliance with regulatory requirements",
              "Service improvement tracking"
            ]
          },
          {
            title: "Feedback and Survey System",
            items: [
              "NPS and CSAT tracking across platforms",
              "Customizable survey creation",
              "Sentiment analysis on responses",
              "Improvement tracking dashboard",
              "Automatic follow-up workflows",
              "Feedback categorization and tagging",
              "Trend analysis over time",
              "Competitive benchmarking"
            ]
          },
          {
            title: "Onboarding Workflows",
            items: [
              "Customer onboarding process management",
              "Device setup tracking",
              "Training completion monitoring",
              "Welcome sequence automation",
              "Milestone achievement tracking",
              "Educational content recommendations",
              "Progress visualization",
              "Optimization based on completion rates"
            ]
          }
        ]
      },
      ecosystemIntegration: {
        title: "4. Ecosystem Integration",
        sections: [
          {
            title: "Partner Portal",
            items: [
              "Interface for external partners and service providers",
              "Revenue sharing and commission tracking",
              "Partner performance analytics",
              "Co-marketing campaign management",
              "Lead distribution system",
              "Partner tier management",
              "Certification and training tools",
              "Document sharing and collaboration"
            ]
          },
          {
            title: "Knowledge Base Integration",
            items: [
              "Customer-facing and internal knowledge management",
              "FAQ creation and management",
              "Usage analytics on knowledge content",
              "Content recommendation engine",
              "Search optimization",
              "Content lifecycle management",
              "Translation and localization tools",
              "Feedback collection on article usefulness"
            ]
          },
          {
            title: "Compliance Management",
            items: [
              "Regulatory compliance tracking",
              "Certification and licensing management",
              "Audit preparation tools",
              "Incident reporting and resolution",
              "Compliance training tracking",
              "Change management for regulations",
              "Risk assessment framework",
              "Compliance reporting"
            ]
          },
          {
            title: "Mobile Application",
            items: [
              "Mobile version of the CRM for field operations",
              "Push notifications for critical events",
              "Offline capability for remote work",
              "Mobile-specific workflow optimizations",
              "Device-appropriate visualizations",
              "Secure authentication",
              "Camera integration for document capture",
              "Location-based features"
            ]
          }
        ]
      },
      intelligenceLayer: {
        title: "5. Intelligence Layer",
        sections: [
          {
            title: "Business Intelligence Dashboard",
            items: [
              "Cross-platform revenue analytics",
              "Customer acquisition and retention metrics",
              "Provider network performance analytics",
              "Device usage and sales analytics",
              "Market expansion visualization",
              "AI-generated business insights",
              "Customizable report builder",
              "Scheduled reporting and alerts"
            ]
          },
          {
            title: "AI Integration",
            items: [
              "Enhanced Isabella commands for CRM functions",
              "Natural language querying of business data",
              "AI-powered recommendations for customer engagement",
              "Predictive analytics for churn prevention",
              "Smart segmentation of customer base",
              "Automated data enrichment",
              "Sentiment detection in communications",
              "Anomaly detection in business metrics"
            ]
          },
          {
            title: "Predictive Analytics",
            items: [
              "Churn prediction and prevention",
              "Lifetime value forecasting",
              "Resource needs projection",
              "Market trend analysis",
              "Pricing optimization",
              "Provider capacity planning",
              "Device failure prediction",
              "Cash flow forecasting"
            ]
          }
        ]
      },
      integrationRequirements: {
        title: "Integration Requirements",
        sections: [
          {
            title: "Platform Integrations",
            items: [
              "iHealth-Sync: Device data, user health metrics, family networks",
              "NurseSync: Provider profiles, care records, consultation data",
              "MedicSync: Clinical records, physician data, treatment plans",
              "Isabella AI: Command processing, natural language understanding",
              "Financial System: Billing data, revenue metrics, expense tracking",
              "Analytics System: Existing metrics, reporting structures"
            ]
          },
          {
            title: "External Integrations",
            items: [
              "Payment processing systems",
              "Email and communication platforms",
              "External calendar systems (Google, Outlook)",
              "Document storage solutions",
              "Video conferencing tools",
              "SMS and notification services"
            ]
          }
        ]
      },
      technicalConsiderations: {
        title: "Technical Considerations",
        sections: [
          {
            title: "Security Requirements",
            items: [
              "HIPAA compliance throughout all components",
              "GDPR and regional data protection compliance",
              "Role-based access control for all CRM functions",
              "Audit logging of all sensitive operations",
              "Data encryption at rest and in transit",
              "Two-factor authentication for sensitive operations"
            ]
          },
          {
            title: "Performance Requirements",
            items: [
              "Response time under 500ms for standard operations",
              "Support for concurrent users matching platform usage",
              "Scalability to handle projected growth over 5 years",
              "Graceful degradation under high load",
              "Efficient data synchronization across platforms"
            ]
          },
          {
            title: "Localization Requirements",
            items: [
              "Full support for English, Spanish, and Dutch",
              "Currency handling in euros with regional formatting",
              "Date and time formatting appropriate to locale",
              "Culturally appropriate content adaptation",
              "Expandable to additional languages"
            ]
          },
          {
            title: "User Interface Guidelines",
            items: [
              "Maintain existing GHS Command Console design language",
              "Consistent typography, color scheme, and component design",
              "Card-based layout for main dashboards",
              "Responsive design supporting all device sizes",
              "Accessibility compliance (WCAG 2.1 AA)",
              "Consistent iconography and visual hierarchy",
              "Dark/light mode support matching existing system"
            ]
          }
        ]
      },
      implementation: {
        title: "Implementation Strategy",
        sections: [
          {
            title: "Testing Strategy",
            items: [
              "Unit testing of all components",
              "Integration testing of platform connections",
              "User acceptance testing with stakeholders",
              "Performance testing under anticipated load",
              "Security penetration testing",
              "Accessibility compliance testing",
              "Cross-browser and device compatibility testing"
            ]
          },
          {
            title: "Training and Documentation",
            items: [
              "Administrator training materials",
              "End-user documentation",
              "Technical integration guides",
              "API documentation",
              "Video tutorials for key workflows",
              "Regular feature update communications"
            ]
          },
          {
            title: "Post-Implementation Support",
            items: [
              "3-month hypercare period following final phase",
              "Scheduled performance reviews",
              "User feedback collection and analysis",
              "Continuous improvement recommendations",
              "Regular feature enhancements based on usage data"
            ]
          },
          {
            title: "Success Metrics",
            items: [
              "Increase in cross-platform user journeys",
              "Provider satisfaction and retention improvements",
              "Reduction in administrative overhead",
              "Improved conversion rates between platforms",
              "Enhanced customer retention metrics",
              "Revenue growth from cross-platform opportunities",
              "Reduction in response times for customer issues",
              "Improved data accuracy and completeness"
            ]
          }
        ]
      }
    },
    es: {
      executiveSummary: {
        title: "Resumen Ejecutivo",
        content: "Este documento describe el plan integral para implementar un sistema de Gestión de Relaciones con el Cliente (CRM) de última generación integrado con la Consola de Comando GHS existente. El CRM servirá como centro neurálgico empresarial que conecta todo el ecosistema de atención médica (iHealth-Sync, NurseSync y MedicSync), permitiendo una gestión unificada de clientes, inteligencia empresarial mejorada y operaciones optimizadas en todas las plataformas."
      },
      projectScope: {
        title: "Alcance del Proyecto",
        content: "El CRM de GHS Command ampliará la consola de comando actual con capacidades integrales de gestión de clientes, manteniendo un lenguaje de diseño consistente, soporte multilingüe e integración perfecta con los componentes existentes, incluida la asistente de IA Isabella."
      },
      implementationApproach: {
        title: "Enfoque de Implementación",
        content: "El proyecto se ejecutará con capacidades funcionales específicas mientras se construye hacia el ecosistema CRM completo."
      },
      technologyStack: {
        title: "Stack Tecnológico",
        items: [
          "Frontend: React con TypeScript, utilizando la biblioteca de componentes UI existente",
          "Backend: Extensión de la arquitectura API actual con nuevos endpoints CRM",
          "Base de datos: Esquema de datos mejorado manteniendo relaciones con plataformas existentes",
          "Autenticación: Aprovechamiento del sistema de control de acceso basado en roles existente",
          "Integración de IA: Capacidades extendidas para Isabella para manejar comandos específicos de CRM",
          "Analítica: Integración con el marco de análisis existente"
        ]
      },
      // Continue with Spanish translations for all sections
      coreInfrastructure: {
        title: "1. Infraestructura Básica del CRM",
        // Content similar to English but translated to Spanish
        sections: [
          {
            title: "Módulo de Perfiles de Cliente",
            items: [
              "Vista de 360° de información del cliente en todas las plataformas",
              "Línea de tiempo de actividades mostrando interacciones en todos los puntos de contacto",
              "Estadísticas de uso de dispositivos de iHealth-Sync",
              "Relaciones con proveedores de atención de NurseSync y MedicSync",
              "Estado de suscripción e información de facturación",
              "Visualización de red familiar/cuidador",
              "Capacidades de campos personalizados y etiquetado",
              "Herramientas de notas y comunicación interna"
            ]
          },
          // More sections translated...
        ]
      },
      // Continue with all other section translations...
    },
    nl: {
      executiveSummary: {
        title: "Samenvatting voor Leidinggevenden",
        content: "Dit document schetst het uitgebreide plan voor de implementatie van een state-of-the-art Customer Relationship Management (CRM) systeem geïntegreerd met de bestaande GHS Command Console. Het CRM zal dienen als het zakelijke zenuwcentrum dat het gehele zorgecosysteem verbindt (iHealth-Sync, NurseSync en MedicSync), waardoor uniforme klantbeheer, verbeterde business intelligence en geoptimaliseerde activiteiten over alle platforms mogelijk worden."
      },
      projectScope: {
        title: "Projectomvang",
        content: "De GHS Command CRM zal de huidige commandoconsole uitbreiden met uitgebreide klantbeheermogelijkheden, terwijl een consistente ontwerptaal, meertalige ondersteuning en naadloze integratie met bestaande componenten, waaronder de Isabella AI-assistent, behouden blijven."
      },
      implementationApproach: {
        title: "Implementatiebenadering",
        content: "Het project zal worden uitgevoerd met specifieke functionele mogelijkheden terwijl wordt gebouwd aan het complete CRM-ecosysteem."
      },
      technologyStack: {
        title: "Technologie Stack",
        items: [
          "Frontend: React met TypeScript, gebruik van bestaande UI-componentenbibliotheek",
          "Backend: Uitbreiding van huidige API-architectuur met nieuwe CRM-endpoints",
          "Database: Verbeterd dataschema met behoud van relaties met bestaande platforms",
          "Authenticatie: Gebruikmakend van bestaand op rollen gebaseerd toegangscontrolesysteem",
          "AI-integratie: Uitgebreide mogelijkheden voor Isabella om CRM-specifieke commando's te verwerken",
          "Analytische gegevens: Integratie met bestaand analyseframework"
        ]
      },
      // Continue with Dutch translations for all sections
      coreInfrastructure: {
        title: "1. Kern CRM-infrastructuur",
        // Content similar to English but translated to Dutch
        sections: [
          {
            title: "Klantprofielmodule",
            items: [
              "360° weergave van klantinformatie over alle platforms",
              "Activiteitentijdlijn met interacties over alle contactpunten",
              "Statistieken over apparaatgebruik van iHealth-Sync",
              "Zorgverlenerrelaties van NurseSync en MedicSync",
              "Abonnementsstatus en factureringsinformatie",
              "Visualisatie van familie/verzorger-netwerk",
              "Aangepaste velden en tagmogelijkheden",
              "Notities en interne communicatiehulpmiddelen"
            ]
          },
          // More sections translated...
        ]
      },
      // Continue with all other section translations...
    }
  };
  
  // Select the appropriate language content
  const t = language === "es" ? content.es : language === "nl" ? content.nl : content.en;
  
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{t.executiveSummary.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{t.executiveSummary.content}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>{t.projectScope.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{t.projectScope.content}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>{t.implementationApproach.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{t.implementationApproach.content}</p>
          
          <h3 className="text-lg font-medium mb-2">{t.technologyStack.title}</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            {t.technologyStack.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="core" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full">
          <TabsTrigger value="core">{t.coreInfrastructure.title.split(".")[1]}</TabsTrigger>
          <TabsTrigger value="operations">{t.businessOperations.title.split(".")[1]}</TabsTrigger>
          <TabsTrigger value="advanced">{t.advancedFeatures.title.split(".")[1]}</TabsTrigger>
          <TabsTrigger value="ecosystem">{t.ecosystemIntegration.title.split(".")[1]}</TabsTrigger>
          <TabsTrigger value="intelligence">{t.intelligenceLayer.title.split(".")[1]}</TabsTrigger>
        </TabsList>
        
        <TabsContent value="core" className="space-y-6 mt-6">
          <h2 className="text-2xl font-semibold">{t.coreInfrastructure.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.coreInfrastructure.sections.map((section, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="operations" className="space-y-6 mt-6">
          <h2 className="text-2xl font-semibold">{t.businessOperations.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.businessOperations.sections.map((section, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="space-y-6 mt-6">
          <h2 className="text-2xl font-semibold">{t.advancedFeatures.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.advancedFeatures.sections.map((section, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="ecosystem" className="space-y-6 mt-6">
          <h2 className="text-2xl font-semibold">{t.ecosystemIntegration.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.ecosystemIntegration.sections.map((section, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="intelligence" className="space-y-6 mt-6">
          <h2 className="text-2xl font-semibold">{t.intelligenceLayer.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.intelligenceLayer.sections.map((section, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {section.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">{t.integrationRequirements.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.integrationRequirements.sections.map((section, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">{t.technicalConsiderations.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.technicalConsiderations.sections.map((section, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">{t.implementation.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.implementation.sections.map((section, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
