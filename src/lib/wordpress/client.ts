import { getWordPressUrl, getWooCommerceCredentials } from '@/lib/env';

export class WordPressApiError extends Error {
  constructor(
    message: string,
    public status?: number
  ) {
    super(message);
    this.name = 'WordPressApiError';
  }
}

export async function fetchWordPress<T>(
  path: string,
  params?: Record<string, string | number>
): Promise<T> {
  const baseUrl = getWordPressUrl();

  if (!baseUrl) {
    throw new WordPressApiError('WORDPRESS_URL belum dikonfigurasi di .env');
  }

  const url = new URL(`${baseUrl}/wp-json${path}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new WordPressApiError(
      `WordPress API error: ${response.statusText}`,
      response.status
    );
  }

  return response.json() as Promise<T>;
}

export async function fetchWooCommerce<T>(
  path: string,
  params?: Record<string, string | number>
): Promise<T> {
  const baseUrl = getWordPressUrl();
  const credentials = getWooCommerceCredentials();

  if (!baseUrl || !credentials) {
    throw new WordPressApiError(
      'WooCommerce credentials belum dikonfigurasi di .env'
    );
  }

  const url = new URL(`${baseUrl}/wp-json/wc/v3${path}`);
  url.searchParams.set('consumer_key', credentials.consumerKey);
  url.searchParams.set('consumer_secret', credentials.consumerSecret);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, String(value));
    });
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new WordPressApiError(
      `WooCommerce API error: ${response.statusText}`,
      response.status
    );
  }

  return response.json() as Promise<T>;
}
