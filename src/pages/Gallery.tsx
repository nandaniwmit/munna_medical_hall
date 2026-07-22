import GallerySection from '../components/GallerySection';

export default function Gallery() {
  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-b-[2rem] py-12 md:py-16 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono tracking-wider text-brand-green uppercase font-bold">Visual Storefront</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl">
            Our Store Gallery & Facilities
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Take a visual tour of Munna Medical Hall. Explore our categorized medicine shelves, certified diagnostics inventory, and patient consulting desks.
          </p>
        </div>
      </section>

      {/* 2. Gallery Masonry section wrapper */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GallerySection />
      </section>

    </div>
  );
}
