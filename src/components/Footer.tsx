import { HeartPulse, Phone, MapPin, Send, Clock, ShieldCheck, Mail } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionScroll = (sectionId: string) => {
    setActiveTab('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* Upper Footer Segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="w-9 h-9 bg-brand-green text-white rounded-xl flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h4 className="font-display font-extrabold text-xl text-white">
                Munna <span className="text-brand-green">Medical</span>
              </h4>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted community pharmacy in Gaya, Bihar. Dispensing 100% genuine medicines, healthcare devices, and surgical supplies with professional precision since 1998.
            </p>

            <div className="flex items-center space-x-2 text-xs bg-slate-800/60 p-2.5 rounded-xl border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-brand-green shrink-0" />
              <span className="text-slate-400 font-mono">Licensed Retail Chemists & Druggists</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Home Page
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors cursor-pointer text-left">
                  About Our Business
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Our Healthcare Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Pharmacy Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleSectionScroll('testimonials-section')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Customer Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => handleSectionScroll('faq-section')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="font-display font-bold text-white text-base mb-4 tracking-wide uppercase">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Prescription Medicines</li>
              <li>Over-The-Counter (OTC) Drugs</li>
              <li>Baby Hygiene & Milk Formulations</li>
              <li>Cardiovascular & BP Monitors</li>
              <li>Diabetic Testing Strips & Devices</li>
              <li>Health & Immunity Supplements</li>
              <li>First Aid & Surgical Dressings</li>
            </ul>
          </div>

          {/* Column 4: Location & Operating Hours */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-white text-base tracking-wide uppercase">
              Store Information
            </h4>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                <span className="text-slate-400 leading-relaxed">
                  Bata more, Tekari Rd, Maroof Ganj, Gaya, Bihar 823001
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-brand-green shrink-0" />
                <span className="text-slate-400">
                  Daily: 08:30 AM - 10:00 PM
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <a href="tel:08797611171" className="text-white hover:underline font-semibold">
                  08797611171
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <a href="mailto:nandani.wmit@gmail.com" className="text-slate-400 hover:text-white">
                  nandani.wmit@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Disclaimers & Legal Notice */}
      <div className="bg-slate-950/40 border-t border-slate-800/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 leading-relaxed space-y-3">
          <p>
            <span className="font-bold text-slate-400">MEDICAL DISCLAIMER:</span> The information provided on this website, including product descriptions, blog posts, health tips, and FAQs, is for informational purposes only. It is not intended to substitute professional medical advice, clinical diagnosis, or therapeutic treatment. Always seek the advice of a registered medical practitioner with any questions regarding health conditions or medication dosages.
          </p>
          <p>
            Munna Medical Hall operates in full compliance with the Drugs and Cosmetics Act, 1940, and the Drugs and Cosmetics Rules, 1945. We do not sell or dispense any schedule H, H1, or X narcotics without a validated medical prescription from a registered doctor.
          </p>
        </div>
      </div>

      {/* Lower Footer Segment */}
      <div className="bg-slate-950 py-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-4 sm:space-y-0">
          
          {/* Copyrights & Pulse */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div>
              &copy; {new Date().getFullYear()} Munna Medical Hall. All Rights Reserved. Developed by <a href="#" className="wmit-popup-trigger hover:text-white underline transition-colors" target="_blank" rel="noopener noreferrer">Developed by WMIT</a>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/60 px-3 py-1 rounded-full border border-slate-800">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Store Open: 08:30 AM - 10:00 PM</span>
            </div>
          </div>

          {/* Technical Schema tags & Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-500">
            <span className="bg-slate-900 text-slate-500 px-2 py-0.5 rounded text-[10px] font-mono">SCHEMA.ORG: PHARMACY</span>
            <span className="bg-slate-900 text-slate-500 px-2 py-0.5 rounded text-[10px] font-mono">SEO: OPTIMIZED</span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
