import { FiMap, FiUser, FiChevronDown, FiShield, FiBookOpen, FiInfo } from 'react-icons/fi';
import { Button } from "./Button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-primary-botech font-afacad">BO-TECH</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 text-gray-700 hover:text-primary-botech cursor-pointer">
              <span>Seguimiento</span>
              <FiMap className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-primary-botech cursor-pointer">
              <span>Pass</span>
              <FiShield className="w-4 h-4" />
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-primary-botech cursor-pointer">
              <span>Resources</span>
            
            </div>
            <div className="flex items-center space-x-1 text-gray-700 hover:text-primary-botech cursor-pointer">
              <span>About</span>
              
            </div>
            <span className="text-gray-700 hover:text-primary-botech cursor-pointer">Pricing</span>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-primary-botech">
              <FiUser className="w-4 h-4 mr-2" />
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 