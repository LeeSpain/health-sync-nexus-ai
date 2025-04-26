
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CommandPage from "./pages/CommandPage";
import ConversationsPage from "./pages/ConversationsPage";
import AgentsPage from "./pages/AgentsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import EscalationsPage from "./pages/EscalationsPage";
import TrainingPage from "./pages/TrainingPage";
import SettingsPage from "./pages/SettingsPage";
import PlatformsPage from "./pages/PlatformsPage";
import EmailsPage from "./pages/EmailsPage";
import TicketsPage from "./pages/TicketsPage";
import IntelligencePage from "./pages/IntelligencePage";
import HelpPage from "./pages/HelpPage";
import APIIntegrationPage from "./pages/APIIntegrationPage";
import FinancialsPage from "./pages/FinancialsPage";
import ImplementationPlanPage from "./pages/ImplementationPlanPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/command" element={<CommandPage />} />
          <Route path="/conversations" element={<ConversationsPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/escalations" element={<EscalationsPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/platforms" element={<PlatformsPage />} />
          <Route path="/emails" element={<EmailsPage />} />
          <Route path="/tickets" element={<TicketsPage />} />
          <Route path="/intelligence" element={<IntelligencePage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/api-integration" element={<APIIntegrationPage />} />
          <Route path="/financials" element={<FinancialsPage />} />
          <Route path="/implementation-plan" element={<ImplementationPlanPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
