import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import VisitorDashboard from "./pages/VisitorDashboard";
import StakeholderDashboard from "./pages/StakeholderDashboard";
import ChatBot from "./pages/ChatBot";
import UmrahPlanner from "./pages/UmrahPlanner";
import BudgetAssistant from "./pages/BudgetAssistant";
import BookingScreen from "./pages/BookingScreen";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/visitor" element={<VisitorDashboard />} />
          <Route path="/stakeholder" element={<StakeholderDashboard />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/planner" element={<UmrahPlanner />} />
          <Route path="/budget" element={<BudgetAssistant />} />
          <Route path="/booking" element={<BookingScreen />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
