import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { usePageTitle } from '../components/SEO';

export default function NotFound() {
  usePageTitle('Page Not Found');
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <div className="text-8xl font-display font-bold text-primary-container mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-primary mb-4">Page Not Found</h1>
        <p className="text-on-surface-variant text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-secondary-container text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Home size={18} /> Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border border-outline-variant text-on-surface font-bold py-3 px-6 rounded-lg hover:bg-surface-container-low transition-colors"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
