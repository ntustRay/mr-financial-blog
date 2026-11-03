import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const codeBlockMetaTransformer = {
  name: 'mr-blog-code-block-meta',
  pre(node) {
    const language = this.options.lang;
    if (typeof language === 'string' && language.length > 0) {
      node.properties['data-language'] = language;
    }

    const rawMeta = this.options.meta?.__raw;
    if (typeof rawMeta !== 'string') {
      return;
    }

    const filename = rawMeta
      .match(/(?:title|filename)=["']([^"']+)["']/u)?.[1]
      ?.trim();

    if (filename) {
      node.properties['data-filename'] = filename;
    }
  },
};

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://mr-financial-blog.vercel.app',
  base: process.env.SITE_BASE ?? '/',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;
        const excluded = ['/search/', '/categories/career-life/'];
        return !excluded.some((path) => pathname.endsWith(path));
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      transformers: [codeBlockMetaTransformer],
    },
  },
});
