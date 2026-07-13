import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import { useImages } from '../components/ImageProvider';
import PlaceholderImage from '../components/PlaceholderImage';

export default function CommunityEngagement() {
  const IMAGES = useImages();

  return (
    <>
      <header className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto text-center relative overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary-container mb-6"
        >
          Community <span className="text-secondary-container">Engagement</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto"
        >
          Building partnerships and fostering dialogue with leaders who share our vision for community empowerment and transformation.
        </motion.p>
      </header>

      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden border border-outline-variant/30 shadow-sm"
          >
            <div className="aspect-video w-full overflow-hidden">
              <PlaceholderImage imgSrc={IMAGES.team[5]} fallbackLabel="meeting1" alt="Naomi Kerubo Akuma and Fredah Kwamboka Onduso with Huldah Momanyi" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-primary mb-2">Meeting with Huldah Momanyi</h3>
              <p className="text-on-surface-variant text-sm">Naomi Kerubo Akuma and Fredah Kwamboka Onduso meeting with Huldah Momanyi, the State Representative for District 38A in Minnesota's House of Representatives. This meeting highlighted the importance of diaspora engagement and community leadership in fostering meaningful connections between Kenya and the United States.</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl overflow-hidden border border-outline-variant/30 shadow-sm"
          >
            <div className="aspect-video w-full overflow-hidden">
              <PlaceholderImage imgSrc={IMAGES.team[6]} fallbackLabel="meeting2" alt="Josephat Mose with Huldah Momanyi" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-primary mb-2">Leadership Meeting</h3>
              <p className="text-on-surface-variant text-sm">Josephat Mose meeting with Huldah Momanyi, the State Representative for District 38A in Minnesota's House of Representatives. The discussion focused on community development initiatives and ways to strengthen partnerships between Obomocare CBO and local government representatives.</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-low rounded-xl p-8 md:p-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">About Huldah Momanyi</h2>
          <p className="text-on-surface-variant mb-4">
            Huldah Momanyi serves as the State Representative for District 38A in Minnesota's House of Representatives. Her commitment to community development and public service aligns with Obomocare CBO's mission of empowering vulnerable individuals and families.
          </p>
          <p className="text-on-surface-variant">
            These meetings represent Obomocare's dedication to building strategic partnerships with elected officials and community leaders, both in Kenya and within the diaspora, to advance our shared goals of healthcare access, community empowerment, and sustainable development.
          </p>
        </motion.div>
      </section>
      
      <CTA />
    </>
  );
}