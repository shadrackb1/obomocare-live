import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IMAGES } from '../lib/images';

export default function ProgramDetail() {
  return (
    <>
      <header className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 w-full h-full">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            alt="Maternal Health Hero" 
            className="object-cover w-full h-full" 
            src={IMAGES.programDetail}
          />
          <div className="absolute inset-0 bg-primary-container/60 backdrop-blur-[2px]"></div>
          
          {/* Animated Blob */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
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
            <h1 className="font-display text-4xl md:text-6xl font-bold text-on-primary mb-6 leading-tight drop-shadow-sm">Maternal Health & Vital Care</h1>
            <p className="text-lg text-inverse-on-surface mb-8 opacity-90 leading-relaxed">
              Ensuring every mother and child has access to dignified, professional medical care in critical moments. We bridge the gap between remote communities and essential health services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/get-involved" className="bg-secondary-container text-white font-bold py-4 px-8 rounded hover:shadow-[0_0_20px_rgba(253,118,26,0.4)] hover:-translate-y-1 transition-all text-center">
                Support this Initiative
              </Link>
              <Link to="/stories" className="border border-on-primary text-on-primary font-bold py-4 px-8 rounded hover:bg-white/10 transition-colors text-center">
                Read Case Studies
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
          <h2 className="font-display text-4xl font-bold text-primary mb-6">The Challenge & Our Response</h2>
          <p className="text-lg text-on-surface-variant">Rural communities often face insurmountable barriers to basic healthcare. We are changing that narrative through direct, sustained action.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="h-full">
            <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-xl shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Distance Barrier</h3>
              <p className="text-on-surface-variant flex-grow">Over 60% of expecting mothers in our target regions live more than 15 miles from the nearest equipped medical facility, making emergency care nearly impossible.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="h-full">
            <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-xl shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Resource Scarcity</h3>
              <p className="text-on-surface-variant flex-grow">Local clinics often lack essential supplies, trained midwives, and basic sanitary equipment needed for safe deliveries.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="lg:row-span-2 h-full">
            <div className="bg-primary-container p-8 rounded-xl h-full flex flex-col justify-center text-on-primary shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-primary-container to-secondary-container/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="font-display text-3xl font-bold text-on-primary mb-6">The OBOMOCARE Solution</h3>
                <p className="text-lg text-inverse-on-surface mb-8 opacity-90">We deploy mobile clinics and train local health workers to provide continuous care directly within the community.</p>
                <ul className="space-y-4 font-medium">
                  <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_10px_rgba(253,118,26,0.8)]"></span>
                    24/7 Mobile Emergency Transport
                  </li>
                  <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_10px_rgba(253,118,26,0.8)]"></span>
                    Fully Stocked Community Clinics
                  </li>
                  <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_10px_rgba(253,118,26,0.8)]"></span>
                    Certified Midwife Training Programs
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="md:col-span-2 rounded-xl overflow-hidden relative h-[300px] border border-outline-variant/30 group">
            <img 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              src={IMAGES.programDetailInner} 
              alt="Mobile Clinic" 
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
          <h2 className="font-display text-4xl font-bold mb-6">Support this Initiative</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">Your contribution directly funds mobile clinics, essential medical supplies, and trained professionals. Join us in making safe maternal care a reality for every community.</p>
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
