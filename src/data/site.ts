export const COMPANY = {
  name: 'PT. Jowo Land Construction',
  shortName: 'Jowo Land',
  domain: 'jowolandborepile.co.id',
  tagline: 'Kontraktor Jasa Bored Pile (Strauss Pile) Harga per Meter',
  founded: 2012,
  phone: '0852-8074-9218',
  phoneWa: '6285280749218',
  email: 'info@jowolandborepile.com',
  address:
    'Karanganyar, Ketitang, Kec. Godong, Kabupaten Grobogan, Jawa Tengah 58162',
  mapsUrl: 'https://maps.app.goo.gl/ww4J22EsiijZcD6i7',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0!2d110.7!3d-7.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDAnMDAuMCJTIDExMMKwNDInMDAuMCJF!5e0!3m2!1sid!2sid!4v1',
  hours: 'Buka 24 jam',
  youtubeEmbed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/PT.Jowolandconstruction',
  instagram: 'https://www.instagram.com/pt._jowo_land_construction/',
  youtube: 'https://www.youtube.com/@JowolandConstruction',
  linkedin: 'https://linkedin.com/in/ptjowolandconstruction',
  tiktok: 'https://www.tiktok.com/@jowoland_construction',
  pinterest: 'https://id.pinterest.com/PTJowoLandConstruction/',
  maps: 'https://maps.app.goo.gl/ww4J22EsiijZcD6i7',
} as const;

export const SITE = {
  title: COMPANY.name,
  tagline: COMPANY.tagline,
  description:
    'PT. Jowo Land Construction merupakan kontraktor jasa bore pile & strauss pile profesional dan berpengalaman sejak 2012, dengan harga per meter murah.',
  description_short:
    'Kontraktor jasa bore pile & strauss pile profesional sejak 2012.',
  url: `https://${COMPANY.domain}`,
  author: COMPANY.name,
  lang: 'id',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'id-ID',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'id_ID',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: Kontraktor Jasa Bored Pile Harga per Meter`,
  description: SITE.description,
  image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=630&fit=crop',
};

export function createLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    description: SITE.description,
    url: SITE.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address,
      addressLocality: 'Grobogan',
      addressRegion: 'Jawa Tengah',
      addressCountry: 'ID',
    },
    openingHours: 'Mo-Su 00:00-24:00',
    sameAs: Object.values(SOCIAL_LINKS),
  };
}

export function createWebPageSchema(
  path: string,
  name: string,
  description: string,
  type = 'WebPage'
) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${SITE.url}${path}`,
    url: `${SITE.url}${path}`,
    name,
    description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
    inLanguage: 'id-ID',
  };
}
