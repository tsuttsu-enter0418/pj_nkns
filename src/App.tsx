import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PolicyPage from './pages/PolicyPage';
import ProjectsPage from './pages/ProjectsPage';

// Google Analytics ページビュートラッキング用コンポーネント
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // ページ遷移時に Google Analytics にページビューを送信
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-SDNBEK57FS', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/policy" element={<PolicyPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;