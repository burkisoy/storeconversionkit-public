import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EditorPage from './pages/EditorPage';
import PricingPage from './pages/PricingPage';
import ComparePage from './pages/ComparePage';
import LoginPage from './pages/LoginPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import SectionPage from './pages/SectionPage';
import SuccessPage from './pages/SuccessPage';
import StatusPage from './pages/StatusPage';
import AnnouncementBar from './components/ui/AnnouncementBar';
import { trackVisitor } from './lib/supabase';
import { initializeGoogleAnalytics, trackPageView } from './lib/analytics';
import { initializeSessionManager } from './lib/sessionManager';
import { setupSessionValidator } from './lib/sessionValidator';

// Route change tracker component
function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    trackVisitor(location.pathname);
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

function App() {
  // Initialize Google Analytics once when the app loads
  useEffect(() => {
    initializeGoogleAnalytics();
    
    // Initialize session manager
    initializeSessionManager();
    
    // Set up session validator for cross-browser session management
    const cleanupSessionValidator = setupSessionValidator();
    
    return () => {
      cleanupSessionValidator();
    };
  }, []);

  return (
    <Router>
      <RouteTracker />
      <AnnouncementBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor/:id" element={<EditorPage />} />
        <Route path="/plans" element={<PricingPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/section/:id" element={<SectionPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/success=13493222313453" element={<SuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;