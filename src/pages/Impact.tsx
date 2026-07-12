import { Link } from 'react-router-dom';
import { ArrowRight, Download, Users, BriefcaseMedical, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import PlaceholderImage from '../components/PlaceholderImage';
import { useImages } from '../components/ImageProvider';

const barData = [
  { year: '2020', households: 1200 },
  { year: '2021', households: 2500 },
  { year: '2022', households: 4800 },
  { year: '2023', households: 7500 },
  { year: '2024', households: 12000 },
];

const lineData = [
  { year: '2020', funding: 50000 },
  { year: '2021', funding: 150000 },
  { year: '2022', funding: 320000 },
  { year: '2023', funding: 600000 },
  { year: '2024', funding: 1200000 },
];

export default function Impact() {
  const IMAGES = useImages();

  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center py-section-gap overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            imgSrc={IMAGES.impactHero}
            fallbackLabel="impactHero"
            alt="Impact"
            className="w-full h-full object-cover scale-105"
            eager
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
          <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -30, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-container/30 rounded-full mix-blend-screen filter blur-[100px] opacity-60" />
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center pt-20">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-block py-1 px-3 rounded-full bg-surface-variant text-on-surface-variant font-semibold text-xs uppercase tracking-wider mb-6 backdrop-blur-sm">Real-time Impact</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-display text-4xl md:text-7xl font-bold text-on-primary mb-8 drop-shadow-lg tracking-tight">Measuring <span className="text-secondary-container">True</span> Change.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-xl text-inverse-primary max-w-2xl mx-auto mb-12">Data-driven transparency for every life touched in the Gusii Region.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex justify-center">
            <button className="bg-secondary-container text-white font-bold py-4 px-8 rounded-full hover:shadow-[0_0_30px_rgba(253,118,26,0.4)] transition-all flex items-center space-x-2 group">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              <span>Download 2024 Transparency Report</span>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-section-gap bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center border-t-4 border-t-secondary-container hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,118,26,0.15)] h-full">
                <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-6 text-secondary-container"><Users size={32} /></div>
                <h3 className="font-display text-5xl font-bold text-primary-container mb-2">24,500</h3>
                <p className="text-on-surface-variant font-medium text-lg">Lives Impacted</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center border-t-4 border-t-primary-container hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(11,31,58,0.1)] h-full">
                <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-6 text-primary-container"><BriefcaseMedical size={32} /></div>
                <h3 className="font-display text-5xl font-bold text-primary-container mb-2">18</h3>
                <p className="text-on-surface-variant font-medium text-lg">Active Programs</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="glass-card p-8 rounded-xl flex flex-col items-center text-center border-t-4 border-t-secondary-container hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,118,26,0.15)] h-full">
                <div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center mb-6 text-secondary-container"><CheckCircle2 size={32} /></div>
                <div className="flex items-baseline mb-2">
                  <h3 className="font-display text-5xl font-bold text-primary-container">100</h3>
                  <span className="font-display text-3xl font-bold text-primary-container ml-1">%</span>
                </div>
                <p className="text-on-surface-variant font-medium text-lg">Donation Efficiency</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-lowest border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-container mb-4">Five Years of Growth</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Tracking our sustained commitment to increasing household support over time.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="glass-card p-6 md:p-8 rounded-xl flex flex-col h-[400px]">
                <h3 className="font-display text-2xl font-bold text-primary-container mb-6">Households Reached (Annual)</h3>
                <div className="flex-grow">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#7888a0'}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#7888a0'}} />
                      <Tooltip cursor={{fill: '#f2f3ff'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                      <Bar dataKey="households" fill="#0b1f3a" radius={[4, 4, 0, 0]} maxBarSize={50} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="glass-card p-6 md:p-8 rounded-xl flex flex-col h-[400px]">
                <h3 className="font-display text-2xl font-bold text-primary-container mb-6">Cumulative Community Funding ($)</h3>
                <div className="flex-grow">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#7888a0'}} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#7888a0'}} tickFormatter={(val) => `$${val/1000}k`} />
                      <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, 'Funding']} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                      <Line type="monotone" dataKey="funding" stroke="#fd761a" strokeWidth={4} dot={{r: 6, fill: '#fd761a', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 8}} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-white">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-container mb-4">Community in Focus</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Behind every number is a real story of resilience and hope.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl overflow-hidden relative h-72 md:h-96 group">
              <PlaceholderImage imgSrc={IMAGES.foodSupportDetail} fallbackLabel="foodSupportDetail" alt="Food distribution" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-secondary-container text-xs font-bold uppercase tracking-wider">Program</span>
                  <h3 className="text-white font-display text-xl font-bold mt-1">Feeding 5,000+ Families</h3>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-xl overflow-hidden relative h-72 md:h-96 group">
              <PlaceholderImage imgSrc={IMAGES.householdCareDetail} fallbackLabel="householdCareDetail" alt="Home care visit" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-secondary-container text-xs font-bold uppercase tracking-wider">Outreach</span>
                  <h3 className="text-white font-display text-xl font-bold mt-1">Doorstep Dignity Care</h3>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="rounded-xl overflow-hidden relative h-72 md:h-96 group">
              <PlaceholderImage imgSrc={IMAGES.volunteerCorpsDetail} fallbackLabel="volunteerCorpsDetail" alt="Volunteer training" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <span className="text-secondary-container text-xs font-bold uppercase tracking-wider">Training</span>
                  <h3 className="text-white font-display text-xl font-bold mt-1">120+ Certified Caregivers</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
