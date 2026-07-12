import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useImages } from '../components/ImageProvider';
import PlaceholderImage from '../components/PlaceholderImage';

type FilterCategory = 'all' | 'care' | 'food' | 'community';

const CATEGORIES: { key: FilterCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'care', label: 'Care' },
  { key: 'food', label: 'Food' },
  { key: 'community', label: 'Community' },
];

const IMAGE_CATEGORIES: FilterCategory[] = [
  'care', 'care', 'community', 'care',
  'food', 'community', 'food', 'community',
  'care', 'community', 'care', 'care',
  'food', 'community', 'food', 'care', 'food', 'food',
];

export default function Gallery() {
  const IMAGES = useImages();
  const allImages = IMAGES.gallery;
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredImages = activeFilter === 'all'
    ? allImages
    : allImages.filter((_, idx) => IMAGE_CATEGORIES[idx] === activeFilter);

  return (
    <>
      <section className="w-full py-section-gap px-4 md:px-12 max-w-container-max mx-auto text-center flex flex-col items-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-primary-container mb-6 relative z-10"
        >
          The Faces of Resilience
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 relative z-10 px-4"
        >
          Witness the undeniable strength, unwavering hope, and profound community spirit that drives our mission forward. Every image tells a story of survival and triumph.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-5 md:px-6 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat.key
                  ? 'border-primary-container bg-primary-container text-on-primary shadow-md'
                  : 'border-outline text-on-surface-variant hover:border-primary-container hover:text-primary-container'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </section>

      <section className="w-full px-4 md:px-12 max-w-container-max mx-auto pb-section-gap">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6"
          >
            {filteredImages.map((src, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
                key={`${activeFilter}-${idx}`} 
                className="relative group overflow-hidden rounded-xl shadow-sm cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImg(src)}
              >
                <PlaceholderImage imgSrc={src} fallbackLabel="gallery" alt={`Gallery image ${idx + 1}`} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6">
                  <p className="text-on-primary font-semibold text-sm md:text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Full Image</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {filteredImages.length === 0 && (
          <div className="text-center py-20 text-on-surface-variant">
            <p className="text-lg">No images in this category yet.</p>
          </div>
        )}
      </section>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-primary-container/95 flex items-center justify-center p-4 md:p-12 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-on-primary p-2 hover:text-secondary-container transition-colors bg-white/10 rounded-full hover:bg-white/20 z-10"
              onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={selectedImg} 
              alt="Enlarged view" 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
