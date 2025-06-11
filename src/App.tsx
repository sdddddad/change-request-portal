
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProcessDocuments from "./pages/ProcessDocuments";
import ChangeManagement from "./pages/ChangeManagement";
import NewProcessRequest from "./pages/NewProcessRequest";
import ProcessDeviation from "./pages/ProcessDeviation";
import DocumentChangeRequest from "./pages/DocumentChangeRequest";
import Learning from "./pages/Learning";
import Audits from "./pages/Audits";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/process-documents" element={<ProcessDocuments />} />
          <Route path="/change-management" element={<ChangeManagement />} />
          <Route path="/change-management/new-process" element={<NewProcessRequest />} />
          <Route path="/change-management/deviation" element={<ProcessDeviation />} />
          <Route path="/change-management/document-change" element={<DocumentChangeRequest />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/audits" element={<Audits />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
