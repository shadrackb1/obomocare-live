import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly does OBOMOCARE CBO do?",
      answer: "We provide targeted interventions in rural communities in Kisii and Nyamira. Our four main pillars are Food Support, Maternal Health, Household Care, and Volunteer Caregiver Corps. We aim to reach households that formal systems often miss."
    },
    {
      question: "How are my donations used?",
      answer: "We are proud of our 100% transparency model and zero administrative fees promise. 100% of your donation goes directly to the programs—buying food, medical supplies, and funding transport for mobile clinics. Administrative costs are covered by specific private donors."
    },
    {
      question: "Are you an NGO, LLC, or CBO?",
      answer: "We are a registered Community Based Organization (CBO). This allows us to remain deeply rooted in the communities we serve and maintain a grassroots, community-driven approach."
    },
    {
      question: "Can I volunteer if I don't have medical training?",
      answer: "Absolutely. While we train some volunteers for medical support (First Aid, Caregiving), we also need help with logistics, food distribution, administrative tasks, and companionship for the elderly."
    },
    {
      question: "How do you select the families who receive support?",
      answer: "We work closely with local community leaders, chiefs, and our own on-the-ground volunteer network to identify the most vulnerable households based on rigorous, unbiased criteria."
    }
  ];

  return (
    <>
      <header className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-4xl md:text-6xl font-bold text-primary-container mb-6"
        >
          Frequently Asked <span className="text-secondary-container">Questions</span>
        </motion.h1>
      </header>

      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-outline-variant/30 rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-bold text-primary text-lg">{faq.question}</span>
                <ChevronDown className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 pt-2 text-on-surface-variant border-t border-outline-variant/10">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
