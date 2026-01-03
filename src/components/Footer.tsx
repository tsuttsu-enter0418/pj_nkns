import React from "react";
import { NavLink } from "react-router-dom";
import { HardHat, Mail, Phone, MapPin, Printer } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <div>
            <div className="flex items-center space-x-2 mb-4">
              <HardHat size={24} className="text-orange-500" />
              <span className="font-bold text-xl">中西構造設計</span>
            </div>
            <p className="text-gray-400 mb-4">創業以来 建物の安全、安心を守るため、確かな技術と誠実な対応で日々取り組んでおります</p>
          </div> */}

          <div>
            <h3 className="text-lg font-semibold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-white transition-colors">
                  ホーム
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-white transition-colors">
                  会社概要
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  実績
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  〒634-0006<br></br>奈良県橿原市新賀町235-6 橋本ビル3階
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">
                  <p>
                    <a href="tel:0744246537">TEL：0744-24-6537</a>
                  </p>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Printer size={20} className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">
                  <p>
                    <a href="tel:0744246549">FAX : 0744-24-6549</a>
                  </p>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">HQL03341@nifty.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 建設株式会社. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
