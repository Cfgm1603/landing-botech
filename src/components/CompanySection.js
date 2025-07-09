import React, { useState, useEffect, useRef, useCallback } from 'react';
import CardSwap, { Card } from './CardSwap';
import { Statistics } from './Statistics';
import { FiChevronDown, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

// Datos de las tarjetas con contenido extendido (fuera del componente)
const cardData = [
  {
    title: "Sistema de Seguimiento",
    description: "Monitorea en tiempo real la ubicación y estado de todos los vehículos escolares.",
    status: "GPS en Tiempo Real",
    className: "bg-gradient-to-br from-primary-botech to-primary-botech/80",
    indicatorColor: "bg-green-400",
    extendedContent: {
      title: "Seguimiento GPS Avanzado",
      description: "Nuestro sistema de seguimiento GPS proporciona ubicación en tiempo real de todos los vehículos escolares, permitiendo a padres y administradores monitorear el recorrido completo desde la salida hasta la llegada.",
      features: [
        "Ubicación en tiempo real con precisión de 3 metros",
        "Alertas automáticas de llegada y salida",
        "Historial completo de rutas y horarios",
        "Notificaciones push instantáneas",
        "Geofencing para zonas de seguridad"
      ]
    }
  },
  {
    title: "BO-TECH Pass",
    description: "Sistema de acceso seguro y control de entrada para estudiantes y personal.",
    status: "Acceso Seguro",
    className: "bg-gradient-to-br from-gray-800 to-gray-900",
    indicatorColor: "bg-blue-400",
    extendedContent: {
      title: "Control de Acceso Inteligente",
      description: "BO-TECH Pass revoluciona la seguridad escolar con tecnología biométrica y tarjetas inteligentes, garantizando que solo personas autorizadas accedan a los vehículos y instalaciones.",
      features: [
        "Autenticación biométrica avanzada",
        "Tarjetas RFID personalizadas",
        "Registro automático de asistencia", 
        "Control parental en tiempo real",
        "Integración con sistemas escolares"
      ]
    }
  },
  {
    title: "Control Total",
    description: "Dashboard centralizado para gestionar todas las operaciones del transporte escolar.",
    status: "Dashboard Activo",
    className: "bg-gradient-to-br from-green-600 to-green-700",
    indicatorColor: "bg-yellow-400",
    extendedContent: {
      title: "Dashboard de Gestión Integral",
      description: "Una plataforma centralizada que integra todos los aspectos del transporte escolar, desde la planificación de rutas hasta el análisis de rendimiento, optimizando la eficiencia operativa.",
      features: [
        "Panel de control en tiempo real",
        "Analíticas avanzadas y reportes",
        "Gestión de flotas y conductores",
        "Optimización automática de rutas",
        "Comunicación directa con padres"
      ]
    }
  }
];

// Tarjetas mapeadas fuera del componente para estabilidad
const cardSwapChildren = cardData.map((card, idx) => (
  <Card key={idx} className={`p-4 sm:p-5 md:p-6 ${card.className} text-white`}>
    <h3 className="text-lg sm:text-xl md:text-xl font-bold mb-3 sm:mb-3">{card.title}</h3>
    <p className="text-sm sm:text-sm text-white/90">{card.description}</p>
    <div className="mt-4 sm:mt-3 md:mt-4 flex items-center justify-between">
      <span className="text-sm sm:text-sm font-semibold">{card.status}</span>
      <div className={`w-2 h-2 ${card.indicatorColor} rounded-full animate-pulse`}></div>
    </div>
  </Card>
));

// Modal para mostrar info extendida
function InfoModal({ open, onClose, content }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FiX className="w-6 h-6 text-gray-500" />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-primary-botech">{content.title}</h2>
        <p className="text-gray-700 mb-4">{content.description}</p>
        <h3 className="text-lg font-semibold mb-2">Características principales:</h3>
        <ul className="space-y-2 mb-2">
          {content.features.map((feature, idx) => (
            <li key={idx} className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary-botech rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Componente de carrusel mejorado para mobile
function MobileCarousel({ cardData, onCardChange, activeCardIndex, width }) {
  const [currentIndex, setCurrentIndex] = useState(activeCardIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoplayRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Sincronizar con el índice externo
  useEffect(() => {
    if (activeCardIndex !== currentIndex) {
      setCurrentIndex(activeCardIndex);
    }
  }, [activeCardIndex]);

  // Función para cambiar tarjeta con callback
  const changeCard = useCallback((newIndex) => {
    if (isTransitioning || newIndex === currentIndex) return;
    setIsTransitioning(true);
    const validIndex = ((newIndex % cardData.length) + cardData.length) % cardData.length;
    setCurrentIndex(validIndex);
    onCardChange(validIndex);
    setTimeout(() => setIsTransitioning(false), 400);
  }, [currentIndex, isTransitioning, cardData.length, onCardChange]);

  // Función para ir a la siguiente tarjeta
  const nextCard = useCallback(() => {
    changeCard(currentIndex + 1);
  }, [currentIndex, changeCard]);

  // Función para ir a la tarjeta anterior
  const prevCard = useCallback(() => {
    changeCard(currentIndex - 1);
  }, [currentIndex, changeCard]);

  // Autoplay más lento
  useEffect(() => {
    autoplayRef.current = setInterval(nextCard, 8000);
    return () => clearInterval(autoplayRef.current);
  }, [nextCard]);

  // Pausar autoplay cuando el usuario interactúa
  const pauseAutoplay = useCallback(() => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(nextCard, 8000);
  }, [nextCard]);

  // Touch handlers mejorados para mayor suavidad
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(true);
    pauseAutoplay();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    touchEndX.current = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    setDragOffset(-diff * 0.5); // Reducir la sensibilidad para mayor suavidad
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setDragOffset(0);
    
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 80; // Aumentar threshold para evitar cambios accidentales

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        nextCard();
      } else {
        prevCard();
      }
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Función para scroll hacia el texto dinámico
  const scrollToTextSection = () => {
    const textSection = document.querySelector('.dynamic-text-section');
    if (textSection) {
      textSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Carrusel Container mejorado */}
      <div 
        ref={carouselRef}
        className="relative overflow-hidden rounded-xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ height: '280px' }}
      >
        <div 
          className="flex h-full transition-transform ease-out"
          style={{ 
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
            transitionDuration: isDragging ? '0ms' : '400ms',
          }}
        >
          {cardData.map((card, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-full h-full px-2"
            >
              <div className={`w-full h-full rounded-xl p-5 ${card.className} transform transition-transform duration-300 ${
                index === currentIndex ? 'scale-100' : 'scale-95'
              }`}>
                <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {card.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">{card.status}</span>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${card.indicatorColor}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles manuales */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => {
            prevCard();
            pauseAutoplay();
          }}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          disabled={isTransitioning}
        >
          <FiChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Indicadores */}
        <div className="flex justify-center space-x-2">
          {cardData.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-botech w-8' 
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              onClick={() => {
                changeCard(index);
                pauseAutoplay();
              }}
            />
          ))}
        </div>

        <button
          onClick={() => {
            nextCard();
            pauseAutoplay();
          }}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          disabled={isTransitioning}
        >
          <FiChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Botón de ver texto dinámico */}
      <div className="flex justify-center mt-6">
        <button
          onClick={scrollToTextSection}
          className="flex items-center space-x-2 bg-primary-botech hover:bg-primary-botech/90 text-white px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          <span className="font-medium">Ver detalles</span>
          <FiChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </div>
  );
}

// Componente de navegación manual para desktop
function DesktopControls({ onNext, onPrev, activeIndex, totalCards }) {
  return (
    <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-10">
      <button
        onClick={onPrev}
        className="pointer-events-auto p-3 ml-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 text-white"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      
      <div className="pointer-events-auto flex space-x-2">
        {Array.from({ length: totalCards }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        className="pointer-events-auto p-3 mr-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 text-white"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

export function CompanySection({ width, cardConfig }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Manejar click en tarjeta (solo desktop)
  const handleCardClick = useCallback((idx) => {
    if (width >= 768) {
      setModalContent(cardData[idx].extendedContent);
      setModalOpen(true);
    }
  }, [width]);

  // Mobile: igual que antes
  const handleCardChange = useCallback(() => {}, []);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Animación de cards - Izquierda */}
          <div className="order-2 lg:order-1 relative flex items-center justify-center overflow-hidden" style={{ minHeight: width < 768 ? '350px' : '600px' }}>
            {/* Desktop: CardSwap sin controles, solo animación y click abre modal */}
            {width >= 768 ? (
              <div className="relative w-full h-full flex items-center justify-center" style={{ height: '600px' }}>
                <div className="relative" style={{ 
                  width: `${cardConfig.width + 100}px`, 
                  height: `${cardConfig.height + 100}px`,
                  transform: 'translateY(15%) translateX(5%)'
                }}>
                  <CardSwap
                    width={cardConfig.width}
                    height={cardConfig.height}
                    cardDistance={cardConfig.cardDistance}
                    verticalDistance={cardConfig.verticalDistance}
                    delay={12000}
                    pauseOnHover={true}
                    onCardClick={handleCardClick}
                  >
                    {cardSwapChildren}
                  </CardSwap>
                  <InfoModal open={modalOpen} onClose={() => setModalOpen(false)} content={modalContent || { title: '', description: '', features: [] }} />
                </div>
              </div>
            ) : (
              /* Mobile: Carrusel horizontal mejorado */
              <div className="w-full max-w-sm mx-auto">
                <MobileCarousel 
                  cardData={cardData} 
                  onCardChange={handleCardChange}
                  activeCardIndex={0}
                  width={width} 
                />
              </div>
            )}
          </div>
          {/* Texto estático de la empresa - Derecha (restaurado) */}
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
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
} 