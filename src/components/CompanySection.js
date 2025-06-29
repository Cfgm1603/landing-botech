import React from 'react';
import CardSwap, { Card } from './CardSwap';

export function CompanySection({ width, cardConfig }) {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Animación de cards - Izquierda */}
          <div className="order-2 lg:order-1 relative flex items-center justify-center overflow-hidden" style={{ minHeight: width < 768 ? '350px' : '600px' }}>
            <div className="relative w-full h-full flex items-center justify-center" style={{ height: width < 768 ? '350px' : '600px' }}>
              <div className="relative" style={{ 
                width: `${cardConfig.width + (width < 768 ? 10 : 100)}px`, 
                height: `${cardConfig.height + (width < 768 ? 10 : 100)}px`,
                transform: width < 768 ? 'scale(0.8) translateX(-10%)' : 'translateY(15%) translateX(5%)'
              }}>
                <CardSwap
                  width={cardConfig.width}
                  height={cardConfig.height}
                  cardDistance={cardConfig.cardDistance}
                  verticalDistance={cardConfig.verticalDistance}
                  delay={5000}
                  pauseOnHover={false}
                >
                  <Card className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-primary-botech to-primary-botech/80 text-white">
                    <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-3 sm:mb-3">Sistema de Seguimiento</h3>
                    <p className="text-sm sm:text-sm text-white/90">
                      Monitorea en tiempo real la ubicación y estado de todos los vehículos escolares.
                    </p>
                    <div className="mt-4 sm:mt-3 md:mt-4 flex items-center justify-between">
                      <span className="text-sm sm:text-sm font-semibold">GPS en Tiempo Real</span>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  </Card>
                  <Card className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
                    <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-3 sm:mb-3">BO-TECH Pass</h3>
                    <p className="text-sm sm:text-sm text-white/90">
                      Sistema de acceso seguro y control de entrada para estudiantes y personal.
                    </p>
                    <div className="mt-4 sm:mt-3 md:mt-4 flex items-center justify-between">
                      <span className="text-sm sm:text-sm font-semibold">Acceso Seguro</span>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                  </Card>
                  <Card className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-green-600 to-green-700 text-white">
                    <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-3 sm:mb-3">Control Total</h3>
                    <p className="text-sm sm:text-sm text-white/90">
                      Dashboard centralizado para gestionar todas las operaciones del transporte escolar.
                    </p>
                    <div className="mt-4 sm:mt-3 md:mt-4 flex items-center justify-between">
                      <span className="text-sm sm:text-sm font-semibold">Dashboard Activo</span>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
          
          {/* Texto de la empresa - Derecha */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-afacad font-extrabold text-gray-900 mb-6">
              Revolucionando el transporte escolar
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                En <span className="font-semibold text-primary-botech">BO-TECH</span>, nos dedicamos a transformar la experiencia del transporte escolar mediante tecnología de vanguardia. Nuestras soluciones integrales proporcionan seguridad, eficiencia y tranquilidad a instituciones educativas, padres de familia y operadores de transporte.
              </p>
              <p>
                Con más de una década de experiencia en el sector educativo, hemos desarrollado un ecosistema completo que incluye seguimiento GPS en tiempo real, sistemas de acceso biométrico y plataformas de gestión centralizadas que garantizan la máxima seguridad para los estudiantes.
              </p>
              <p>
                Nuestro compromiso va más allá de la tecnología: creamos vínculos de confianza entre la institución, las familias y los estudiantes, proporcionando herramientas que facilitan la comunicación y el control total sobre cada aspecto del transporte escolar.
              </p>
            </div>
            
            {/* Estadísticas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-botech">150+</div>
                <div className="text-sm text-gray-600 mt-1">Instituciones</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-botech">50K+</div>
                <div className="text-sm text-gray-600 mt-1">Estudiantes</div>
              </div>
              <div className="text-center col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold text-primary-botech">99.9%</div>
                <div className="text-sm text-gray-600 mt-1">Disponibilidad</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
} 