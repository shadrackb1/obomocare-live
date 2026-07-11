import { Link } from 'react-router-dom';
import { Share2, BookmarkPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { IMAGES } from '../lib/images';

export default function StoryDetail() {
  return (
    <>
      <header className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center mb-12 mt-12 pt-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="text-secondary-container font-semibold text-xs uppercase tracking-widest">Health & Recovery</span>
          <span className="text-outline text-sm">•</span>
          <span className="text-on-surface-variant text-sm font-medium">5 min read</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight leading-tight"
        >
          Mama Kerubo’s Recovery
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4 text-on-surface-variant"
        >
          <button aria-label="Share" className="p-3 rounded-full hover:bg-surface-container transition-colors">
            <Share2 size={20} />
          </button>
          <button aria-label="Bookmark" className="p-3 rounded-full hover:bg-surface-container transition-colors">
            <BookmarkPlus size={20} />
          </button>
        </motion.div>
      </header>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(11,31,58,0.1)] border border-outline-variant/20 group"
        >
          <img 
            alt="Mama Kerubo" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
            src={IMAGES.story1}
          />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-right text-sm text-outline mt-3 italic px-4"
        >
          Photography by Field Team, Kisii
        </motion.p>
      </section>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-12 mb-section-gap">
        <article className="md:col-span-8 lg:col-span-7 lg:col-start-2">
          <div className="text-lg text-on-surface leading-relaxed space-y-8">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="font-display text-6xl font-bold float-left mr-3 mt-1 text-primary-container leading-none">B</span>efore the mobile clinic arrived in her village, Mama Kerubo had spent months confined to her small home. A persistent illness, untreated due to the sheer distance to the nearest hospital, had drained her strength. "I thought this was just how my life would end," she recalls, her hands resting gently in her lap.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              The rural landscapes we work in are vast and beautiful, but they present immense logistical challenges for healthcare delivery. For individuals like Kerubo, a simple diagnostic test or a course of antibiotics is often out of reach. When our outreach team finally set up their temporary station under the large baobab tree in her community, it marked a turning point.
            </motion.p>
            <motion.figure initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="my-12">
              <div className="h-64 md:h-96 w-full rounded-xl overflow-hidden bg-surface-container shadow-md group">
                <img 
                  alt="Consultation" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  src={IMAGES.maternalHealth}
                />
              </div>
              <figcaption className="text-sm text-outline mt-4 text-center italic">The initial consultation provided immediate relief and a clear treatment path.</figcaption>
            </motion.figure>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Within weeks of her diagnosis and the start of a managed treatment plan, the change was profound. The intervention wasn't just medical; it was the restoration of dignity. She is now back to tending her small garden and, more importantly, looking after her grandchildren.
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl font-bold text-primary mt-12 mb-6">A Community Transformed</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Her story is not an isolated incident. By bringing the clinic to the community, we circumvented the barriers of transportation and cost. It’s a testament to the fact that effective intervention doesn't always require massive infrastructure; sometimes, it just requires showing up where people are.
            </motion.p>
          </div>
        </article>

        <aside className="md:col-span-4 lg:col-span-3 mt-12 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32 glass-card rounded-xl p-8 border border-outline-variant/30 hover:shadow-[0_0_30px_rgba(253,118,26,0.1)] transition-shadow duration-300"
          >
            <h3 className="font-display text-2xl font-bold text-primary mb-6">The Impact</h3>
            <p className="text-on-surface-variant mb-8 text-base">
              This specific outreach mission directly altered the course of several lives in Kerubo's district.
            </p>
            <ul className="space-y-8">
              <li className="flex flex-col border-l-2 border-secondary-container pl-4 transform hover:translate-x-2 transition-transform">
                <span className="font-display text-4xl font-bold text-primary tracking-tight">45</span>
                <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mt-1">Home Visits Conducted</span>
              </li>
              <li className="flex flex-col border-l-2 border-secondary-container pl-4 transform hover:translate-x-2 transition-transform">
                <span className="font-display text-4xl font-bold text-primary tracking-tight">120</span>
                <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mt-1">Diagnostic Tests Administered</span>
              </li>
              <li className="flex flex-col border-l-2 border-secondary-container pl-4 transform hover:translate-x-2 transition-transform">
                <span className="font-display text-4xl font-bold text-primary tracking-tight">100%</span>
                <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mt-1">Follow-up Rate Achieved</span>
              </li>
            </ul>
          </motion.div>
        </aside>
      </div>

      <section className="bg-primary-container py-section-gap px-margin-mobile md:px-margin-desktop text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="font-display text-4xl font-bold text-on-primary mb-6">Support stories like this</h2>
          <p className="text-lg text-inverse-primary mb-10 opacity-90">
            Your contribution directly fuels our mobile outreach programs, ensuring more communities receive the care they desperately need.
          </p>
          <Link to="/get-involved" className="inline-block bg-secondary-container text-white font-bold text-lg px-10 py-4 rounded-full hover:shadow-[0_0_30px_rgba(253,118,26,0.4)] hover:-translate-y-1 transition-all">
            Make a Donation
          </Link>
        </motion.div>
      </section>
    </>
  );
}
