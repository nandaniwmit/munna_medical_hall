import { useEffect } from 'react';
import { FAQS } from '../data/mockData';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  activeTab: string;
}

export default function SEOHead({ title, description, keywords, activeTab }: SEOProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | Munna Medical Hall Gaya`;

    // Helper to find or create meta tags
    const setMetaTag = (attribute: string, attrValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentValue);
    };

    // Helper to find or create link tags
    const setLinkTag = (rel: string, hrefValue: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', hrefValue);
    };

    // 2. Standard SEO Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords || 'pharmacy in gaya, medical store gaya, medicine shop bata more, genuine medicines bihar, Munna Medical Hall, home delivery medicines gaya, surgical supplies bihar');
    setMetaTag('name', 'author', 'Munna Medical Hall');
    setMetaTag('name', 'robots', 'index, follow');

    // 3. Open Graph (Facebook / LinkedIn) Meta Tags
    setMetaTag('property', 'og:title', `${title} | Munna Medical Hall`);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', window.location.origin);
    setMetaTag('property', 'og:image', 'https://images.unsplash.com/photo-1631549916768-4119b255f946?q=80&w=1200&auto=format&fit=crop');
    setMetaTag('property', 'og:site_name', 'Munna Medical Hall');

    // 4. Twitter Cards Meta Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', `${title} | Munna Medical Hall`);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', 'https://images.unsplash.com/photo-1631549916768-4119b255f946?q=80&w=1200&auto=format&fit=crop');

    // 5. Canonical Link
    setLinkTag('canonical', `${window.location.origin}/#${activeTab}`);

    // 6. JSON-LD Schema Markup
    // Remove existing schema scripts
    const oldScripts = document.querySelectorAll('script[data-schema-id]');
    oldScripts.forEach((script) => script.remove());

    const addSchema = (id: string, schemaObj: any) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-schema-id', id);
      script.textContent = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    };

    // A. Local Pharmacy Business Schema
    const pharmacySchema = {
      '@context': 'https://schema.org',
      '@type': 'Pharmacy',
      '@id': `${window.location.origin}/#pharmacy`,
      'name': 'Munna Medical Hall',
      'image': 'https://images.unsplash.com/photo-1631549916768-4119b255f946?q=80&w=1200&auto=format&fit=crop',
      'url': window.location.origin,
      'telephone': '+918797611171',
      'priceRange': '₹₹',
      'logo': 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=200&auto=format&fit=crop',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Q2X2+R37 Bata more, Tekari Rd, Maroof Ganj',
        'addressLocality': 'Gaya',
        'addressRegion': 'Bihar',
        'postalCode': '823001',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '24.7955', // Standard Gaya, Bihar approximation coordinates
        'longitude': '84.9994'
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '08:30',
        'closes': '22:00'
      },
      'sameAs': [
        'https://maps.google.com/?cid=1234567890123456' // Placeholders or generic business listings if required
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-8797611171',
        'contactType': 'customer service',
        'areaServed': 'Gaya',
        'availableLanguage': ['Hindi', 'English']
      }
    };
    addSchema('local-pharmacy-schema', pharmacySchema);

    // B. FAQ Page Schema (Google Search Rich Snippet)
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQS.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };
    addSchema('faq-schema', faqSchema);

    // C. Breadcrumbs Schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': `${window.location.origin}/#home`
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': activeTab.charAt(0).toUpperCase() + activeTab.slice(1),
          'item': `${window.location.origin}/#${activeTab}`
        }
      ]
    };
    addSchema('breadcrumb-schema', breadcrumbSchema);

  }, [title, description, keywords, activeTab]);

  return null; // Side effect only
}
