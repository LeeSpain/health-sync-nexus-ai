
type Lang = 'en' | 'es' | 'nl';

export const dashboardTranslations: Record<Lang, Record<string, any>> = {
  en: {
    dashboard: "Dashboard",
    lastUpdated: "Last updated",
    recentActivity: "Recent Activity",
    wellnessCheck: "New wellness check-in alerts",
    nurseTraining: "Nurse training completion",
    emmaEscalated: "Emma escalated support issue",
    juliaUpdated: "Julia updated medical protocols",
    financialOverview: "Financial Overview",
    emails: {
      label: "Email Management",
      active: "Active",
      description: "Manage all email communications",
      open: "Open",
      resolved: "Resolved",
      escalated: "Escalated",
      view: "View Emails",
    },
    tickets: {
      label: "Ticket Management",
      active: "Active",
      description: "Track and manage support tickets",
      open: "Open Tickets",
      total: "Total Tickets",
      view: "View Tickets",
    },
    agentStatus: "Agent Status",
    agents: {
      Anna: {
        role: "Wellness Assistant (iHealth-Sync)",
        name: "Anna",
      },
      Emma: {
        role: "Nurse Assistant (Nurse-Sync)",
        name: "Emma",
      },
      Julia: {
        role: "Medical Assistant (Medic-Sync)",
        name: "Julia",
      },
      activeConversations: "Active Conversations",
      sentiment: "Sentiment Score",
      escalations: "Escalations",
      topTopics: "Top Topics"
    },
    links: {
      dashboard: "Dashboard",
      emails: "Emails",
      tickets: "Tickets"
    },
    sidebar: {
      main: {
        dashboard: "Dashboard",
        command: "Command Console",
        conversations: "Conversations",
        agents: "Agents",
        emails: "Emails",
        tickets: "Tickets",
        intelligence: "Intelligence",
        analytics: "Analytics",
        escalations: "Escalations",
        training: "Training",
        platforms: "Platforms"
      },
      footer: {
        help: "Help & Documentation",
        api: "API Integration",
        financials: "Financials",
        settings: "Settings"
      }
    },
    changeLanguage: "Change language",
    english: "English",
    spanish: "Spanish",
    dutch: "Dutch",
    pageContent: {
      agents: {
        title: "Agent Management",
        advancedSettings: "Advanced Settings",
        newAgent: "New Agent",
        description: "Configure, train, and monitor all GHS agents in your network. Adjust agent settings and behaviors.",
        allAgents: "All Agents",
        active: "Active",
        inactive: "Inactive",
        inTraining: "In Training"
      },
      command: {
        description: "Control your GHS Agent Command system with text or voice commands. Isabella will process your requests and coordinate with other agents."
      },
      conversations: {
        description: "Review and analyze all agent conversations across platforms. Filter by agent, sentiment, or topic.",
        analysisTitle: "Conversation Analysis",
        analysisDescription: "This page will display all agent conversations with filtering capabilities, sentiment analysis, and escalation tracking."
      },
      tickets: {
        loadTickets: "Load Tickets",
        createTicket: "Create Ticket",
        noTicketsFound: "No tickets found. Click 'Create Ticket' to get started.",
        priority: {
          critical: "Critical",
          high: "High",
          medium: "Medium",
          low: "Low"
        },
        status: {
          open: "Open",
          inProgress: "In Progress",
          resolved: "Resolved",
          closed: "Closed"
        },
        created: "Created"
      }
    }
  },
  es: {
    dashboard: "Tablero",
    lastUpdated: "Última actualización",
    recentActivity: "Actividad Reciente",
    wellnessCheck: "Nuevas alertas de chequeo de bienestar",
    nurseTraining: "Finalización de entrenamiento de enfermería",
    emmaEscalated: "Emma derivó un problema de soporte",
    juliaUpdated: "Julia actualizó los protocolos médicos",
    financialOverview: "Resumen Financiero",
    emails: {
      label: "Gestión de Email",
      active: "Activo",
      description: "Gestione todas las comunicaciones por email",
      open: "Abiertas",
      resolved: "Resueltas",
      escalated: "Escaladas",
      view: "Ver Emails",
    },
    tickets: {
      label: "Gestión de Tickets",
      active: "Activo",
      description: "Rastree y gestione tickets de soporte",
      open: "Tickets Abiertos",
      total: "Tickets Totales",
      view: "Ver Tickets",
    },
    agentStatus: "Estado de los Agentes",
    agents: {
      Anna: {
        role: "Asistente de Bienestar (iHealth-Sync)",
        name: "Anna",
      },
      Emma: {
        role: "Asistente de Enfermería (Nurse-Sync)",
        name: "Emma",
      },
      Julia: {
        role: "Asistente Médico (Medic-Sync)",
        name: "Julia",
      },
      activeConversations: "Conversaciones Activas",
      sentiment: "Puntaje de Sentimiento",
      escalations: "Escaladas",
      topTopics: "Temas Principales"
    },
    links: {
      dashboard: "Tablero",
      emails: "Emails",
      tickets: "Tickets"
    },
    sidebar: {
      main: {
        dashboard: "Tablero",
        command: "Consola de Comandos",
        conversations: "Conversaciones",
        agents: "Agentes",
        emails: "Correos",
        tickets: "Tickets",
        intelligence: "Inteligencia",
        analytics: "Analítica",
        escalations: "Escalaciones",
        training: "Entrenamiento",
        platforms: "Plataformas"
      },
      footer: {
        help: "Ayuda y Documentación",
        api: "Integración API",
        financials: "Finanzas",
        settings: "Configuración"
      }
    },
    changeLanguage: "Cambiar idioma",
    english: "Inglés",
    spanish: "Español",
    dutch: "Holandés",
    pageContent: {
      agents: {
        title: "Gestión de Agentes",
        advancedSettings: "Configuración Avanzada",
        newAgent: "Nuevo Agente",
        description: "Configure, entrene y supervise todos los agentes GHS en su red. Ajuste la configuración y los comportamientos de los agentes.",
        allAgents: "Todos los Agentes",
        active: "Activos",
        inactive: "Inactivos",
        inTraining: "En Entrenamiento"
      },
      command: {
        description: "Controle su sistema GHS Agent Command con comandos de texto o voz. Isabella procesará sus solicitudes y coordinará con otros agentes."
      },
      conversations: {
        description: "Revise y analice todas las conversaciones de agentes en todas las plataformas. Filtre por agente, sentimiento o tema.",
        analysisTitle: "Análisis de Conversación",
        analysisDescription: "Esta página mostrará todas las conversaciones de agentes con capacidades de filtrado, análisis de sentimiento y seguimiento de escaladas."
      },
      tickets: {
        loadTickets: "Cargar Tickets",
        createTicket: "Crear Ticket",
        noTicketsFound: "No se encontraron tickets. Haga clic en 'Crear Ticket' para comenzar.",
        priority: {
          critical: "Crítico",
          high: "Alto",
          medium: "Medio",
          low: "Bajo"
        },
        status: {
          open: "Abierto",
          inProgress: "En Progreso",
          resolved: "Resuelto",
          closed: "Cerrado"
        },
        created: "Creado"
      }
    }
  },
  nl: {
    dashboard: "Dashboard",
    lastUpdated: "Laatst bijgewerkt",
    recentActivity: "Recente Activiteit",
    wellnessCheck: "Nieuwe welzijnscontroles meldingen",
    nurseTraining: "Verpleegkundige training voltooid",
    emmaEscalated: "Emma heeft een ondersteuningsprobleem geëscaleerd",
    juliaUpdated: "Julia heeft medische protocollen bijgewerkt",
    financialOverview: "Financieel Overzicht",
    emails: {
      label: "E-mailbeheer",
      active: "Actief",
      description: "Beheer alle e-mailcommunicaties",
      open: "Open",
      resolved: "Opgelost",
      escalated: "Geëscaleerd",
      view: "Bekijk E-mails",
    },
    tickets: {
      label: "Ticketbeheer",
      active: "Actief",
      description: "Volg en beheer ondersteuningstickets",
      open: "Open Tickets",
      total: "Totaal Tickets",
      view: "Bekijk Tickets",
    },
    agentStatus: "Agentstatus",
    agents: {
      Anna: {
        role: "Welzijnsassistent (iHealth-Sync)",
        name: "Anna",
      },
      Emma: {
        role: "Verpleegkundige Assistent (Nurse-Sync)",
        name: "Emma",
      },
      Julia: {
        role: "Medisch Assistent (Medic-Sync)",
        name: "Julia",
      },
      activeConversations: "Actieve Gesprekken",
      sentiment: "Sentimentscore",
      escalations: "Escalaties",
      topTopics: "Populaire Onderwerpen"
    },
    links: {
      dashboard: "Dashboard",
      emails: "E-mails",
      tickets: "Tickets"
    },
    sidebar: {
      main: {
        dashboard: "Dashboard",
        command: "Commandoconsole",
        conversations: "Gesprekken",
        agents: "Agenten",
        emails: "E-mails",
        tickets: "Tickets",
        intelligence: "Intelligentie",
        analytics: "Analyses",
        escalations: "Escalaties",
        training: "Training",
        platforms: "Platforms"
      },
      footer: {
        help: "Hulp & Documentatie",
        api: "API-integratie",
        financials: "Financiën",
        settings: "Instellingen"
      }
    },
    changeLanguage: "Verander taal",
    english: "Engels",
    spanish: "Spaans",
    dutch: "Nederlands",
    pageContent: {
      agents: {
        title: "Agent Beheer",
        advancedSettings: "Geavanceerde Instellingen",
        newAgent: "Nieuwe Agent",
        description: "Configureer, train en monitor alle GHS-agenten in uw netwerk. Pas agentinstellingen en -gedrag aan.",
        allAgents: "Alle Agenten",
        active: "Actief",
        inactive: "Inactief",
        inTraining: "In Training"
      },
      command: {
        description: "Beheer uw GHS Agent Command-systeem met tekst- of spraakopdrachten. Isabella verwerkt uw verzoeken en coördineert met andere agenten."
      },
      conversations: {
        description: "Bekijk en analyseer alle agentgesprekken op alle platforms. Filter op agent, sentiment of onderwerp.",
        analysisTitle: "Gespreksanalyse",
        analysisDescription: "Deze pagina toont alle agentgesprekken met filtermogelijkheden, sentimentanalyse en escalatietracking."
      },
      tickets: {
        loadTickets: "Tickets Laden",
        createTicket: "Ticket Aanmaken",
        noTicketsFound: "Geen tickets gevonden. Klik op 'Ticket Aanmaken' om te beginnen.",
        priority: {
          critical: "Kritiek",
          high: "Hoog",
          medium: "Gemiddeld",
          low: "Laag"
        },
        status: {
          open: "Open",
          inProgress: "In Behandeling",
          resolved: "Opgelost",
          closed: "Gesloten"
        },
        created: "Aangemaakt"
      }
    }
  }
};
