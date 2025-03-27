// src/components/SEO.tsx
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
}

const SEO = ({ 
  title = 'Zaldivar & Co. | Strategy & Technical Execution',
  description = 'Leading fractional strategy and technical execution—crafted with care.',
  canonical = 'https://zaldivar.co',
  image = '/images/og-image.jpg'
}: SEOProps) => {
  const siteTitle = title.includes('Zaldivar & Co.') ? title : `${title} | Zaldivar & Co.`;
  
  useEffect(() => {
    // Update title
    document.title = siteTitle;
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('og:title', siteTitle);
    updateMetaTag('og:description', description);
    updateMetaTag('og:url', canonical);
    updateMetaTag('og:image', image);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', siteTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
    
    return () => {
      // Clean up function not strictly necessary for meta tags
    };
  }, [siteTitle, description, canonical, image]);
  
  return null;
};

// Helper function to update or create meta tags
function updateMetaTag(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  
  if (!meta) {
    meta = document.createElement('meta');
    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
}

export default SEO;