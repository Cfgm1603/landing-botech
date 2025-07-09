import React from 'react';
import { FiPlay, FiDownload, FiBook, FiVideo } from 'react-icons/fi';

export function Tutorials() {
  const tutorials = [
    {
      id: 1,
      title: "Configuración Inicial del Sistema",
      description: "Aprende a configurar tu cuenta y personalizar las opciones básicas del sistema.",
      duration: "15 min",
      level: "Básico",
      type: "video",
      icon: FiVideo
    },
    {
      id: 2,
      title: "Gestión de Usuarios y Permisos",
      description: "Configura usuarios, roles y permisos para mantener la seguridad de tu sistema.",
      duration: "25 min",
      level: "Intermedio",
      type: "video",
      icon: FiVideo
    },
    {
      id: 3,
      title: "Generación de Reportes",
      description: "Crea y personaliza reportes detallados para analizar el rendimiento de tu operación.",
      duration: "20 min",
      level: "Intermedio",
      type: "video",
      icon: FiVideo
    },
    {
      id: 4,
      title: "Integración con APIs",
      description: "Conecta tu sistema con otras aplicaciones usando nuestras APIs.",
      duration: "30 min",
      level: "Avanzado",
      type: "documento",
      icon: FiBook
    },
    {
      id: 5,
      title: "Configuración de Alertas",
      description: "Configura notificaciones automáticas para eventos importantes.",
      duration: "18 min",
      level: "Básico",
      type: "video",
      icon: FiVideo
    },
    {
      id: 6,
      title: "Manual de Usuario Completo",
      description: "Guía completa con todos los aspectos del sistema explicados paso a paso.",
      duration: "120 min",
      level: "Todos",
      type: "documento",
      icon: FiBook
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tutoriales y Documentación</h1>
          <p className="text-xl text-gray-600">Aprende a usar nuestras herramientas de manera eficiente</p>
        </div>
        
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="px-6 py-2 bg-primary-botech text-white rounded-lg font-medium">
            Todos
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300">
            Videos
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300">
            Documentos
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300">
            Básico
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300">
            Intermedio
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300">
            Avanzado
          </button>
        </div>
        
        {/* Grid de tutoriales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-botech rounded-lg flex items-center justify-center">
                    <tutorial.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tutorial.level === 'Básico' ? 'bg-green-100 text-green-800' :
                    tutorial.level === 'Intermedio' ? 'bg-yellow-100 text-yellow-800' :
                    tutorial.level === 'Avanzado' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {tutorial.level}
                  </span>
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
                  
                  <button className="flex items-center space-x-2 text-primary-botech hover:text-primary-botech/80 font-medium text-sm">
                    <span>Ver tutorial</span>
                    <FiDownload className="w-4 h-4" />
                  </button>
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