import React, { useState, useMemo } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Search } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'store' | 'medicines' | 'equipment' | 'customer'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  // Filtered gallery items
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoomScale(1);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoomScale(1);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === 0 ? filteredItems.length - 1 : prev! - 1));
    setZoomScale(1);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === filteredItems.length - 1 ? 0 : prev! + 1));
    setZoomScale(1);
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomScale(prev => Math.max(prev - 0.25, 1));
  };

  return (
    <div className="space-y-8">
      {/* Category Select Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {(['all', 'store', 'medicines', 'equipment', 'customer'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setLightboxIndex(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide uppercase transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-brand-green text-white shadow-md'
                : 'bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800'
            }`}
          >
            {cat === 'all' ? 'All Images' : cat}
          </button>
        ))}
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Image Wrap */}
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-950">
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Glass effect */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Title Block */}
            <div className="p-4 border-t border-slate-50 dark:border-slate-800/60">
              <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-mono text-[9px] uppercase font-bold rounded">
                {item.category}
              </span>
              <h4 className="font-display font-bold text-slate-800 dark:text-white mt-2 leading-snug">
                {item.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1 line-clamp-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-100 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between items-center py-6 px-4"
        >
          {/* Header Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between text-white z-10">
            <div>
              <span className="text-xs font-mono tracking-wider text-brand-green uppercase font-bold">
                Category: {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold truncate max-w-xs sm:max-w-md">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleZoomOut}
                disabled={zoomScale === 1}
                className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 text-white rounded-lg transition-all cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              
              <button
                onClick={handleZoomIn}
                disabled={zoomScale === 2.5}
                className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 text-white rounded-lg transition-all cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={closeLightbox}
                className="p-2 bg-white/10 hover:bg-white/20 text-white hover:text-red-400 rounded-lg transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Content Area (Slider with Left/Right chevrons) */}
          <div className="relative w-full max-w-4xl flex items-center justify-center flex-1">
            
            {/* Left Chevron */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-12 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all hover:scale-105 cursor-pointer z-10 hidden sm:block"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Frame */}
            <div className="relative max-h-[60vh] max-w-full overflow-hidden rounded-2xl flex items-center justify-center">
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                referrerPolicy="no-referrer"
                style={{ transform: `scale(${zoomScale})` }}
                className="max-h-[60vh] max-w-full object-contain rounded-xl transition-transform duration-300 select-none cursor-grab active:cursor-grabbing"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Right Chevron */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-12 p-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full transition-all hover:scale-105 cursor-pointer z-10 hidden sm:block"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Footer Bar (Description + Swipe guides) */}
          <div className="w-full max-w-3xl text-center text-slate-300 z-10 space-y-3">
            <p className="text-sm max-w-2xl mx-auto leading-relaxed">
              {filteredItems[lightboxIndex].description}
            </p>
            
            <div className="flex items-center justify-center space-x-5 pt-2 text-xs text-slate-500 border-t border-white/5 max-w-md mx-auto">
              <button onClick={handlePrev} className="hover:text-white transition-all cursor-pointer">
                &larr; Prev
              </button>
              <span>
                {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <button onClick={handleNext} className="hover:text-white transition-all cursor-pointer">
                Next &rarr;
              </button>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
