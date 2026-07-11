import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Partners() {
  const partners = [
    { name: "Global Health Initiative", type: "Medical Supply Partner", color: "bg-blue-100 text-blue-800" },
    { name: "Kenya Food Bank Network", type: "Logistics & Supply", color: "bg-green-100 text-green-800" },
    { name: "Foundation for Rural Development", type: "Grant Funder", color: "bg-purple-100 text-purple-800" },
    { name: "Nyamira Community Council", type: "Local Governance", color: "bg-yellow-100 text-yellow-800" },
    { name: "East African Transport Co.", type: "Mobility Sponsor", color: "bg-red-100 text-red-800" },
    { name: "Tech for Good Africa", type: "Technology Partner", color: "bg-teal-100 text-teal-800" },
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
          Our <span className="text-secondary-container">Partners</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto"
        >
          Collaboration is at the heart of what we do. We are proud to work alongside incredible organizations to amplify our impact.
        </motion.p>
      </header>

      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center justify-center h-48"
            >
              <h3 className="font-display text-xl font-bold text-primary mb-3">{partner.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${partner.color}`}>
                {partner.type}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-primary-container py-section-gap px-margin-mobile md:px-margin-desktop text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-6">Become a Corporate Partner</h2>
          <p className="text-inverse-on-surface mb-8 opacity-90">Align your brand with grassroots impact. We offer tailored partnership packages for organizations looking to invest in sustainable community health.</p>
          <Link to="/contact" className="inline-block bg-secondary-container text-white font-bold py-4 px-8 rounded hover:bg-opacity-90 transition-opacity">
            Contact Partnerships Team
          </Link>
        </div>
      </section>
    </>
  );
}
