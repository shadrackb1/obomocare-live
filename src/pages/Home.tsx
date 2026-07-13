import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Car, ShieldPlus, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useImages } from '../components/ImageProvider';
import PlaceholderImage from '../components/PlaceholderImage';

export default function Home() {
  const IMAGES = useImages();

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20 -mt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            imgSrc={IMAGES.homeHero}
            fallbackLabel="homeHero"
            alt="OBOMOCARE community gathering at sunset"
            className="w-full h-full object-cover object-center scale-105"
            eager
            size="hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

          <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-container/40 rounded-full mix-blend-screen filter blur-[100px] opacity-70" />
          <motion.div animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, 50, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-container/40 rounded-full mix-blend-screen filter blur-[100px] opacity-70" />
        </div>

        <div className="relative z-10 text-center px-4 md:px-12 max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="font-display text-[40px] md:text-[72px] font-bold text-on-primary mb-6 leading-tight tracking-tight">Delivering care.<br/>Restoring dignity.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} className="font-body-lg text-lg md:text-xl text-inverse-on-surface mb-8 max-w-2xl mx-auto opacity-90">We bring aid to the households formal systems keep missing in Kisii and Nyamira.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link to="/impact" className="relative overflow-hidden group bg-secondary-container text-on-primary font-bold px-8 py-4 rounded transition-all shadow-sm w-full sm:w-auto text-center"><span className="relative z-10">See Our Impact</span><div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 ease-out group-hover:scale-[2] bg-white/20"></div></Link>
            <Link to="/community-engagement" className="border border-on-primary text-on-primary font-bold px-8 py-4 rounded hover:bg-white/10 transition-all w-full sm:w-auto text-center backdrop-blur-sm">Community Engagement</Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-secondary-container py-4 overflow-hidden border-y border-white/10">
        <div className="flex w-max">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="flex gap-12 px-6 items-center text-on-primary font-bold tracking-widest uppercase text-sm">
            {[...Array(2)].map((_, i) => <React.Fragment key={i}><span>Zero Administrative Fees</span><span className="w-2 h-2 rounded-full bg-white/50"></span><span>Community Driven</span><span className="w-2 h-2 rounded-full bg-white/50"></span><span>Grassroots Impact</span><span className="w-2 h-2 rounded-full bg-white/50"></span><span>100% Transparent</span><span className="w-2 h-2 rounded-full bg-white/50"></span></React.Fragment>)}
          </motion.div>
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-lowest border-b border-primary-container/5 relative overflow-hidden" id="impact">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary-container to-transparent opacity-50"></div>
        <div className="max-w-container-max mx-auto px-4 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center border border-primary-container/5 rounded-xl overflow-hidden bg-white">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-8 relative group border-b md:border-b-0 md:border-r border-primary-container/5">
              <div className="font-display text-4xl md:text-5xl font-bold text-secondary-container mb-stack-sm group-hover:scale-110 transition-transform duration-300"><CountUp end={5000} duration={2.5} separator="," enableScrollSpy scrollSpyOnce />+</div>
              <p className="font-label-sm text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Families Served</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="p-8 relative group border-b md:border-b-0 md:border-r border-l md:border-l-0 border-primary-container/5">
              <div className="font-display text-4xl md:text-5xl font-bold text-secondary-container mb-stack-sm group-hover:scale-110 transition-transform duration-300"><CountUp end={120} duration={2.5} enableScrollSpy scrollSpyOnce />+</div>
              <p className="font-label-sm text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Volunteers</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="p-8 relative group md:border-r border-primary-container/5">
              <div className="font-display text-4xl md:text-5xl font-bold text-secondary-container mb-stack-sm group-hover:scale-110 transition-transform duration-300"><CountUp end={15} duration={2.5} enableScrollSpy scrollSpyOnce /></div>
              <p className="font-label-sm text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Communities</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="p-8 relative group border-l md:border-l-0 border-primary-container/5">
              <div className="font-display text-4xl md:text-5xl font-bold text-secondary-container mb-stack-sm group-hover:scale-110 transition-transform duration-300"><CountUp end={100} duration={2.5} enableScrollSpy scrollSpyOnce />%</div>
              <p className="font-label-sm text-sm font-semibold text-on-surface-variant uppercase tracking-wider">% Transparent</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 md:px-12 max-w-container-max mx-auto bg-white">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">Four pillars. One integrated model.</h2>
          <p className="font-body-lg text-lg text-on-surface-variant">Our holistic approach addresses immediate needs while building long-term resilience.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Link to="/programs/food-support" className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer flex flex-col h-full hover:shadow-[0_0_30px_rgba(253,118,26,0.15)]">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-secondary-container/10 transition-colors"><Utensils className="text-primary group-hover:text-secondary-container" size={32} /></div>
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">Food Support</h3>
              <p className="text-on-surface-variant flex-grow">Providing nutritious staples to combat food insecurity in vulnerable households.</p>
              <div className="mt-6 flex items-center text-secondary-container font-semibold text-sm"><span>Learn more</span><ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} /></div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/programs/volunteer-corps" className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer flex flex-col h-full hover:shadow-[0_0_30px_rgba(253,118,26,0.15)]">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-secondary-container/10 transition-colors"><Car className="text-primary group-hover:text-secondary-container" size={32} /></div>
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">Transport</h3>
              <p className="text-on-surface-variant flex-grow">Ensuring access to medical facilities and essential services for those with limited mobility.</p>
              <div className="mt-6 flex items-center text-secondary-container font-semibold text-sm"><span>Learn more</span><ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} /></div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link to="/programs/maternal-health" className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer flex flex-col h-full hover:shadow-[0_0_30px_rgba(253,118,26,0.15)]">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-secondary-container/10 transition-colors"><ShieldPlus className="text-primary group-hover:text-secondary-container" size={32} /></div>
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">Personal Care</h3>
              <p className="text-on-surface-variant flex-grow">Delivering hygiene kits and basic medical supplies to maintain health and dignity.</p>
              <div className="mt-6 flex items-center text-secondary-container font-semibold text-sm"><span>Learn more</span><ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} /></div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/programs/elderly-support" className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer flex flex-col h-full hover:shadow-[0_0_30px_rgba(253,118,26,0.15)]">
              <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-secondary-container/10 transition-colors"><HeartHandshake className="text-primary group-hover:text-secondary-container" size={32} /></div>
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">Companionship</h3>
              <p className="text-on-surface-variant flex-grow">Regular visits by volunteers to combat isolation and provide emotional support.</p>
              <div className="mt-6 flex items-center text-secondary-container font-semibold text-sm"><span>Learn more</span><ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} /></div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 md:px-12 max-w-container-max mx-auto bg-white">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-4">Our Work in Action</h2>
          <p className="font-body-lg text-lg text-on-surface-variant">Real moments from the communities we serve across Kisii and Nyamira.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl overflow-hidden relative h-64 md:h-80 group col-span-1">
            <PlaceholderImage imgSrc={IMAGES.foodSupportDetail} fallbackLabel="foodSupportDetail" alt="Food distribution in progress" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" size="card" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Food Distribution</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-xl overflow-hidden relative h-64 md:h-80 group col-span-1 md:row-span-2">
            <PlaceholderImage imgSrc={IMAGES.volunteerCorpsDetail} fallbackLabel="volunteerCorpsDetail" alt="Volunteers in training" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" size="card" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Volunteer Training</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="rounded-xl overflow-hidden relative h-64 md:h-80 group col-span-1">
            <PlaceholderImage imgSrc={IMAGES.maternalHealthDetail} fallbackLabel="maternalHealthDetail" alt="Maternal health outreach" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" size="card" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Maternal Health</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="rounded-xl overflow-hidden relative h-64 md:h-80 group col-span-1">
            <PlaceholderImage imgSrc={IMAGES.story1} fallbackLabel="story1" alt="Community gathering" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" size="card" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Community Impact</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="rounded-xl overflow-hidden relative h-64 md:h-80 group col-span-1">
            <PlaceholderImage imgSrc={IMAGES.elderlySupportDetail} fallbackLabel="elderlySupportDetail" alt="Elderly care visit" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" size="card" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-semibold">Elderly Care</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
