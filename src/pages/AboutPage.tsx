import React from "react";
import { Calendar, MapPin, Users, Target, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0 h-2/3">
          <img src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg" alt="Construction site" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">会社概要</h1>
          {/* <p className="text-xl max-w-3xl mx-auto">
            建設株式会社は創業以来、「誠実・信頼・技術」を理念に、
            お客様に満足いただける建築物を提供し続けています。
          </p> */}
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">代表挨拶</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2">
              <p className="text-gray-600 mb-4">株式会社中西構造設計は、１９９１年の創業以来、一般住宅・商業施設・福祉施設など、用途・規模・構造種別問わず</p>
              <p className="text-gray-600 mb-4">多種多様な建物の構造設計を担ってまいりました。</p>
              <p className="text-gray-600 mb-4">創業依頼培ってまいりました豊富な経験と、日々進化する新しい技術や知識を</p>
              <p className="text-gray-600 mb-4">積極的に取り入れ、ひとつひとつのプロジェクトに丁寧に向き合っております。</p>
              <p className="text-gray-600 mb-4">安全性・経済性等それぞれのニーズに合った構造をご提案致します。</p>
              <p className="text-gray-600 mb-4">地域密着型の会社として今後も地元の安全安心に貢献して参ります。</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 w-full max-w-xs">
                <img src="/HaruoNakanishi_pic.jpg" alt="代表取締役 中西 治夫" className="w-full h-auto max-h-80 object-contain" />
              </div>
              <p className="text-gray-900 font-semibold text-center">代表取締役 中西 治夫</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">会社情報</h2>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">会社名</th>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">株式会社 中西構造設計</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">設立</th>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">1991年1月創業 2018年5月法人化</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">代表取締役</th>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">中西 治夫</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">資本金</th>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">500万円</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">従業員数</th>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">5名 （技術者4名、事務1名）</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">事業内容</th>
                  <td className="px-6 py-4 text-gray-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>建築物・工作物の構造設計</li>
                      <li>工事監理</li>
                      <li>耐震診断・耐震補強設計</li>
                      <li>構造相談</li>
                      <li>調査業務</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">所在地</th>
                  <td className="px-6 py-4 text-gray-700">〒634-0006 奈良県橿原市新賀町235-6 橋本ビル3階</td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">連絡先</th>
                  <td className="px-6 py-4 text-gray-700">
                    <p>
                      <a href="tel:0744246537">TEL：0744-24-6537</a>
                    </p>
                    <p>
                      <a href="tel:0744246549">FAX : 0744-24-6549</a>
                    </p>
                    <p>E-mail :HQL03341@nifty.com</p>
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">許可・資格</th>
                  <td className="px-6 py-4 text-gray-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>一級建築士事務所登録（奈良県知事登録 第2023(ろ)2499号）</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 資格 Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">資格(保有者数)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">一級建築士</h3>
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2名</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">構造設計一級建築士</h3>
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1名</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">構造計算適合性判定資格者</h3>
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1名</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">建築構造士</h3>
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1名</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">構造設計１級及建築士</h3>
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1名</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">建築積算士</h3>
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1名</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">応急危険度判定士</h3>
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">2名</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-lg shadow-md border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">震災建築物被災度区分判定・復旧技術者</h3>
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">1名</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 使用プログラム等 Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">使用プログラム等</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* 構造計算プログラム */}
            <div className="bg-gray-50 shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">●構造計算プログラム</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  <p className="font-medium">SuperBuild/SS7</p>
                  <p className="text-gray-600">一貫構造計算プログラム</p>
                </div>
                <div>
                  <p className="font-medium">SuperBuild/FA1</p>
                  <p className="text-gray-600">任意形平面応力解析プログラム</p>
                </div>
                <div>
                  <p className="font-medium">SuperBuild/MC1</p>
                  <p className="text-gray-600">構造設計プログラム</p>
                </div>
                <div>
                  <p className="font-medium">RCチャート</p>
                  <p className="text-gray-600">構造設計プログラム（RC造)</p>
                </div>
                <div>
                  <p className="font-medium">Sチャート</p>
                  <p className="text-gray-600">構造設計プログラム（S造)</p>
                </div>
                <div>
                  <p className="font-medium">KIZUKURI</p>
                  <p className="text-gray-600">許容応力度計算（2025年法改正対応）</p>
                </div>
                <div>
                  <p className="font-medium">ホームズ君「構造EX」</p>
                  <p className="text-gray-600">許容応力度計算（2025年法改正対応）</p>
                </div>
                <div>
                  <p className="font-medium">KIZUKURI-sub</p>
                  <p className="text-gray-600">構造設計プログラム（木造)</p>
                </div>
                <div>
                  <p className="font-medium">Midas iGen</p>
                  <p className="text-gray-600">汎用構造解析ソフト</p>
                </div>
              </div>
            </div>

            {/* CADソフト */}
            <div className="bg-gray-50 shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">●CADソフト</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  <p className="font-medium">JCAS VARIE</p>
                  <p className="text-gray-600">構造図作図プログラム</p>
                </div>
                <div>
                  <p className="font-medium">JW-CAD</p>
                  <p className="text-gray-600">汎用CAD</p>
                </div>
                <div>
                  <p className="font-medium">DORA-CAD</p>
                  <p className="text-gray-600">汎用CAD</p>
                </div>
              </div>
            </div>

            {/* その他 */}
            <div className="bg-gray-50 shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">●その他</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  <p className="font-medium">Microsoft office Excel</p>
                  <p className="text-gray-600">自社作成プログラム・表計算等</p>
                </div>
                <div>
                  <p className="font-medium">Microsoft office Word</p>
                  <p className="text-gray-600">書類作成</p>
                </div>
                <div>
                  <p className="font-medium">Docuworks</p>
                  <p className="text-gray-600">構造計算書作成</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 加入保険 Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">加入保険</h2>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-lg">•</span>
                  <span>JSCA構造設計賠償責任保険 一般社団法人 日本建築構造技術者協会</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-lg">•</span>
                  <span>建築士賠償責任補償制度(けんばい) 公益社団法人 日本建築士連合会</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 所属団体 Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">所属団体</h2>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-lg">•</span>
                  <span>一般社団法人 奈良県建築士事務所協会</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-lg">•</span>
                  <span>一般社団法人 奈良県建築士会</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-lg">•</span>
                  <span>一般社団法人 日本建築構造技術者協会</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-3 text-lg">•</span>
                  <span>一般社団法人 関西建築構造設計事務所協会</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">所在地</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">お気軽にお問い合わせ・ご相談ください。</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 左側: 住所・連絡先情報 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">本社</h3>
              <p className="text-gray-600 mb-4">〒634-0006 奈良県橿原市新賀町235-6 橋本ビル3階</p>
              <h3 className="text-xl font-semibold mb-2">連絡先</h3>
              <div className="text-gray-600 mb-4">
                <p>
                  <a href="tel:0744246537">TEL：0744-24-6537</a>
                </p>
                <p>
                  <a href="tel:0744246549">FAX : 0744-24-6549</a>
                </p>
                <p>E-mail :HQL03341@nifty.com</p>
              </div>
              <h3 className="text-xl font-semibold mb-2">営業時間</h3>
              <p className="text-gray-600">平日 9:00〜18:00（土日祝休）</p>
            </div>

            {/* 右側: Googleマップ */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d269.3066313393466!2d135.79504258786562!3d34.51565604135183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60013318ae8142a3%3A0x24ca8bc2e38a40eb!2z5Lit6KW_5qeL6YCg6Kit6KiI5LqL5YuZ5omA!5e0!3m2!1sja!2sjp!4v1768387252449!5m2!1sja!2sjp"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="株式会社中西構造設計 所在地"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
