import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, HardHat } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2 text-navy-600">
            <HardHat size={28} className="text-orange-500" />
            <span className="font-bold text-xl text-gray-800">建設株式会社</span>
          </NavLink>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-lg font-medium transition-colors hover:text-orange-500 ${isActive ? 'text-orange-500' : isScrolled ? 'text-gray-800' : 'text-gray-800'}`
              }
            >
              ホーム
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-lg font-medium transition-colors hover:text-orange-500 ${isActive ? 'text-orange-500' : isScrolled ? 'text-gray-800' : 'text-gray-800'}`
              }
            >
              会社概要
            </NavLink>
            <NavLink 
              to="/policy" 
              className={({ isActive }) => 
                `text-lg font-medium transition-colors hover:text-orange-500 ${isActive ? 'text-orange-500' : isScrolled ? 'text-gray-800' : 'text-gray-800'}`
              }
            >
              方針・スタッフ
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                `text-lg font-medium transition-colors hover:text-orange-500 ${isActive ? 'text-orange-500' : isScrolled ? 'text-gray-800' : 'text-gray-800'}`
              }
            >
              実績
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-800 hover:text-orange-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-4 py-2 space-y-3 bg-white shadow-lg">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `block text-lg font-medium py-2 ${isActive ? 'text-orange-500' : 'text-gray-800'}`
            }
            onClick={closeMenu}
          >
            ホーム
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `block text-lg font-medium py-2 ${isActive ? 'text-orange-500' : 'text-gray-800'}`
            }
            onClick={closeMenu}
          >
            会社概要
          </NavLink>
          <NavLink 
            to="/policy" 
            className={({ isActive }) => 
              `block text-lg font-medium py-2 ${isActive ? 'text-orange-500' : 'text-gray-800'}`
            }
            onClick={closeMenu}
          >
            方針・スタッフ
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              `block text-lg font-medium py-2 ${isActive ? 'text-orange-500' : 'text-gray-800'}`
            }
            onClick={closeMenu}
          >
            実績
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;