import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import { useImages } from '../components/ImageProvider';
import PlaceholderImage from '../components/PlaceholderImage';
import { getAllTeamMembers, type TeamMember } from '../lib/teamMembers';
import { getMediaLibrary } from '../lib/siteImages';
import { useState, useEffect } from 'react';

export default function Team() {
  const IMAGES = useImages();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [media, setMedia] = useState<Array<{ slot: string; url: string; label: string }>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const [team, imgs] = await Promise.all([getAllTeamMembers(), getMediaLibrary()]);
      const sorted = team.sort((a, b) => a.order - b.order);
      setMembers(sorted);
      setMedia(imgs.map((i) => ({ slot: i.slot, url: i.url, label: i.label })));
      setLoading(false);
    };
    load();
  }, []);

  const getImageUrl = (slotId: string, fallback: string): string => {
    if (slotId) {
      const m = media.find((im) => im.slot === slotId);
      if (m) return m.url;
      const idx = parseInt(slotId.split('_')[1], 10);
      if (!isNaN(idx) && Array.isArray(IMAGES.team) && IMAGES.team[idx]) return IMAGES.team[idx];
    }
    return fallback;
  };

  const leaders = members.filter((m) => m.isLeader);
  const otherMembers = members.filter((m) => !m.isLeader);

  const renderLeader = (leader: TeamMember, index: number) => (
    <motion.div
      key={leader.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 bg-white rounded-2xl border border-outline-variant/20 overflow-hidden shadow-sm`}
    >
      <div className="lg:w-2/5 flex-shrink-0">
        <div className="aspect-[3/4] w-full overflow-hidden">
          <PlaceholderImage
            imgSrc={getImageUrl(leader.imageSlot, IMAGES.team[0])}
            fallbackLabel={leader.name}
            alt={leader.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">{leader.name}</h2>
        <p className="text-secondary-container font-bold uppercase tracking-wider text-sm mb-6">{leader.role}</p>
        {leader.bio && (
          <div className="space-y-4">
            {leader.bio.split('\n').filter(Boolean).map((paragraph, i) => (
              <p key={i} className="text-on-surface-variant text-sm leading-relaxed">{paragraph}</p>
            ))}
          </div>
        )}
        {leader.motto && (
          <div className="mt-6 pt-4 border-t border-outline-variant/20">
            <p className="text-primary font-display text-lg italic">&ldquo;{leader.motto}&rdquo;</p>
          </div>
        )}
      </div>
    </motion.div>
  );

  const renderMember = (member: TeamMember, index: number) => (
    <motion.div
      key={member.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm group"
    >
      <div className="aspect-square w-full overflow-hidden">
        <PlaceholderImage
          imgSrc={getImageUrl(member.imageSlot, IMAGES.team[0])}
          fallbackLabel={member.name}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="font-display text-xl font-bold text-primary">{member.name}</h3>
        <p className="text-secondary-container text-sm font-bold uppercase tracking-wider mt-1">{member.role}</p>
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <div className="w-8 h-8 border-2 border-secondary-container border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const hasLeaders = leaders.length > 0;
  const hasMembers = otherMembers.length > 0;

  return (
    <>
      <header className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto text-center relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary-container mb-6"
        >
          Meet the <span className="text-secondary-container">Team</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto"
        >
          Dedicated professionals united by a singular mission: bringing dignified care to those who need it most.
        </motion.p>
      </header>

      {hasLeaders && (
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-12">
          {leaders.map((leader, index) => renderLeader(leader, index))}
        </section>
      )}

      {hasMembers && (
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl md:text-3xl font-bold text-primary-container mb-8 text-center"
          >
            Our <span className="text-secondary-container">Team</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherMembers.map((member, index) => renderMember(member, index))}
          </div>
        </section>
      )}

      {!hasLeaders && !hasMembers && (
        <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center py-16">
          <p className="text-on-surface-variant text-lg">No team members configured yet.</p>
          <p className="text-on-surface-variant text-sm mt-2 opacity-60">Check back soon!</p>
        </section>
      )}

      {/* Volunteers Banner */}
      <section className="bg-surface-container-low py-16 text-center mb-section-gap">
        <p className="text-xl text-primary font-bold">And over 120 dedicated community volunteers.</p>
      </section>

      {/* Community Engagement CTA */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-container rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-on-primary mb-4">Community Engagement</h2>
          <p className="text-on-primary/80 mb-6 max-w-2xl mx-auto">
            Our team has had the privilege of meeting with Huldah Momanyi, the State Representative for District 38A in Minnesota&apos;s House of Representatives.
          </p>
          <Link
            to="/community-engagement"
            className="inline-block bg-secondary-container text-on-primary font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            View Engagement Photos
          </Link>
        </motion.div>
      </section>

      <CTA />
    </>
  );
}
