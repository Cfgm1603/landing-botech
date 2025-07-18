import React, { useState, useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import ReactDOM from 'react-dom';
import Lanyard from './Lanyard';
import Santiago from '../img/perfil/Santiago.jpeg';  
import JJ from '../img/perfil/JJ.jpg';
import Cristian from '../img/perfil/Ross.jpeg';
import Cesar from '../img/perfil/Cesar.jpeg';

// Datos por defecto del equipo (configurables via props)
const defaultTeamData = [
  {
    id: 1,
    name: "Santiago Barrera",
    role: "Fundador",
    shortDescription: "Visionario tecnológico",
    image: Santiago,
    fullBio: "Santiago es el cerebro detrás de BO-TECH, con una visión clara de revolucionar el transporte escolar mediante tecnología innovadora. Su experiencia en desarrollo de software y gestión empresarial ha sido fundamental para el crecimiento de la compañía.",
    skills: ["Liderazgo", "Innovación", "Desarrollo de Negocio"],
    contact: {
      email: "carlos@botech.com",
      linkedin: "carlos-rodriguez-botech",
      phone: "+57 300 123 4567",
      location: "Bogotá, Colombia"
    },
    color: "from-black to-primary-botech"
  },
  {
    id: 2,
    name: "Cristian Rost",
    role: "Lider Backend",
    shortDescription: "Arquitecta de software especializada en IoT",
    image: Cristian,
    fullBio: "Ana María lidera el desarrollo técnico de todas nuestras soluciones. Su experiencia en Internet de las Cosas y sistemas distribuidos garantiza la calidad y escalabilidad de nuestros productos.",
    skills: ["Arquitectura de Software", "IoT", "Sistemas Distribuidos"],
    contact: {
      email: "ana@botech.com",
      linkedin: "ana-lopez-cto",
      phone: "+57 300 234 5678",
      location: "Medellín, Colombia"
    },
    color: "from-primary-botech to-black"
  },
  {
    id: 3,
    name: "Juan José Cifuentes",
    role: "Desarrollador Flutter",
    shortDescription: "Diseñador UX/UI con pasión por la experiencia usuario",
    image: JJ,
    fullBio: "Miguel se encarga de que nuestros productos no solo funcionen perfectamente, sino que también proporcionen una experiencia excepcional para todos los usuarios, desde administradores hasta padres de familia.",
    skills: ["Diseño UX/UI", "Product Management", "Design Thinking"],
    contact: {
      email: "miguel@botech.com",
      linkedin: "miguel-torres-product",
      phone: "+57 300 345 6789",
      location: "Cali, Colombia"
    },
    color: "from-primary-botech "
  },
  {
    id: 4,
    name: "César Felipe Giraldo",
    role: "Desarrollador Frontend",
    shortDescription: "Desarrollador web y diseñador UX/UI ",
    image: Cesar,
    fullBio: "Isabella es la responsable de hacer llegar nuestro mensaje al mercado y construir relaciones sólidas con nuestros clientes. Su enfoque data-driven ha multiplicado nuestro alcance y engagement.",
    skills: ["Diseño UX/UI", "Web Development", "Brand Strategy"],
    contact: {
      email: "isabella@botech.com",
      linkedin: "isabella-martinez-marketing",
      phone: "+57 300 456 7890",
      location: "Barranquilla, Colombia"
    },
    color: "from-primary-botech "
  },
  {
    id: 5,
    name: "Fernando Silva",
    role: "Lead Developer",
    shortDescription: "Full-stack developer especializado en React y Node.js",
    image: Santiago,
    fullBio: "Fernando lidera nuestro equipo de desarrollo frontend y backend. Su expertise en tecnologías modernas y metodologías ágiles asegura entregas de calidad en tiempo récord.",
    skills: ["React", "Node.js", "DevOps"],
    contact: {
      email: "fernando@botech.com",
      linkedin: "fernando-silva-dev",
      phone: "+57 300 567 8901",
      location: "Bogotá, Colombia"
    },
    color: "from-primary-botech "
  },
  {
    id: 6,
    name: "Camila Herrera",
    role: "Head of Sales",
    shortDescription: "Especialista en ventas B2B y relaciones institucionales",
    image: Santiago,
    fullBio: "Camila construye y mantiene relaciones estratégicas con instituciones educativas. Su enfoque consultivo y profundo conocimiento del sector educativo han sido clave para nuestro crecimiento.",
    skills: ["Ventas B2B", "Relaciones Institucionales", "Negociación"],
    contact: {
      email: "camila@botech.com",
      linkedin: "camila-herrera-sales",
      phone: "+57 300 678 9012",
      location: "Medellín, Colombia"
    },
    color: "from-primary-botech "
  },
  {
    id: 7,
    name: "Andrés Ramírez",
    role: "QA Manager",
    shortDescription: "Ingeniero de calidad con enfoque en automatización",
    image: Santiago,
    fullBio: "Andrés garantiza que cada producto que entregamos cumpla con los más altos estándares de calidad. Su meticulosidad y sistemas de testing automatizado son fundamentales para la confiabilidad de nuestras soluciones.",
    skills: ["Quality Assurance", "Test Automation", "Process Optimization"],
    contact: {
      email: "andres@botech.com",
      linkedin: "andres-ramirez-qa",
      phone: "+57 300 789 0123",
      location: "Cali, Colombia"
    },
    color: "from-primary-botech "
  },
  {
    id: 8,
    name: "Valentina Castro",
    role: "Customer Success",
    shortDescription: "Especialista en éxito del cliente y soporte técnico",
    image: Santiago,
    fullBio: "Valentina se asegura de que nuestros clientes obtengan el máximo valor de nuestras soluciones. Su dedicación al servicio al cliente y conocimiento técnico han resultado en una satisfacción del cliente del 98%.",
    skills: ["Customer Success", "Technical Support", "Training"],
    contact: {
      email: "valentina@botech.com",
      linkedin: "valentina-castro-cs",
      phone: "+57 300 890 1234",
      location: "Bucaramanga, Colombia"
    },
    color: "from-primary-botech "
  },  
  {
    id: 9,
    name: "David Morales",
    role: "Data Analyst",
    shortDescription: "Analista de datos especializado en insights educativos",
    image: Santiago,
    fullBio: "David transforma datos en insights accionables que impulsan la mejora continua de nuestros productos. Su experiencia en analytics y machine learning nos ayuda a anticipar las necesidades de nuestros usuarios.",
    skills: ["Data Analytics", "Machine Learning", "Business Intelligence"],
    contact: {
      email: "david@botech.com",
      linkedin: "david-morales-data",
      phone: "+57 300 901 2345",
      location: "Cartagena, Colombia"
    },
    color: "from-primary-botech "
  }
];

// Modal para el Lanyard 3D optimizado para móvil
function LanyardModal({ member, isOpen, onClose }) {
  const [isMobile, setIsMobile] = useState(false);
  // Estados para animación secuencial
  const [showOverlay, setShowOverlay] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showLanyard, setShowLanyard] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Secuencia de animación
      setShowOverlay(false);
      setShowDescription(false);
      setShowSkills(false);
      setShowLanyard(false);
      setTimeout(() => setShowOverlay(true), 10); // overlay entra casi inmediato
      setTimeout(() => setShowDescription(true), 350); // descripción
      setTimeout(() => setShowSkills(true), 650); // skills
      setTimeout(() => setShowLanyard(true), isMobile ? 1700 : 1000); // carnet, más delay en mobile
    } else {
      document.body.style.overflow = 'unset';
      setShowOverlay(false);
      setShowDescription(false);
      setShowSkills(false);
      setShowLanyard(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !member) return null;

  return ReactDOM.createPortal(
    <div className={`fixed inset-0 z-50 transition-all duration-700 ${showOverlay ? 'bg-black/90 opacity-100' : 'bg-black/0 opacity-0'}`}>
      {/* Botón de cerrar optimizado para móvil */}
      <button
        onClick={onClose}
        className={`absolute z-50 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/30 ${
          isMobile 
            ? 'top-4 right-4 w-10 h-10 flex items-center justify-center' 
            : 'top-8 right-8'
        }`}
      >
        <FiX className={`text-white ${isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
      </button>
      {/* Layout optimizado para móvil */}
      {isMobile ? (
        <div className="flex flex-col h-full">
          {/* Información del miembro - parte superior */}
          <div className={`flex-shrink-0 p-4 pt-16 transition-all duration-700 ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-base text-white/90 mb-3">{member.role}</p>
              <p className={`text-sm text-white/80 mb-4 leading-relaxed transition-all duration-700 ${showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>{member.fullBio}</p>
              <div className={`flex flex-wrap gap-2 transition-all duration-700 ${showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-full text-xs font-medium text-white bg-white/20 backdrop-blur-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/* Lanyard - parte inferior */}
          <div className={`flex-1 relative transition-all duration-700 ${showLanyard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}> 
            <Lanyard member={member} />
          </div>
        </div>
      ) : (
        // Layout desktop: información en overlay
        <>
          {/* Información del miembro en overlay */}
          <div className={`absolute bottom-8 left-8 z-50 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-md transition-all duration-700 ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
            <p className="text-lg text-white/90 mb-3">{member.role}</p>
            <p className={`text-sm text-white/80 mb-4 transition-all duration-700 ${showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>{member.fullBio}</p>
            <div className={`flex flex-wrap gap-2 transition-all duration-700 ${showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
              {member.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-xs font-medium text-white bg-white/20 backdrop-blur-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Componente Lanyard */}
          <div className={`transition-all duration-700 ${showLanyard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: showLanyard ? '0ms' : '0ms'}}>
            {showLanyard && <Lanyard member={member} />}
          </div>
        </>
      )}
    </div>,
    document.body
  );
}

// Componente de tarjeta de miembro individual optimizado
function TeamMemberCard({ member, index, onCardClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer optimizado para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Dejar de observar una vez visible
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' // Cargar antes de que sea totalmente visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
      }}
    >
      <div
        className={`group relative bg-white rounded-2xl shadow-lg transition-all duration-300 cursor-pointer overflow-hidden ${
          isHovered 
            ? 'shadow-2xl -translate-y-2 scale-[1.02]' 
            : 'hover:shadow-xl hover:-translate-y-1'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onCardClick(member)}
      >
        {/* Gradiente de fondo optimizado */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${member.color} transition-opacity duration-300 ${
            isHovered ? 'opacity-10' : 'opacity-0'
          }`}
        />
        
        {/* Imagen optimizada */}
        <div className="relative overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className={`w-full h-48 object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            loading="lazy" // Lazy loading para mejor performance
          />
          
          {/* Overlay con gradiente */}
          <div 
            className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {/* Badge de rol optimizado */}
          <div 
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${member.color} shadow-lg transition-transform duration-300
              ${isHovered ? '' : 'md:-translate-x-full'}
            `}
          >
            {member.role}
          </div>
          
          
          
        </div>

        {/* Contenido */}
        <div className="p-5">
          <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${
            isHovered 
              ? 'text-transparent bg-gradient-to-r bg-clip-text from-primary-botech' 
              : 'text-gray-900'
          }`}>
            {member.name}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {member.shortDescription}
          </p>

          {/* Skills y botón */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {member.skills.slice(0, 2).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Efecto de brillo optimizado */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-1000 ${
              isHovered ? 'translate-x-full' : '-translate-x-full'
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export function TeamSection({ teamData = defaultTeamData, title = "Conoce al equipo" }) {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    
      {/* Elementos decorativos de fondo optimizados */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary-botech rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-afacad font-extrabold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-black  to-primary-botech bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conoce a los visionarios y expertos que hacen posible la revolución del transporte escolar. 
            Cada miembro aporta su experiencia única para crear soluciones que transforman vidas.
          </p>
          
          {/* Línea decorativa */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary-botech  to-primary-botech-200 rounded-full" />
          </div>
        </div>

        {/* Grid de miembros del equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              index={index}
              onCardClick={handleCardClick}
            />
          ))}
        </div>

      </div>

      {/* Modal con Lanyard */}
      <LanyardModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
} 