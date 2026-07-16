import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Car, ShieldPlus, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import PlaceholderImage from '../components/PlaceholderImage';
import { useImages } from '../components/ImageProvider';
import { usePageTitle } from '../components/SEO';

export default function Programs() {
  usePageTitle('Our Programs');
  const IMAGES = useImages();

  return (
    <>
      <section className="py-20 md:py-32 px-4 md:px-12 max-w-container-max mx-auto text-center relative overflow-hidden">
        
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-6xl font-bold text-primary-container mb-8 max-w-4xl mx-auto leading-tight relative z-10">Targeted Interventions.<br/><span className="text-secondary-container">Tangible Results.</span></motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto relative z-10">A comprehensive overview of our 4 service pillars designed to provide holistic support and empower communities through sustainable action.</motion.p>
      </section>

      <section className="pb-20 md:pb-32 px-4 md:px-12 max-w-container-max mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Link to="/programs/food-support" className="group relative bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col h-full transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(253,118,26,0.15)]">
              <div className="aspect-[16/9] w-full relative overflow-hidden bg-surface-container-low">
                <PlaceholderImage imgSrc={IMAGES.foodSupport} fallbackLabel="foodSupport" alt="Food Support" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-primary-container group-hover:text-secondary-container transition-colors"><Utensils size={28} /><h3 className="font-display text-2xl font-bold">Food Support</h3></div>
                <p className="text-on-surface-variant mb-8 flex-grow text-lg">Bi-weekly food baskets providing essential nutrition to vulnerable households, ensuring food security and stability.</p>
                <div className="inline-flex items-center text-secondary-container font-semibold text-sm uppercase tracking-wider group/link mt-auto">Learn More <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} /></div>
              </div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Link to="/programs/maternal-health" className="group relative bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col h-full transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(11,31,58,0.1)]">
              <div className="aspect-[16/9] w-full relative overflow-hidden bg-surface-container-low">
                <PlaceholderImage imgSrc={IMAGES.maternalHealth} fallbackLabel="maternalHealth" alt="Maternal Health" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-primary-container"><ShieldPlus size={28} /><h3 className="font-display text-2xl font-bold">Maternal Health</h3></div>
                <p className="text-on-surface-variant mb-8 flex-grow text-lg">Compassionate home-based dignity visits delivering personalized care, hygiene support, and maintaining quality of life.</p>
                <div className="inline-flex items-center text-secondary-container font-semibold text-sm uppercase tracking-wider group/link mt-auto">Learn More <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} /></div>
              </div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link to="/programs/household-care" className="group relative bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col h-full transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(11,31,58,0.1)]">
              <div className="aspect-[16/9] w-full relative overflow-hidden bg-surface-container-low">
                <PlaceholderImage imgSrc={IMAGES.householdCare} fallbackLabel="householdCare" alt="Household Care" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-primary-container"><HeartHandshake size={28} /><h3 className="font-display text-2xl font-bold">Household Care</h3></div>
                <p className="text-on-surface-variant mb-8 flex-grow text-lg">Assistance with daily living activities for the elderly and disabled, enabling them to live comfortably at home.</p>
                <div className="inline-flex items-center text-secondary-container font-semibold text-sm uppercase tracking-wider group/link mt-auto">Learn More <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} /></div>
              </div>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <Link to="/programs/volunteer-corps" className="group relative bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col h-full transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(11,31,58,0.1)]">
              <div className="aspect-[16/9] w-full relative overflow-hidden bg-surface-container-low">
                <PlaceholderImage imgSrc={IMAGES.volunteerCorps} fallbackLabel="volunteerCorps" alt="Volunteer Caregiver Corps" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4 text-primary-container"><Car size={28} /><h3 className="font-display text-2xl font-bold">Volunteer Corps</h3></div>
                <p className="text-on-surface-variant mb-8 flex-grow text-lg">Training and deploying dedicated community members to provide essential support and transportation for those in need.</p>
                <div className="inline-flex items-center text-secondary-container font-semibold text-sm uppercase tracking-wider group/link mt-auto">Learn More <ArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" size={16} /></div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20 px-4 md:px-12 border-t border-primary-container/5 relative overflow-hidden">
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-container mb-6">Ready to make an impact?</h2>
          <p className="text-lg text-on-surface-variant mb-10">Your support directly enables these programs to reach more communities in need.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/get-involved" className="bg-secondary-container text-white font-bold py-4 px-8 rounded hover:opacity-90 transition-opacity hover:shadow-[0_0_20px_rgba(253,118,26,0.3)]">Support Our Programs</Link>
            <Link to="/get-involved" className="bg-transparent border border-primary-container text-primary-container font-bold py-4 px-8 rounded hover:bg-primary-container/5 transition-colors">Become a Volunteer</Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
