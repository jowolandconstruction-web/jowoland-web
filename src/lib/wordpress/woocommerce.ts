import { fetchWooCommerce } from '@/lib/wordpress/client';
import type { PortfolioProject, WCProduct } from '@/lib/wordpress/types';
import { isWooCommerceConfigured } from '@/lib/env';
import { fallbackPortfolio } from '@/data/fallback/portfolio';

function getMetaValue(
  meta: WCProduct['meta_data'],
  key: string
): string {
  const item = meta.find(m => m.key === key);
  return item?.value != null ? String(item.value) : '';
}

function mapProduct(product: WCProduct): PortfolioProject {
  // Use regular_price and sale_price from WC product first, fall back to meta
  const priceStr = product.regular_price || getMetaValue(product.meta_data, '_price');
  const discountPriceStr = product.sale_price || getMetaValue(product.meta_data, '_sale_price');
  
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    description: product.description || product.short_description,
    image: product.images[0]?.src ?? '',
    imageAlt: product.images[0]?.alt ?? product.name,
    location:
      getMetaValue(product.meta_data, 'project_location') ||
      getMetaValue(product.meta_data, '_project_location'),
    method:
      getMetaValue(product.meta_data, 'project_method') ||
      getMetaValue(product.meta_data, '_project_method'),
    diameter:
      getMetaValue(product.meta_data, 'project_diameter') ||
      getMetaValue(product.meta_data, '_project_diameter'),
    depth:
      getMetaValue(product.meta_data, 'project_depth') ||
      getMetaValue(product.meta_data, '_project_depth'),
    points:
      getMetaValue(product.meta_data, 'project_points') ||
      getMetaValue(product.meta_data, '_project_points'),
    price: priceStr ? `Rp ${Number(priceStr).toLocaleString('id-ID')}` : '',
    discountPrice: discountPriceStr ? `Rp ${Number(discountPriceStr).toLocaleString('id-ID')} / m` : '',
    categories: product.categories.map(cat => cat.name),
    tags: [
      ...(product.tags?.map(tag => tag.name) || []),
      ...(getMetaValue(product.meta_data, 'project_tags')?.split(',').map(t => t.trim()) || [])
    ].filter(Boolean),
    keywords: getMetaValue(product.meta_data, 'project_keywords')?.split(',').map(k => k.trim()) || [],
    date: product.date_created,
  };
}

export async function getPortfolioProjects(
  limit = 100
): Promise<PortfolioProject[]> {
  if (!isWooCommerceConfigured()) {
    return fallbackPortfolio;
  }

  try {
    const products = await fetchWooCommerce<WCProduct[]>('/products', {
      per_page: limit,
      orderby: 'date',
      order: 'desc',
      status: 'publish',
    });

    if (!products.length) return fallbackPortfolio;

    return products.map(mapProduct);
  } catch (error) {
    console.warn('[WooCommerce] Gagal mengambil portofolio:', error);
    return fallbackPortfolio;
  }
}

export async function getPortfolioProjectBySlug(
  slug: string
): Promise<PortfolioProject | null> {
  const projects = await getPortfolioProjects();
  return projects.find(p => p.slug === slug) ?? null;
}
