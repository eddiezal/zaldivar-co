// src/components/SEO.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  noindex?: boolean; // Optional noindex for specific pages
  alternate?: string; // Optional alternate URL (if needed for future internationalization)
}

const SEO = ({
  title = 'Zaldivar & Co. | Strategy & Technical Execution',
  description = 'Leading fractional strategy and technical execution—crafted with care.',
  canonical = 'https://zaldivar.co',
  image = '/images/og-image.jpg',
  noindex = false,
  alternate
}: SEOProps) => {
  const siteTitle = title.includes('Zaldivar & Co.') ? title : `${title} | Zaldivar & Co.`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Optional Noindex */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph Meta */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Optional Alternate Link for Future Internationalization */}
      {alternate && <link rel="alternate" href={alternate} hrefLang="en" />}
    </Helmet>
  );
};

export default SEO;
