# Financial

MingRay 的金錢與生活筆記。沿用 [MR Blog](https://ntustray.github.io/mr-blog/) 的 Astro 架構與版型，配色改為海軍藍、墨綠與金色。

## 開發

Node.js 24：

```sh
npm ci
npm run dev
```

## 驗證

```sh
npm run check:taxonomy
npm run build
npm run check:seo
```

Build 包含 Pagefind 搜尋索引與站內連結檢查。首頁、分類、Tags、Archive、Series、TOC、瀏覽次數與文章元件沿用 mr-blog。

## 內容

- `src/content/blog/`：Markdown 文章。
- `src/config/site.ts`：網站名稱與作者資訊。
- `src/config/taxonomy.ts`：Investing、Housing、Life。
- `src/config/series.ts`：保留 Series 擴充點，目前無系列。
- `docs/MIGRATION.md`：搬移與保留規則。

與求職、面試、code 有關的文章留在 mr-blog。工程師選股網只有一篇使用指南；全部技術教學仍在原站。

## 部署

Public GitHub Repo + GitHub Pages，main 更新後自動部署。部署 Workflow 沿用 mr-blog 的 Astro Build 與 Pages 發布流程。

首次設定：Repository → Settings → Pages → Source 選 **GitHub Actions**。之後 push main 即會發布。

正式站：`https://ntustray.github.io/mr-financial-blog/`。預設 base 為 `/mr-financial-blog`；本機測試 root-path 可用 `SITE_BASE=/ npm run build`。

留言使用 mr-blog 的既有 public Discussions backend，沿用穩定 `posts/<post.id>` term，保留舊文章的留言。giscus 的允許 origin 設定由 mr-blog 的 `giscus.json` 管理。Private source Repo 不作為公開留言儲存庫。

Busuanzi 計數以 origin 與 URL 為準；搬站前的文章瀏覽數不會自動合併。無法載入時顯示「—」。
