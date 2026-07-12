import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Heart, Home, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useImages } from '../components/ImageProvider';
import PlaceholderImage from '../components/PlaceholderImage';

export default function GetInvolved() {
  const IMAGES = useImages();

  return (
    <>
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage imgSrc={IMAGES.getInvolvedHero} fallbackLabel="getInvolvedHero" alt="Hero Background" className="w-full h-full object-cover scale-105" eager />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
          {/* Animated Blob */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary-container/30 rounded-full mix-blend-screen filter blur-[100px] opacity-60"
          />
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-section-gap pt-32">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold text-on-primary mb-stack-md max-w-3xl mx-auto leading-tight"
          >
            Support a Pillar of Care
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-inverse-primary max-w-2xl mx-auto mb-stack-lg opacity-90"
          >
            Directly empower the programs and people on the frontlines of community health and support. Your sponsorship builds sustainable resilience.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="#sponsor-grid" 
            className="inline-flex items-center px-8 py-4 bg-secondary-container text-on-primary font-bold rounded shadow-[0_0_20px_rgba(253,118,26,0.3)] hover:shadow-[0_0_40px_rgba(253,118,26,0.5)] transition-all"
          >
            View Programmes
            <ArrowDown className="ml-2" size={20} />
          </motion.a>
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface" id="sponsor-grid">
        <div className="max-w-container-max mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-container mb-4">Active Programmes</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              Choose a pillar to support. Every contribution directly funds essential resources, training, and care delivery.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="glass-card rounded-xl overflow-hidden flex flex-col group border border-outline-variant/30 hover:shadow-[0_0_30px_rgba(253,118,26,0.15)] transition-shadow duration-300 h-full">
                <div className="h-64 overflow-hidden relative">
                  <PlaceholderImage imgSrc={IMAGES.elderlySupport} fallbackLabel="elderlySupport" alt="Elderly Support" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-primary-container tracking-wider uppercase">Urgent Need</div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-display text-2xl font-bold text-primary-container mb-4">Elderly Support Programme</h3>
                  <p className="text-on-surface-variant mb-8 flex-grow text-base">
                    Providing vital home-based medical care, nutritional support, and social companionship to vulnerable elderly community members ensuring they age with dignity.
                  </p>
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span className="text-primary-container">Goal: $25,000</span>
                      <span className="text-on-surface-variant">65% Funded</span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '65%' }} transition={{ duration: 1, delay: 0.5 }} className="bg-secondary-container h-2 rounded-full"></motion.div>
                    </div>
                  </div>
                  <Link to="/programs/elderly-support" className="w-full py-4 bg-secondary-container text-on-primary font-bold rounded hover:opacity-90 transition-opacity mt-auto flex items-center justify-center group-hover:bg-[#d4650a]">
                    Learn More
                    <Heart className="ml-2 group-hover:scale-110 transition-transform" size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="glass-card rounded-xl overflow-hidden flex flex-col group border border-outline-variant/30 hover:shadow-[0_0_30px_rgba(253,118,26,0.15)] transition-shadow duration-300 h-full">
                <div className="h-64 overflow-hidden">
                  <PlaceholderImage imgSrc={IMAGES.householdCare} fallbackLabel="householdCare" alt="Household Care" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-display text-2xl font-bold text-primary-container mb-4">Household Care Programme</h3>
                  <p className="text-on-surface-variant mb-8 flex-grow text-base">
                    Delivering comprehensive family-level interventions, including sanitation education, essential supplies, and preventative health screenings for the whole household.
                  </p>
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span className="text-primary-container">Goal: $40,000</span>
                      <span className="text-on-surface-variant">42% Funded</span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '42%' }} transition={{ duration: 1, delay: 0.6 }} className="bg-secondary-container h-2 rounded-full"></motion.div>
                    </div>
                  </div>
                  <Link to="/programs/household-care" className="w-full py-4 bg-secondary-container text-on-primary font-bold rounded hover:opacity-90 transition-opacity mt-auto flex items-center justify-center group-hover:bg-[#d4650a]">
                    Learn More
                    <Home className="ml-2 group-hover:scale-110 transition-transform" size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div className="glass-card rounded-xl overflow-hidden flex flex-col group border border-outline-variant/30 hover:shadow-[0_0_30px_rgba(253,118,26,0.15)] transition-shadow duration-300 h-full">
                <div className="h-64 overflow-hidden">
                  <PlaceholderImage imgSrc={IMAGES.volunteerCorps} fallbackLabel="volunteerCorps" alt="Volunteer Corps" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-display text-2xl font-bold text-primary-container mb-4">Volunteer Caregiver Corps</h3>
                  <p className="text-on-surface-variant mb-8 flex-grow text-base">
                    Training and equipping local community members with necessary medical knowledge and supplies to act as first responders and continuous caregivers.
                  </p>
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span className="text-primary-container">Goal: $15,000</span>
                      <span className="text-on-surface-variant">88% Funded</span>
                    </div>
                    <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '88%' }} transition={{ duration: 1, delay: 0.7 }} className="bg-secondary-container h-2 rounded-full"></motion.div>
                    </div>
                  </div>
                  <Link to="/programs/volunteer-corps" className="w-full py-4 bg-secondary-container text-on-primary font-bold rounded hover:opacity-90 transition-opacity mt-auto flex items-center justify-center group-hover:bg-[#d4650a]">
                    Learn More
                    <Users className="ml-2 group-hover:scale-110 transition-transform" size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-low border-t border-primary-container/10">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl font-bold text-primary-container mb-6">Other Ways to Give</h2>
            <p className="text-on-surface-variant mb-12">Prefer to make a direct transfer? Here are our official banking details.</p>
            
            <div className="bg-white p-8 rounded-xl border border-outline-variant/30 shadow-sm text-left max-w-2xl mx-auto">
              <h3 className="font-bold text-primary text-xl mb-6 border-b border-outline-variant/20 pb-4">Direct Bank Transfer</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-3">
                  <span className="font-bold text-on-surface-variant col-span-1">Account Name:</span>
                  <span className="col-span-2 text-primary font-medium">OBOMOCARE CBO</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-bold text-on-surface-variant col-span-1">Bank:</span>
                  <span className="col-span-2 text-primary font-medium">Equity Bank Kenya</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-bold text-on-surface-variant col-span-1">Branch:</span>
                  <span className="col-span-2 text-primary font-medium">Kisii Branch</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-bold text-on-surface-variant col-span-1">Account Number:</span>
                  <span className="col-span-2 text-primary font-medium tracking-wider">0123456789012</span>
                </div>
                <div className="grid grid-cols-3 pt-4">
                  <span className="font-bold text-on-surface-variant col-span-1">M-PESA Paybill:</span>
                  <span className="col-span-2 text-primary font-medium tracking-wider text-secondary-container">246810</span>
                </div>
                <div className="grid grid-cols-3">
                  <span className="font-bold text-on-surface-variant col-span-1">Account:</span>
                  <span className="col-span-2 text-primary font-medium">Your Name / Project</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
