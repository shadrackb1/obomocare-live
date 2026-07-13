import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import { useImages } from '../components/ImageProvider';
import PlaceholderImage from '../components/PlaceholderImage';

const leaders = [
  {
    name: "Dr. Ombati Timothy Mokua",
    role: "Executive Director & Founder",
    image: "team_0",
    bio: [
      "Dr. Ombati Timothy Mokua is a Kenyan medical doctor, public health leader, civic educator, and diaspora community organizer based in Washington State, USA. He previously served as the County Executive Committee Member (CECM) for Health in Nyamira County and chaired the National Caucus of County Health Executive Committee Members, where he championed health systems strengthening and service delivery reforms.",
      "Beyond medicine, Dr. Mokua is the host of the Obomo Bw'Omogusii Show, a weekly civic and political talk show on TikTok and YouTube that promotes informed dialogue on governance, leadership, public policy, culture, and issues affecting the Gusii community and Kenya at large. He is also actively involved in community leadership within the Kenyan diaspora, mentoring young leaders and fostering civic engagement.",
      "Currently residing in the United States, Dr. Mokua continues to pursue professional growth while advocating for better healthcare systems, accountable leadership, and community empowerment. His passion lies in bridging medicine, public policy, and civic education to inspire meaningful social transformation.",
    ],
    motto: "From Our Roots to Our Future\u2014Let\u2019s Keep Talking.",
  },
  {
    name: "Ms. Naomi Kerubo Akuma",
    role: "Director of Logistics & Community Outreach",
    image: "team_1",
    bio: [
      "Ms. Naomi Kerubo Akuma is a dedicated community development professional and a cornerstone of the Obomocare family. She holds a Bachelor\u2019s Degree in Education and has further strengthened her expertise through a professional qualification in Business Administration, equipping her with a unique blend of educational, administrative, and organizational leadership skills.",
      "As the Director of Logistics & Community Outreach, Naomi serves as the engine behind Obomocare CBO, overseeing the organization\u2019s day-to-day operations and ensuring that its mission is translated into meaningful impact within the community. She coordinates operational activities, manages stakeholder and partner relations, and leads the organization\u2019s Partner Satisfaction Program, fostering strong, sustainable relationships with beneficiaries, volunteers, donors, and collaborating institutions.",
      "Her passion for community service, attention to detail, and commitment to excellence have been instrumental in creating a welcoming, accountable, and people-centered organizational culture. She also spearheads community outreach initiatives, volunteer coordination, and engagement programs that strengthen Obomocare\u2019s presence and credibility among the populations it serves.",
      "With a strong belief in compassion, integrity, teamwork, and service, Ms. Kerubo continues to play a pivotal role in advancing Obomocare\u2019s vision of empowering vulnerable individuals and families through sustainable community-based programs. Her leadership ensures that every interaction with the organization reflects professionalism, empathy, and a genuine commitment to improving lives.",
      "Her unwavering dedication, organizational skills, and passion for people make her an invaluable leader in driving Obomocare\u2019s mission of delivering quality care, fostering community partnerships, and creating lasting social impact.",
    ],
  },
];

const members = [
  { name: "Fredah Kwamboka Onduso", role: "Team Member", image: "team_2" },
  { name: "Cecil Miller", role: "Team Member", image: "team_3" },
  { name: "Josephat Mose", role: "Team Member", image: "team_4" },
];

export default function Team() {
  const IMAGES = useImages();

  const getImage = (slotId: string): string => {
    if (slotId.startsWith('team_')) {
      const idx = parseInt(slotId.split('_')[1], 10);
      if (Array.isArray(IMAGES.team) && IMAGES.team[idx]) return IMAGES.team[idx];
    }
    return IMAGES.team[0];
  };

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
          Dedicated professionals united by a singular mission: bringing dignified care to those who need it most. Our leadership team combines medical expertise, community development, and organizational excellence to drive meaningful change.
        </motion.p>
      </header>

      {/* Leadership Profiles */}
      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-12">
        {leaders.map((leader, index) => (
          <motion.div
            key={leader.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 bg-white rounded-2xl border border-outline-variant/20 overflow-hidden shadow-sm`}
          >
            <div className="lg:w-2/5 flex-shrink-0">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <PlaceholderImage
                  imgSrc={getImage(leader.image)}
                  fallbackLabel={leader.name}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-1">{leader.name}</h2>
              <p className="text-secondary-container font-bold uppercase tracking-wider text-sm mb-6">{leader.role}</p>
              <div className="space-y-4">
                {leader.bio.map((paragraph, i) => (
                  <p key={i} className="text-on-surface-variant text-sm leading-relaxed">{paragraph}</p>
                ))}
              </div>
              {leader.motto && (
                <div className="mt-6 pt-4 border-t border-outline-variant/20">
                  <p className="text-primary font-display text-lg italic">&ldquo;{leader.motto}&rdquo;</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Other Team Members */}
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
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-outline-variant/20 shadow-sm group"
            >
              <div className="aspect-square w-full overflow-hidden">
                <PlaceholderImage
                  imgSrc={getImage(member.image)}
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
          ))}
        </div>
      </section>

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
            Our team has had the privilege of meeting with Huldah Momanyi, the State Representative for District 38A in Minnesota&apos;s House of Representatives &mdash; the first Kenyan-American to win a state assembly seat in Minnesota.
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
