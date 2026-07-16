import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useImages } from '../components/ImageProvider';
import PlaceholderImage from '../components/PlaceholderImage';
import { usePageTitle } from '../components/SEO';

export default function FoodSupport() {
  usePageTitle('Food Support');
  const IMAGES = useImages();

  return (
    <>
      <header className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 w-full h-full">
          <PlaceholderImage
            imgSrc={IMAGES.foodSupport}
            fallbackLabel="foodSupport"
            alt="Food Support"
            className="object-cover w-full h-full"
            eager
          />

        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-12 w-full text-center md:text-left pt-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 md:p-12 shadow-[0_0_40px_rgba(11,31,58,0.2)]">
            <span className="text-secondary-container text-xs font-bold uppercase tracking-widest mb-4 block drop-shadow-sm">Program Detail</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-on-primary mb-6 leading-tight drop-shadow-sm">Food Support & Nutrition</h1>
            <p className="text-lg text-inverse-on-surface mb-8 opacity-90 leading-relaxed">Tackling food insecurity head-on through direct delivery of nutrient-dense food baskets to families, ensuring stability and health in times of crisis.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/get-involved" className="bg-secondary-container text-white font-bold py-4 px-8 rounded hover:shadow-[0_0_20px_rgba(253,118,26,0.4)] hover:-translate-y-1 transition-all text-center">Fund a Food Basket</Link>
              <Link to="/stories" className="border border-on-primary text-on-primary font-bold py-4 px-8 rounded hover:bg-white/10 transition-colors text-center">Read Impact Stories</Link>
            </div>
          </motion.div>
        </div>
      </header>

      <section className="py-20 md:py-32 px-4 md:px-12 max-w-container-max mx-auto bg-white">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-primary mb-6">Alleviating Hunger Together</h2>
          <p className="text-lg text-on-surface-variant">Food security is the foundation of community resilience. Without it, education, health, and economic stability are impossible.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="h-full">
            <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-xl shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">The Hunger Gap</h3>
              <p className="text-on-surface-variant flex-grow">Economic shocks and localized droughts have created severe food shortages, leaving many children and elderly malnourished.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="h-full">
            <div className="bg-surface-container-lowest border border-outline-variant/30 p-8 rounded-xl shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              <h3 className="font-display text-2xl font-bold text-primary mb-4">Nutritional Deficits</h3>
              <p className="text-on-surface-variant flex-grow">A lack of balanced diets leads to long-term developmental issues in children and weakened immune systems in adults.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="lg:row-span-2 h-full">
            <div className="bg-primary-container p-8 rounded-xl h-full flex flex-col justify-center text-on-primary shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-primary-container to-secondary-container/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="font-display text-3xl font-bold text-on-primary mb-6">Our Distribution Network</h3>
                <p className="text-lg text-inverse-on-surface mb-8 opacity-90">We source locally where possible and deliver directly to the most vulnerable households.</p>
                <ul className="space-y-4 font-medium">
                  <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform"><span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_10px_rgba(253,118,26,0.8)]"></span>Bi-Weekly Family Baskets</li>
                  <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform"><span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_10px_rgba(253,118,26,0.8)]"></span>Emergency Crisis Rations</li>
                  <li className="flex items-center gap-3 transform hover:translate-x-2 transition-transform"><span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_10px_rgba(253,118,26,0.8)]"></span>Nutritional Education</li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="md:col-span-2 rounded-xl overflow-hidden relative h-[300px] border border-outline-variant/30 group">
            <PlaceholderImage
              imgSrc={IMAGES.foodSupportDetail}
              fallbackLabel="foodSupportDetail"
              alt="Food Distribution"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-secondary-container rounded-xl p-12 text-center text-white shadow-[0_0_40px_rgba(253,118,26,0.2)] max-w-4xl mx-auto mb-section-gap relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-container via-[#d4650a] to-secondary-container"></div>
        <div className="relative z-10">
          <h2 className="font-display text-4xl font-bold mb-6">Feed a Family</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">A small donation can secure a family's meals for an entire month. Join our fight against hunger today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="bg-white text-secondary-container font-bold py-4 px-8 rounded hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">Donate Monthly</Link>
            <Link to="/get-involved" className="border border-white text-white font-bold py-4 px-8 rounded hover:bg-white/10 transition-colors">One-time Gift</Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}
