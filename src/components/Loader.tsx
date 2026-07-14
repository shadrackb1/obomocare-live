import { useState, useEffect } from 'react';

export function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1f3a]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
          <div className="absolute inset-0 border-4 border-t-[#fd761a] rounded-full animate-spin" />
        </div>
        <span className="text-sm text-white/60">Loading OBOMOCARE...</span>
      </div>
    </div>
  );
}

export function useLoading(minMs = 800) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), minMs);
    return () => clearTimeout(timer);
  }, [minMs]);

  return loading;
}

export function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleReady = () => setLoaded(true);
    if (document.readyState === 'complete') {
      handleReady();
    } else {
      window.addEventListener('load', handleReady);
      return () => window.removeEventListener('load', handleReady);
    }
  }, []);

  if (!loaded) return <Loader />;
  return null;
}
