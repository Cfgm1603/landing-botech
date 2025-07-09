import React from 'react';

export function About() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Acerca de BO-TECH</h1>
          <p className="text-xl text-gray-600">Soluciones tecnológicas innovadoras para el seguimiento y control</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-primary-botech mb-4">Nuestra Misión</h2>
            <p className="text-gray-700 leading-relaxed">
              Proporcionar soluciones tecnológicas avanzadas que permitan a nuestros clientes 
              optimizar sus procesos de seguimiento y control, mejorando la eficiencia operativa 
              y la toma de decisiones basada en datos.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-primary-botech mb-4">Nuestra Visión</h2>
            <p className="text-gray-700 leading-relaxed">
              Ser líderes en el desarrollo de tecnologías de seguimiento y control, 
              contribuyendo al crecimiento y éxito de nuestros clientes a través de 
              soluciones innovadoras y confiables.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-primary-botech mb-6 text-center">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-botech rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovación</h3>
              <p className="text-gray-600">Desarrollamos soluciones tecnológicas de vanguardia</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-botech rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Confianza</h3>
              <p className="text-gray-600">Construimos relaciones duraderas basadas en la confianza</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-botech rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Excelencia</h3>
              <p className="text-gray-600">Buscamos la excelencia en cada proyecto y servicio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 