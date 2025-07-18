import React from 'react';
import { FiPlay, FiDownload, FiBook, FiVideo, FiUserCheck, FiBarChart2, FiBell, FiSettings, FiLink, FiUsers, FiShield, FiClipboard, FiCheckCircle, FiMenu, FiMap } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Iphone from '../img/Iphone.png';
import Login from '../img/login.png';
import { TutorialCard } from '../components/TutorialCard';
import LoginDarkPortrait from '../img/tutoriales/Semilla/login_dark-portrait.png';
import CreateAccountPortrait from '../img/tutoriales/Semilla/create_account_dark-portrait.png';
import HomeScreenDarkPortrait from '../img/tutoriales/Semilla/home_screen_dark-portrait.png';
import MapaDarkPortrait from '../img/tutoriales/Semilla/Mapa_dark-portrait.png';
import NotificacionesDarkPortrait from '../img/tutoriales/Semilla/notificaciones_dark-portrait.png';
import SettingsDarkPortrait from '../img/tutoriales/Semilla/Settings_dark-portrait.png';
import HomeArbolPortrait from '../img/tutoriales/Arbol/Home_arbol-portrait.png';
import MapaArbolPortrait from '../img/tutoriales/Arbol/Mapa_dark-portrait.png';
import NotificacionesArbolPortrait from '../img/tutoriales/Arbol/notificaciones_dark-portrait.png';
import SettingsArbolPortrait from '../img/tutoriales/Arbol/Settings_dark-portrait.png';
import LoginArbolPortrait from '../img/tutoriales/Arbol/login_dark-portrait.png';
import CreateAccountArbolPortrait from '../img/tutoriales/Arbol/create_account_dark-portrait.png';
import MisEstudiantesArbolPortrait from '../img/tutoriales/Arbol/Mis_estudiantes-portrait.png';

