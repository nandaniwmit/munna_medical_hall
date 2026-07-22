import { Calendar, Shield, Award, Sparkles, Heart, Users, Target, Eye } from 'lucide-react';
import { BUSINESS_TIMELINE } from '../data/mockData';

export default function About() {
  const values = [
    { title: 'Absolute Integrity', desc: 'Sourcing strictly 100% genuine molecules with precise cash memo transparency.', icon: Shield, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40' },
    { title: 'Quality Standards', desc: 'Advanced air-conditioned cooling chambers for complex insulins, vaccines and syrup storage.', icon: Sparkles, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' },
    { title: 'Community First', desc: 'Providing highly discounted healthcare programs and emergency night-counter support.', icon: Heart, color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/40' },
    { title: 'Pharmacist Counseling', desc: 'Taking the time to explain clear drug schedules, dosages, side effects and food conflicts.', icon: Users, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40' }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-b-[2rem] py-12 md:py-16 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono tracking-wider text-brand-green uppercase font-bold">About Our Business</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Established in Gaya Since 1998
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Unwavering dedication to pharmaceutical safety, medication authenticity, and supportive healthcare solutions for generations of patients.
          </p>
        </div>
      </section>

      {/* 2. Business Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white leading-tight">
            The Story of Munna Medical Hall
          </h3>
          
          <div className="space-y-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            <p>
              Founded in 1998 on Tekari Road, Gaya, Munna Medical Hall emerged from a clear local challenge: patients in Gaya struggled to access genuine, unadulterated life-saving medicines under correct cooling conditions, often paying highly inflated rates.
            </p>
            <p>
              We established our business around simple principles: <span className="font-bold text-brand-green">Honest Pricing, Absolute Authenticity, and Caring Professional Counsel</span>. By sourcing stocks directly from corporate medical depots and recognized legal channels, we bypassed sub-standard intermediaries, passing substantial cost discounts directly to our patients.
            </p>
            <p>
              Today, Munna Medical Hall has evolved from a small retail counter into Gaya's most trusted comprehensive health store, housing over 10,000 pharmaceutical items, clinical equipment, specialized baby foods, orthopedic supports, and home nursing essentials.
            </p>
          </div>
        </div>

        <div className="relative aspect-4/3 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1631549916768-4119b255f946?q=80&w=800&auto=format&fit=crop"
            alt="Munna Medical Hall Story"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* 3. Mission, Vision & Core Values */}
      <section className="bg-slate-50 dark:bg-slate-950/40 py-16 px-4 sm:px-6 lg:px-8 rounded-[2.5rem] border border-slate-100/50 dark:border-slate-800/40 max-w-7xl mx-auto space-y-12">
        {/* Mission / Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 text-brand-green rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-slate-800 dark:text-white">Our Mission</h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To safeguard community health by ensuring every citizen of Gaya has rapid, direct access to genuine, correctly-stored medications and healthcare diagnostics at fair, transparent, and pocket-friendly prices.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-950/40 text-brand-blue rounded-2xl flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-slate-800 dark:text-white">Our Vision</h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                To become the model modern pharmacy for Bihar, combining advanced digital inventory logistics and easy WhatsApp ordering with old-school compassionate pharmacological guidance.
              </p>
            </div>
          </div>

        </div>

        {/* Core Values Segment */}
        <div className="space-y-8 pt-6">
          <h4 className="font-display text-2xl font-extrabold text-slate-800 dark:text-white text-center">
            Our Core Pillars
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-3"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${v.color}`}>
                  <v.icon className="w-5 h-5" />
                </div>
                <h5 className="font-display font-bold text-slate-800 dark:text-white text-sm">
                  {v.title}
                </h5>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline Segment */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-2">
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-800 dark:text-white">
            Our Journey Over Time
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            A chronological timeline detailing key growth cycles of Munna Medical Hall.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 sm:pl-8 space-y-10 max-w-2xl mx-auto text-left">
          {BUSINESS_TIMELINE.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Pulsing indicator node */}
              <div className="absolute -left-[31px] sm:-left-[39px] w-4 h-4 bg-white dark:bg-slate-950 border-4 border-brand-green rounded-full group-hover:scale-125 transition-transform duration-200" />
              
              <div className="space-y-1.5">
                <span className="font-display font-black text-lg text-brand-green block leading-none">
                  {item.year}
                </span>
                <h4 className="font-display font-bold text-slate-800 dark:text-white text-sm sm:text-base leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Owner Message Segment */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
          {/* Subtle decoration overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          
          <div className="relative space-y-6 max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto text-white border border-white/25">
              <Award className="w-7 h-7" />
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight">
              "Your Health is Our Sole Responsibility"
            </h3>

            <p className="text-sm sm:text-base italic leading-relaxed text-slate-100">
              "For 25+ years, we have seen patients walk into our shop anxious about their chronic treatments. Our pledge has always been to remove the financial stress of monthly medicines by delivering direct-sourcing discounts and clinical validation. At Munna Medical Hall, you are not a transaction—you are our neighborhood family."
            </p>

            <div className="pt-2">
              <span className="font-display font-black text-base block tracking-wide text-white">
                Munna Gupta
              </span>
              <span className="text-[10px] font-mono tracking-widest text-emerald-100 uppercase block font-bold mt-0.5">
                Founder & Managing Director, Munna Medical Hall
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
