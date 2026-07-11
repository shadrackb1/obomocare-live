import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import { IMAGES } from '../lib/images';

export default function News() {
  const news = [
    {
      title: "New Mobile Clinic Deployed in Nyamira",
      date: "August 15, 2023",
      category: "Program Update",
      image: IMAGES.news1,
      excerpt: "Thanks to our generous partners, we have successfully launched our third mobile clinic, extending our maternal health reach by 30%."
    },
    {
      title: "Volunteer Training Cohort 4 Graduates",
      date: "July 22, 2023",
      category: "Community",
      image: IMAGES.news2,
      excerpt: "45 new local volunteers have completed their extensive caregiver and first responder training program."
    },
    {
      title: "Emergency Food Drive Reaches 500 Families",
      date: "June 10, 2023",
      category: "Impact",
      image: IMAGES.news3,
      excerpt: "Following the recent dry spell, our rapid response team distributed over 10 tons of nutritional supplies to affected households."
    }
  ];

  return (
    <>
      <header className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary-container mb-6"
        >
          Latest <span className="text-secondary-container">News</span>
        </motion.h1>
      </header>

      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Link to="/stories/mama-kerubo" className="bg-white rounded-xl overflow-hidden border border-outline-variant/30 shadow-sm flex flex-col group cursor-pointer hover:shadow-md transition-all h-full">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary-container text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-on-surface-variant text-sm mb-2">{item.date}</span>
                  <h3 className="font-display text-xl font-bold text-primary mb-3 group-hover:text-secondary-container transition-colors">{item.title}</h3>
                  <p className="text-on-surface-variant flex-grow mb-4">{item.excerpt}</p>
                  <div className="text-secondary-container font-bold text-sm uppercase tracking-wider mt-auto inline-flex items-center">
                    Read More
                    <svg className="ml-1 group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      
      <CTA />
    </>
  );
}
