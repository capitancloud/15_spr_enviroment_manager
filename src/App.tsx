import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import IntroPage from "./pages/IntroPage";
import SimulatorPage from "./pages/SimulatorPage";
import WhyNotHardcodePage from "./pages/WhyNotHardcodePage";
import ConfigPage from "./pages/ConfigPage";
import FeatureFlagsPage from "./pages/FeatureFlagsPage";
import EnvironmentsPage from "./pages/EnvironmentsPage";
import CICDPage from "./pages/CICDPage";
import ABTestingPage from "./pages/ABTestingPage";
import LogsPage from "./pages/LogsPage";
import SecretsPage from "./pages/SecretsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<IntroPage />} />
            <Route path="/simulator" element={<SimulatorPage />} />
            <Route path="/why-not-hardcode" element={<WhyNotHardcodePage />} />
            <Route path="/config" element={<ConfigPage />} />
            <Route path="/feature-flags" element={<FeatureFlagsPage />} />
            <Route path="/environments" element={<EnvironmentsPage />} />
            <Route path="/cicd" element={<CICDPage />} />
            <Route path="/ab-testing" element={<ABTestingPage />} />
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/secrets" element={<SecretsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
