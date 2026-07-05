import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://jowolandborepile.co.id",
  output: "static",
  image: {
    domains: ["images.unsplash.com"],
  },
  prefetch: true,
  compressHTML: true,
  integrations: [
    sitemap(),
  ],
  vite: {
    build: {
      minify: "esbuild",
    },
  },
});
