import React, { useState } from 'react';
import { Button } from "./Button";
import { Input } from "./Input";
import { FiMail, FiMessageCircle, FiUser, FiBriefcase, FiPhone, FiCheck, FiX } from 'react-icons/fi';

export function Hero() {
  const [email, setEmail] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    college: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleGetStarted = (buttonType = 'contact') => {
    if (email.trim()) {
      setFormData(prev => ({ ...prev, email: email }));
      setIsExpanded(true);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío (aquí integrarías con tu backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log('Datos recopilados:', formData);
      
      // Auto-cerrar después de mostrar éxito
      setTimeout(() => {
        setIsSuccess(false);
        setIsExpanded(false);
        setEmail('');
        setFormData({ email: '', name: '', college: '', phone: '' });
      }, 2000);
    }, 1500);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setIsSuccess(false);
  };

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-afacad font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight">
          Transporte escolar conectado.
          <br className="hidden sm:block" />
          <span className="block sm:hidden mt-2"></span>
          Entradas seguras y sin fricción.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Contáctanos y evolucionemos el transporte escolar de tu colegio.
        </p>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          {/* Formulario inicial */}
          <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-2 mb-8 bg-gray-100 rounded-2xl p-3 lg:p-1.5 max-w-3xl mx-auto shadow-sm">
              <div className="relative flex-1 w-full">
                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Ingresa tu correo" 
                  className="bg-transparent border-0 pl-12 pr-4 py-3 w-full text-gray-700 placeholder-gray-500 focus:ring-0 rounded-xl text-base"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isExpanded}
                />
              </div>
              <div className="w-full lg:w-auto lg:pr-2">
                <Button 
                  className="bg-primary-botech hover:bg-primary-botech/90 text-white px-8 py-3 rounded-2xl font-medium text-base whitespace-nowrap w-full lg:w-auto"
                  onClick={() => handleGetStarted('account')}
                  disabled={isExpanded || !email.trim()}
                >
                  Pongámonos en contacto!
                </Button>
              </div>
            </div>
          </div>

          {/* Formulario expandido - ahora empuja el contenido */}
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded ? 'opacity-100 mb-8' : 'opacity-0 mb-0 h-0'
          }`}>
            <div className="bg-white/95 backdrop-blur-md rounded-2xl  border border-white/20 p-4 sm:p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                    ¡Transformemos el transporte de tu institución!
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mt-1">
                    Solo necesitamos algunos datos para contactarte
                  </p>
                </div>
                <button 
                  onClick={handleClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <FiX className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Formulario */}
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input 
                        placeholder="Tu nombre completo"
                        className="pl-10 bg-white/80"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="relative">
                      <FiBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input 
                        placeholder="Colegio o empresa"
                        className="pl-10 bg-white/80"
                        value={formData.college}
                        onChange={(e) => handleInputChange('college', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input 
                      placeholder="Número de celular"
                      className="pl-10 bg-white/80"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit"
                      className="w-full bg-primary-botech hover:bg-primary-botech/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Enviando...
                        </div>
                      ) : (
                        'Enviar información'
                      )}
                    </Button>
                  </div>
                </form>
              ) : (
                /* Mensaje de éxito */
                <div className="text-center py-6 sm:py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ¡Perfecto! 🎉
                  </h3>
                  <p className="text-gray-600">
                    Nos pondremos en contacto contigo muy pronto para transformar el transporte escolar de <strong>{formData.college}</strong>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 