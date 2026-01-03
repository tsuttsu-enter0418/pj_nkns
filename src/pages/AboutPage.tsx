import React from 'react';
import { Calendar, MapPin, Users, Target, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 z-0 h-2/3">
          <img 
            src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg" 
            alt="Construction site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">会社概要</h1>
          <p className="text-xl max-w-3xl mx-auto">
            建設株式会社は創業以来、「誠実・信頼・技術」を理念に、
            お客様に満足いただける建築物を提供し続けています。
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">私たちについて</h2>
              <p className="text-gray-600 mb-4">
                建設株式会社は1985年の創業以来、住宅、オフィスビル、商業施設など、
                様々な建築プロジェクトを手掛けてきました。確かな技術力と誠実な対応で、
                お客様からの信頼を築いています。
              </p>
              <p className="text-gray-600 mb-4">
                地域密着型の建設会社として、地元の発展に貢献することを目指し、
                環境に配慮した持続可能な建築にも取り組んでいます。
              </p>
              <p className="text-gray-600">
                これからも「お客様の夢を形にする」という使命を胸に、
                より良い建築サービスを提供し続けます。
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg" 
                alt="Office building" 
                className="w-full h-full object-cover"
              />
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
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">
                    会社名
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    建設株式会社
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">
                    設立
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    1985年4月
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">
                    代表取締役
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    山田 太郎
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">
                    資本金
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    5,000万円
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">
                    従業員数
                  </th>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-700">
                    50名
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">
                    事業内容
                  </th>
                  <td className="px-6 py-4 text-gray-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>一般建築工事</li>
                      <li>土木工事</li>
                      <li>設計・監理業務</li>
                      <li>リフォーム・リノベーション</li>
                      <li>不動産開発事業</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">
                    所在地
                  </th>
                  <td className="px-6 py-4 text-gray-700">
                    〒000-0000 東京都○○区○○町1-2-3
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">
                    連絡先
                  </th>
                  <td className="px-6 py-4 text-gray-700">
                    <p>TEL: 03-1234-5678</p>
                    <p>FAX: 03-1234-5679</p>
                    <p>Email: info@example.co.jp</p>
                  </td>
                </tr>
                <tr>
                  <th className="px-6 py-4 bg-gray-50 text-left text-sm font-medium text-gray-900 w-1/3">
                    許可・資格
                  </th>
                  <td className="px-6 py-4 text-gray-700">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>国土交通大臣許可（特-XX）第XXXXX号</li>
                      <li>ISO9001認証取得</li>
                      <li>一級建築士事務所登録（○○都知事登録 第○○○○号）</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* History */}
      {/*<section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">沿革</h2>
          
          <div className="relative">
            
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="bg-orange-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
                    <Calendar size={16} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right pr-8 md:pr-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1985年4月</h3>
                    <p className="text-gray-600">建設株式会社を創業、東京都○○区に本社設立</p>
                  </div>
                  <div className="md:pl-12">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <img 
                        src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg" 
                        alt="Founding of the company" 
                        className="w-full h-48 object-cover rounded mb-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="bg-orange-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
                    <Calendar size={16} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right pr-8 md:pr-12">
                    <div className="bg-gray-50 p-4 rounded-lg md:order-1">
                      <img 
                        src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg" 
                        alt="Office expansion" 
                        className="w-full h-48 object-cover rounded mb-3"
                      />
                    </div>
                  </div>
                  <div className="md:pl-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1995年10月</h3>
                    <p className="text-gray-600">業務拡大に伴い、現在地に本社移転</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="bg-orange-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
                    <Calendar size={16} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right pr-8 md:pr-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2005年7月</h3>
                    <p className="text-gray-600">ISO9001認証取得、品質管理体制を強化</p>
                  </div>
                  <div className="md:pl-12">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <img 
                        src="https://images.pexels.com/photos/8961438/pexels-photo-8961438.jpeg" 
                        alt="ISO certification" 
                        className="w-full h-48 object-cover rounded mb-3"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="bg-orange-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
                    <Calendar size={16} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right pr-8 md:pr-12">
                    <div className="bg-gray-50 p-4 rounded-lg md:order-1">
                      <img 
                        src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg" 
                        alt="Company anniversary" 
                        className="w-full h-48 object-cover rounded mb-3"
                      />
                    </div>
                  </div>
                  <div className="md:pl-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2015年4月</h3>
                    <p className="text-gray-600">創業30周年記念式典を開催、環境配慮型建築への取り組みを強化</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="bg-orange-500 rounded-full h-8 w-8 flex items-center justify-center text-white">
                    <Calendar size={16} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:text-right pr-8 md:pr-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">現在</h3>
                    <p className="text-gray-600">最新技術を活用した設計・施工で、持続可能な社会の実現に貢献</p>
                  </div>
                  <div className="md:pl-12">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <img 
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                        alt="Current operations" 
                        className="w-full h-48 object-cover rounded mb-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">所在地</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              お気軽にお問い合わせ・ご相談ください。
            </p>
          </div>
          
          {/* Replace with actual Google Maps embed */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* <div className="h-96 bg-gray-200">
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <MapPin size={48} className="text-orange-500 mx-auto mb-4" />
                  <p className="text-gray-500">地図が表示されます</p>
                  <p className="mt-2 text-sm text-gray-500">※実際のウェブサイトでは、ここにGoogle Mapsが埋め込まれます</p>
                </div>
              </div>
            </div> */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">本社</h3>
              <p className="text-gray-600 mb-4">〒000-0000 東京都○○区○○町1-2-3</p>
              <div className="flex items-center text-gray-600 mb-2">
                <p>TEL: 03-1234-5678</p>
              </div>
              <div className="flex items-center text-gray-600">
                <p>営業時間: 平日 9:00〜18:00（土日祝休）</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;