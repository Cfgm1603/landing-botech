import React from 'react';

export function ClientsSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-primary-botech/20 via-primary-botech/10 to-primary-botech/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-botech/20 via-primary-botech/10 to-primary-botech/5 opacity-50"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          {/* Texto */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 border-l-4 border-primary-botech pl-3">Nuestros Clientes</h2>
            <p className="text-gray-600 text-base">Hemos trabajado con instituciones educativas líderes, brindando soluciones tecnológicas de transporte escolar seguras y eficientes.</p>
          </div>
          {/* Logos */}
          <div className="md:w-2/3 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
            <div className="w-full aspect-[4/3] relative flex items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 transition duration-300">
              <img src={require('../img/logos/gimnasio_femenino.png')} alt="Gimnasio Femenino" className="max-h-12 sm:max-h-16 lg:max-h-20 w-auto object-contain" />
            </div>
            <div className="w-full aspect-[4/3] relative flex items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 transition duration-300">
              <img src={require('../img/logos/colegio_portales.png')} alt="Colegio Portales" className="max-h-12 sm:max-h-16 lg:max-h-20 w-auto object-contain" />
            </div>
            <div className="w-full aspect-[4/3] relative flex items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 transition duration-300">
              <img src={require('../img/logos/colegio_nogales.png')} alt="Colegio Nogales" className="max-h-12 sm:max-h-16 lg:max-h-20 w-auto object-contain" />
            </div>
            <div className="w-full aspect-[4/3] relative flex items-center justify-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 transition duration-300">
              <img src={require('../img/logos/colegio_campo_alegre.png')} alt="Colegio Campo Alegre" className="max-h-12 sm:max-h-16 lg:max-h-20 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 