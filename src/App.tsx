import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Index from "./pages/Index";
import SOPOverview from "./pages/SOPOverview";
import Detection from "./pages/Detection";
import Investigation from "./pages/Investigation";
import Causality from "./pages/Causality";
import CaseManagement from "./pages/CaseManagement";
import DataAnalysis from "./pages/DataAnalysis";
import Manual from "./pages/Manual";
import FAQ from "./pages/FAQ";
import AIAssistant from "./pages/AIAssistant";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/sop-helper">
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sop-overview" element={<SOPOverview />} />
              <Route path="/detection" element={<Detection />} />
              <Route path="/investigation" element={<Investigation />} />
              <Route path="/causality" element={<Causality />} />
              <Route path="/case-management" element={<CaseManagement />} />
              <Route path="/data-analysis" element={<DataAnalysis />} />
              <Route path="/manual" element={<Manual />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <SiteFooter />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
