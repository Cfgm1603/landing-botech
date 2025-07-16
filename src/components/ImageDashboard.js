import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Seguimiento from '../img/Seguimiento.png';
import Mac from '../img/Mac.png';
import Iphone from '../img/Iphone.png';

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
                Mockups Mobile
              </h3>
              <div className="flex flex-col md:flex-row justify-center items-end gap-3 md:gap-8 w-full">
                {/* Mockup Seguimiento */}
                <div className="flex flex-col items-center w-full max-w-[700px] mx-auto">
                  <div className="h-[250px] sm:h-[350px] md:h-[500px] flex items-end w-full">
                    <img 
                      src={Mac}
                      alt="Dashboard Mobile"
                      className="h-full w-full max-w-full rounded-2xl shadow-2xl object-contain"
                    />
                  </div>
                  <p className="text-center text-gray-700 mt-3 text-base md:text-lg">
                    Vista de la plataforma de seguimiento
                  </p>
                </div>
                {/* Mockup Iphone */}
                <div className="flex flex-col items-center w-full max-w-[300px] mx-auto">
                  <div className="h-[250px] sm:h-[350px] md:h-[500px] flex items-end w-full">
                    <img 
                      src={Iphone}
                      alt="Mockup iPhone"
                      className="h-full w-full max-w-full rounded-2xl shadow-2xl object-contain"
                    />
                  </div>
                  <p className="text-center text-gray-700 mt-3 text-base md:text-lg">
                    Interfaz de la app en iPhone
                  </p>
                </div>
              </div>
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