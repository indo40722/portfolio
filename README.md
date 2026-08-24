# Akihiro Portfolio

React + TypeScript + Vite で作成した就活用ポートフォリオサイトです。GitHub Pages への自動デプロイを前提にしています。

## 開発

```bash
npm install
npm run dev
```

## 確認

```bash
npm run lint
npm run build
npm run preview
```

## GitHub Pages

GitHub のリポジトリ設定で `Settings` → `Pages` → `Build and deployment` → `Source` を `GitHub Actions` にします。`main` または `master` に push すると `.github/workflows/deploy.yml` が `dist` をビルドして公開します。

`username.github.io` リポジトリでは `/`、通常リポジトリでは `/<repository-name>/` を `VITE_BASE_PATH` として自動設定します。

## 公開前に差し替える場所

- `src/content/portfolio.ts` の `profileLinks.github`
- `src/content/portfolio.ts` の `profileLinks.email`
- 作品の公開URLやGitHub URLを追加したくなった場合は、同じファイルの `featuredProjects` にリンク項目を追加します。