export const tutorials = [
  {
    id: 1,
    title: "Configuración Inicial del Sistema",
    descriptionShort: "Aprende a configurar tu cuenta y personalizar las opciones básicas del sistema.",
    descriptionLong: "En este tutorial aprenderás paso a paso cómo realizar la configuración inicial de tu cuenta, incluyendo la personalización de las opciones básicas del sistema para adaptarlo a tus necesidades. Se explican las mejores prácticas y recomendaciones para un inicio óptimo.",
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
    descriptionShort: "Configura usuarios, roles y permisos para mantener la seguridad de tu sistema.",
    descriptionLong: "Configura usuarios, roles y permisos para mantener la seguridad de tu sistema.",
    duration: "25 min",
    type: "video",
    icon: FiUserCheck,
    category: "PASS",
    image: Iphone
  },
  {
    id: 3,
    title: "Generación de Reportes",
    descriptionShort: "Crea y personaliza reportes detallados para analizar el rendimiento de tu operación.",
    descriptionLong: "Crea y personaliza reportes detallados para analizar el rendimiento de tu operación.",
    duration: "20 min",
    type: "video",
    icon: FiBarChart2,
    category: "BO-TECH TRACKING",
    image: Login
  },
  {
    id: 4,
    title: "Integración con APIs",
    descriptionShort: "Conecta tu sistema con otras aplicaciones usando nuestras APIs.",
    descriptionLong: "Conecta tu sistema con otras aplicaciones usando nuestras APIs.",
    duration: "30 min",
    type: "documento",
    icon: FiLink,
    category: "SEGUIMIENTO",
    image: Iphone
  },
  {
    id: 5,
    title: "Configuración de Alertas",
    descriptionShort: "Configura notificaciones automáticas para eventos importantes.",
    descriptionLong: "Configura notificaciones automáticas para eventos importantes.",
    duration: "18 min",
    type: "video",
    icon: FiBell,
    category: "PASS",
    image: Iphone
  },
  {
    id: 6,
    title: "Manual de Usuario Completo",
    descriptionShort: "Guía completa con todos los aspectos del sistema explicados paso a paso.",
    descriptionLong: "Guía completa con todos los aspectos del sistema explicados paso a paso.",
    duration: "120 min",
    type: "documento",
    icon: FiBook,
    category: "BO-TECH TRACKING",
    image: Iphone
  },
  {
    id: 7,
    title: "Administración de Equipos",
    descriptionShort: "Aprende a crear y gestionar equipos de trabajo dentro de la plataforma.",
    descriptionLong: "Aprende a crear y gestionar equipos de trabajo dentro de la plataforma.",
    duration: "22 min",
    type: "video",
    icon: FiUsers,
    category: "SEGUIMIENTO",
    image: Iphone
  },
  {
    id: 8,
    title: "Seguridad y Privacidad",
    descriptionShort: "Revisa las mejores prácticas para proteger tus datos y los de tus usuarios.",
    descriptionLong: "Revisa las mejores prácticas para proteger tus datos y los de tus usuarios.",
    duration: "17 min",
    type: "video",
    icon: FiShield,
    category: "PASS",
    image: Iphone
  },
  {
    id: 9,
    title: "Checklist de Implementación",
    descriptionShort: "Sigue una lista de pasos recomendados para una implementación exitosa.",
    descriptionLong: "Sigue una lista de pasos recomendados para una implementación exitosa.",
    duration: "10 min",
    type: "documento",
    icon: FiClipboard,
    category: "BO-TECH TRACKING",
    image: Iphone
  },
  {
    id: 10,
    title: "Validación de Procesos",
    descriptionShort: "Asegura que todos los procesos estén correctamente configurados y validados.",
    descriptionLong: "Asegura que todos los procesos estén correctamente configurados y validados.",
    duration: "12 min",
    type: "video",
    icon: FiCheckCircle,
    category: "SEGUIMIENTO",
    image: Iphone
  },
  {
    id: 11,
    title: "Iniciar sesion",
    tier: "Semilla",
    descriptionShort: "Para iniciar sesión, ingresa tu correo y contraseña que usaste al momento de crear tu cuenta.",
    descriptionLong: "Para iniciar sesión, ingresa tu correo y contraseña que usaste al momento de crear tu cuenta. 1. Abre la aplicación. 2. En la pantalla de inicio, escribe tu correo. 3. Escribe tu contraseña. 4. Presiona el botón “Iniciar sesión”. Si los datos son correctos, entrarás directamente al menú principal. Si todavía no tienes una cuenta, presiona “Crear nueva cuenta” y sigue el tutorial correspondiente para registrarte.",
    duration: "10 min",
    icon: FiCheckCircle,
    category: "BO-TECH TRACKING",
    image: LoginDarkPortrait
  },
  {
    id: 12,
    title: "Crear cuenta",
    tier: "Semilla",
    descriptionShort: "Creación de cuenta y validación de código",
    descriptionLong: "Para crear cuenta, lo primero que debes hacer es oprimir el botón “Crear nueva cuenta” que está en la parte inferior de la pantalla de inicio de sesión. Después de esto, llena la información requerida. Cuando completes el formulario, te llegará un código numérico al celular registrado. Si no te llega, puedes solicitarlo por correo. Al validar ese código, se creará tu cuenta correctamente. NOTA: El código de familia es aquel que se asigna a cada familia desde Transporte Escolar.",
    duration: "10 min",
    icon: FiCheckCircle,
    category: "BO-TECH TRACKING",
    image: CreateAccountPortrait,
  },
  {
    id: 13,
    title: "Menú de opciones",
    tier: "Semilla",
    descriptionShort: "Accede fácilmente a las funciones principales de la app desde el menú principal.",
    descriptionLong: "En esta sección podrás acceder a las opciones principales de la app: Mapa, Asistencia, Información legal y nuestras redes sociales. Si quieres navegar por alguna de estas opciones, solo sigue estos pasos: 1. Una vez inicies sesión, verás el menú principal en la pantalla. 2. Toca el ícono de la opción que deseas consultar. 3. Por ejemplo, si tocas Mapa, irás directamente a la ubicación en tiempo real del bus. 4. Puedes volver al menú en cualquier momento para explorar otra sección.",
    duration: "10 min",
    icon: FiMenu,
    category: "BO-TECH TRACKING",
    image: HomeScreenDarkPortrait
  },
  {
    id: 14,
    title: "Sigue a tus hijos",
    tier: "Semilla",
    descriptionShort: "Visualiza y filtra la ruta de tus hijos en tiempo real desde el mapa.",
    descriptionLong: "En esta sección podrás hacer el seguimiento en tiempo real de la ruta asignada. Si tienes más de un hijo en diferentes rutas, puedes filtrarlos fácilmente: 1. Toca el botón “Seleccionar estudiante” en la parte superior. 2. Elige el estudiante que quieres ver. 3. Presiona el botón “Filtrar” para actualizar la información del mapa. Debajo del mapa verás la siguiente información: – Hora del último reporte del GPS. – Nombre del recorrido asignado. – Botón para filtrar paradas, donde puedes elegir ver solo la parada asignada a tu familia y el colegio, o ver todas las paradas del recorrido. Así puedes tener un control claro de dónde está el bus y hacia dónde se dirige.",
    duration: "10 min",
    icon: FiMap,
    category: "BO-TECH TRACKING",
    image: MapaDarkPortrait
  },
  {
    id: 15,
    title: "Notificaciones",
    tier: "Semilla",
    descriptionShort: "Recibe alertas automáticas sobre recorridos, asistencia y cercanía del bus.",
    descriptionLong: "En esta sección recibirás todas tus notificaciones importantes. Nuestra app envía automáticamente 3 tipos de notificaciones para mantenerte informado en todo momento: 1. Inicio del recorrido: te avisamos cuando el bus comienza su recorrido. 2. Asistencia: recibirás una notificación cuando tu hijo o hija suba o baje del bus. 3. Cercanía del vehículo: te notificamos cuando el bus está cerca de tu punto de parada. Estas notificaciones aparecen en la app y también pueden llegarte como alertas en el celular (si tienes los permisos activados). ¡Así estarás siempre al tanto del transporte escolar!", 
    duration: "10 min",
    icon: FiBell,
    category: "BO-TECH TRACKING",
    image: NotificacionesDarkPortrait
  },
  {
    id: 16,
    title: "Configuración",
    tier: "Semilla",
    descriptionShort: "Gestiona tu cuenta, cambia tu contraseña y personaliza tu experiencia.",
    descriptionLong: "En esta sección puedes gestionar tu cuenta y personalizar tu experiencia en la app. Desde el menú de Configuración, puedes hacer lo siguiente: 1. Ver y editar tu información personal (nombre, correo, teléfono, etc.). 2. Cambiar tu contraseña en caso de que quieras actualizarla por seguridad. 3. Cerrar sesión si estás usando otro dispositivo o necesitas salir de la app. 4. Eliminar tu cuenta, si así lo decides. Recuerda que esta acción es irreversible. Solo entra al menú, selecciona Configuración y realiza los cambios que necesites. ¡Todo está al alcance de un par de toques!",
    duration: "10 min",
    icon: FiSettings,
    category: "BO-TECH TRACKING",
    image: SettingsDarkPortrait
  },
  {
    id: 17,
    title: "Iniciar sesión",
    tier: "Arbol",
    descriptionShort: "Accede a la app con tu correo y contraseña registrados.",
    descriptionLong: "Para iniciar sesión, ingresa tu correo y contraseña que usaste al momento de crear tu cuenta. 1. Abre la aplicación. 2. En la pantalla de inicio, escribe tu correo. 3. Escribe tu contraseña. 4. Presiona el botón “Iniciar sesión”. Si los datos son correctos, entrarás directamente al menú principal. Si todavía no tienes una cuenta, presiona “Crear nueva cuenta” y sigue el tutorial correspondiente para registrarte.",
    duration: "10 min",
    icon: FiCheckCircle,
    category: "BO-TECH TRACKING",
    image: LoginArbolPortrait
  },
  {
    id: 18,
    title: "Crear cuenta",
    tier: "Arbol",
    descriptionShort: "Regístrate fácilmente y valida tu cuenta con un código.",
    descriptionLong: "Para crear cuenta, lo primero que debes hacer es oprimir el botón “Crear nueva cuenta” que está en la parte inferior de la pantalla de inicio de sesión. Después de esto, llena la información requerida. Cuando completes el formulario, te llegará un código numérico al celular registrado. Si no te llega, puedes solicitarlo por correo. Al validar ese código, se creará tu cuenta correctamente. NOTA: El código de familia es aquel que se asigna a cada familia desde Transporte Escolar.",
    duration: "10 min",
    icon: FiCheckCircle,
    category: "BO-TECH TRACKING",
    image: CreateAccountArbolPortrait
  },
  {
    id: 19,
    title: "Menú de opciones",
    tier: "Arbol",
    descriptionShort: "Accede rápidamente a las funciones principales de la app desde el menú.",
    descriptionLong: "En el menú de opciones podrás acceder rápidamente a las principales funciones de la app. Desde aquí puedes: 1. Ver el mapa en tiempo real del recorrido del bus. 2. Ingresar a la sección de asistencia para revisar los registros de subida y bajada. 3. Consultar las rutas externas si tienes hijos asignados a rutas especiales o compartidas. 4. Acceder a “Mis estudiantes” para gestionar la información de tus hijos, crear una cuenta con opciones para tus hijos o ver sus datos. 5. Encontrar accesos directos a nuestras redes sociales. 6. Revisar la información legal relacionada con el uso de la app. Solo toca el ícono correspondiente a la sección que quieras visitar. ¡Todo está al alcance de un toque!",
    duration: "10 min",
    icon: FiMenu,
    category: "BO-TECH TRACKING",
    image: HomeArbolPortrait
  },
  {
    id: 20,
    title: "Sigue a tus hijos",
    tier: "Arbol",
    descriptionShort: "Monitorea y filtra la ruta de tus hijos en tiempo real, incluso en recorridos especiales.",
    descriptionLong: "En esta sección podrás hacer el seguimiento en tiempo real de la ruta asignada a tu hijo o hija. Si tienes más de un estudiante en diferentes rutas, puedes filtrarlos fácilmente: 1. Toca el botón “Seleccionar estudiante” en la parte superior. 2. Elige al estudiante que deseas ver. 3. Presiona el botón “Filtrar” para actualizar el mapa con la información correspondiente. Justo debajo del mapa podrás ver: – La hora del último reporte del GPS. – El nombre del recorrido asignado. – El botón para filtrar paradas, donde puedes elegir ver solo la parada asignada a tu familia y el colegio, o ver todas las paradas del recorrido. 📍 Paradas dinámicas y recorridos extracurriculares: Cuando hay eventos fuera del recorrido habitual —como salidas extracurriculares, actividades deportivas o eventos académicos— se asignan rutas especiales. Si tu hijo marca asistencia en una de estas rutas, la app te notificará automáticamente del cambio de recorrido y te mostrará el nuevo trayecto actualizado en el mapa. Así siempre estarás al tanto de dónde está el bus, incluso si el recorrido no es el habitual.",
    duration: "10 min",
    icon: FiMap,
    category: "BO-TECH TRACKING",
    image: MapaArbolPortrait
  },
  {
    id: 21,
    title: "Mis estudiantes",
    tier: "Arbol",
    descriptionShort: "Gestiona la información de tus hijos y crea cuentas para ellos.",
    descriptionLong: "En esta sección podrás visualizar la información de tus hijos registrados en la app. Además, desde aquí puedes crear una cuenta para cada estudiante, para que ellos mismos puedan ingresar a la app y tener la autonomía de consultar su recorrido, asistencia y notificaciones. Si deseas crearle una cuenta a tu hijo, sigue estos pasos: 1. Ingresa a la sección “Mis estudiantes” desde el menú principal. 2. Selecciona el estudiante al que deseas crearle una cuenta. 3. Presiona el botón “Crear cuenta”.",
    duration: "10 min",
    icon: FiUsers,
    category: "BO-TECH TRACKING",
    image: MisEstudiantesArbolPortrait
  },
  {
    id: 22,
    title: "Notificaciones",
    tier: "Arbol",
    descriptionShort: "Recibe alertas automáticas sobre recorridos, asistencia y cercanía del bus.",
    descriptionLong: "En esta sección recibirás todas tus notificaciones importantes. Nuestra app envía automáticamente 3 tipos de notificaciones para mantenerte informado en todo momento: 1. Inicio del recorrido: te avisamos cuando el bus comienza su recorrido. 2. Asistencia: recibirás una notificación cuando tu hijo o hija suba o baje del bus. 3. Cercanía del vehículo: te notificamos cuando el bus está cerca de tu punto de parada. Estas notificaciones aparecen en la app y también pueden llegarte como alertas en el celular (si tienes los permisos activados). ¡Así estarás siempre al tanto del transporte escolar!",
    duration: "10 min",
    icon: FiBell,
    category: "BO-TECH TRACKING",
    image: NotificacionesArbolPortrait
  },
  {
    id: 23,
    title: "Configuración",
    tier: "Arbol",
    descriptionShort: "Gestiona tu cuenta, cambia tu contraseña y personaliza tu experiencia.",
    descriptionLong: "En esta sección puedes gestionar tu cuenta y personalizar tu experiencia en la app. Desde el menú de Configuración, puedes hacer lo siguiente: 1. Ver y editar tu información personal (nombre, correo, teléfono, etc.). 2. Cambiar tu contraseña en caso de que quieras actualizarla por seguridad. 3. Cerrar sesión si estás usando otro dispositivo o necesitas salir de la app. 4. Eliminar tu cuenta, si así lo decides. Recuerda que esta acción es irreversible. Solo entra al menú, selecciona Configuración y realiza los cambios que necesites. ¡Todo está al alcance de un par de toques!",
    duration: "10 min",
    icon: FiSettings,
    category: "BO-TECH TRACKING",
    image: SettingsArbolPortrait
  },
  {
    id: 24,
    title: "PRUEBA",
    tier: "Bosque",
    descriptionShort: "Gestiona tu cuenta, cambia tu contraseña y personaliza tu experiencia.",
    descriptionLong: "En esta sección puedes gestionar tu cuenta y personalizar tu experiencia en la app. Desde el menú de Configuración, puedes hacer lo siguiente: 1. Ver y editar tu información personal (nombre, correo, teléfono, etc.). 2. Cambiar tu contraseña en caso de que quieras actualizarla por seguridad. 3. Cerrar sesión si estás usando otro dispositivo o necesitas salir de la app. 4. Eliminar tu cuenta, si así lo decides. Recuerda que esta acción es irreversible. Solo entra al menú, selecciona Configuración y realiza los cambios que necesites. ¡Todo está al alcance de un par de toques!",
    duration: "10 min",
    icon: FiSettings,
    category: "BO-TECH TRACKING",
    image: SettingsArbolPortrait
  }
];

