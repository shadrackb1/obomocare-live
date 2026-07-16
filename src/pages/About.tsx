import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import { useImages } from '../components/ImageProvider';
import PlaceholderImage from '../components/PlaceholderImage';
import { usePageTitle } from '../components/SEO';

export default function About() {
  usePageTitle('About Us');
  const IMAGES = useImages();

  return (
    <>
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            imgSrc={IMAGES.aboutHero}
            fallbackLabel="aboutHero"
            alt="Volunteers at sunrise"
            className="w-full h-full object-cover scale-105"
            eager
          />

        </div>
        <div className="relative z-10 text-center px-4 md:px-12 max-w-container-max mx-auto w-full pt-20">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-block px-4 py-1.5 mb-6 text-on-primary border border-on-primary/30 rounded-full font-label-sm text-sm font-semibold backdrop-blur-sm bg-primary/20">OUR STORY</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-display text-4xl md:text-6xl font-bold text-on-primary mb-6 max-w-4xl mx-auto drop-shadow-lg leading-tight">Empowering Communities,<br/>Restoring Dignity.</motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-body-lg text-lg md:text-xl text-inverse-on-surface max-w-2xl mx-auto drop-shadow-md opacity-90">We believe in grassroots change. What started as a local response has grown into a movement of hope and sustainable action.</motion.p>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 md:px-12 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden group hover:shadow-[0_0_30px_rgba(253,118,26,0.1)] transition-shadow duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-surface-container-low rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-container mb-4">Our Mission</h2>
              <p className="font-body-lg text-lg text-on-surface-variant">To deliver immediate relief and foster long-term resilience in underserved communities through targeted, community-led initiatives that prioritize human dignity and sustainable development.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-8 md:p-12 shadow-sm relative overflow-hidden group hover:shadow-[0_0_30px_rgba(253,118,26,0.1)] transition-shadow duration-300">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-surface-container-low rounded-full blur-3xl -ml-10 -mb-10 transition-transform group-hover:scale-150 duration-700"></div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-container mb-4">Our Vision</h2>
              <p className="font-body-lg text-lg text-on-surface-variant">A world where every community possesses the resources, knowledge, and agency to thrive independently, free from the cycles of poverty and vulnerability.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-container/20 to-transparent"></div>
        <div className="px-4 md:px-12 max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 relative group">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative shadow-md">
                <PlaceholderImage
                  imgSrc={IMAGES.aboutFounder}
                  fallbackLabel="aboutFounder"
                  alt="Founder Mama Kerubo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-on-primary shadow-lg hover:bg-white/20 transition-colors">
                <p className="font-semibold text-xs uppercase tracking-wider text-inverse-on-surface/80">Founder</p>
                <p className="font-display text-2xl font-bold">Mama Kerubo</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0">
              <span className="text-secondary-container text-sm font-semibold uppercase tracking-widest mb-4 block">The Beginning</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-container mb-8">Born from Necessity in March 2020.</h2>
              <div className="space-y-6 text-on-surface-variant text-lg">
                <p>When the world stopped in March 2020, the silence in our streets wasn't just fear—it was hunger. As markets closed and daily wages vanished, Mama Kerubo saw families in her neighborhood skipping meals to survive the initial lockdowns.</p>
                <p>What began as a single pot of maize and beans shared over a fence quickly became a lifeline. Neighbors brought what little they had to contribute. Within weeks, that one pot grew into a community kitchen feeding hundreds of vulnerable families daily, operating entirely on trust and mutual support.</p>
                <p>OBOMOCARE was formalized not out of a desire to create an institution, but to protect and scale that initial spark of community solidarity. Today, we carry that same grassroots ethos into structured programs that address not just immediate hunger, but long-term economic resilience.</p>
              </div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-10 border-l-2 border-secondary-container pl-6 py-2">
                <p className="font-display text-2xl italic text-primary-container">"We didn't have much, but we had each other. Sometimes, that is the most powerful resource of all."</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
