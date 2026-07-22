import { useState, useMemo } from 'react';
import { Search, Info, HelpCircle, Pill, MessageSquare, AlertCircle, ShoppingCart } from 'lucide-react';
import { MEDICINES_DATABASE, CATEGORIES } from '../data/mockData';
import { Medicine } from '../types';

export default function MedicineSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter medicines list based on search and category
  const filteredMedicines = useMemo(() => {
    return MEDICINES_DATABASE.filter((med) => {
      const matchesSearch = 
        med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        med.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        med.manufacturer.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleInquireWhatsApp = (medicine: Medicine) => {
    const text = `Hello *Munna Medical Hall*,\n\nI am inquiring about the availability of the following medicine:\n\n💊 *Medicine Name:* ${medicine.name}\n🔬 *Generic Composition:* ${medicine.genericName}\n📦 *Packaging:* ${medicine.packaging}\n🏢 *Manufacturer:* ${medicine.manufacturer}\n💰 *Price Listed:* ₹${medicine.price.toFixed(2)}\n\nIs this currently in stock and ready for purchase/delivery?\n\nThank you!`;
    const whatsappUrl = `https://wa.me/918797611171?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      {/* Search Header Container */}
      <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-slate-900/60 dark:to-slate-950/60 border border-blue-100/50 dark:border-slate-800 p-6 md:p-8 rounded-3xl">
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-6">
          <h3 className="font-display text-2xl font-bold text-slate-800 dark:text-white">
            Search Medicine Inventory & Prices
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Search our comprehensive database for standard medicines, OTC remedies, pediatric care, and surgical products.
          </p>
        </div>

        {/* Input Box */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 h-5 text-slate-400 dark:text-slate-500" />
          </div>
          <input
            type="text"
            placeholder="Type brand name (e.g. Dolo, Glycomet, Pan-40) or generic formula..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-emerald-100 dark:focus:ring-emerald-950 shadow-sm transition-all"
          />
        </div>
      </div>

      {/* Category Tags Row */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-3.5 pt-1.5 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
            selectedCategory === 'All'
              ? 'bg-brand-green text-white shadow-md'
              : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
          }`}
        >
          All Medicines
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-all cursor-pointer ${
              selectedCategory === cat.name
                ? 'bg-brand-green text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300'
          }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid of Filtered Results */}
      {filteredMedicines.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map((med) => (
            <div
              key={med.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between group"
            >
              <div>
                {/* Badge and Stock */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-950/40 text-brand-blue dark:text-blue-400 font-mono text-[10px] font-bold uppercase rounded">
                    {med.category}
                  </span>
                  
                  <span className="flex items-center text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                    In Stock
                  </span>
                </div>

                {/* Names */}
                <h4 className="font-display text-lg font-bold text-slate-800 dark:text-white group-hover:text-brand-green transition-colors">
                  {med.name}
                </h4>
                <p className="text-xs text-slate-400 dark:text-slate-500 italic mt-0.5 font-medium">
                  {med.genericName}
                </p>

                {/* Properties */}
                <div className="mt-3.5 space-y-1.5 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-50 dark:border-slate-800 pt-3">
                  <div className="flex justify-between">
                    <span>Packaging:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{med.packaging}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Manufacturer:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">{med.manufacturer}</span>
                  </div>
                </div>

                {/* Short Desc */}
                <p className="text-xs text-slate-400 mt-3 bg-slate-50 dark:bg-slate-950/50 p-2.5 rounded-xl border border-slate-100/50 dark:border-slate-800/40 leading-relaxed">
                  {med.description}
                </p>
              </div>

              {/* Price and Action Button */}
              <div className="mt-5 pt-3.5 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold uppercase">Retail Price</span>
                  <span className="text-xl font-display font-black text-slate-800 dark:text-white">
                    ₹{med.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() => handleInquireWhatsApp(med)}
                  className="bg-emerald-50 dark:bg-emerald-950 hover:bg-brand-green hover:text-white dark:hover:bg-brand-green text-brand-green dark:text-emerald-400 font-semibold text-xs py-2 px-3.5 rounded-xl flex items-center space-x-1.5 transition-all duration-200 cursor-pointer border border-emerald-100/60 dark:border-emerald-900/50"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire Stock</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      ) : (
        /* Empty Fallback State */
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 max-w-xl mx-auto space-y-4">
          <div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/40 text-amber-500 rounded-full flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6 animate-bounce" />
          </div>
          <div className="space-y-1.5">
            <h4 className="font-display text-lg font-bold text-slate-800 dark:text-white">Medicine Not Listed Online?</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              We cataloged our most common medications online, but physically store <span className="font-semibold text-brand-green">10,000+ different healthcare drugs and products</span>!
            </p>
          </div>
          
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:08797611171"
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-1.5"
            >
              <Pill className="w-3.5 h-3.5" />
              <span>Call Us: 08797611171</span>
            </a>
            
            <a
              href="https://wa.me/918797611171?text=Hello%20Munna%20Medical%20Hall%2C%20I%20am%20looking%20for%20a%20specific%20medicine%20not%20listed%20on%20the%20website.%20Can%20you%20confirm%20its%20availability%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-brand-green hover:bg-brand-green-dark text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center space-x-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