// Agregar tier a los tutoriales de BO-TECH TRACKING
const botechTutorials = tutorials.filter(t => t.category === 'BO-TECH TRACKING').map(tutorial => {
  return tutorial;
});

export function Tutorials() {
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');
  const categories = ['Todos', 'SEGUIMIENTO', 'PASS', 'BO-TECH TRACKING'];

  const renderTutorialSection = (category, title, description = '') => {
    const categoryTutorials = tutorials.filter(t => t.category === category);
    
    if (category === 'BO-TECH TRACKING') {
      const tiers = ['Bosque', 'Arbol', 'Semilla'];
      return (
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
          
          {tiers.map((tier, index) => {
            const tierTutorials = botechTutorials.filter(t => t.tier === tier);
            if (tierTutorials.length === 0) return null;
            
            // Emoji for each tier
            let tierEmoji = '';
            if (tier === 'Bosque') tierEmoji = '🌳🏕️🌲';
            if (tier === 'Arbol') tierEmoji = '🌳';
            if (tier === 'Semilla') tierEmoji = '';

            return (
              <div key={tier} className={`mb-12 ${index < tiers.length - 1 ? 'pb-12 border-b border-gray-200' : ''}`}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800">{tierEmoji} Plan {tier}</h3>
                  {tier === 'Bosque' && (
                    <span className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-medium">
                      Premium
                    </span>
                  )}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tierTutorials.map(tutorial => (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} tier={tier} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    }
    
    return (
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryTutorials.map(tutorial => (
            <TutorialCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tutoriales y Documentación</h1>
          <p className="text-xl text-gray-600">Aprende a usar nuestras herramientas de manera eficiente</p>
        </div>
        
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-lg font-medium font-afacad transition-all duration-150 ${
                selectedCategory === cat 
                  ? 'bg-primary-botech text-white shadow-lg' 
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Contenido */}
        <div className="space-y-16">
          {selectedCategory === 'Todos' ? (
            <>
              {renderTutorialSection('SEGUIMIENTO', 'Seguimiento', 'Tutoriales para el sistema de seguimiento')}
              {renderTutorialSection('PASS', 'Pass', 'Tutoriales para el sistema de pases')}
              {renderTutorialSection('BO-TECH TRACKING', 'BO-TECH Tracking', 'Descubre nuestros planes y sus beneficios')}
            </>
          ) : (
            renderTutorialSection(
              selectedCategory,
              selectedCategory,
              `Tutoriales para ${selectedCategory.toLowerCase()}`
            )
          )}
        </div>
        
        {/* Sección de recursos adicionales */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-lg">
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