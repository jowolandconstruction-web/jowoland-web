import type { APIRoute, ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';
import logo from '@images/logo.webp';

interface Favicon {
  purpose: 'any' | 'maskable' | 'monochrome';
  src: ImageMetadata;
  sizes: number[];
}

const sizes = [192, 512];
const favicons: Favicon[] = [
  {
    purpose: 'any',
    src: logo,
    sizes,
  },
];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    favicons.flatMap(favicon =>
      favicon.sizes.map(async size => {
        const image = await getImage({
          src: favicon.src,
          width: size,
          height: size,
          format: 'png',
        });
        return {
          src: image.src,
          sizes: `${image.options.width}x${image.options.height}`,
          type: `image/${image.options.format}`,
          purpose: favicon.purpose,
        };
      })
    )
  );

  const manifest = {
    short_name: 'JowoLand',
    name: 'JowoLand Bore Pile',
    icons,
    display: 'minimal-ui',
    id: '/',
    start_url: '/',
    theme_color: '#facc15',
    background_color: '#ffffff',
  };

  return new Response(JSON.stringify(manifest));
};
