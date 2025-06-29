import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Seguimiento from '../img/Seguimiento.png';

gsap.registerPlugin(ScrollTrigger);

export function ImageDashboard() {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const horizontalSection = horizontalRef.current;
    
    if (!container || !horizontalSection) return;

    // Limpiar animaciones previas
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Configurar el scroll horizontal en todos los dispositivos
    const setupAnimation = () => {
      const panels = gsap.utils.toArray('.panel');
      const totalWidth = panels.length * window.innerWidth;
      
      // Crear la animación horizontal
      const horizontalAnimation = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => `+=${totalWidth - window.innerWidth}`,
          invalidateOnRefresh: true,
        }
      });
      
      return horizontalAnimation;
    };

    // Delay para asegurar que el DOM esté completamente renderizado
    const timer = setTimeout(() => {
      setupAnimation();
    }, 100);

    // Manejar resize
    const handleResize = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      setTimeout(setupAnimation, 100);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Sección de scroll horizontal */}
      <div ref={containerRef} className="relative">
        <div 
          ref={horizontalRef} 
          className="flex h-screen"
          style={{ width: '300vw' }}
        >
          {/* Panel 1 - Imagen Principal */}
          <div className="panel w-screen h-screen flex items-center justify-center">
            <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
              <img 
                src={Seguimiento}
                alt="Dashboard de Seguimiento Botech" 
                className="w-full h-auto rounded-lg max-w-none sm:max-w-full"
              />
            </div>
          </div>

          {/* Panel 2 - Mobile Dashboard */}
          <div className="panel w-screen h-screen flex items-center justify-center">
            <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center text-gray-900">
                Vista Mobile
              </h3>
              <div className="flex justify-center">
                <div className="bg-gray-900 rounded-3xl p-2 sm:p-3 md:p-4 shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-lg">
                  <div className="bg-white rounded-2xl overflow-hidden relative">
                    {/* Simulación de notch de iPhone */}
                    <div className="bg-black h-4 sm:h-5 md:h-6 w-24 sm:w-28 md:w-32 rounded-b-xl mx-auto relative">
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 md:w-12 h-0.5 sm:h-1 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="p-1 sm:p-2 md:p-3">
                      <img 
                        src={Seguimiento}
                        alt="Dashboard Mobile" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                    {/* Simulación de home indicator */}
                    <div className="h-3 sm:h-4 md:h-5 flex items-center justify-center">
                      <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg">
                Optimizado para dispositivos móviles
              </p>
            </div>
          </div>

          {/* Panel 3 - Tablet Dashboard */}
          <div className="panel w-screen h-screen flex items-center justify-center">
            <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center text-gray-900">
                Vista Tablet
              </h3>
              <div className="bg-gray-800 rounded-2xl p-3 sm:p-4 md:p-6 shadow-2xl max-w-5xl mx-auto">
                <div className="bg-gray-700 h-5 sm:h-6 md:h-8 rounded-t-lg flex items-center px-2 sm:px-3 md:px-4">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <img 
                  src={Seguimiento}
                  alt="Dashboard Tablet" 
                  className="w-full h-auto rounded-b-lg"
                />
              </div>
              <p className="text-center text-gray-600 mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg">
                Perfecto para uso en tablets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 