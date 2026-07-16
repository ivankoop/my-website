import React from 'react';
import Head from 'next/head';

export const siteTitle = 'Ivan Koop — Senior Full Stack Developer';
const siteUrl = 'https://ivankoop.dev/';
const siteDescription =
  'Ivan Koop — Senior Full Stack Developer with 10+ years building React, TypeScript, and React Native products and design systems.';
const ogImage = `${siteUrl}og-image.png`;

// Static Person structured data. All values are build-time constants sourced
// from the site's own content (social links, current role, skills).
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ivan Koop',
  jobTitle: 'Senior Full Stack Developer',
  description: siteDescription,
  url: siteUrl,
  image: `${siteUrl}images/profile-picture.jpg`,
  sameAs: [
    'https://www.linkedin.com/in/ivankoop/',
    'https://github.com/ivankoop',
    'https://medium.com/@ivankoop',
    'https://www.youtube.com/@ivankoop1915',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Tabrasa LLC',
  },
  knowsAbout: [
    'ReactJS',
    'React Native',
    'TypeScript',
    'Django',
    'Node.js',
    'SQL',
    'Swift',
    'CI/CD',
    'Terraform',
    'Design Systems',
  ],
};

export default function Header() {
  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph — note: property=, not name= (the previous name="og:title"
          was ignored by every scraper) */}
      <meta property="og:type" content="profile" />
      <meta property="og:site_name" content="Ivan Koop" />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Ivan Koop — Senior Full Stack Developer"
      />

      {/* Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Theme color follows the active system theme */}
      <meta
        name="theme-color"
        content="#ffffff"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#1a1a1a"
        media="(prefers-color-scheme: dark)"
      />

      {/* Preload the fonts that render above the fold to avoid a heading FOUT */}
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="/font/JetBrainsMono-Regular.woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="/font/JetBrainsMono-Bold.woff2"
        crossOrigin="anonymous"
      />

      {/* Favicons */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />

      {/* Person structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </Head>
  );
}
