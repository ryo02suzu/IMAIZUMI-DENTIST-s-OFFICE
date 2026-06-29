import { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import { StickyBottomBar } from "@/components/layout/StickyBottomBar";
import { trackPageView, initClickTracking } from "@/lib/analytics";

// トップ以外のページは必要になったときに読み込む（初回の表示を軽くする）
const TreatmentDetail = lazy(() => import("@/pages/TreatmentDetail"));
const NewsPage = lazy(() => import("@/pages/NewsPage"));
const NewsDetail = lazy(() => import("@/pages/NewsDetail"));
const ColumnPage = lazy(() => import("@/pages/ColumnPage"));
const ColumnDetail = lazy(() => import("@/pages/ColumnDetail"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const SubscriptionPage = lazy(() => import("@/pages/SubscriptionPage"));
const BreathCarePage = lazy(() => import("@/pages/BreathCarePage"));
const DentalEsthetics = lazy(() => import("@/pages/DentalEsthetics"));
const RecruitPage = lazy(() => import("@/pages/RecruitPage"));
const EnglishPage = lazy(() => import("@/pages/EnglishPage"));
const StaffPost = lazy(() => import("@/pages/StaffPost"));
const NotFound = lazy(() => import("@/pages/not-found"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // ルート遷移ごとにページビューを送信（タイトル確定を待つため次フレームで）
    const id = window.setTimeout(() => {
      trackPageView(location, document.title);
    }, 0);
    return () => window.clearTimeout(id);
  }, [location]);
  return null;
}

function AnalyticsInit() {
  useEffect(() => {
    initClickTracking();
  }, []);
  return null;
}

const queryClient = new QueryClient();

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/treatment/:slug" component={TreatmentDetail} />
        <Route path="/news" component={NewsPage} />
        <Route path="/news/:id" component={NewsDetail} />
        <Route path="/column" component={ColumnPage} />
        <Route path="/column/:slug" component={ColumnDetail} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/subscription" component={SubscriptionPage} />
        <Route path="/breath-care" component={BreathCarePage} />
        <Route path="/dental-esthetics" component={DentalEsthetics} />
        <Route path="/recruit" component={RecruitPage} />
        <Route path="/en" component={EnglishPage} />
        <Route path="/staff" component={StaffPost} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <ScrollToTop />
          <AnalyticsInit />
          <Router />
        </WouterRouter>
        <StickyBottomBar />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
