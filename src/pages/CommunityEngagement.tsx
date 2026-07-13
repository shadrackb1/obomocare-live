import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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

      {/* Meeting Photos */}
      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm"
          >
            <div className="aspect-video w-full overflow-hidden">
              <PlaceholderImage imgSrc={IMAGES.team[5]} fallbackLabel="meeting1" alt="Naomi Kerubo Akuma and Fredah Kwamboka Onduso with Huldah Momanyi" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-primary mb-2">Meeting with Huldah Momanyi</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Naomi Kerubo Akuma and Fredah Kwamboka Onduso meeting with Huldah Momanyi, the State Representative for District 38A in Minnesota&apos;s House of Representatives. This meeting highlighted the importance of diaspora engagement and community leadership in fostering meaningful connections between Kenya and the United States.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm"
          >
            <div className="aspect-video w-full overflow-hidden">
              <PlaceholderImage imgSrc={IMAGES.team[6]} fallbackLabel="meeting2" alt="Josephat Mose with Huldah Momanyi" className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-primary mb-2">Leadership Meeting</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Josephat Mose meeting with Huldah Momanyi, the State Representative for District 38A in Minnesota&apos;s House of Representatives. The discussion focused on community development initiatives and ways to strengthen partnerships between Obomocare CBO and local government representatives.
              </p>
            </div>
          </motion.div>
        </div>

        {/* About Huldah Momanyi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border border-outline-variant/20 overflow-hidden shadow-sm"
        >
          <div className="p-8 md:p-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">About Huldah Momanyi</h2>
            <div className="space-y-4 text-on-surface-variant text-sm leading-relaxed">
              <p>
                Huldah Momanyi (born 1985) is an American politician serving in the Minnesota House of Representatives since 2025. She is the <strong className="text-primary">first Kenyan-American to win a state assembly seat in Minnesota</strong>. She was elected under the Democratic-Farmer-Labor party to represent District 38A in the 2025&ndash;2026 Minnesota House of Representatives.
              </p>
              <p>
                Her historic election represents a milestone for the Kenyan diaspora in the United States, demonstrating the growing influence and political engagement of Kenyan-Americans in American civic life. Her commitment to community development and public service aligns closely with Obomocare CBO&apos;s mission of empowering vulnerable individuals and families.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why This Matters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container-low rounded-2xl p-8 md:p-12 mt-8"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-6">Why This Matters</h2>
          <div className="space-y-4 text-on-surface-variant text-sm leading-relaxed">
            <p>
              These meetings represent Obomocare CBO&apos;s dedication to building strategic partnerships with elected officials and community leaders, both in Kenya and within the diaspora. By connecting with leaders like Huldah Momanyi, Obomocare strengthens its network and expands its reach in advocating for healthcare access, community empowerment, and sustainable development.
            </p>
            <p>
              The engagement also underscores the importance of the Kenyan diaspora in shaping conversations around governance, leadership, and public policy &mdash; both in the United States and back home in Kenya.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Back to Team */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap text-center">
        <Link
          to="/team"
          className="inline-block text-secondary-container font-bold hover:underline transition-colors"
        >
          &larr; Back to Meet the Team
        </Link>
      </section>

      <CTA />
    </>
  );
}
