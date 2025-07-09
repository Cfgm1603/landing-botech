import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMap, FiShield, FiX, FiMenu, FiChevronDown, FiSmartphone, FiTablet, FiPhone, FiMail } from 'react-icons/fi';
import { Button } from "./Button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccessDropdownOpen, setIsAccessDropdownOpen] = useState(false);
  const location = useLocation();
  
  // Determinar la sección activa basada en la ruta actual
  const getActiveSection = () => {
    const path = location.pathname;
    if (path === '/') return 'inicio';
    if (path === '/acerca-de') return 'acerca-de';
    if (path === '/contactanos') return 'contactanos';
    if (path === '/tutoriales') return 'tutoriales';
    return 'inicio';
  };
  
  const activeSection = getActiveSection();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleAccessDropdown = () => {
    setIsAccessDropdownOpen(!isAccessDropdownOpen);
  };

  const handleSectionClick = (section) => {
    closeMenu();
  };

  return (
    <>
      {/* Overlay oscuro para móvil */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white md:bg-white/80 backdrop-blur-md border-b border-white/20 md:border-b md:border-white/20 rounded-b-2xl md:rounded-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link 
              to="/"
              className="text-xl font-semibold text-primary-botech font-afacad hover:opacity-80 transition-opacity"
            >
              BO-TECH
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className={`flex items-center space-x-1 cursor-pointer transition-colors duration-200 relative ${
                activeSection === 'inicio' 
                  ? 'text-primary-botech' 
                  : 'text-gray-700 hover:text-primary-botech'
              }`}
            >
              <span>Inicio</span>
              {activeSection === 'inicio' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-botech rounded-full"></div>
              )}
            </Link>
            
            <Link 
              to="/acerca-de"
              className={`flex items-center space-x-1 cursor-pointer transition-colors duration-200 relative ${
                activeSection === 'acerca-de' 
                  ? 'text-primary-botech' 
                  : 'text-gray-700 hover:text-primary-botech'
              }`}
            >
              <span>Acerca de</span>
              {activeSection === 'acerca-de' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-botech rounded-full"></div>
              )}
            </Link>
            
            <Link 
              to="/contactanos"
              className={`flex items-center space-x-1 cursor-pointer transition-colors duration-200 relative ${
                activeSection === 'contactanos' 
                  ? 'text-primary-botech' 
                  : 'text-gray-700 hover:text-primary-botech'
              }`}
            >
              <span>Contáctanos</span>
              {activeSection === 'contactanos' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-botech rounded-full"></div>
              )}
            </Link>
            
            <Link 
              to="/tutoriales"
              className={`flex items-center space-x-1 cursor-pointer transition-colors duration-200 relative ${
                activeSection === 'tutoriales' 
                  ? 'text-primary-botech' 
                  : 'text-gray-700 hover:text-primary-botech'
              }`}
            >
              <span>Tutoriales</span>
              {activeSection === 'tutoriales' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-botech rounded-full"></div>
              )}
            </Link>
          </div>

          {/* Desktop Access Dropdown */}
          <div className="hidden md:flex items-center space-x-4 relative">
            <div className="relative">
              <button
                onClick={toggleAccessDropdown}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-botech cursor-pointer transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-50"
              >
                <span>Acceso</span>
                <FiChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isAccessDropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`} 
                />
              </button>

              {/* Desktop Dropdown Menu */}
              {isAccessDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <h3 className="text-sm font-semibold text-gray-900">Acceso a sistemas</h3>
                  </div>
                  
                  <a 
                    href="https://botech.com.co/seguimiento/" 
                    target="_blank"
                    className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-primary-botech/10 transition-colors bg-primary-botech mx-2 my-1 rounded-lg"
                  >
                    <FiMap className="w-5 h-5" />
                    <span className="font-medium">Inicio Seguimiento</span>
                  </a>
                  
                  <a 
                    href="https://botech.com.co/pass/login" 
                    target="_blank"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors mx-2 my-1 rounded-lg border border-gray-200"
                  >
                    <FiShield className="w-5 h-5" />
                    <span className="font-medium">Inicio PASS</span>
                  </a>
                  
                  <div className="px-4 py-2 border-b border-gray-100 mt-2">
                    <h3 className="text-sm font-semibold text-gray-900">Aplicación</h3>
                  </div>
                  
                  <a 
                    href="https://apps.apple.com/co/app/bo-tech-tracking/id6502615797"
                    target="_blank"
                    className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-primary-botech transition-colors bg-primary-botech mx-2 my-1 rounded-lg"
                  >
                    <FiSmartphone className="w-5 h-5" />
                    <span className="font-medium">iOS</span>
                  </a>
                  
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.botech.tracking&hl=es" 
                    target="_blank"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors mx-2 my-1 rounded-lg border border-gray-200"
                  >
                    <FiTablet className="w-5 h-5" />
                    <span className="font-medium">Android</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-botech hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-botech transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              <div className="relative w-6 h-6">
                <FiMenu 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                  }`} 
                />
                <FiX 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-4 py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-b-lg border border-white/20 mt-2 shadow-2xl">
            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              <Link 
                to="/"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === 'inicio'
                    ? 'bg-primary-botech text-white font-medium'
                    : 'text-gray-700 hover:text-primary-botech hover:bg-gray-50'
                }`}
              >
                <span>Inicio</span>
              </Link>
              
              <Link 
                to="/acerca-de"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === 'acerca-de'
                    ? 'bg-primary-botech text-white font-medium'
                    : 'text-gray-700 hover:text-primary-botech hover:bg-gray-50'
                }`}
              >
                <span>Acerca de</span>
              </Link>
              
              <Link 
                to="/contactanos"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === 'contactanos'
                    ? 'bg-primary-botech text-white font-medium'
                    : 'text-gray-700 hover:text-primary-botech hover:bg-gray-50'
                }`}
              >
                <span>Contáctanos</span>
              </Link>
              
              <Link 
                to="/tutoriales"
                onClick={closeMenu}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeSection === 'tutoriales'
                    ? 'bg-primary-botech text-white font-medium'
                    : 'text-gray-700 hover:text-primary-botech hover:bg-gray-50'
                }`}
              >
                <span>Tutoriales</span>
              </Link>
            </div>

            {/* Mobile Access Section */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="px-4 py-2 text-sm font-semibold text-gray-900">Acceso</h3>
              
              <div className="space-y-2">
                <p className="px-4 py-1 text-xs text-gray-600">Cuenta de Cloud</p>
                <a 
                  href="https://botech.com.co/seguimiento/" 
                  target="_blank"
                  className="flex items-center space-x-3 px-4 py-3 text-white bg-primary-botech hover:bg-primary-botech transition-colors rounded-lg"
                  onClick={closeMenu}
                >
                  <FiMap className="w-5 h-5" />
                  <span>Inicio Seguimiento</span>
                </a>
                <a 
                  href="https://botech.com.co/pass/login" 
                  target="_blank"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors rounded-lg border border-gray-200"
                  onClick={closeMenu}
                >
                  <FiShield className="w-5 h-5" />
                  <span>Inicio PASS</span>
                </a>
                
                <p className="px-4 py-1 text-xs text-gray-600 pt-2">Aplicación</p>
                <a 
                  href="https://apps.apple.com/co/app/bo-tech-tracking/id6502615797"
                  target="_blank"
                  className="flex items-center space-x-3 px-4 py-3 text-white bg-primary-botech hover:bg-primary-botech transition-colors rounded-lg"
                  onClick={closeMenu}
                >
                  <FiSmartphone className="w-5 h-5" />
                  <span>iOS</span>
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.botech.tracking&hl=es" 
                  target="_blank"
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors rounded-lg border border-gray-200"
                  onClick={closeMenu}
                >
                  <FiTablet className="w-5 h-5" />
                  <span>Android</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar dropdown en desktop */}
      {isAccessDropdownOpen && (
        <div 
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setIsAccessDropdownOpen(false)}
        />
      )}
    </nav>
    </>
  );
} 