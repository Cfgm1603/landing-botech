import { FiPhone, FiMail, FiMapPin, FiGlobe, FiShield, FiMap } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="bg-primary-botech text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              <span className="text-xl sm:text-2xl font-bold font-afacad">BO-TECH</span>
            </div>
            <p className="text-white/80 text-sm mb-4 max-w-xs mx-auto sm:mx-0">
              Soluciones tecnológicas avanzadas para el seguimiento y control de operaciones.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <FiGlobe className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <FiMail className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Sistemas */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Nuestros Sistemas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start space-x-2 text-white/80 hover:text-white transition-colors">
                  <FiMap className="w-4 h-4" />
                  <span>Sistema de Seguimiento</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center sm:justify-start space-x-2 text-white/80 hover:text-white transition-colors">
                  <FiShield className="w-4 h-4" />
                  <span>BO-TECH Pass</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+57-1-2345678" className="flex items-center justify-center sm:justify-start space-x-2 text-white/80 hover:text-white transition-colors">
                  <FiPhone className="w-4 h-4" />
                  <span>+57 1 234-5678</span>
                </a>
              </li>
              <li>
                <a href="tel:+57-300-1234567" className="flex items-center justify-center sm:justify-start space-x-2 text-white/80 hover:text-white transition-colors">
                  <FiPhone className="w-4 h-4" />
                  <span>+57 300 123-4567</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@botech.com" className="flex items-center justify-center sm:justify-start space-x-2 text-white/80 hover:text-white transition-colors">
                  <FiMail className="w-4 h-4" />
                  <span>info@botech.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start justify-center sm:justify-start space-x-2 text-white/80">
                  <FiMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-center sm:text-left">Bogotá, Colombia<br/>Zona Norte</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-2 md:space-y-0">
            <div className="text-sm text-white/60">
              © 2025 BO-TECH. Todos los derechos reservados.
            </div>
            <div className="text-sm text-white/60">
              Algún lema de Botech. Soluciones escolares con la más alta calidad.
            </div>
          </div>
        </div>
    </div>
    </footer>
  );
} 