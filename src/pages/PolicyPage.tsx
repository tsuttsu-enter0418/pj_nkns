import React from 'react';
import { Target, Shield, Leaf, Star, Users } from 'lucide-react';

const PolicyPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0 h-2/3">
          <img 
            src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg" 
            alt="Team meeting" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">会社方針・スタッフ紹介</h1>
          <p className="text-xl max-w-3xl mx-auto">
            私たちの理念と、それを実践する優れたチームメンバーをご紹介します。
          </p>
        </div>
      </section>

      {/* Company Policy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">会社方針</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              建設株式会社は「誠実・信頼・技術」を経営理念とし、
              お客様に満足いただける建築サービスを提供します。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow-sm bg-gray-50 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">企業理念</h3>
              <p className="text-gray-600">
                「誠実な対応」「確かな技術」「創造的な提案」で、
                お客様に感動と満足をお届けし、地域社会の発展に貢献します。
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg shadow-sm bg-gray-50 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">安全方針</h3>
              <p className="text-gray-600">
                作業員の安全を最優先し、徹底した安全管理と教育を行うことで、
                無事故・無災害の現場を実現します。
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg shadow-sm bg-gray-50 transition-transform duration-300 hover:transform hover:scale-105">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">環境方針</h3>
              <p className="text-gray-600">
                環境負荷の少ない工法と材料の採用、省エネルギー設計など、
                持続可能な社会の実現に向けた取り組みを推進します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                <Star size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">ミッション</h3>
              <p className="text-gray-600 mb-4">
                高品質な建築物を通じて、人々の生活や仕事の質を向上させ、
                豊かで安全な社会づくりに貢献します。
              </p>
              <ul className="space-y-2 text-gray-600 pl-5 list-disc">
                <li>お客様の要望を真摯に受け止め、最適な提案を行う</li>
                <li>品質と安全を最優先し、確かな技術で建築物を実現する</li>
                <li>地域社会との共生を図り、持続可能な発展に寄与する</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-orange-100 text-orange-500 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">ビジョン</h3>
              <p className="text-gray-600 mb-4">
                最新の技術と伝統の技を融合させた建築サービスで、
                業界をリードする建設会社を目指します。
              </p>
              <ul className="space-y-2 text-gray-600 pl-5 list-disc">
                <li>技術革新に積極的に取り組み、新しい価値を創造する</li>
                <li>社員一人ひとりが成長できる環境を整え、優れた人材を育成する</li>
                <li>環境に配慮した建築で、次世代に繋がる社会づくりに貢献する</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">スタッフ紹介</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              建設株式会社を支える、経験豊富なプロフェッショナルチームをご紹介します。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg" 
                  alt="山田 太郎" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-900">山田 太郎</h3>
                <p className="text-sm text-orange-500 mb-3">代表取締役</p>
                <p className="text-gray-600 mb-4">
                  建築業界での35年の経験を持ち、多くのプロジェクトを成功に導いてきました。
                  お客様の満足と社員の成長を何よりも大切にしています。
                </p>
                <p className="text-gray-700 font-medium">専門: 経営戦略、プロジェクト管理</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6973921/pexels-photo-6973921.jpeg" 
                  alt="鈴木 花子" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-900">鈴木 花子</h3>
                <p className="text-sm text-orange-500 mb-3">設計部長</p>
                <p className="text-gray-600 mb-4">
                  一級建築士。機能性と美しさを両立させた設計で多くの賞を受賞。
                  お客様のニーズを的確に捉え、最適な空間を提案します。
                </p>
                <p className="text-gray-700 font-medium">専門: 建築設計、インテリアデザイン</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8961389/pexels-photo-8961389.jpeg" 
                  alt="佐藤 健太" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-900">佐藤 健太</h3>
                <p className="text-sm text-orange-500 mb-3">工事部長</p>
                <p className="text-gray-600 mb-4">
                  20年以上の現場経験を持つエキスパート。安全管理と品質管理に厳しく、
                  確かな技術で高品質な施工を実現します。
                </p>
                <p className="text-gray-700 font-medium">専門: 施工管理、品質管理</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg" 
                  alt="田中 真理" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-900">田中 真理</h3>
                <p className="text-sm text-orange-500 mb-3">営業部長</p>
                <p className="text-gray-600 mb-4">
                  お客様との信頼関係構築に優れた営業のプロフェッショナル。
                  丁寧なヒアリングと的確な提案で、お客様の要望にお応えします。
                </p>
                <p className="text-gray-700 font-medium">専門: 営業戦略、顧客対応</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6973854/pexels-photo-6973854.jpeg" 
                  alt="高橋 誠" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-900">高橋 誠</h3>
                <p className="text-sm text-orange-500 mb-3">技術開発部長</p>
                <p className="text-gray-600 mb-4">
                  最新の建築技術や環境技術に精通したイノベーター。
                  持続可能な建築の実現に向けた技術開発を推進しています。
                </p>
                <p className="text-gray-700 font-medium">専門: 環境配慮型建築、技術研究</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg" 
                  alt="伊藤 裕子" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-900">伊藤 裕子</h3>
                <p className="text-sm text-orange-500 mb-3">財務部長</p>
                <p className="text-gray-600 mb-4">
                  財務のプロフェッショナルとして、会社の健全な経営を支えています。
                  正確な分析と戦略的な資金計画で企業価値向上に貢献しています。
                </p>
                <p className="text-gray-700 font-medium">専門: 財務管理、経営分析</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">資格・認証</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              私たちのチームは、様々な専門資格を持ったプロフェッショナルで構成されています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">保有資格</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
                  一級建築士: 8名
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
                  二級建築士: 15名
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
                  一級建築施工管理技士: 12名
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
                  二級建築施工管理技士: 18名
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
                  一級土木施工管理技士: 5名
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
                  電気工事士: 3名
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
                  管工事施工管理技士: 2名
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-orange-500 rounded-full mr-2"></span>
                  宅地建物取引士: 4名
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">取得認証</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                  <div>
                    <p className="font-medium">ISO9001（品質マネジメントシステム）</p>
                    <p className="text-sm text-gray-500">2005年取得、継続的な品質向上に努めています</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                  <div>
                    <p className="font-medium">ISO14001（環境マネジメントシステム）</p>
                    <p className="text-sm text-gray-500">2010年取得、環境に配慮した事業活動を推進しています</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-2 w-2 bg-orange-500 rounded-full mr-2 mt-2"></span>
                  <div>
                    <p className="font-medium">建設業労働安全衛生マネジメントシステム</p>
                    <p className="text-sm text-gray-500">2012年認定、安全な職場環境の維持に取り組んでいます</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">一緒に働きませんか？</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            建設株式会社では、共に成長できる仲間を募集しています。
            未経験者も歓迎です。興味のある方はお気軽にお問い合わせください。
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300">
            採用情報を見る
          </button>
        </div>
      </section> */}
    </>
  );
};

export default PolicyPage;