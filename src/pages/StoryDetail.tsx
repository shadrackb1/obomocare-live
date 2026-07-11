import { Link, useParams } from 'react-router-dom';
import { Share2, BookmarkPlus } from 'lucide-react';
import { motion } from 'framer-motion';
import { useImages } from '../components/ImageProvider';

const STORIES: Record<string, {
  title: string;
  category: string;
  readTime: string;
  imageKey: string;
  bodyImageKey: string;
  paragraphs: string[];
  stats: { value: string; label: string }[];
}> = {
  '1': {
    title: "Five Years, Zero International Funding",
    category: 'News & Impact',
    readTime: '5 min read',
    imageKey: 'story1',
    bodyImageKey: 'foodSupport',
    paragraphs: [
      "When OBOMOCARE started in March 2020, the world was shutting down. Markets closed, daily wages vanished, and families in Kisii and Nyamira began skipping meals to survive the initial lockdowns. A single pot of maize and beans shared over a fence became the seed of a movement.",
      "Five years later, that one pot has grown into a comprehensive community care system serving over 5,000 families. What makes this achievement remarkable is that it was accomplished entirely without international funding or donor mandates.",
      "The grassroots model relies on community contributions, local partnerships, and a zero-administration-fee philosophy that ensures every shilling goes directly to the families who need it most. Private donors cover operational costs while public donations fund the programs themselves.",
      "This approach has attracted attention from development practitioners who see in OBOMOCARE a replicable model for sustainable community health. The secret, says founder Mama Kerubo, is simple: \"We trust our neighbors. When you build on trust, the community becomes the infrastructure.\"",
    ],
    stats: [
      { value: '$0', label: 'International Funding' },
      { value: '100%', label: 'Community Funded' },
      { value: '5+', label: 'Years Running' },
    ],
  },
  '2': {
    title: "Building a Caregiver Corps",
    category: 'Program Update',
    readTime: '8 min read',
    imageKey: 'story2',
    bodyImageKey: 'volunteerCorps',
    paragraphs: [
      "The Volunteer Caregiver Corps is the backbone of OBOMOCARE's operations. What began as a handful of willing neighbors has grown into a structured program of over 120 trained volunteers, each equipped with first aid certification, patient transport skills, and community health advocacy training.",
      "The training program spans six weeks and covers everything from basic life support and wound care to nutritional assessment and mental health first aid. Graduates receive a certification recognized by the County Health Department.",
      "What makes this program truly sustainable is the mentorship model. Each new cohort is paired with experienced volunteers who provide on-the-job training in real community settings. This creates a continuous cycle of knowledge transfer that strengthens the entire network.",
      "Today, the Corps deploys to 15 communities, conducting home visits, health screenings, and emergency responses that would otherwise be impossible in these remote areas.",
    ],
    stats: [
      { value: '120+', label: 'Trained Volunteers' },
      { value: '6', label: 'Week Training' },
      { value: '15', label: 'Communities Served' },
    ],
  },
  '3': {
    title: "The Frontline of Maternal Health",
    category: 'Interview',
    readTime: '15 min read',
    imageKey: 'story3',
    bodyImageKey: 'maternalHealth',
    paragraphs: [
      "Dr. Amina has been OBOMOCARE's Chief Medical Coordinator for three years. In that time, she has overseen the delivery of maternal health services to over 800 women in regions where the nearest equipped hospital is more than 15 miles away.",
      "\"The reality is stark,\" she explains during our conversation at the Nyamira outreach center. \"Over 60% of expecting mothers in our target areas have never had a prenatal scan. Many deliver at home without any medical supervision. When complications arise, it is often too late.\"",
      "OBOMOCARE's mobile clinic program addresses this gap directly. By bringing trained midwives and essential medical equipment to the community, they have reduced emergency transport incidents by 40% in served areas.",
      "The program also focuses on postnatal care, which is often neglected. Regular home visits ensure mothers and newborns receive nutritional support, health monitoring, and emotional companionship during the critical first months.",
    ],
    stats: [
      { value: '800+', label: 'Mothers Served' },
      { value: '40%', label: 'Fewer Emergencies' },
      { value: '24/7', label: 'Mobile Access' },
    ],
  },
};

const DEFAULT_STORY = STORIES['1'];

export default function StoryDetail() {
  const IMAGES = useImages();
  const { id } = useParams<{ id: string }>();
  const story = STORIES[id || '1'] || DEFAULT_STORY;

  return (
    <>
      <header className="max-w-4xl mx-auto px-4 md:px-12 text-center mb-12 mt-12 pt-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="text-secondary-container font-semibold text-xs uppercase tracking-widest">{story.category}</span>
          <span className="text-outline text-sm">{'\u2022'}</span>
          <span className="text-on-surface-variant text-sm font-medium">{story.readTime}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tight leading-tight px-4"
        >
          {story.title}
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

      <section className="max-w-container-max mx-auto px-4 md:px-12 mb-section-gap">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden shadow-[0_0_40px_rgba(11,31,58,0.1)] border border-outline-variant/20 group"
        >
          <img
            alt={story.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
            src={(IMAGES as any)[story.imageKey]}
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

      <div className="max-w-container-max mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-section-gap">
        <article className="md:col-span-8 lg:col-span-7 lg:col-start-2">
          <div className="text-lg text-on-surface leading-relaxed space-y-8">
            {story.paragraphs.map((para, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {i === 0 && (
                  <span className="font-display text-6xl font-bold float-left mr-3 mt-1 text-primary-container leading-none">
                    {para[0]}
                  </span>
                )}
                {i === 0 ? para.slice(1) : para}
              </motion.p>
            ))}
            <motion.figure initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="my-12">
              <div className="h-64 md:h-96 w-full rounded-xl overflow-hidden bg-surface-container shadow-md group">
                <img
                  alt={story.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src={(IMAGES as any)[story.bodyImageKey]}
                />
              </div>
              <figcaption className="text-sm text-outline mt-4 text-center italic">Documenting the impact of community-driven healthcare delivery.</figcaption>
            </motion.figure>
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
              Key metrics from this story's initiative.
            </p>
            <ul className="space-y-8">
              {story.stats.map((stat, i) => (
                <li key={i} className="flex flex-col border-l-2 border-secondary-container pl-4 transform hover:translate-x-2 transition-transform">
                  <span className="font-display text-4xl font-bold text-primary tracking-tight">{stat.value}</span>
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider mt-1">{stat.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </aside>
      </div>

      <section className="bg-primary-container py-section-gap px-4 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-container/20 rounded-full blur-[100px] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-on-primary mb-6">Support stories like this</h2>
          <p className="text-lg text-inverse-primary mb-10 opacity-90">
            Your contribution directly fuels our outreach programs, ensuring more communities receive the care they desperately need.
          </p>
          <Link to="/get-involved" className="inline-block bg-secondary-container text-white font-bold text-lg px-10 py-4 rounded-full hover:shadow-[0_0_30px_rgba(253,118,26,0.4)] hover:-translate-y-1 transition-all">
            Make a Donation
          </Link>
        </motion.div>
      </section>
    </>
  );
}
