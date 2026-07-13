import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import { useImages } from '../components/ImageProvider';
import PlaceholderImage from '../components/PlaceholderImage';

export default function Team() {
  const IMAGES = useImages();

  const teamMembers = [
    {
      name: "Dr. Ombati Timothy Mokua",
      role: "Executive Director & Founder",
      image: IMAGES.team[0],
      bio: "Dr. Ombati Timothy Mokua is a Kenyan medical doctor, public health leader, civic educator, and diaspora community organizer based in Washington State, USA. He previously served as the County Executive Committee Member (CECM) for Health in Nyamira County and chaired the National Caucus of County Health Executive Committee Members, where he championed health systems strengthening and service delivery reforms. Beyond medicine, Dr. Mokua is the host of the Obomo Bw'Omogusii Show, a weekly civic and political talk show on TikTok and YouTube that promotes informed dialogue on governance, leadership, public policy, culture, and issues affecting the Gusii community and Kenya at large. He is also actively involved in community leadership within the Kenyan diaspora, mentoring young leaders and fostering civic engagement. Currently residing in the United States, Dr. Mokua continues to pursue professional growth while advocating for better healthcare systems, accountable leadership, and community empowerment. His passion lies in bridging medicine, public policy, and civic education to inspire meaningful social transformation. Motto: \"From Our Roots to Our Future—Let's Keep Talking.\""
    },
    {
      name: "Ms. Naomi Kerubo Akuma",
      role: "Director of Logistics & Community Outreach",
      image: IMAGES.team[1],
      bio: "Ms. Naomi Kerubo Akuma is a dedicated community development professional and a cornerstone of the Obomocare family. She holds a Bachelor's Degree in Education and has further strengthened her expertise through a professional qualification in Business Administration, equipping her with a unique blend of educational, administrative, and organizational leadership skills. As the Director of Logistics & Community Outreach, Naomi serves as the engine behind Obomocare CBO, overseeing the organization's day-to-day operations and ensuring that its mission is translated into meaningful impact within the community. She coordinates operational activities, manages stakeholder and partner relations, and leads the organization's Partner Satisfaction Program, fostering strong, sustainable relationships with beneficiaries, volunteers, donors, and collaborating institutions. Her passion for community service, attention to detail, and commitment to excellence have been instrumental in creating a welcoming, accountable, and people-centered organizational culture. She also spearheads community outreach initiatives, volunteer coordination, and engagement programs that strengthen Obomocare's presence and credibility among the populations it serves. With a strong belief in compassion, integrity, teamwork, and service, Ms. Kerubo continues to play a pivotal role in advancing Obomocare's vision of empowering vulnerable individuals and families through sustainable community-based programs. Her leadership ensures that every interaction with the organization reflects professionalism, empathy, and a genuine commitment to improving lives. Her unwavering dedication, organizational skills, and passion for people make her an invaluable leader in driving Obomocare's mission of delivering quality care, fostering community partnerships, and creating lasting social impact."
    },
    {
      name: "Fredah Kwamboka Onduso",
      role: "Team Member",
      image: IMAGES.team[2],
      bio: "Fredah Kwamboka Onduso is a dedicated member of the Obomocare CBO team, contributing to the organization's mission of empowering vulnerable individuals and families through sustainable community-based programs."
    },
    {
      name: "Miller",
      role: "Team Member",
      image: IMAGES.team[3],
      bio: "Miller is a valued member of the Obomocare CBO team, supporting the organization's efforts in delivering quality care and fostering community partnerships."
    },
    {
      name: "Josephat Mose",
      role: "Team Member",
      image: IMAGES.team[4],
      bio: "Josephat Mose is an active member of the Obomocare CBO team, contributing to the organization's mission of creating lasting social impact through community engagement and service delivery."
    }
  ];

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

      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-outline-variant/30 shadow-sm group"
            >
              <div className="aspect-square w-full overflow-hidden">
                <PlaceholderImage imgSrc={member.image} fallbackLabel="homeHero" alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-secondary-container text-sm font-bold uppercase tracking-wider mb-4">{member.role}</p>
                <p className="text-on-surface-variant text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="bg-surface-container-low py-16 text-center mb-section-gap">
        <p className="text-xl text-primary font-bold">And over 120 dedicated community volunteers.</p>
      </section>
      
      <CTA />
    </>
  );
}
