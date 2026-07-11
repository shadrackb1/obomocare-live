import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { IMAGES } from '../lib/images';

const images = IMAGES.gallery;

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <section className="w-full py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary-container mb-stack-lg relative z-10"
        >
          The Faces of Resilience
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 relative z-10"
        >
          Witness the undeniable strength, unwavering hope, and profound community spirit that drives our mission forward. Every image tells a story of survival and triumph.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 relative z-10"
        >
          <button className="px-6 py-2 rounded-full border border-primary-container bg-primary-container text-on-primary text-sm font-semibold transition-opacity">All</button>
          <button className="px-6 py-2 rounded-full border border-outline text-on-surface-variant text-sm font-semibold hover:border-primary-container hover:text-primary-container transition-colors">Care</button>
          <button className="px-6 py-2 rounded-full border border-outline text-on-surface-variant text-sm font-semibold hover:border-primary-container hover:text-primary-container transition-colors">Food</button>
          <button className="px-6 py-2 rounded-full border border-outline text-on-surface-variant text-sm font-semibold hover:border-primary-container hover:text-primary-container transition-colors">Community</button>
        </motion.div>
      </section>

      <section className="w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-section-gap">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: (idx % 3) * 0.1, duration: 0.6 }}
              key={idx} 
              className="relative group overflow-hidden rounded-xl shadow-sm cursor-pointer break-inside-avoid"
              onClick={() => setSelectedImg(src)}
            >
              <img 
                src={src} 
                alt={`Gallery image ${idx + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 via-primary-container/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-on-primary font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Full Image</p>
              </div>
            </motion.div>
          ))}
        </div>
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
              className="absolute top-8 right-8 text-on-primary p-2 hover:text-secondary-container transition-colors bg-white/10 rounded-full hover:bg-white/20"
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
