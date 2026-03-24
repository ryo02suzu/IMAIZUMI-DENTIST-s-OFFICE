import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import TreatmentDetail from "@/pages/TreatmentDetail";
import NewsPage from "@/pages/NewsPage";
import NewsDetail from "@/pages/NewsDetail";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import SubscriptionPage from "@/pages/SubscriptionPage";
import BreathCarePage from "@/pages/BreathCarePage";
import DentalEsthetics from "@/pages/DentalEsthetics";
import NotFound from "@/pages/not-found";
import { StickyBottomBar } from "@/components/layout/StickyBottomBar";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/treatment/:slug" component={TreatmentDetail} />
      <Route path="/news" component={NewsPage} />
      <Route path="/news/:id" component={NewsDetail} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/subscription" component={SubscriptionPage} />
      <Route path="/breath-care" component={BreathCarePage} />
      <Route path="/dental-esthetics" component={DentalEsthetics} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <StickyBottomBar />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
