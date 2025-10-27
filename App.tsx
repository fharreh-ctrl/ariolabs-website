
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const USBusinessesPage = lazy(() => import('./pages/USBusinessesPage'));
const PHBusinessesPage = lazy(() => import('./pages/PHBusinessesPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const SchedulePage = lazy(() => import('./pages/SchedulePage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));

// Lazy load case study detail pages
const MediaCompanyCaseStudy = lazy(() => import('./pages/case-studies/MediaCompanyPage'));
const FinanceAuditTeamCaseStudy = lazy(() => import('./pages/case-studies/FinanceAuditTeamPage'));
const BossCaseStudy = lazy(() => import('./pages/case-studies/BossPage'));
const LivestreamPlatformCaseStudy = lazy(() => import('./pages/case-studies/LivestreamPlatformPage'));


const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen bg-deep-navy">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-electric-teal"></div>
  </div>
);

function App() {
  return (
    <HashRouter>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/us-businesses" element={<USBusinessesPage />} />
            <Route path="/ph-businesses" element={<PHBusinessesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/media-company" element={<MediaCompanyCaseStudy />} />
            <Route path="/case-studies/finance-audit-team" element={<FinanceAuditTeamCaseStudy />} />
            <Route path="/case-studies/boss" element={<BossCaseStudy />} />
            <Route path="/case-studies/livestream-platform" element={<LivestreamPlatformCaseStudy />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </HashRouter>
  );
}

export default App;