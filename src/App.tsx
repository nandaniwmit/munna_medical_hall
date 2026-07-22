import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ArrowUp, Sparkles, MessageSquare, AlertTriangle, FileUp, Percent } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';

// Modular Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync dark mode class with root html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Monitor scroll for Back-to-Top presence
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global Traffic Tracking Hook
  useEffect(() => {
    try {
      const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
      const urlParams = new URLSearchParams(window.location.search);
      
      let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
      if (urlParams.get('cid')) {
        localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
      }
      
      if (!cid) return;

      let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
      localStorage.setItem('wmit_visitor_id', visitorId);

      let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('wmit_session_id', sessionId);

      const getPageName = () => {
        if (activeTab) {
          return activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
        }
        const path = window.location.pathname;
        const segment = path.replace(/\/$/, "").split("/").pop();
        return segment ? segment.split('?')[0] : 'Home';
      };

      const sendInitPayload = () => {
        const payload = {
          cid: cid,
          visitor_id: visitorId,
          session_id: sessionId,
          page_name: getPageName(),
          referrer: document.referrer || '',
          device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
          browser: navigator.userAgent,
          action: 'init'
        };
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }).catch(() => {});
      };

      const sendExitPayload = () => {
        const payload = {
          cid: cid,
          session_id: sessionId,
          page_name: getPageName(),
          action: 'page_change'
        };
        if (navigator.sendBeacon) {
          const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
          navigator.sendBeacon(TRACKING_ENDPOINT, blob);
        } else {
          fetch(TRACKING_ENDPOINT, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true
          }).catch(() => {});
        }
      };

      sendInitPayload();

      const handleLocationChange = () => {
        sendExitPayload();
        setTimeout(sendInitPayload, 100);
      };

      window.addEventListener('popstate', handleLocationChange);
      window.addEventListener('pagehide', sendExitPayload);
      
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'hidden') {
          sendExitPayload();
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      return () => {
        sendExitPayload();
        window.removeEventListener('popstate', handleLocationChange);
        window.removeEventListener('pagehide', sendExitPayload);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    } catch (e) {
      console.error('Tracking error:', e);
    }
  }, [activeTab]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic SEO configurations based on active tab
  const getSEOConfig = () => {
    switch (activeTab) {
      case 'about':
        return {
          title: 'About Our Business Story & Timeline',
          description: 'Established in 1998, Munna Medical Hall is Gaya’s trusted pharmacy. Explore our mission, vision, values, founder’s word, and 25-year pharmaceutical legacy.',
          keywords: 'about munna medical hall, pharmacy history gaya, munna gupta gaya, trusted chemist bihar, medical timeline'
        };
      case 'services':
        return {
          title: 'Medicines, Surgical Items & BP Devices',
          description: 'Browse our 12 dedicated pharmacy services including genuine prescription dispensing, OTC remedy support, diabetic supplies, baby products, and medical devices.',
          keywords: 'pharmacy services gaya, medical devices, orthopedic knee supports, diabetic glucometer, surgical accessories'
        };
      case 'gallery':
        return {
          title: 'Storefront & Medicine Shelves Gallery',
          description: 'A visual walkthrough of our air-conditioned medical shelves, diagnostic gear displays, infant care racks, and modern storefront situated at Bata More, Gaya.',
          keywords: 'munna medical hall gallery, store front photo, medical cabinets, gaya bihar chemist images'
        };
      case 'contact':
        return {
          title: 'Store Address, Contact Details & Hours',
          description: 'Reach Munna Medical Hall at 08797611171. Located near Bata More, Tekari Road, Gaya. View our 7-days-a-week operating hours and send direct inquiries.',
          keywords: 'contact munna medical hall, pharmacy map gaya, chemist phone number, maroof ganj medicine store'
        };
      default:
        return {
          title: 'Munna Medical Hall | Trusted Gaya Pharmacy',
          description: 'Munna Medical Hall near Bata More, Gaya, Bihar. Dispensing 100% genuine prescription medicines, healthcare devices, and surgical supplies since 1998.',
          keywords: 'gaya pharmacy, medical store gaya, genuine medicines bihar, bata more chemist, drug store maroof ganj, online prescription upload'
        };
    }
  };

  const seo = getSEOConfig();

  // Helper to render the active tab view
  const renderPageContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans flex flex-col justify-between transition-colors duration-300">
      
      {/* 1. SEO Head Injector */}
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        activeTab={activeTab}
      />

      {/* 2. Top-most bar with location, phone, and tagline */}
      <div className="bg-slate-900 text-white px-4 sm:px-8 py-2 text-[11px] sm:text-xs flex flex-col sm:flex-row justify-between items-center gap-2 shrink-0 z-50 relative">
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 font-medium">
          <span className="flex items-center gap-1">📍 Bata More, Tekari Rd, Maroof Ganj, Gaya</span>
          <span className="flex items-center gap-1">📞 <a href="tel:08797611171" className="hover:underline font-bold text-emerald-400">08797611171</a></span>
        </div>
        <div className="flex items-center gap-3 font-semibold text-slate-300">
          <span className="hidden lg:inline italic">Your Trusted Medical Store for Genuine Medicines</span>
          <span className="hidden lg:inline text-slate-500">|</span>
          <span className="text-amber-400 flex items-center gap-1">
            <Percent className="w-3.5 h-3.5 shrink-0" /> Special chronic discounts active!
          </span>
        </div>
      </div>

      {/* 3. Sticky Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* 4. Active Main View with animated entry using motion */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>

        {/* Floating WhatsApp Ordering Segment (Mounted on bottom of home page or visible overall) */}
        {activeTab !== 'contact' && (
          <section id="whatsapp-order-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-100 dark:border-slate-900">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Promo text columns */}
              <div className="lg:col-span-4 text-left space-y-4">
                <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-brand-green rounded-2xl w-fit">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="font-display text-3xl font-extrabold text-slate-800 dark:text-white leading-tight">
                  Rapid WhatsApp Prescription Order Desk
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Avoid long store lines! Use our responsive WhatsApp compiler form to upload doctor prescriptions and type requested capsule lists. We verify stocks, apply monthly heavy discounts, pack items securely, and arrange swift local delivery or curbside pick-up.
                </p>
                
                <div className="space-y-2.5 pt-2 text-xs text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-emerald-100 dark:bg-emerald-900/40 text-brand-green rounded-full flex items-center justify-center font-bold text-[10px]">1</span>
                    <span>Fill basic patient details & delivery coordinates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-emerald-100 dark:bg-emerald-900/40 text-brand-green rounded-full flex items-center justify-center font-bold text-[10px]">2</span>
                    <span>Type medicine names or upload prescriptions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-emerald-100 dark:bg-emerald-900/40 text-brand-green rounded-full flex items-center justify-center font-bold text-[10px]">3</span>
                    <span>Auto-compile text, send in one click to WhatsApp!</span>
                  </div>
                </div>
              </div>

              {/* Form columns */}
              <div className="lg:col-span-8">
                <WhatsAppOrderForm />
              </div>

            </div>
          </section>
        )}
      </main>

      {/* 5. Floating Auxiliary Action Controls */}
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-6 left-6 z-40 p-3.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-brand-green dark:hover:text-brand-green hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Fast WhatsApp support button */}
      <a
        href="https://wa.me/918797611171?text=Hello%20Munna%20Medical%20Hall%2C%20I%20have%20an%20urgent%20medicine%20availability%20or%20prescription%20question."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce cursor-pointer group"
        title="Chat with Pharmacist"
      >
        <MessageSquare className="w-6 h-6 shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold font-mono tracking-wide uppercase">
          Chat support
        </span>
      </a>

      {/* 6. Professional Policy Compliant Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
