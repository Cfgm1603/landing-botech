import React from 'react';

export function ClientsSection() {
  return (
    <section className="py-2 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-primary-botech/20 via-primary-botech/10 to-primary-botech/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-botech/20 via-primary-botech/10 to-primary-botech/5 opacity-50"></div>
      <div className="max-w-6xl mx-auto relative text-center">
        {/* Título centrado */}
        <div className="mb-10">
          <h5 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-wid font-afacad">
            Confian en nosotros,  
            <span className=" text-primary-botech font-afacad"> las mejores instituciones</span>
          </h5>
        </div>
        
                
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
           {/* Gimnasio Femenino - Primera posición en móvil, primera en desktop */}
           <img 
             src={require('../img/logos/gimnasio_femenino.png')} 
             alt="Gimnasio Femenino" 
             className="max-h-16 sm:max-h-20 lg:max-h-24 w-auto object-contain hover:scale-105 transition-all duration-300 order-1 sm:order-1" 
           />
           
           {/* Colegio Nogales - Segunda posición en móvil, cuarta en desktop */}
           <img 
             src={require('../img/logos/colegio_nogales.png')} 
             alt="Colegio Nogales" 
             className="max-h-16 sm:max-h-20 lg:max-h-24 w-auto object-contain hover:scale-105 transition-all duration-300 order-2 sm:order-4" 
           />
           
           {/* Colegio Portales - Tercera posición en móvil, segunda en desktop */}
           <img 
             src={require('../img/logos/colegio_portales.png')} 
             alt="Colegio Portales" 
             className="max-h-16 sm:max-h-20 lg:max-h-24 w-auto object-contain hover:scale-105 transition-all duration-300 order-3 sm:order-2" 
           />
           
           {/* Colegio Campo Alegre - Cuarta posición en móvil, tercera en desktop */}
           <img 
             src={require('../img/logos/colegio_campo_alegre.png')} 
             alt="Colegio Campo Alegre" 
             className="max-h-16 sm:max-h-20 lg:max-h-24 w-auto object-contain hover:scale-105 transition-all duration-300 order-4 sm:order-3" 
           />
         </div>
      </div>
    </section>
  );
} 