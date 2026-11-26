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

## GA4 瀏覽量

首頁顯示首頁與全站瀏覽量，文章顯示於標題下方，其餘頁面顯示於頁尾。GitHub Pages 部署時使用 GA4 Data API 讀取這個網站的累計瀏覽量，每天安排一次更新。GA4 暫時無法連線時，沿用快取內最近一次成功取得的資料。首次同步前顯示「暫無資料」。

1. 在 Google Cloud 啟用 [Google Analytics Data API](https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart)，建立服務帳戶，並在此站的 GA4 資源授予該帳戶 **Viewer**。
2. [設定 GitHub Actions 的 Workload Identity Federation](https://cloud.google.com/iam/docs/workload-identity-federation-with-deployment-pipelines)，將信任範圍限於此 repo 的 `refs/heads/main`，並授予該工作負載 `roles/iam.workloadIdentityUser` 以使用服務帳戶。
3. 在 GitHub repo 的 Settings → Secrets and variables → Actions → Variables 設定 `GA4_PROPERTY_ID`（GA4 資源的數字 ID）、`GA4_WORKLOAD_IDENTITY_PROVIDER` 與 `GA4_SERVICE_ACCOUNT`。在 Actions 執行 **Deploy to GitHub Pages**，確認 **Refresh public view counts** 成功。
