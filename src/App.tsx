
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import SemestersPage from "./pages/SemestersPage";
import SemesterDetailsPage from "./pages/SemesterDetailsPage";
import SubjectDetailsPage from "./pages/SubjectDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div>
        {/* ... */}
        <SpeedInsights />
        <Analytics />
        {/* ... */}
      </div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/semesters" element={<SemestersPage />} />
            <Route path="/semesters/:semesterId" element={<SemesterDetailsPage />} />
            <Route path="/semesters/:semesterId/:subjectId" element={<SubjectDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
