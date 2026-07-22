import { useState } from 'react';
import { Phone, CheckCircle, Shield, Award, Activity, Heart, Clock, MapPin, ChevronRight, HelpCircle, ChevronDown, MessageSquare, Clipboard, Package, Coins, Star, HeartPulse } from 'lucide-react';
import { SERVICES, FAQS, TESTIMONIALS, WORKING_PROCESS } from '../data/mockData';
import MedicineSearch from '../components/MedicineSearch';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  const whyChooseUs = [
    { title: '100% Genuine Medicines', desc: 'Procured exclusively from official pharmaceutical channels with complete batch tracking.', icon: Shield, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40' },
    { title: 'Experienced Staff', desc: 'Qualified consulting pharmacists who guide you on correct schedules and dosages.', icon: Award, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40' },
    { title: 'Affordable Prices', desc: 'Substantial recurring discounts on chronic blood pressure, diabetic & cardiac medicines.', icon: Coins, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' },
    { title: 'Fast Local Service', desc: 'Prompt nearby delivery or rapid call-to-pack curbside collect options at Bata More.', icon: Clock, color: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40' }
  ];

  const trustPoints = [
    'Experienced Pharmacy (Serving Gaya for 25+ Years)',
    'Quality Medicines (Certified Safe Storage & Temperature Control)',
    'Quick Service (Zero Wait-times and Easy WhatsApp Dispensation)',
    'Friendly Staff (Patient-first Compasissonate Guidance)',
    'Reasonable Pricing (Honest Billing with Generic Alternatives)',
    'Convenient Location (At Bata More, Tekari Road, Gaya)'
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-b-[2.5rem] overflow-hidden py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Subtle radial light gradients from the Professional Polish theme */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0A8F6A_1.5px,transparent_1.5px)] [background-size:32px_32px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text Content (7 cols on large screens) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold tracking-wider text-brand-green uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              ISO Certified Community Pharmacy
            </span>
            
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]">
              Your Family's Health, <br/>
              <span className="text-brand-green">Our Primary Care.</span>
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Providing 100% genuine medicines, baby hygiene essentials, surgical supplies, and home diagnostics with professional storage protocols in Gaya, Bihar since 1995.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <a
                href="tel:08797611171"
                className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3.5 px-8 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Store Helpline</span>
              </a>
              
              <button
                onClick={() => {
                  const element = document.getElementById('whatsapp-order-section');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold py-3.5 px-8 rounded-full flex items-center justify-center transition-all cursor-pointer hover:border-brand-green"
              >
                <MessageSquare className="w-5 h-5 mr-2 text-brand-green" />
                <span>WhatsApp Order Form</span>
              </button>

              <a
                href="https://maps.google.com/?q=Munna+Medical+Hall+Bata+more+Tekari+Rd+Maroof+Ganj+Gaya+Bihar+823001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/40 hover:bg-slate-800/60 text-slate-300 font-medium py-3.5 px-6 rounded-full flex items-center justify-center transition-all border border-slate-700 text-sm"
              >
                <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
                <span>Get Directions</span>
              </a>
            </div>
            
            {/* Rapid Trust Badges with exact values from Design HTML */}
            <div className="pt-8 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0 border-t border-slate-800/60 text-left">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold tracking-wider">Genuine Meds</p>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">24/7</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold tracking-wider">Order Support</p>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <p className="text-2xl sm:text-3xl font-extrabold text-white">15k+</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase font-semibold tracking-wider">Happy Patients</p>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Bento Grid Layout (6 cols on large screens) */}
          <div className="lg:col-span-6 relative h-full flex items-center justify-center mt-8 lg:mt-0">
            <div className="absolute w-80 h-80 bg-brand-green/10 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4 w-full max-w-lg">
              
              {/* Card 1: Prescription Care */}
              <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 text-left card-hover">
                <div className="w-11 h-11 bg-emerald-50 dark:bg-emerald-950/50 text-brand-green rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">Prescription Care</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  Authorized verification and precise storage of critical clinical capsules.
                </p>
              </div>

              {/* Card 2: Baby & Personal */}
              <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 text-left card-hover mt-6 lg:mt-12">
                <div className="w-11 h-11 bg-sky-50 dark:bg-sky-950/50 text-sky-500 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">Baby & Hygiene</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  Premium skincare formulations, diapers, and nutrition supplements.
                </p>
              </div>

              {/* Card 3: Surgical Supplies */}
              <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800 text-left card-hover -mt-6 lg:-mt-12">
                <div className="w-11 h-11 bg-purple-50 dark:bg-purple-950/50 text-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Activity className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">Surgical Items</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  High-grade clinical supports, blood pressure gauges, and first-aid gear.
                </p>
              </div>

              {/* Card 4: Find Us Accent Block */}
              <div className="bg-brand-green p-5 sm:p-6 rounded-[2rem] shadow-xl text-left text-white card-hover">
                <div className="w-11 h-11 bg-white/20 text-white rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <h4 className="font-bold text-white text-sm sm:text-base uppercase tracking-widest text-xs">Find Our Store</h4>
                <p className="text-xs text-emerald-100 mt-2 leading-relaxed font-semibold">
                  Bata More, Tekari Road, Maroof Ganj, Gaya. Visit us 7-days a week!
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. Medicine Search Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <h2 className="font-display text-3xl font-extrabold text-slate-800 dark:text-white">
            Medicines & Wellness Database
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Browse prices and components instantly. Direct WhatsApp query available for itemized pricing quotes.
          </p>
        </div>
        <MedicineSearch />
      </section>

      {/* 3. Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="font-display text-3xl font-extrabold text-slate-800 dark:text-white">
            Why Choose Munna Medical Hall?
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Our priority is to keep premium medical care accessible, honest, and compassionate for the citizens of Gaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-display text-lg font-bold text-slate-800 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Our Services Highlights */}
      <section className="bg-slate-50 dark:bg-slate-950/40 py-12 px-4 sm:px-6 lg:px-8 rounded-3xl border border-slate-100/50 dark:border-slate-800/40 max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-slate-800 dark:text-white">
              Professional Retail Services
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Providing holistic medical inventory and healthcare devices support for domestic setups.
            </p>
          </div>
          <button
            onClick={() => setActiveTab('services')}
            className="text-brand-green font-semibold text-sm flex items-center hover:underline cursor-pointer"
          >
            <span>View All 12 Services</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((srv) => (
            <div
              key={srv.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <h4 className="font-display text-lg font-bold text-slate-800 dark:text-white mb-2 flex items-center">
                <span className="w-1.5 h-6 bg-brand-green rounded-full mr-2.5 shrink-0" />
                {srv.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                {srv.description}
              </p>
              
              <ul className="space-y-1.5">
                {srv.features.slice(0, 2).map((f, i) => (
                  <li key={i} className="text-[11px] font-medium text-slate-700 dark:text-slate-300 flex items-center">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-green mr-2 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Working Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="font-display text-3xl font-extrabold text-slate-800 dark:text-white">
            How to Buy / Order Your Medicines
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            A simple, secure, and systematic process designed to guarantee patient medication safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {WORKING_PROCESS.map((proc, idx) => (
            <div key={idx} className="relative text-center space-y-3 p-4">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center mx-auto shadow-md relative group-hover:scale-105 transition-all">
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-brand-green text-white text-xs font-black rounded-full flex items-center justify-center">
                  {proc.step}
                </span>
                {idx === 0 && <Clipboard className="w-7 h-7 text-brand-green" />}
                {idx === 1 && <Shield className="w-7 h-7 text-brand-green" />}
                {idx === 2 && <Package className="w-7 h-7 text-brand-green" />}
                {idx === 3 && <Coins className="w-7 h-7 text-brand-green" />}
              </div>
              <h4 className="font-display font-bold text-slate-800 dark:text-white text-base">
                {proc.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                {proc.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Why Customers Trust Us Segment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="font-display text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Why Customers Trust Munna Medical Hall
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Since our inception in Gaya, we have prioritizing genuine medical stock and strict compliance with medical rules over commercial profit. Every patient receives compassionate counseling and maximum affordability.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 p-3 bg-white dark:bg-slate-900 border border-slate-50 dark:border-slate-800 rounded-xl">
                <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden aspect-video border border-slate-100 dark:border-slate-800 shadow-xl bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop"
            alt="Munna Medical Hall Trustworthiness"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
            <p className="text-white text-sm font-semibold max-w-md italic">
              "We follow strict vaccine and insulin temperature cooling codes to keep bio-actives 100% stable."
            </p>
          </div>
        </div>
      </section>

      {/* 7. Customer Testimonials Segment */}
      <section id="testimonials-section" className="bg-slate-50 dark:bg-slate-950/40 py-16 px-4 sm:px-6 lg:px-8 rounded-3xl border border-slate-100/50 dark:border-slate-800/40 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="font-display text-3xl font-extrabold text-slate-800 dark:text-white">
            What Customers are Saying
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
            Read direct feedback from Gaya residents who have chosen us as their primary wellness supplier.
          </p>
        </div>

        {/* Masonry Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/60 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-200 space-y-4"
            >
              {/* Star Rating */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < test.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200 dark:text-slate-700'
                    }`}
                  />
                ))}
              </div>

              {/* Review Comment */}
              <p className="text-xs text-slate-500 dark:text-slate-400 italic leading-relaxed">
                "{test.comment}"
              </p>

              {/* Author Info */}
              <div className="pt-3 border-t border-slate-50 dark:border-slate-800 flex justify-between items-center text-xs">
                <div>
                  <span className="font-bold text-slate-800 dark:text-white block">
                    {test.name}
                  </span>
                  <span className="text-slate-400 text-[10px]">{test.role}</span>
                </div>

                <div className="text-right">
                  <span className="px-2 py-0.5 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded font-mono text-[9px] text-slate-400 block font-bold">
                    {test.location}
                  </span>
                  <span className="text-[9px] text-slate-400 block mt-0.5">{test.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 8. FAQ Section Accordion */}
      <section id="faq-section" className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="font-display text-3xl font-extrabold text-slate-800 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Find immediate answers regarding prescription compliance, ordering, returns, and discounts.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between font-display font-bold text-sm sm:text-base text-slate-800 dark:text-white hover:text-brand-green dark:hover:text-brand-green cursor-pointer focus:outline-none"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-green' : ''}`} />
                </button>
                
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-50 dark:border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-display text-2xl font-extrabold text-slate-800 dark:text-white">
            Store Location & Map
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Bata more, Tekari Rd, Maroof Ganj, Gaya, Bihar 823001
          </p>
        </div>

        {/* High-quality embedded Google Map Iframe pointing to Tekari Road Gaya */}
        <div className="w-full h-96 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl relative bg-slate-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.111894451034!2d84.9972332!3d24.7955513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bf9c8c5c7bb%3A0xc39f88c59f0f9b8c!2sTekari%20Rd%2C%20Gaya%2C%20Bihar%20823001!5e0!3m2!1sen!2sin!4v1689234850000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </section>

    </div>
  );
}
