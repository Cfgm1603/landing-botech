import React from 'react';
import { FiPlay, FiDownload, FiBook, FiVideo, FiUserCheck, FiBarChart2, FiBell, FiSettings, FiLink, FiUsers, FiShield, FiClipboard, FiCheckCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Iphone from '../img/Iphone.png';
import Login from '../img/login.png';

export const tutorials = [
  {
    id: 1,
    title: "Configuración Inicial del Sistema",
    description: "Aprende a configurar tu cuenta y personalizar las opciones básicas del sistema.",
    duration: "15 min",
    type: "video",
    icon: FiSettings,
    category: "SEGUIMIENTO",
    sections: [
      {
        image: Iphone,
        title: "Configuración Inicial del Sistema",
        description: "Aprende a configurar tu cuenta y personalizar las opciones básicas del sistema.",
        longDescription: "En este tutorial aprenderás paso a paso cómo realizar la configuración inicial de tu cuenta, incluyendo la personalización de las opciones básicas del sistema para adaptarlo a tus necesidades. Se explican las mejores prácticas y recomendaciones para un inicio óptimo.",
        reverse: false
      },
      {
        image: Iphone,
        title: "Personalización avanzada",
        description: "Descubre cómo personalizar aún más tu experiencia.",
        longDescription: "Puedes cambiar colores, iconos y mucho más para adaptar la app a tu estilo. Esta sección te guía por las opciones avanzadas de personalización.",
        reverse: true
      }
    ]
  },
  {
    id: 2,
    title: "Gestión de Usuarios y Permisos",
    description: "Configura usuarios, roles y permisos para mantener la seguridad de tu sistema.",
    duration: "25 min",
    type: "video",
    icon: FiUserCheck,
    category: "PASS",
    image: Iphone
  },
  {
    id: 3,
    title: "Generación de Reportes",
    description: "Crea y personaliza reportes detallados para analizar el rendimiento de tu operación.",
    duration: "20 min",
    type: "video",
    icon: FiBarChart2,
    category: "BO-TECH TRACKING",
    image: Login
  },
  {
    id: 4,
    title: "Integración con APIs",
    description: "Conecta tu sistema con otras aplicaciones usando nuestras APIs.",
    duration: "30 min",
    type: "documento",
    icon: FiLink,
    category: "SEGUIMIENTO",
    image: Iphone
  },
  {
    id: 5,
    title: "Configuración de Alertas",
    description: "Configura notificaciones automáticas para eventos importantes.",
    duration: "18 min",
    type: "video",
    icon: FiBell,
    category: "PASS",
    image: Iphone
  },
  {
    id: 6,
    title: "Manual de Usuario Completo",
    description: "Guía completa con todos los aspectos del sistema explicados paso a paso.",
    duration: "120 min",
    type: "documento",
    icon: FiBook,
    category: "BO-TECH TRACKING",
    image: Iphone
  },
  {
    id: 7,
    title: "Administración de Equipos",
    description: "Aprende a crear y gestionar equipos de trabajo dentro de la plataforma.",
    duration: "22 min",
    type: "video",
    icon: FiUsers,
    category: "SEGUIMIENTO",
    image: Iphone
  },
  {
    id: 8,
    title: "Seguridad y Privacidad",
    description: "Revisa las mejores prácticas para proteger tus datos y los de tus usuarios.",
    duration: "17 min",
    type: "video",
    icon: FiShield,
    category: "PASS",
    image: Iphone
  },
  {
    id: 9,
    title: "Checklist de Implementación",
    description: "Sigue una lista de pasos recomendados para una implementación exitosa.",
    duration: "10 min",
    type: "documento",
    icon: FiClipboard,
    category: "BO-TECH TRACKING",
    image: Iphone
  },
  {
    id: 10,
    title: "Validación de Procesos",
    description: "Asegura que todos los procesos estén correctamente configurados y validados.",
    duration: "12 min",
    type: "video",
    icon: FiCheckCircle,
    category: "SEGUIMIENTO",
    image: Iphone
  }
];

export function Tutorials() {
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');
  const categories = ['Todos', 'SEGUIMIENTO', 'PASS', 'BO-TECH TRACKING'];
  const filteredTutorials = selectedCategory === 'Todos'
    ? tutorials
    : tutorials.filter(t => t.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tutoriales y Documentación</h1>
          <p className="text-xl text-gray-600">Aprende a usar nuestras herramientas de manera eficiente</p>
        </div>
        
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-lg font-medium font-afacad transition-all duration-150 ${selectedCategory === cat ? 'bg-primary-botech text-white' : 'bg-gray-200 text-gray-700 text-primary-botech font-bold hover:bg-gray-300'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Grid de tutoriales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial) => (
            <div key={tutorial.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-botech rounded-lg flex items-center justify-center">
                    <tutorial.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    <FiPlay className="inline w-4 h-4 mr-1" />
                    {tutorial.duration}
                  </span>
                  
                  <Link
                    to={`/tutoriales/${tutorial.id}`}
                    className="flex items-center space-x-2 text-primary-botech hover:text-primary-botech/80 font-medium text-sm"
                    >
                    <span>Ver tutorial</span>
                    <FiDownload className="w-4 h-4" />
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Sección de recursos adicionales */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-primary-botech mb-6 text-center">Recursos Adicionales</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-botech rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBook className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Documentación Técnica</h3>
              <p className="text-gray-600 text-sm">Guías detalladas para desarrolladores</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-botech rounded-full flex items-center justify-center mx-auto mb-4">
                <FiVideo className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Videos Tutoriales</h3>
              <p className="text-gray-600 text-sm">Contenido audiovisual paso a paso</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-botech rounded-full flex items-center justify-center mx-auto mb-4">
                <FiDownload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Descargas</h3>
              <p className="text-gray-600 text-sm">Manuales y guías en PDF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 