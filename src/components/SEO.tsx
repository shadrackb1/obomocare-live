import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  children?: React.ReactNode;
}

const SITE = {
  name: 'OBOMOCARE',
  url: 'https://obomocare.org',
  description: 'Supporting communities through sustainable programs in food support, maternal health, elderly care, and youth development.',
  image: '/og-image.png',
};

export function SEO({
  title,
  description = SITE.description,
  image = SITE.image,
  url = SITE.url,
  type = 'website',
  children,
}: SEOProps) {
  const seoTitle = title ? `${title} | ${SITE.name}` : SITE.name;
  const fullUrl = `${SITE.url}${url}`;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {children}
    </Helmet>
  );
}

export function usePageTitle(title: string) {
  if (typeof document !== 'undefined') {
    document.title = `${title} | ${SITE.name}`;
  }
}
