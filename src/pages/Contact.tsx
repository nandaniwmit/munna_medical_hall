import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { ContactFormInput } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormInput, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: Partial<Record<keyof ContactFormInput, string>> = {};
    if (!formData.name.trim()) tempErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Please enter your phone number';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s+/g, ''))) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please enter your message or question';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    // Simulate successful form dispatch
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', email: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  const quickInquiryWhatsApp = () => {
    const text = `Hello *Munna Medical Hall*,\n\nMy Name is *${formData.name}* (${formData.phone}). I am writing to inquire about:\n\n📝 *Inquiry details:* ${formData.message}\n\nPlease get back to me. Thank you!`;
    const url = `https://wa.me/918797611171?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const storeHours = [
    { day: 'Monday', hours: '08:30 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '08:30 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '08:30 AM - 10:00 PM' },
    { day: 'Thursday', hours: '08:30 AM - 10:00 PM' },
    { day: 'Friday', hours: '08:30 AM - 10:00 PM' },
    { day: 'Saturday', hours: '08:30 AM - 10:00 PM' },
    { day: 'Sunday', hours: '08:30 AM - 10:00 PM' }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-b-[2rem] py-12 md:py-16 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono tracking-wider text-brand-green uppercase font-bold">Get In Touch</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Contact Munna Medical Hall
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Need urgent medication availability checks or customized first-aid boxes? Connect with our desk directly or drop an email inquiry.
          </p>
        </div>
      </section>

      {/* 2. Direct Coordinates Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Business details & hours (5 cols) */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-extrabold text-slate-800 dark:text-white">
              Connect With Us
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We are located at Bata More on Tekari Road. Feel free to call us for instant queries or drop by during operating hours.
            </p>
          </div>

          {/* Coordinates lists */}
          <div className="space-y-4">
            {/* Address */}
            <div className="flex items-start space-x-4 p-4 bg-white dark:bg-slate-900 border border-slate-50 dark:border-slate-800 rounded-2xl shadow-sm">
              <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 text-brand-green rounded-xl shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider">Store Location</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white block mt-0.5 leading-snug">
                  Bata more, Tekari Rd, Maroof Ganj, Gaya, Bihar 823001
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 p-4 bg-white dark:bg-slate-900 border border-slate-50 dark:border-slate-800 rounded-2xl shadow-sm">
              <div className="p-2.5 bg-blue-50 dark:bg-blue-950/40 text-brand-blue rounded-xl shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider font-bold">Helpline Number</span>
                <a href="tel:08797611171" className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white block mt-0.5 hover:underline">
                  08797611171 (Click to Call)
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 p-4 bg-white dark:bg-slate-900 border border-slate-50 dark:border-slate-800 rounded-2xl shadow-sm">
              <div className="p-2.5 bg-purple-50 dark:bg-purple-950/40 text-purple-500 rounded-xl shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider font-bold">Email Inbox</span>
                <a href="mailto:nandani.wmit@gmail.com" className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 block mt-0.5">
                  nandani.wmit@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours list */}
          <div className="bg-slate-50 dark:bg-slate-950/40 p-6 rounded-3xl border border-slate-100 dark:border-slate-800/60 space-y-4">
            <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-base flex items-center">
              <Clock className="w-5 h-5 mr-2 text-brand-green shrink-0" /> Store Operating Hours
            </h4>
            
            <div className="divide-y divide-slate-200/50 dark:divide-slate-800/50 text-xs text-slate-600 dark:text-slate-400">
              {storeHours.map((sh, idx) => (
                <div key={idx} className="flex justify-between py-2">
                  <span className="font-semibold">{sh.day}</span>
                  <span className="font-mono text-slate-700 dark:text-slate-300 font-medium">{sh.hours}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Interactive Inquiry Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-xl p-6 sm:p-8">
            
            {isSubmitted ? (
              /* Success layout */
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950 text-brand-green rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 animate-pulse-slow" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display text-2xl font-black text-slate-800 dark:text-white">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-800 dark:text-white">{formData.name}</span>. Your healthcare query has been recorded. Our clinical pharmacist will review details and reply shortly.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={quickInquiryWhatsApp}
                    className="px-5 py-2.5 bg-brand-green hover:bg-brand-green-dark text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-1.5 transition-all shadow-md shadow-emerald-100 dark:shadow-none"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-xl transition-all"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              /* Actual Form */
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-800 dark:text-white">
                    Send a Quick Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out our dispatch queue for quick clinical feedback.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sanjeev Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.name ? 'border-red-500 ring-2 ring-red-100 dark:ring-red-950' : 'border-slate-200 dark:border-slate-700'
                      } bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-900 transition-all`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.name}</p>}
                  </div>

                  {/* Phone and Email fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border ${
                          errors.phone ? 'border-red-500 ring-2 ring-red-100 dark:ring-red-950' : 'border-slate-200 dark:border-slate-700'
                        } bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-900 transition-all`}
                      />
                      {errors.phone && <p className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. sanjeev@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border ${
                          errors.email ? 'border-red-500 ring-2 ring-red-100 dark:ring-red-950' : 'border-slate-200 dark:border-slate-700'
                        } bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-900 transition-all`}
                      />
                      {errors.email && <p className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.email}</p>}
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Inquiry / Message Details *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Type details about the medicine, device, or support item you need..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.message ? 'border-red-500 ring-2 ring-red-100 dark:ring-red-950' : 'border-slate-200 dark:border-slate-700'
                      } bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-900 transition-all`}
                    />
                    {errors.message && <p className="text-[10px] text-red-500 mt-1 flex items-center"><AlertCircle className="w-3.5 h-3.5 mr-1" /> {errors.message}</p>}
                  </div>

                  {/* Actions */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center shadow-lg transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4 mr-2" /> Send Inquiry Message
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>

      </section>

      {/* 3. Embedded Google Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="text-center">
          <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-xl">Find Us On Google Maps</h4>
          <p className="text-xs text-slate-400 mt-0.5">Quick access for navigations & curbside pickups</p>
        </div>
        
        <div className="w-full h-80 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg relative bg-slate-100">
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
