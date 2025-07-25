import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Southern Bucks Lawnscaping - Professional Lawn Care & Landscaping in Walker, LA",
  description = "Southern Bucks Lawnscaping provides professional lawn care, landscaping, and hardscaping services in Walker, LA and surrounding areas. Get your free quote today!",
  keywords = "lawn care Walker LA, landscaping Walker LA, lawn mowing, shrub trimming, mulching, hardscaping, retaining walls, Denham Springs, Port Vincent, Livingston",
  url = "https://southernbucklawn.com",
  image = "/og-image.jpg"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Shane Dantone" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Southern Bucks Lawnscaping" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Southern Bucks Lawnscaping",
          "description": description,
          "url": url,
          "telephone": "225-369-4434",
          "email": "SBL@southernbucklawn.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Brett Dr.",
            "addressLocality": "Walker",
            "addressRegion": "LA",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.4879",
            "longitude": "-90.8618"
          },
          "areaServed": [
            "Walker, LA",
            "Denham Springs, LA",
            "Port Vincent, LA",
            "Livingston, LA"
          ],
          "serviceType": [
            "Lawn Care",
            "Landscaping",
            "Hardscaping",
            "Lawn Mowing",
            "Shrub Trimming",
            "Mulching",
            "Retaining Walls",
            "Pressure Washing"
          ],
          "founder": {
            "@type": "Person",
            "name": "Shane Dantone"
          },
          "priceRange": "$$",
          "openingHours": "Mo-Sa 07:00-18:00"
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;

