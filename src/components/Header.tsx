import { useState } from 'react';
import { Menu, X, Phone, Moon, Sun, HeartPulse, MessageSquareCode } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ activeTab, setActiveTab, darkMode, toggleDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionScroll = (sectionId: string) => {
    setActiveTab('home');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300 glass-header shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center space-x-3 cursor-pointer shrink-0" onClick={() => handleNavClick('home')}>
            <div className="w-10 h-10 bg-brand-green text-white rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105">
              <HeartPulse className="w-6 h-6 animate-pulse-slow" />
            </div>
            <div>
              <h1 className="font-display font-extrabold text-xl text-slate-900 dark:text-white leading-tight uppercase tracking-tight">
                Munna <span className="text-brand-green">Medical</span>
              </h1>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 block font-semibold">
                Trusted Pharmacy Since 1995
              </span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-brand-green bg-emerald-50 dark:bg-emerald-950/40 font-bold border-b-2 border-brand-green'
                    : 'text-slate-600 dark:text-slate-300 hover:text-brand-green dark:hover:text-brand-green hover:bg-slate-50/50 dark:hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Scroll Anchors inside menu */}
            <button
              onClick={() => handleSectionScroll('testimonials-section')}
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-green dark:hover:text-brand-green hover:bg-slate-50/50 dark:hover:bg-slate-800/50 cursor-pointer"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleSectionScroll('faq-section')}
              className="px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-green dark:hover:text-brand-green hover:bg-slate-50/50 dark:hover:bg-slate-800/50 cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* Header Action Buttons (Call, WhatsApp, Dark Mode) */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 rounded-full transition-all duration-200 cursor-pointer border border-slate-100 dark:border-slate-700/50"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-600" />}
            </button>

            {/* Call Now */}
            <a
              href="tel:08797611171"
              className="flex items-center space-x-2 text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Call Store</span>
            </a>

            {/* Fast WhatsApp Support */}
            <a
              href="https://wa.me/918797611171?text=Hello%20Munna%20Medical%20Hall%2C%20I%20have%20a%20medical%20prescription%2Forder%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>WhatsApp Order</span>
            </a>
          </div>

          {/* Mobile Action Controls (Hamburger, Dark Mode) */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Dark Mode Toggle for Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-300 rounded-lg transition-all cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-base font-medium transition-all cursor-pointer block ${
                  activeTab === item.id
                    ? 'text-brand-green bg-emerald-50 dark:bg-emerald-950/40 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={() => handleSectionScroll('testimonials-section')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer block"
            >
              Testimonials
            </button>
            
            <button
              onClick={() => handleSectionScroll('faq-section')}
              className="w-full text-left px-4 py-2.5 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 cursor-pointer block"
            >
              FAQ
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col space-y-3">
            <a
              href="tel:08797611171"
              className="flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold py-2.5 rounded-xl transition-all text-sm"
            >
              <Phone className="w-4 h-4 text-slate-500" />
              <span>Call: 08797611171</span>
            </a>
            
            <a
              href="https://wa.me/918797611171?text=Hello%20Munna%20Medical%20Hall%2C%20I%20have%20an%20order%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-2.5 rounded-xl transition-all text-sm"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>Send WhatsApp Order</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
