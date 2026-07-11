import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="bg-primary-container py-section-gap border-t border-on-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none"></div>
      </div>
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-on-primary mb-6"
        >
          Join Our Mission
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-on-primary/80 text-lg max-w-2xl mx-auto mb-10"
        >
          Whether you want to volunteer your time, make a donation, or partner with us, your contribution directly impacts rural communities.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link to="/get-involved" className="bg-secondary-container text-on-primary font-bold px-8 py-4 rounded hover:opacity-90 transition-opacity">
            Make a Donation
          </Link>
          <Link to="/volunteer" className="bg-white text-primary-container font-bold px-8 py-4 rounded hover:bg-surface transition-colors">
            Become a Volunteer
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
