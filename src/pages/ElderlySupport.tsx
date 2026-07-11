import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useImages } from '../components/ImageProvider';

export default function ElderlySupport() {
  const IMAGES = useImages();

  return (
    <>
      <header className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 w-full h-full">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            alt="Elderly Support" 
            className="object-cover w-full h-full" 
            src={IMAGES.elderlySupport}
          />
          <div className="absolute inset-0 bg-primary-container/60 backdrop-blur-[2px]"></div>
          
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-container/30 rounded-full mix-blend-screen filter blur-[100px] opacity-60"
          />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full text-center md:text-left pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl glass-card p-8 md:p-12 rounded-xl border border-outline-variant/20 shadow-[0_0_40px_rgba(11,31,58,0.2)] backdrop-blur-md bg-surface/10"
          >
            <span className="text-secondary-container text-xs font-bold uppercase tracking-widest mb-4 block drop-shadow-sm">Program Detail</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-on-primary mb-6 leading-tight drop-shadow-sm">Elderly Support</h1>
            <p className="text-lg text-inverse-on-surface mb-8 opacity-90 leading-relaxed">
              Providing vital home-based medical care, nutritional support, and social companionship to vulnerable elderly community members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/get-involved" className="bg-secondary-container text-white font-bold py-4 px-8 rounded hover:shadow-[0_0_20px_rgba(253,118,26,0.4)] hover:-translate-y-1 transition-all text-center">
                Sponsor an Elder
              </Link>
              <Link to="/stories" className="border border-on-primary text-on-primary font-bold py-4 px-8 rounded hover:bg-white/10 transition-colors text-center">
                Read Their Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl font-bold text-primary mb-6">Aging with Dignity</h2>
          <p className="text-lg text-on-surface-variant">Our elders built our communities. It is our duty to ensure they are cared for with respect, compassion, and comprehensive medical support.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="h-full">
            <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-xl shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Medical Vulnerability</h3>
              <p className="text-on-surface-variant flex-grow">Chronic conditions are rampant among the elderly in rural areas, yet regular access to medications is incredibly rare.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="h-full">
            <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-xl shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Social Isolation</h3>
              <p className="text-on-surface-variant flex-grow">Beyond physical health, many elders suffer from severe loneliness. Social companionship is a critical part of holistic care.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="lg:row-span-2 h-full">
            <div className="bg-primary-container p-8 rounded-xl h-full flex flex-col justify-center text-on-primary shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-primary-container to-secondary-container/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="font-display text-3xl font-bold text-on-primary mb-6">Our Support Model</h3>
                <p className="text-lg text-inverse-on-surface mb-8 opacity-90">We assign dedicated health workers for regular visits, ensuring medication adherence and social connection.</p>
                <ul className="space-y-4 font-medium">
                  <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_10px_rgba(253,118,26,0.8)]"></span>
                    Routine Health Screenings
                  </li>
                  <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_10px_rgba(253,118,26,0.8)]"></span>
                    Medication Delivery & Management
                  </li>
                  <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_10px_rgba(253,118,26,0.8)]"></span>
                    Nutritional Supplements
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="md:col-span-2 rounded-xl overflow-hidden relative h-[300px] border border-outline-variant/30 group">
            <img 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              src={IMAGES.elderlySupportDetail} 
              alt="Elderly Support" 
            />
          </motion.div>
        </div>
      </section>

      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-secondary-container rounded-xl p-12 text-center text-white shadow-[0_0_40px_rgba(253,118,26,0.2)] max-w-4xl mx-auto mb-section-gap relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-container via-[#d4650a] to-secondary-container"></div>
        <div className="relative z-10">
          <h2 className="font-display text-4xl font-bold mb-6">Sponsor a Grandparent</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">Your sponsorship provides an elderly community member with consistent medical care, food, and companionship.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="bg-white text-secondary-container font-bold py-4 px-8 rounded hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
              Donate Monthly
            </Link>
            <Link to="/get-involved" className="border border-white text-white font-bold py-4 px-8 rounded hover:bg-white/10 transition-colors">
              One-time Gift
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
