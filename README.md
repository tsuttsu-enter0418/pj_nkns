# 株式会社 中西構造設計 - 公式ウェブサイト

奈良県橿原市の構造設計事務所である株式会社中西構造設計の公式ウェブサイトです。React + TypeScript + Viteで構築されたモダンなシングルページアプリケーション（SPA）です。

## 📋 目次

- [概要](#概要)
- [技術スタック](#技術スタック)
- [プロジェクト構造](#プロジェクト構造)
- [セットアップ](#セットアップ)
- [開発](#開発)
- [ビルド](#ビルド)
- [機能](#機能)
- [データ管理](#データ管理)
- [デプロイ](#デプロイ)

## 概要

このウェブサイトは、構造設計事務所のプロフェッショナルなオンラインプレゼンスを提供します。会社情報、実績紹介、方針説明などを含む4つの主要ページで構成されています。

**主な特徴:**
- レスポンシブデザイン（モバイル対応）
- SEO最適化済み
- Google Analytics統合
- プロジェクト管理機能（CRUD操作）
- 画像カルーセル付きプロジェクト詳細表示

## 技術スタック

### フロントエンド
- **React 18** - UIライブラリ
- **TypeScript 5** - 型安全性
- **React Router DOM v6** - ページルーティング
- **TailwindCSS 3** - スタイリング
- **Lucide React** - アイコン

### ビルドツール
- **Vite 5** - 高速開発サーバー・ビルドツール
- **PostCSS** - CSS処理
- **Autoprefixer** - ベンダープレフィックス自動付与

### 開発ツール
- **ESLint** - コード品質チェック
- **TypeScript ESLint** - TypeScript用Lintルール

## プロジェクト構造

```
NKNS/
├── public/                      # 静的ファイル
│   ├── data/                    # プロジェクトデータ
│   │   ├── project.json         # プロジェクト情報（UTF-8エンコード）
│   │   └── actualrProject_*.png # 実績画像
│   ├── HaruoNakanishi_pic.jpg   # 代表者プロフィール画像
│   ├── blueprint1.png           # 背景画像
│   ├── blueprint2.png           # 背景画像
│   ├── robots.txt               # SEO: クローラー制御
│   └── sitemap.xml              # SEO: サイトマップ
├── src/
│   ├── components/              # 再利用可能なコンポーネント
│   │   ├── Navbar.tsx           # ナビゲーションバー
│   │   ├── Footer.tsx           # フッター
│   │   ├── ProjectModal.tsx     # プロジェクト詳細モーダル
│   │   └── AdminModal.tsx       # プロジェクト管理モーダル
│   ├── pages/                   # ページコンポーネント
│   │   ├── HomePage.tsx         # トップページ
│   │   ├── AboutPage.tsx        # 会社情報ページ
│   │   ├── PolicyPage.tsx       # 方針・スタッフページ
│   │   └── ProjectsPage.tsx     # 実績一覧ページ
│   ├── App.tsx                  # メインアプリケーションコンポーネント
│   ├── main.tsx                 # エントリーポイント
│   └── index.css                # グローバルスタイル
├── index.html                   # HTMLテンプレート
├── package.json                 # 依存関係
├── tsconfig.json                # TypeScript設定
├── tailwind.config.js           # TailwindCSS設定
├── vite.config.ts               # Vite設定
└── eslint.config.js             # ESLint設定
```

## セットアップ

### 前提条件
- Node.js 18以上
- npm または yarn

### インストール

```bash
# NKNSディレクトリに移動
cd NKNS

# 依存パッケージをインストール
npm install
```

## 開発

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが起動し、通常 `http://localhost:5173` でアクセス可能になります。

### その他の開発コマンド

```bash
# ESLintでコード品質チェック
npm run lint

# 本番ビルドのプレビュー
npm run preview
```

## ビルド

### 本番用ビルド

```bash
npm run build
```

ビルド成果物は `dist/` ディレクトリに出力されます。

### ビルドの注意事項

⚠️ **重要:** ビルド時、`public/` ディレクトリのファイルは `dist/` 直下にフラット化されて配置されます。

例:
```
public/data/project.json → dist/data/project.json
public/robots.txt        → dist/robots.txt
```

このため、VBAマクロなど外部からファイルパスを参照している場合は注意が必要です。

### エンコーディング要件

- **project.json**: UTF-8エンコードである必要があります
- JSONファイルの文字化けを防ぐため、必ずUTF-8で保存してください

## 機能

### 1. ページ構成

#### トップページ (`/`)
- 会社のヒーローセクション
- サービス紹介
- CTA（お問い合わせへの誘導）

#### 会社情報 (`/about`)
- 会社概要
- 代表者プロフィール
- 会社の歴史・沿革

#### 方針・スタッフ (`/policy`)
- 企業方針
- スタッフ紹介

#### 実績一覧 (`/projects`)
- プロジェクトのフィルタリング機能
  - カテゴリー別: 住宅、商業施設、公共建築、産業施設
- プロジェクト詳細モーダル
- プロジェクト管理機能（Admin）

### 2. コンポーネント

#### Navbar
- レスポンシブデザイン
- モバイルメニュー
- ページ間ナビゲーション

#### Footer
- 会社情報
- 連絡先
- コピーライト

#### ProjectModal
- プロジェクト詳細表示
- 画像カルーセル機能
- 前後のプロジェクトへのナビゲーション

#### AdminModal
- プロジェクトの新規作成
- 既存プロジェクトの編集
- プロジェクトの削除
- 画像アップロード対応

### 3. データ管理

プロジェクトデータは `/public/data/project.json` に保存されています。

#### プロジェクトデータ構造

```typescript
interface Project {
  id: number;              // 一意のID
  title: string;           // プロジェクト名
  category: string;        // カテゴリー（residential, commercial, public, industrial）
  location: string;        // 所在地
  year: string;           // 完成年
  description: string;     // 説明文
  images: string[];       // 画像パスの配列（/data/から始まる相対パス）
}
```

#### 状態管理
- **React useState/useEffect** を使用したクライアントサイド状態管理
- バックエンドAPIは不使用
- JSONファイルから直接データを読み込み

### 4. スタイリング

#### カスタムカラースキーム

TailwindCSSの設定でカスタムカラーを定義:

- **Navy**: 企業カラー（#1a365d など）
- **Orange**: アクセントカラー（#ff7e1d など）

各色は50〜900の階層で定義されています。

#### レスポンシブデザイン

- モバイルファースト設計
- TailwindのBreakpointsを使用
- タッチデバイス対応

### 5. SEO対策

- メタタグ最適化（title, description, keywords）
- Open Graph対応（Facebook等でのシェア最適化）
- Twitter Card対応
- Canonical URL設定
- `robots.txt` によるクローラー制御
- `sitemap.xml` によるサイトマップ提供

### 6. アナリティクス

Google Analytics（G-SDNBEK57FS）が統合されており、以下をトラッキング:
- ページビュー
- ページ遷移
- ユーザー行動

## デプロイ

### Vercelへのデプロイ

現在、本サイトはVercelにデプロイされています:
- **URL**: https://pj-nkns.vercel.app/

### デプロイ手順

1. **ビルド**
```bash
npm run build
```

2. **Vercelにプッシュ**
   - Gitリポジトリにプッシュすると自動デプロイ
   - または Vercel CLI を使用

### 環境変数

現在、環境変数は使用していません。Google Analytics IDなどはコード内にハードコードされています。

## 開発ガイドライン

### コーディング規約

- TypeScriptの型定義を活用
- ESLintルールに従う
- コンポーネントは関数コンポーネントで記述
- React Hooksを使用

### ファイル命名規則

- コンポーネント: PascalCase（例: `ProjectModal.tsx`）
- ページ: PascalCase + "Page"（例: `HomePage.tsx`）
- ユーティリティ: camelCase

### Git運用

- `main` ブランチが本番環境
- フィーチャーブランチで開発
- プルリクエストでレビュー

## トラブルシューティング

### よくある問題

#### 1. ビルドエラー
```bash
# node_modulesを削除して再インストール
rm -rf node_modules package-lock.json
npm install
```

#### 2. 開発サーバーが起動しない
```bash
# ポートが使用中の場合は別のポートを指定
npm run dev -- --port 3000
```

#### 3. 画像が表示されない
- `public/data/` ディレクトリに画像が存在するか確認
- `project.json` のパスが正しいか確認（`/data/` から始まる）

#### 4. JSONファイルが文字化けする
- エンコーディングがUTF-8であることを確認
- エディタでUTF-8として保存し直す

## ライセンス

このプロジェクトは株式会社中西構造設計の所有物です。

## お問い合わせ

株式会社中西構造設計
- 所在地: 奈良県橿原市
- ウェブサイト: https://pj-nkns.vercel.app/

---

**最終更新日**: 2026年3月
