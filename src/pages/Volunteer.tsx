import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useImages } from '../components/ImageProvider';
import PlaceholderImage from '../components/PlaceholderImage';

export default function Volunteer() {
  const IMAGES = useImages();

  return (
    <>
      <header className="py-section-gap px-4 md:px-12 max-w-3xl mx-auto text-center relative overflow-hidden">
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none" />
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-4xl md:text-6xl font-bold text-primary-container mb-6 relative z-10">Become a <span className="text-secondary-container">Volunteer</span></motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto relative z-10">Join our grassroots network of dedicated individuals driving change from within their own communities.</motion.p>
      </header>

      <section className="pb-section-gap px-4 md:px-12 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <PlaceholderImage
              imgSrc={IMAGES.volunteer}
              fallbackLabel="volunteer"
              alt="Volunteers smiling"
              className="rounded-xl shadow-lg border border-outline-variant/30"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-3xl font-bold text-primary mb-6">Why Volunteer with Us?</h2>
            <ul className="space-y-6">
              <li className="flex items-start"><div className="bg-secondary-container/10 p-3 rounded-full mr-4 text-secondary-container flex-shrink-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div><div><h3 className="font-bold text-primary text-xl mb-2">Direct Community Impact</h3><p className="text-on-surface-variant">Your time directly benefits families in need, with no administrative bureaucracy in the way.</p></div></li>
              <li className="flex items-start"><div className="bg-secondary-container/10 p-3 rounded-full mr-4 text-secondary-container flex-shrink-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div><div><h3 className="font-bold text-primary text-xl mb-2">Professional Training</h3><p className="text-on-surface-variant">Receive comprehensive training in first aid, caregiver skills, and community health advocacy.</p></div></li>
              <li className="flex items-start"><div className="bg-secondary-container/10 p-3 rounded-full mr-4 text-secondary-container flex-shrink-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div><div><h3 className="font-bold text-primary text-xl mb-2">Flexible Commitment</h3><p className="text-on-surface-variant">Whether you have two hours a week or two days a month, we have a role for you.</p></div></li>
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="pb-section-gap px-4 md:px-12 max-w-container-max mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-primary mb-4">Life as a Volunteer</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">A glimpse into the daily moments that make volunteering with OBOMOCARE so rewarding.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-xl overflow-hidden h-48 md:h-64 group">
            <PlaceholderImage imgSrc={IMAGES.volunteerCorpsDetail} fallbackLabel="volunteerCorpsDetail" alt="Training session" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="rounded-xl overflow-hidden h-48 md:h-64 group">
            <PlaceholderImage imgSrc={IMAGES.foodSupportDetail} fallbackLabel="foodSupportDetail" alt="Food distribution" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="rounded-xl overflow-hidden h-48 md:h-64 group">
            <PlaceholderImage imgSrc={IMAGES.elderlySupportDetail} fallbackLabel="elderlySupportDetail" alt="Elderly care" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="rounded-xl overflow-hidden h-48 md:h-64 group">
            <PlaceholderImage imgSrc={IMAGES.maternalHealthDetail} fallbackLabel="maternalHealthDetail" alt="Health outreach" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20 px-4 md:px-12 border-t border-primary-container/5">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-primary mb-4">Volunteer Application Form</h2>
            <p className="text-on-surface-variant">Fill out the form below and our coordinator will reach out to you within 48 hours.</p>
          </motion.div>

          <form className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div><label className="block text-sm font-bold text-primary mb-2" htmlFor="firstName">First Name</label><input type="text" id="firstName" className="w-full p-3 border border-outline-variant/50 rounded focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none transition-colors" placeholder="Jane" /></div>
              <div><label className="block text-sm font-bold text-primary mb-2" htmlFor="lastName">Last Name</label><input type="text" id="lastName" className="w-full p-3 border border-outline-variant/50 rounded focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none transition-colors" placeholder="Doe" /></div>
            </div>
            <div className="mb-6"><label className="block text-sm font-bold text-primary mb-2" htmlFor="email">Email Address</label><input type="email" id="email" className="w-full p-3 border border-outline-variant/50 rounded focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none transition-colors" placeholder="jane@example.com" /></div>
            <div className="mb-6"><label className="block text-sm font-bold text-primary mb-2" htmlFor="interest">Area of Interest</label><select id="interest" className="w-full p-3 border border-outline-variant/50 rounded focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none transition-colors"><option>Volunteer Caregiver Corps</option><option>Food Distribution Logistics</option><option>Elderly Companionship</option><option>Administrative Support</option><option>Other / Not Sure Yet</option></select></div>
            <div className="mb-8"><label className="block text-sm font-bold text-primary mb-2" htmlFor="message">Briefly tell us why you want to join</label><textarea id="message" rows={4} className="w-full p-3 border border-outline-variant/50 rounded focus:border-secondary-container focus:ring-1 focus:ring-secondary-container outline-none transition-colors resize-none" placeholder="I am passionate about..."></textarea></div>
            <button type="button" onClick={(e) => { e.preventDefault(); alert('Application submitted successfully! We will contact you soon.'); }} className="w-full bg-secondary-container text-white font-bold py-4 rounded hover:opacity-90 transition-opacity">Submit Application</button>
          </form>
        </div>
      </section>
    </>
  );
}
