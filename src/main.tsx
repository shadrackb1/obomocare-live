import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global image error handler - replace broken images with gradient fallback
document.addEventListener('error', (e) => {
  const target = e.target as HTMLImageElement;
  if (target?.tagName === 'IMG' && !target.src.startsWith('data:')) {
    target.style.background = 'linear-gradient(135deg, #0b1f3a 0%, #1a3a5c 50%, #fd761a 100%)';
    target.style.backgroundSize = 'cover';
    target.style.objectFit = 'cover';
    target.alt = target.alt || '';
    target.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="url(#g)"/><text x="200" y="150" font-family="sans-serif" font-size="14" fill="rgba(255,255,255,0.4)" text-anchor="middle">OBOMOCARE</text></svg>');
  }
}, true);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
