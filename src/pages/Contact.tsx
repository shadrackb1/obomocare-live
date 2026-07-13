import { MapPin, Mail, Phone } from 'lucide-react';
import { useImages } from '../components/ImageProvider';
import PlaceholderImage from '../components/PlaceholderImage';

export default function Contact() {
  const IMAGES = useImages();

  return (
    <div className="bg-surface relative z-20">
      <header className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage
            imgSrc={IMAGES.contactHero}
            fallbackLabel="contactHero"
            alt="Background"
            className="w-full h-full object-cover scale-105"
            eager
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 md:px-12 max-w-container-max mx-auto w-full pt-20">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-on-primary mb-6 drop-shadow-lg">Let's Connect.</h1>
          <p className="text-lg md:text-xl text-inverse-primary max-w-2xl mx-auto">
            Reach out to us to learn more about our work, volunteer opportunities, or how you can make an impact.
          </p>
        </div>
      </header>

      <main className="py-20 md:py-32 px-4 md:px-12 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 md:p-12 rounded-xl border border-outline-variant/30">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-on-surface mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-surface-variant p-4 rounded-full text-secondary-container"><MapPin size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-sm text-on-surface-variant uppercase tracking-wider mb-2">Headquarters</h3>
                    <p className="text-base text-on-surface">Ekerubo, Kisii-Nyamira Road<br/>(besides Ekerubo SDA Church)<br/>P.O. Box 66, 40506, Kebirigo, Nyamira</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-surface-variant p-4 rounded-full text-secondary-container"><Mail size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-sm text-on-surface-variant uppercase tracking-wider mb-2">Email Us</h3>
                    <a className="text-base text-on-surface hover:text-secondary-container transition-colors" href="mailto:info@obomocare.com">info@obomocare.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-surface-variant p-4 rounded-full text-secondary-container"><Phone size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-sm text-on-surface-variant uppercase tracking-wider mb-2">Call Us</h3>
                    <a className="text-base text-on-surface hover:text-secondary-container transition-colors" href="tel:+254000000000">+254 (0) 000 000 000</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden h-48 group">
              <PlaceholderImage imgSrc={IMAGES.aboutFounder} fallbackLabel="aboutFounder" alt="Our team" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl border border-outline-variant/30 shadow-sm h-full">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold text-sm text-on-surface mb-2" htmlFor="firstName">First Name</label>
                    <input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none" id="firstName" placeholder="Jane" type="text" />
                  </div>
                  <div>
                    <label className="block font-semibold text-sm text-on-surface mb-2" htmlFor="lastName">Last Name</label>
                    <input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none" id="lastName" placeholder="Doe" type="text" />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-sm text-on-surface mb-2" htmlFor="email">Email Address</label>
                  <input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none" id="email" placeholder="jane@example.com" type="email" />
                </div>
                <div>
                  <label className="block font-semibold text-sm text-on-surface mb-2" htmlFor="subject">Subject</label>
                  <select className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none" id="subject" defaultValue="">
                    <option disabled value="">Select a subject...</option>
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="donate">Donations</option>
                    <option value="partnership">Partnerships</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-sm text-on-surface mb-2" htmlFor="message">Message</label>
                  <textarea className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 focus:border-primary-container focus:ring-1 focus:ring-primary-container outline-none resize-none" id="message" placeholder="How can we help you?" rows={5}></textarea>
                </div>
                <button className="bg-secondary-container text-white font-bold py-4 px-8 rounded hover:opacity-90 transition-opacity w-full md:w-auto mt-4" type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
