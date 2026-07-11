import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from './Logo';
import { AnimatePresence, motion } from 'framer-motion';

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen flex flex-col pt-20">
      <nav className={cn("fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled ? "bg-primary-container shadow-md border-outline-variant/20" : "bg-primary-container/90 backdrop-blur-md border-on-primary/10"
      )}>
        <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo className="w-48 h-auto -ml-4" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/programs">Programs</NavLink>
            <NavLink to="/impact">Impact</NavLink>
            <NavLink to="/stories">Stories</NavLink>
            <NavLink to="/team">Team</NavLink>
          </div>

          <div className="hidden md:block">
            <Link to="/get-involved" className="bg-secondary-container text-on-primary font-bold px-8 py-3 rounded hover:opacity-80 transition-opacity">
              Donate Now
            </Link>
          </div>

          <button 
            className="md:hidden text-on-primary p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-0 w-full bg-primary-container border-b border-on-primary/10 z-40 md:hidden shadow-lg"
          >
            <div className="flex flex-col px-margin-mobile py-6 space-y-2">
              <NavLink to="/about"><div className="py-2">About Us</div></NavLink>
              <NavLink to="/programs"><div className="py-2">Programs</div></NavLink>
              <NavLink to="/team"><div className="py-2">Our Team</div></NavLink>
              <NavLink to="/partners"><div className="py-2">Partners</div></NavLink>
              <NavLink to="/impact"><div className="py-2">Impact</div></NavLink>
              <NavLink to="/stories"><div className="py-2">Stories</div></NavLink>
              <NavLink to="/news"><div className="py-2">News</div></NavLink>
              <NavLink to="/faq"><div className="py-2">FAQ</div></NavLink>
              <NavLink to="/gallery"><div className="py-2">Gallery</div></NavLink>
              <div className="pt-6 border-t border-on-primary/10">
                <Link to="/get-involved" className="block text-center bg-secondary-container text-on-primary font-bold px-8 py-3 rounded hover:opacity-80 transition-opacity">
                  Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-primary-container w-full py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="col-span-1 md:col-span-1 mb-8 md:mb-0">
            <Link to="/" className="block mb-4 hover:opacity-80 transition-opacity">
              <Logo className="w-48 h-auto -ml-4" />
            </Link>
            <p className="text-on-primary/70 font-body-md text-sm">
              Empowering communities through sustainable care and development.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-label-sm text-on-primary mb-4 uppercase tracking-wider">Organization</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-on-primary/70 hover:text-on-primary transition-colors text-sm">About Us</Link></li>
              <li><Link to="/programs" className="text-on-primary/70 hover:text-on-primary transition-colors text-sm">Programs</Link></li>
              <li><Link to="/team" className="text-on-primary/70 hover:text-on-primary transition-colors text-sm">Our Team</Link></li>
              <li><Link to="/partners" className="text-on-primary/70 hover:text-on-primary transition-colors text-sm">Partners</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-label-sm text-on-primary mb-4 uppercase tracking-wider">Get Involved</h4>
            <ul className="space-y-2">
              <li><Link to="/volunteer" className="text-on-primary/70 hover:text-on-primary transition-colors text-sm">Volunteer</Link></li>
              <li><Link to="/get-involved" className="text-on-primary/70 hover:text-on-primary transition-colors text-sm">Donate</Link></li>
              <li><Link to="/contact" className="text-on-primary/70 hover:text-on-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-label-sm text-on-primary mb-4 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/news" className="text-on-primary/70 hover:text-on-primary transition-colors text-sm">News</Link></li>
              <li><Link to="/stories" className="text-on-primary/70 hover:text-on-primary transition-colors text-sm">Stories</Link></li>
              <li><Link to="/faq" className="text-on-primary/70 hover:text-on-primary transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/transparency" className="text-on-primary/70 hover:text-on-primary transition-colors text-sm">Transparency</Link></li>
              <li><Link to="/admin/login" className="text-on-primary/70 hover:text-on-primary transition-colors text-sm opacity-50 hover:opacity-100">Admin</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-on-primary/10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <p className="text-on-primary/70 text-xs text-center md:text-left">
            © 2024 OBOMOCARE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, children }: { to: string, children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);
  
  return (
    <Link 
      to={to} 
      className={cn(
        "font-body-md transition-colors duration-200",
        isActive ? "text-on-primary-container border-b-2 border-secondary font-bold pb-1" : "text-on-primary hover:text-on-primary-container"
      )}
    >
      {children}
    </Link>
  );
}
