import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Preloader } from './components/Loader';
import { GoogleAnalytics } from './lib/analytics';
import { ImageProvider } from './components/ImageProvider';
import Layout from './components/Layout';
import AdminLayout from './components/AdminLayout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import FoodSupport from './pages/FoodSupport';
import HouseholdCare from './pages/HouseholdCare';
import VolunteerCorps from './pages/VolunteerCorps';
import ElderlySupport from './pages/ElderlySupport';
import Impact from './pages/Impact';
import Stories from './pages/Stories';
import StoryDetail from './pages/StoryDetail';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import Transparency from './pages/Transparency';
import Gallery from './pages/Gallery';
import Volunteer from './pages/Volunteer';
import Partners from './pages/Partners';
import Team from './pages/Team';
import CommunityEngagement from './pages/CommunityEngagement';
import FAQ from './pages/FAQ';
import News from './pages/News';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminTeam from './pages/AdminTeam';
import AdminMedia from './pages/AdminMedia';

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Preloader />
        {GA_ID && <GoogleAnalytics measurementId={GA_ID} />}
        <BrowserRouter>
          <ImageProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="programs" element={<Programs />} />
                <Route path="programs/maternal-health" element={<ProgramDetail />} />
                <Route path="programs/food-support" element={<FoodSupport />} />
                <Route
                  path="programs/household-care"
                  element={<HouseholdCare />}
                />
                <Route
                  path="programs/volunteer-corps"
                  element={<VolunteerCorps />}
                />
                <Route
                  path="programs/elderly-support"
                  element={<ElderlySupport />}
                />
                <Route path="impact" element={<Impact />} />
                <Route path="stories" element={<Stories />} />
                <Route path="stories/:id" element={<StoryDetail />} />
                <Route path="get-involved" element={<GetInvolved />} />
                <Route path="contact" element={<Contact />} />
                <Route path="transparency" element={<Transparency />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="volunteer" element={<Volunteer />} />
                <Route path="partners" element={<Partners />} />
                <Route path="team" element={<Team />} />
                <Route
                  path="community-engagement"
                  element={<CommunityEngagement />}
                />
                <Route path="faq" element={<FAQ />} />
                <Route path="news" element={<News />} />
              </Route>

              <Route path="/admin/login" element={<AdminLogin />} />
  <Route path="/admin" element={<AdminLayout />}>
    <Route path="dashboard" element={<AdminDashboard />} />
    <Route path="team" element={<AdminTeam />} />
    <Route path="media" element={<AdminMedia />} />
  </Route>
            </Routes>
          </ImageProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
