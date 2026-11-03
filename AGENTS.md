# Financial

## Project

- Astro + TypeScript static blog copied from `ntustRay/mr-blog`.
- Author: MingRay, Full-Stack Engineer. Site name: Financial.
- Keep the original mr-blog layout, components, fonts, spacing, responsive rules, and CSS. Only colour values may differ unless explicitly requested.
- Source repository is public. GitHub Pages serves the public static site.
- The canonical origin is `https://ntustray.github.io`; `SITE_BASE` defaults to `/mr-financial-blog`.

## Content boundary

- Publish money and life content unrelated to job applications or coding.
- Job search, interview preparation, programming, and technical tutorials stay in `mr-blog`.
- The 10-part engineer-stock technical series stays in mr-blog. Financial has one user-facing overview and usage guide, linking to that series.
- Do not move an article merely because it mentions money or stocks. Classify by its purpose and actual content.
- Imported articles retain their filenames, titles, dates, and prose. Category may be mapped to this site's taxonomy. Preserve historical notices.
- Use exactly one title prefix: `[News]`, `[Guide]`, `[Insight]`, or `[Review]`.
- Categories are defined in `src/config/taxonomy.ts`; tags are normalized by `src/utils/tags.ts`.
- Preserve the Series architecture, but do not invent empty technical series.

## Writing

- Traditional Chinese, concise steps, necessary screenshots and tables. No filler or invented first-person experience.
- Distinguish current UI verification, older screenshots, source claims, and untested member flows.
- Preserve missing values and source dates; do not imply real-time prices or complete financial histories.
- Do not publish private repository content, credentials, account details, or investment recommendations disguised as usage instructions.
- Drafting does not authorize publishing. Follow the user's explicit publishing instruction.

## Engineering and validation

- Static-first; TypeScript strict; no unnecessary dependencies or runtime frameworks.
- Raster images use WebP. Keep existing SVG assets where appropriate.
- Run `npm run check:taxonomy`, `npm run build`, and `npm run check:seo` after content or configuration changes.
- Check colour-only CSS parity against mr-blog and inspect desktop/mobile when possible.
- Stage the destination first, verify it is publicly available, then replace the two original article routes with canonical redirects. Do not remove unrelated posts.
- Public giscus comments share mr-blog's existing public Discussions backend, keeping migrated post IDs stable. Never point the widget to the private source repository.
