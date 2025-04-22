
import React from "react";
import { AgentCard } from "@/components/dashboard/AgentCard";
import { useLanguage } from "@/hooks/useLanguage";
import { dashboardTranslations } from "@/locales/dashboard";

export const AgentStatusSection: React.FC = () => {
  const { language } = useLanguage();
  const t = dashboardTranslations[language];
  // local variables here to avoid relying on props
  const agentData = [
    {
      name: t.agents.Anna.name,
      role: t.agents.Anna.role,
      type: "anna" as const,
      activeConversations: 15,
      sentiment: 85,
      escalations: 0,
      topTopics: [
        t.wellnessCheck,
        t.financialOverview,
        t.agentStatus
      ]
    },
    {
      name: t.agents.Emma.name,
      role: t.agents.Emma.role,
      type: "emma" as const,
      activeConversations: 8,
      sentiment: 72,
      escalations: 3,
      topTopics: [
        t.nurseTraining,
        t.agentStatus,
        t.recentActivity
      ]
    },
    {
      name: t.agents.Julia.name,
      role: t.agents.Julia.role,
      type: "julia" as const,
      activeConversations: 12,
      sentiment: 79,
      escalations: 1,
      topTopics: [
        t.juliaUpdated,
        t.financialOverview,
        t.recentActivity
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{t.agentStatus}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agentData.map((agent, index) => (
          <AgentCard key={index} {...agent} />
        ))}
      </div>
    </div>
  );
};
