# ProjectsPage 設計書

## 1. 概要

本画面は設計実績情報を閲覧できることを実現します。
ユーザーは一覧形式でプロジェクト情報を閲覧でき、詳細（画像など）を見たい場合にクリックして詳細モーダルを表示できます。

## 2. データ構造

### 2.1 Projectインターフェース

```typescript
interface Project {
  id: number;
  title: string;         // 設計の概要
  year: string;          // 実績年月日（例: "2025/05/08"）
  description: string;   // 説明
  category: string;      // 構造カテゴリー（木造、RC造など、ユーザー任意）
  location: string;      // 場所
  images: string[];      // 画像ファイルパス配列
}
```

### 2.2 データ取得元

- **ファイルパス**: `/public/project.json`
- **エンコード**: UTF-16LE
- **取得方法**: fetchAPI + TextDecoder("utf-16le")

## 3. 画面構成

### 3.1 Hero Section
- 背景画像付きのヘッダーセクション
- タイトル: "設計実績"
- サブタイトル: 説明文

### 3.2 Filter Section（フィルタリング機能）
- **カテゴリーフィルター**: カテゴリーボタンで絞り込み
  - 初期状態: "すべて"を表示
  - 現在選択中のカテゴリーはオレンジ色でハイライト
- **フィルター結果件数表示**: "X件の実績が見つかりました"
- ~~**検索バー**~~: 削除（不要）

### 3.3 Projects Grid（一覧表示）- **改善対象**

#### 3.3.1 現状の課題
- クリックしないと情報が見えない仕組み
- カード内に基本情報（title, year, category, location）のみ表示
- 「画像を見る」ボタンをクリックしてモーダルを開く必要がある

#### 3.3.2 改善後のUI設計

**カードレイアウト（展開型）**

各プロジェクトカードは以下の情報を一覧で表示:

```
┌─────────────────────────────────────┐
│ [タイトル]              [年月日バッジ]│
│ [カテゴリーバッジ]                    │
│ [場所アイコン + 場所]                 │
│                                      │
│ 説明文:                              │
│ [descriptionの全文を表示]            │
│                                      │
│ ┌──────────────┐                    │
│ │ 詳細・画像を見る │ ← クリックでモーダル│
│ │  (X枚の画像)    │                   │
│ └──────────────┘                    │
└─────────────────────────────────────┘
```

**表示項目（一覧カード内）**:
1. **タイトル** (project.title) - 太字、大きめのフォント
2. **年月日** (project.year) - オレンジ色のバッジ（右上）
3. **カテゴリー** (project.category) - グレー背景のバッジ
4. **場所** (project.location) - Buildingアイコン付き
5. **説明** (project.description) - 全文表示、複数行対応
6. **詳細ボタン** - 画像がある場合のみ表示、画像枚数を表示

### 3.4 Project Detail Modal（詳細モーダル）

クリック時に表示される詳細画面:
- **画像カルーセル**: 複数画像の切り替え表示
- **詳細情報**:
  - カテゴリー、場所、年月日のバッジ
  - プロジェクト概要（description）
  - 施工場所、完成年の詳細表示

## 4. 機能要件

### 4.1 データ取得
- [x] 初回レンダリング時に`/public/project.json`からデータを取得
- [x] UTF-16LEエンコーディングでデコード
- [x] ローディング状態の表示
- [x] エラーハンドリング

### 4.2 フィルタリング機能
- [x] カテゴリーによる絞り込み
- [x] "すべて"オプションで全件表示

### 4.3 一覧表示機能（改善項目）
- [ ] **descriptionの全文を一覧カード内に表示**
- [ ] **カード高さを可変にしてコンテンツに応じて調整**
- [ ] **説明文が長い場合の適切な表示（折り返し、改行対応）**
- [ ] レスポンシブ対応（モバイル: 1列、タブレット: 2列、デスクトップ: 3列）
- [x] 実績がない場合のメッセージ表示

### 4.4 詳細モーダル機能
- [x] クリックでモーダルを開く
- [x] 画像カルーセル（前後の画像切り替え）
- [x] モーダル外クリックまたは×ボタンで閉じる
- [x] 画像がない場合の適切な表示

## 5. 状態管理

### 5.1 State一覧

```typescript
const [selectedCategory, setSelectedCategory] = useState<string>("all"); // 選択中カテゴリー
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);    // モーダル表示状態
const [currentProject, setCurrentProject] = useState<Project | null>(null); // モーダル表示中のプロジェクト
const [isLoading, setIsLoading] = useState<boolean>(true);         // データ取得中状態
const [projects, setProjects] = useState<Project[]>([]);           // プロジェクトデータ
```

### 5.2 派生データ

```typescript
const filteredProjects = projects.filter((project) => {
  const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
  return matchesCategory;
});
```

## 6. カテゴリー定義

### 6.1 カテゴリー（動的生成）
- JSONファイル内のcategoryフィールドから一意のカテゴリーを抽出して動的に生成
- 例: "RC造", "木造", "鉄骨造" など
- **実装方針**:
  - プロジェクトデータから一意のカテゴリーを抽出
  - "すべて"オプションを先頭に追加
  - フィルターアイコンは共通で<Filter />を使用

```typescript
// カテゴリーの動的生成
const uniqueCategories = Array.from(new Set(projects.map(p => p.category)));
const categories = [
  { id: "all", name: "すべて" },
  ...uniqueCategories.map(cat => ({ id: cat, name: cat }))
];
```

## 7. スタイリング

### 7.1 カラースキーム
- **プライマリカラー**: オレンジ (bg-orange-500, text-orange-800)
- **セカンダリカラー**: グレー (bg-gray-100, text-gray-700)
- **背景**: 白 (bg-white) / 薄いグレー (bg-gray-50)

### 7.2 レスポンシブブレークポイント
- **モバイル**: デフォルト (1列グリッド)
- **タブレット**: md:以上 (2列グリッド)
- **デスクトップ**: lg:以上 (3列グリッド)

### 7.3 カードデザイン改善
- **現状**: 固定高さ、情報が隠れている
- **改善後**:
  - 高さ自動調整（auto height）
  - descriptionを全文表示（whitespace-pre-lineで改行対応）
  - パディング・マージンを適切に調整
  - ホバー時のシャドウエフェクト維持

## 8. 実装の優先順位

### Phase 1: 一覧表示の改善（本リリース対象）
1. 検索バーを削除
2. カード内にdescriptionを全文表示
3. カード高さを可変に変更
4. 説明文の改行・折り返し対応
5. ボタンテキストを「詳細・画像を見る」に変更

### Phase 2: 将来的な拡張（オプション）
- カテゴリーの動的生成機能
- 並び替え機能（年月日順、カテゴリー順など）
- ページネーションまたは無限スクロール
- 画像のプリロード・最適化

## 9. 既存機能の保持・削除

### 保持する機能:
- JSON取得ロジック（UTF-16LEデコード）
- カテゴリーフィルター機能
- モーダル表示機能（ProjectModalコンポーネント）
- レスポンシブレイアウト

### 削除する機能:
- 検索バー（searchTerm関連のstate、UI、ロジック）

## 10. 変更ファイル

- `NKNS/src/pages/ProjectsPage.tsx` - 一覧カードのレイアウト変更

## 11. 備考

- JSONファイルのエンコーディング（UTF-16LE）は変更しない
- VBAマクロとの連携があるため、public/のファイルパスは変更しない
- ビルド時に/dist直下にフラット化される仕様を考慮
