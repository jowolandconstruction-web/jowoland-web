// Re-export from site config for backward compatibility
export {
  SITE,
  SEO,
  OG,
  COMPANY,
  SOCIAL_LINKS,
  createLocalBusinessSchema,
  createWebPageSchema,
} from '@/data/site';

export const partnersData: Array<{ icon: string; name: string; href: string }> = [];
