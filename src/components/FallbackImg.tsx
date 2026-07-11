import React, { useState } from 'react';

interface FallbackImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackBg?: string;
}

export default function FallbackImg({ src, alt, fallbackBg, className, style, ...props }: FallbackImgProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={className}
        style={{
          background: fallbackBg || 'linear-gradient(135deg, #0b1f3a 0%, #fd761a 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...style,
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', fontWeight: 600, textAlign: 'center', padding: '1rem' }}>
          OBOMOCARE
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      loading="lazy"
      {...props}
    />
  );
}
