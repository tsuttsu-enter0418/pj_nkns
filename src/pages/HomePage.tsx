import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Building, Users, Star, CheckCircle } from 'lucide-react';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-orange-500">信頼</span>と
            <span className="text-orange-500">品質</span>で建てる未来
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            創業以来、お客様の理想を形にする建設サービスを提供してきました。
            確かな技術と誠実な対応で、皆様の夢を実現します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink
              to="/about"
              className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300"
            >
              会社について
            </NavLink>
            <NavLink
              to="/projects"
              className="bg-transparent hover:bg-white hover:text-gray-900 text-white py-3 px-8 rounded-md text-lg font-medium border-2 border-white transition-colors duration-300"
            >
              施工実績を見る
            </NavLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              私たちの強み
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              長年の経験と実績に基づいた確かな技術力と細部へのこだわりで、
              お客様の期待を超える建築物をお届けします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-orange-500 mb-4">
                <Building size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                高品質な施工
              </h3>
              <p className="text-gray-600">
                熟練の技術者による丁寧な施工と厳格な品質管理体制により、耐久性と美観を兼ね備えた建築物を実現します。
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-orange-500 mb-4">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                お客様第一主義
              </h3>
              <p className="text-gray-600">
                お客様のニーズと予算に合わせた最適な提案と、透明性のある対応で信頼関係を構築します。
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm transition-transform duration-300 hover:transform hover:scale-105">
              <div className="text-orange-500 mb-4">
                <Star size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                豊富な実績
              </h3>
              <p className="text-gray-600">
                住宅から商業施設、公共建築物まで、様々なプロジェクトを成功に導いてきた実績があります。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              事業内容
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {/* 設計から施工、アフターフォローまで一貫したサービスを提供しています。 */}
              何か記載する事業内容があれば記載します。
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm flex">
              <div className="mr-4 text-orange-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  一般建築工事
                </h3>
                <p className="text-gray-600">
                  住宅、マンション、オフィスビル、商業施設など、各種建築物の新築・改修工事
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex">
              <div className="mr-4 text-orange-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  土木工事
                </h3>
                <p className="text-gray-600">
                  道路、橋梁、上下水道など公共インフラの整備・補修工事
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex">
              <div className="mr-4 text-orange-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  設計・監理業務
                </h3>
                <p className="text-gray-600">
                  建築物の設計から施工監理までトータルでサポート
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex">
              <div className="mr-4 text-orange-500">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  リフォーム・リノベーション
                </h3>
                <p className="text-gray-600">
                  住宅や商業施設のリフォーム、古民家再生など
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="text-center mt-12">
            <NavLink
              to="/about"
              className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
            >
              詳しく見る <ArrowRight size={16} className="ml-1" />
            </NavLink>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
            alt="Construction background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            あなたのプロジェクトを一緒に実現しましょう
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            新しい建築プロジェクトの相談、お見積もりのご依頼など、お気軽にお問い合わせください。
            経験豊富なスタッフが丁寧にご対応いたします。
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300">
            お問い合わせ
          </button>
        </div>
      </section> */}

      {/* Recent Projects Preview */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              最近の施工実績
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              当社が手掛けた様々なプロジェクトをご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-lg shadow-sm group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={`https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                    alt={`Project ${item}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:transform group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    ○○マンション新築工事
                  </h3>
                  <p className="text-gray-600 mb-4">
                    東京都渋谷区の高級マンション新築プロジェクト。
                    高い耐震性と洗練されたデザインを両立させた設計・施工。
                  </p>
                  <NavLink
                    to="/projects"
                    className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors"
                  >
                    詳細を見る <ArrowRight size={16} className="ml-1" />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink
              to="/projects"
              className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-8 rounded-md text-lg font-medium transition-colors duration-300"
            >
              すべての実績を見る
            </NavLink>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default HomePage;
