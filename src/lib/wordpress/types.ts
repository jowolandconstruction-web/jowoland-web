export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface WCProduct {
  id: number;
  slug: string;
  name: string;
  description: string;
  short_description: string;
  date_created: string;
  images: Array<{ src: string; alt: string }>;
  meta_data: Array<{ key: string; value: unknown }>;
  categories: Array<{ name: string; slug: string }>;
  tags: Array<{ name: string; slug: string }>;
  regular_price?: string;
  sale_price?: string;
}

export interface PortfolioProject {
  id: number;
  slug: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  location: string;
  method: string;
  diameter: string;
  depth: string;
  points: string;
  date: string;
  price: string;
  discountPrice: string;
  categories: string[];
  tags: string[];
  keywords: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  imageAlt: string;
}
