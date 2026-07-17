import React from 'react';
import { optimizeCloudinaryUrl } from '../lib/cloudinary';

interface PlaceholderImageProps {
  imgSrc?: string;
  fallbackLabel?: string;
  gradient?: string;
  className?: string;
  alt?: string;
  eager?: boolean;
  size?: 'hero' | 'card' | 'thumb';
}

const GRADIENTS: Record<string, string> = {
  homeHero:        'linear-gradient(135deg, #0b1f3a 0%, #1a3a5c 60%, #fd761a 100%)',
  aboutHero:       'linear-gradient(135deg, #0d2b4e 0%, #1e4a6e 100%)',
  aboutFounder:    'linear-gradient(135deg, #15294a 0%, #2a4670 100%)',
  contactHero:     'linear-gradient(135deg, #091d36 0%, #14345a 100%)',
  impactHero:      'linear-gradient(135deg, #0b1f3a 0%, #1a4a3a 100%)',
  getInvolvedHero: 'linear-gradient(135deg, #0d1f3a 0%, #1e3a5c 100%)',

  foodSupport:          'linear-gradient(135deg, #1a3a1a 0%, #0b2a0b 100%)',
  foodSupportDetail:    'linear-gradient(135deg, #1e3e1e 0%, #0f2f0f 100%)',
  maternalHealth:       'linear-gradient(135deg, #1a2a4a 0%, #0b1a3a 100%)',
  maternalHealthDetail: 'linear-gradient(135deg, #1e2e4e 0%, #0f1f3f 100%)',
  householdCare:        'linear-gradient(135deg, #2a1a3a 0%, #1a0b2a 100%)',
  householdCareDetail:  'linear-gradient(135deg, #2e1e3e 0%, #1f0f2f 100%)',
  volunteerCorps:       'linear-gradient(135deg, #2a2a1a 0%, #1a1a0b 100%)',
  volunteerCorpsDetail: 'linear-gradient(135deg, #2e2e1e 0%, #1f1f0f 100%)',
  elderlySupport:       'linear-gradient(135deg, #3a2a1a 0%, #2a1a0b 100%)',
  elderlySupportDetail: 'linear-gradient(135deg, #3e2e1e 0%, #2f1f0f 100%)',

  storiesHero:   'linear-gradient(135deg, #0b1f3a 0%, #1a3a5c 100%)',
  story1:        'linear-gradient(135deg, #1a3a2a 0%, #0b2a1a 100%)',
  story2:        'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
  story3:        'linear-gradient(135deg, #1a2a3a 0%, #0b1a2a 100%)',

  programDetail:      'linear-gradient(135deg, #1a2a4a 0%, #0b1a3a 100%)',
  programDetailInner: 'linear-gradient(135deg, #1e2e5e 0%, #0f1f4f 100%)',

  news1: 'linear-gradient(135deg, #1a3a4a 0%, #0b2a3a 100%)',
  news2: 'linear-gradient(135deg, #2a3a2a 0%, #1a2a1a 100%)',
  news3: 'linear-gradient(135deg, #3a2a1a 0%, #2a1a0b 100%)',

  volunteer:       'linear-gradient(135deg, #2a1a3a 0%, #1a0b2a 100%)',
  transparency:    'linear-gradient(135deg, #0b1f3a 0%, #1a3a5c 100%)',
  transparencyInner: 'linear-gradient(135deg, #1a2a4a 0%, #0b1a3a 100%)',

  meeting1: 'linear-gradient(135deg, #1a2a4a 0%, #2a3a5c 60%, #fd761a 100%)',
  meeting2: 'linear-gradient(135deg, #0d2b4e 0%, #1e4a6e 60%, #fd761a 100%)',
};

const FALLBACK_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#0b1f3a;stop-opacity:1"/>
        <stop offset="50%" style="stop-color:#1a3a5c;stop-opacity:1"/>
        <stop offset="100%" style="stop-color:#fd761a;stop-opacity:1"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#g)"/>
    <text x="200" y="145" font-family="sans-serif" font-size="14" font-weight="600"
      fill="rgba(255,255,255,0.45)" text-anchor="middle">OBOMOCARE</text>
    <text x="200" y="168" font-family="sans-serif" font-size="11"
      fill="rgba(255,255,255,0.25)" text-anchor="middle">Supporting Independence with Dignity</text>
  </svg>`
);

const buildFallbackSvg = (label: string) =>
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0b1f3a;stop-opacity:1"/>
          <stop offset="50%" style="stop-color:#1a3a5c;stop-opacity:1"/>
          <stop offset="100%" style="stop-color:#fd761a;stop-opacity:1"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#g)"/>
      <text x="200" y="145" font-family="sans-serif" font-size="14" font-weight="600"
        fill="rgba(255,255,255,0.45)" text-anchor="middle">${label}</text>
      <text x="200" y="168" font-family="sans-serif" font-size="11"
        fill="rgba(255,255,255,0.25)" text-anchor="middle">Supporting Independence with Dignity</text>
    </svg>`
  );

export default function PlaceholderImage({ imgSrc, fallbackLabel, gradient, className, alt, eager, size }: PlaceholderImageProps) {
  const bg = gradient || GRADIENTS[fallbackLabel || ''] || 'linear-gradient(135deg, #0b1f3a 0%, #fd761a 100%)';
  const width = size === 'hero' ? 1920 : size === 'card' ? 800 : size === 'thumb' ? 400 : undefined;
  const optimizedSrc = imgSrc ? optimizeCloudinaryUrl(imgSrc, width, size) : undefined;

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const el = e.currentTarget;
    el.style.background = bg;
    el.style.backgroundSize = 'cover';
    el.style.objectFit = 'cover';
    el.style.minHeight = '200px';
    el.alt = '';
    el.src = fallbackLabel
      ? 'data:image/svg+xml,' + buildFallbackSvg(fallbackLabel)
      : 'data:image/svg+xml,' + FALLBACK_SVG;
  };

  return (
    <img
      src={optimizedSrc}
      alt={alt || fallbackLabel || 'OBOMOCARE'}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      width={size === 'hero' ? 1920 : size === 'card' ? 800 : size === 'thumb' ? 400 : undefined}
      height={size === 'hero' ? 1080 : size === 'card' ? 450 : size === 'thumb' ? 300 : undefined}
      onError={handleError}
    />
  );
}
