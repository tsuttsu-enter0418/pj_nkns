import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// テストデータ
const testProjects = [
  {
    "id": "1",
    "title": "○○市庁舎新築工事",
    "year": "2024/03/15",
    "description": "地上5階建ての市庁舎。\n耐震性能を重視した設計。\n延床面積: 3,500㎡",
    "category": "RC造",
    "location": "埼玉県北葛飾郡上町田町",
    "images": [
      "actualrProject_2.png",
      "actualrProject_3.jpg",
      "actualrProject_4.png"
    ]
  },
  {
    "id": "2",
    "title": "△△邸新築工事",
    "year": "2024/06/20",
    "description": "木のぬくもりを感じる住宅",
    "category": "木造",
    "location": "埼玉県北葛飾郡幸雑町",
    "images": [
      "actualrProject_5.webp",
      "actualrProject_6.webp",
      "actualrProject_7.png"
    ]
  },
  {
    "id": "3",
    "title": "商業ビル新築プロジェクト",
    "year": "2023/11/10",
    "description": "都心部に建設された地上8階建ての商業ビル。\n最新の省エネ設備を導入し、環境に配慮した設計を実現。\n1階は店舗、2階以上はオフィススペースとして利用。",
    "category": "鉄骨造",
    "location": "東京都千代田区",
    "images": []
  },
  {
    "id": "4",
    "title": "集合住宅リノベーション",
    "year": "2025/01/08",
    "description": "築30年の集合住宅を全面リノベーション。\n外観デザインの刷新と耐震補強を実施。\n各戸の間取り変更により、現代のライフスタイルに対応した住空間を実現。\n共用部分もバリアフリー化し、高齢者にも優しい設計に。",
    "category": "RC造",
    "location": "神奈川県横浜市",
    "images": [
      "actualrProject_2.png"
    ]
  },
  {
    "id": "5",
    "title": "保育園新築工事",
    "year": "2024/09/25",
    "description": "定員120名の認可保育園。子どもたちの安全を第一に考えた設計。",
    "category": "木造",
    "location": "埼玉県さいたま市",
    "images": [
      "actualrProject_3.jpg",
      "actualrProject_4.png"
    ]
  },
  {
    "id": "6",
    "title": "工場建設プロジェクト",
    "year": "2023/07/30",
    "description": "食品加工工場の新築工事。\n衛生管理基準に適合した設備配置。\n延床面積: 5,000㎡\n最新の空調システムを導入し、作業環境を改善。",
    "category": "鉄骨造",
    "location": "千葉県市川市",
    "images": [
      "actualrProject_5.webp",
      "actualrProject_6.webp"
    ]
  },
  {
    "id": "7",
    "title": "複合商業施設",
    "year": "2025/02/14",
    "description": "地上5階建ての複合商業施設。\n飲食店舗、ファッション店舗、シネマコンプレックスを含む地域のランドマーク。\n省エネルギー設計とバリアフリー対応を実現。",
    "category": "RC造",
    "location": "東京都渋谷区",
    "images": [
      "actualrProject_2.png",
      "actualrProject_3.jpg",
      "actualrProject_4.png",
      "actualrProject_5.webp"
    ]
  },
  {
    "id": "8",
    "title": "古民家改修工事",
    "year": "2024/04/12",
    "description": "築100年の古民家を宿泊施設として再生。伝統的な意匠を保ちながら、現代の快適性を実現。",
    "category": "木造",
    "location": "長野県松本市",
    "images": []
  }
];

// JSONを文字列化
const jsonString = JSON.stringify(testProjects, null, 2);

// UTF-16LE エンコードに変換
const buffer = Buffer.from(jsonString, 'utf16le');

// ファイルに書き込み
const outputPath = path.join(__dirname, '..', 'public', 'project.json');
fs.writeFileSync(outputPath, buffer);

console.log('✅ テストデータを生成しました: ' + outputPath);
console.log('📊 プロジェクト数: ' + testProjects.length);
console.log('📁 ファイルサイズ: ' + (buffer.length / 1024).toFixed(2) + ' KB');
