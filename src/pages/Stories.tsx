import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useImages } from '../components/ImageProvider';

export default function Stories() {
  const IMAGES = useImages();

  const stories = [
    {
      id: 1,
      category: 'News',
      date: 'Oct 12, 2024',
      readTime: '5 min',
      title: 'Five Years, Zero International Funding',
      excerpt: 'How a grassroots model of self-sustainability has allowed OBOMOCARE to thrive independently, focusing solely on community-driven solutions rather than donor mandates.',
      img: IMAGES.story1,
      link: '/stories/1'
    },
    {
      id: 2,
      category: 'Program Update',
      date: 'Sep 28, 2024',
      readTime: '8 min',
      title: 'Building a Caregiver Corps',
      excerpt: 'Inside the rigorous training program that transforms local volunteers into highly skilled caregivers, creating a sustainable health infrastructure from the ground up.',
      img: IMAGES.story2,
      link: '/stories/2'
    },
    {
      id: 3,
      category: 'Interview',
      date: 'Sep 15, 2024',
      readTime: '15 min',
      title: 'The Frontline of Maternal Health',
      excerpt: 'An in-depth conversation with Dr. Amina on the daily realities, challenges, and quiet victories of delivering maternal care in underserved regions.',
      img: IMAGES.story3,
      link: '/stories/3'
    }
  ];

  return (
    <>
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-end justify-center mb-section-gap -mt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            alt="Featured story hero image" 
            className="w-full h-full object-cover" 
            src={IMAGES.storiesHero}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-16 flex flex-col items-start text-on-primary pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-stack-md"
          >
            <span className="font-label-sm text-xs font-semibold uppercase tracking-wider text-secondary-container">Impact Report</span>
            <span className="w-1 h-1 rounded-full bg-on-primary/50"></span>
            <span className="font-label-sm text-sm opacity-80">12 Min Read</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl font-bold mb-stack-md max-w-4xl text-on-primary drop-shadow-sm leading-tight"
          >
            A Legacy of Care: The Matriarchs Rebuilding Communities.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-inverse-on-surface max-w-2xl mb-stack-lg opacity-90"
          >
            Discover how local women are leading the charge in providing essential maternal health services in regions untouched by international aid.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/stories/1" className="inline-flex items-center gap-2 text-on-primary font-semibold text-sm border-b border-secondary-container pb-1 hover:text-secondary-container transition-colors group">
              Read the Full Story
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12 border-b border-primary-container/10 pb-4"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-container">Latest Stories</h2>
          <div className="hidden sm:flex gap-4">
            <button className="text-sm font-semibold text-primary-container hover:text-secondary-container transition-colors">All</button>
            <button className="text-sm font-semibold text-on-surface-variant hover:text-secondary-container transition-colors">News</button>
            <button className="text-sm font-semibold text-on-surface-variant hover:text-secondary-container transition-colors">Interviews</button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.article 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }}
              key={story.id} 
              className="group cursor-pointer flex flex-col h-full bg-surface-container-lowest border border-outline-variant/30 hover:shadow-[0_0_30px_rgba(11,31,58,0.1)] transition-all duration-300 rounded-xl overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="bg-cover bg-center w-full h-full transform group-hover:scale-110 transition-transform duration-700" 
                  style={{ backgroundImage: `url('${story.img}')` }}
                ></div>
                <div className="absolute top-4 left-4 bg-primary-container/90 backdrop-blur-sm text-on-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-sm">
                  {story.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3 text-on-surface-variant text-sm font-medium">
                  <span>{story.date}</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="flex items-center gap-1"><Clock size={16} /> {story.readTime}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-container mb-3 group-hover:text-secondary-container transition-colors line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-on-surface-variant mb-6 line-clamp-3 flex-grow text-base">
                  {story.excerpt}
                </p>
                <div className="mt-auto">
                  <Link to={`/stories/${story.id}`} className="inline-flex items-center gap-1 text-secondary-container text-sm font-semibold uppercase group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-transparent border border-primary-container text-primary-container font-bold px-8 py-4 rounded hover:bg-surface-variant transition-all text-sm">
            Load More Stories
          </button>
        </div>
      </section>
    </>
  );
}
