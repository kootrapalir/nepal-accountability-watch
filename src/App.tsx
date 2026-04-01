import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TopNav, BottomNav } from "@/components/Navigation";
import HomePage from "./pages/HomePage";
import PlanPage from "./pages/PlanPage";
import TimelinePage from "./pages/TimelinePage";
import RBBPage from "./pages/RBBPage";
import NewsPage from "./pages/NewsPage";
import GovernmentPage from "./pages/GovernmentPage";
import OldGuardPage from "./pages/OldGuardPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <TopNav />
        <main className="min-h-[calc(100vh-4rem)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/rbb" element={<RBBPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/government" element={<GovernmentPage />} />
            <Route path="/old-guard" element={<OldGuardPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <BottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
