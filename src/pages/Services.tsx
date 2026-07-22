import { useState } from 'react';
import { CheckCircle2, MessageSquare, Phone, X, ShoppingBag, FileText, Heart, Baby, Smile, HeartPulse, Activity, ShieldAlert, Scissors, Sparkles, Briefcase, Home, Info } from 'lucide-react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Map string icon names to Lucide elements
  const renderServiceIcon = (name: string, className: string) => {
    switch (name) {
      case 'ShoppingBag': return <ShoppingBag className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'Heart': return <Heart className={className} />;
      case 'Baby': return <Baby className={className} />;
      case 'Smile': return <Smile className={className} />;
      case 'HeartPulse': return <HeartPulse className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'Scissors': return <Scissors className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      case 'Home': return <Home className={className} />;
      default: return <Info className={className} />;
    }
  };

  const handleWhatsAppInquire = (service: ServiceItem) => {
    const text = `Hello *Munna Medical Hall*,\n\nI would like to inquire about your service: *${service.title}*.\n\nCould you please guide me on product availability and pricing details for items related to this service?\n\nThank you!`;
    const whatsappUrl = `https://wa.me/918797611171?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-b-[2rem] py-12 md:py-16 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono tracking-wider text-brand-green uppercase font-bold">Comprehensive Offerings</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Our Healthcare Retail Services
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Dispensing pharmaceutical medications, wellness supplements, infant care, and home diagnostic gear with certified storage protocols.
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Icon Block */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 text-brand-green rounded-2xl flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                    {renderServiceIcon(srv.iconName, "w-6 h-6")}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400">
                    ID: {srv.id}
                  </span>
                </div>

                {/* Info Block */}
                <div className="space-y-2">
                  <h4 className="font-display text-lg font-bold text-slate-800 dark:text-white group-hover:text-brand-green transition-colors leading-tight">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Mini features bullet highlights */}
                <ul className="space-y-2 pt-2 border-t border-slate-50 dark:border-slate-850/60">
                  {srv.features.map((feat, i) => (
                    <li key={i} className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green mr-2 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger Block */}
              <div className="pt-6 mt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(srv)}
                  className="text-xs font-bold text-brand-green hover:underline flex items-center cursor-pointer"
                >
                  <span>Read Details</span>
                  <X className="w-3.5 h-3.5 ml-1 rotate-45" />
                </button>

                <button
                  onClick={() => handleWhatsAppInquire(srv)}
                  className="bg-emerald-50 dark:bg-emerald-950/30 text-brand-green font-bold text-xs py-2 px-3.5 rounded-xl flex items-center space-x-1 hover:bg-brand-green hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order Desk</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. Deep Detail Overlay Modal */}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-100 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-8 w-full max-w-xl shadow-2xl relative animate-scale-up space-y-6 text-left"
          >
            {/* Exit trigger */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1.5 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-full text-slate-400 hover:text-slate-800 dark:hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Title */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/40 text-brand-green rounded-2xl flex items-center justify-center">
                {renderServiceIcon(selectedService.iconName, "w-8 h-8")}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-green tracking-wider uppercase block">
                  Service Category Overview
                </span>
                <h3 className="font-display text-2xl font-extrabold text-slate-800 dark:text-white">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* In-depth walkthrough info */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <h4 className="font-display font-bold text-slate-800 dark:text-white text-sm">Description & Operations</h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {selectedService.longDescription}
                </p>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-display font-bold text-slate-800 dark:text-white text-sm">Key Service Features</h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 bg-slate-50 dark:bg-slate-950 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-50 dark:border-slate-800/80 flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <button
                onClick={() => {
                  handleWhatsAppInquire(selectedService);
                  setSelectedService(null);
                }}
                className="flex-1 bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center shadow-lg transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 mr-2" /> Submit WhatsApp Inquiry
              </button>
              
              <a
                href="tel:08797611171"
                className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 px-6 rounded-xl flex items-center justify-center transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 mr-2 text-slate-500" /> Call Direct Desk
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
