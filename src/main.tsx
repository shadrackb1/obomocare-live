import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global image error handler - replace broken images with gradient fallback
document.addEventListener('error', (e) => {
  const target = e.target as HTMLImageElement;
  if (target?.tagName === 'IMG') {
    target.style.background = 'linear-gradient(135deg, #0b1f3a 0%, #1a3a5c 50%, #fd761a 100%)';
    target.style.objectFit = 'cover';
    target.alt = '';
    // Set a 1x1 transparent pixel to prevent further errors
    target.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"/>');
  }
}, true);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
