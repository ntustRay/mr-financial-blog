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

## 公開瀏覽量

公開瀏覽量來自 GA4 的 `screenPageViews`。每日部署會依本站正式網址抓取累計瀏覽量，將數字寫進靜態頁面。報表讀取失敗時沿用已發布的快照，首次同步前顯示「待更新」。`pageviews.json` 只發布本站總量、統計截止日及已發布頁面的瀏覽量。

首次設定：

1. 在 Google Cloud 啟用 Google Analytics Data API，設定 GitHub Actions 的 Workload Identity Federation 和服務帳戶。把可使用該服務帳戶的 GitHub 身分限制在本 repository 的 `main` 部署 workflow。
2. 在 GA4 的資源存取權管理中給服務帳戶 **Viewer**。
3. 新增 GitHub Actions repository variables：`GA4_PROPERTY_ID`（GA4 的數字資源 ID）、`GA4_WORKLOAD_IDENTITY_PROVIDER`（完整 provider 路徑）及 `GA4_SERVICE_ACCOUNT`（服務帳戶 Email）。
4. 執行一次 **Deploy to GitHub Pages**，確認 Refresh public pageviews 成功，且正式首頁、文章頁和一般頁面有數字。
