export function getWordPressUrl(): string | undefined {
  return import.meta.env.WORDPRESS_URL?.replace(/\/$/, '');
}

export function getWooCommerceCredentials():
  | { consumerKey: string; consumerSecret: string }
  | undefined {
  const consumerKey = import.meta.env.WC_CONSUMER_KEY;
  const consumerSecret = import.meta.env.WC_CONSUMER_SECRET;

  if (!consumerKey || !consumerSecret) return undefined;

  return { consumerKey, consumerSecret };
}

export function isWordPressConfigured(): boolean {
  return Boolean(getWordPressUrl());
}

export function isWooCommerceConfigured(): boolean {
  return Boolean(getWordPressUrl() && getWooCommerceCredentials());
}
