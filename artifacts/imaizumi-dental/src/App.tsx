import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import TreatmentDetail from "@/pages/TreatmentDetail";
import NewsPage from "@/pages/NewsPage";
import NewsDetail from "@/pages/NewsDetail";
import NotFound from "@/pages/not-found";
import { StickyBottomBar } from "@/components/layout/StickyBottomBar";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/treatment/:slug" component={TreatmentDetail} />
      <Route path="/news" component={NewsPage} />
      <Route path="/news/:id" component={NewsDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <StickyBottomBar />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
