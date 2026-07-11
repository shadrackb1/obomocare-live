import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Car, ShieldPlus, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { IMAGES } from '../lib/images';

export default function Home() {

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20 -mt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="OBOMOCARE community gathering at sunset" 
            className="w-full h-full object-cover object-center scale-105" 
            src={IMAGES.homeHero} 
          />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]"></div>
          
          {/* Animated Gradient Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-container/40 rounded-full mix-blend-screen filter blur-[100px] opacity-70"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -40, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-container/40 rounded-full mix-blend-screen filter blur-[100px] opacity-70"
          />
        </div>
        
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-[40px] md:text-[72px] font-bold text-on-primary mb-stack-md leading-tight tracking-tight"
          >
            Delivering care.<br/>Restoring dignity.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-body-lg text-lg md:text-xl text-inverse-on-surface mb-stack-lg max-w-2xl mx-auto opacity-90"
          >
            We bring aid to the households formal systems keep missing in Kisii and Nyamira.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <Link to="/impact" className="relative overflow-hidden group bg-secondary-container text-on-primary font-bold px-8 py-4 rounded transition-all shadow-sm w-full sm:w-auto text-center">
              <span className="relative z-10">See Our Impact</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-[2] bg-white/20"></div>
            </Link>
            <Link to="/stories/mama-kerubo" className="border border-on-primary text-on-primary font-bold px-8 py-4 rounded hover:bg-white/10 transition-all w-full sm:w-auto text-center backdrop-blur-sm">
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <section className="bg-secondary-container py-4 overflow-hidden border-y border-white/10">
        <div className="flex w-max">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-12 px-6 items-center text-on-primary font-bold tracking-widest uppercase text-sm"
          >
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span>Zero Administrative Fees</span>
                <span className="w-2 h-2 rounded-full bg-white/50"></span>
                <span>Community Driven</span>
                <span className="w-2 h-2 rounded-full bg-white/50"></span>
                <span>Grassroots Impact</span>
                <span className="w-2 h-2 rounded-full bg-white/50"></span>
                <span>100% Transparent</span>
                <span className="w-2 h-2 rounded-full bg-white/50"></span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-lowest border-b border-primary-container/5 relative overflow-hidden" id="impact">
        {/* Shimmer effect background */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary-container to-transparent opacity-50"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center border border-primary-container/5 rounded-xl overflow-hidden bg-surface">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-stack-lg relative group border-b md:border-b-0 md:border-r border-primary-container/5">
              <div className="font-display text-4xl md:text-5xl font-bold text-secondary-container mb-stack-sm group-hover:scale-110 transition-transform duration-300">
                <CountUp end={5000} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />+
              </div>
              <p className="font-label-sm text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Families Served</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-stack-lg relative group border-b md:border-b-0 md:border-r border-l md:border-l-0 border-primary-container/5">
              <div className="font-display text-4xl md:text-5xl font-bold text-secondary-container mb-stack-sm group-hover:scale-110 transition-transform duration-300">
                <CountUp end={120} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </div>
              <p className="font-label-sm text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Volunteers</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="p-stack-lg relative group md:border-r border-primary-container/5">
              <div className="font-display text-4xl md:text-5xl font-bold text-secondary-container mb-stack-sm group-hover:scale-110 transition-transform duration-300">
                <CountUp end={15} duration={2.5} enableScrollSpy scrollSpyOnce />
              </div>
              <p className="font-label-sm text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Communities</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="p-stack-lg relative group border-l md:border-l-0 border-primary-container/5">
              <div className="font-display text-4xl md:text-5xl font-bold text-secondary-container mb-stack-sm group-hover:scale-110 transition-transform duration-300">
                <CountUp end={100} duration={2.5} enableScrollSpy scrollSpyOnce />%
              </div>
              <p className="font-label-sm text-sm font-semibold text-on-surface-variant uppercase tracking-wider">% Transparent</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-background" id="programs">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-stack-md">Four pillars. One integrated model.</h2>
            <p className="font-body-lg text-lg text-on-surface-variant">Our holistic approach addresses immediate needs while building long-term resilience.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Link to="/programs/food-support" className="glass-card rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer flex flex-col h-full hover:shadow-[0_0_30px_rgba(253,118,26,0.15)]">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-secondary-container/10 transition-colors">
                  <Utensils className="text-primary group-hover:text-secondary-container" size={32} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-stack-sm">Food Support</h3>
                <p className="font-body-md text-on-surface-variant flex-grow">Providing nutritious staples to combat food insecurity in vulnerable households.</p>
                <div className="mt-6 flex items-center text-secondary-container font-semibold text-sm">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <Link to="/programs/volunteer-corps" className="glass-card rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer flex flex-col h-full hover:shadow-[0_0_30px_rgba(253,118,26,0.15)]">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-secondary-container/10 transition-colors">
                  <Car className="text-primary group-hover:text-secondary-container" size={32} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-stack-sm">Transport</h3>
                <p className="font-body-md text-on-surface-variant flex-grow">Ensuring access to medical facilities and essential services for those with limited mobility.</p>
                <div className="mt-6 flex items-center text-secondary-container font-semibold text-sm">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <Link to="/programs/maternal-health" className="glass-card rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer flex flex-col h-full hover:shadow-[0_0_30px_rgba(253,118,26,0.15)]">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-secondary-container/10 transition-colors">
                  <ShieldPlus className="text-primary group-hover:text-secondary-container" size={32} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-stack-sm">Personal Care</h3>
                <p className="font-body-md text-on-surface-variant flex-grow">Delivering hygiene kits and basic medical supplies to maintain health and dignity.</p>
                <div className="mt-6 flex items-center text-secondary-container font-semibold text-sm">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </Link>
            </motion.div>

            {/* Card 4 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <Link to="/programs/elderly-support" className="glass-card rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer flex flex-col h-full hover:shadow-[0_0_30px_rgba(253,118,26,0.15)]">
                <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-secondary-container/10 transition-colors">
                  <HeartHandshake className="text-primary group-hover:text-secondary-container" size={32} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-primary mb-stack-sm">Companionship</h3>
                <p className="font-body-md text-on-surface-variant flex-grow">Regular visits by volunteers to combat isolation and provide emotional support.</p>
                <div className="mt-6 flex items-center text-secondary-container font-semibold text-sm">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
