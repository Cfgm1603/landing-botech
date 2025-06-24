import { Button } from "./Button";
import { Input } from "./Input";
import { FiMail, FiMessageCircle } from 'react-icons/fi';

export function Hero() {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-afacad font-extrabold text-gray-900 mb-6 leading-tight">
          Transporte escolar conectado.
          <br />
          Entradas seguras y sin fricción.
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Contáctanos y evolucionemos el transporte escolar de tu colegio.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <div className="relative max-w-xs">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input placeholder="Ingresa tu correo" className="bg-white/80 backdrop-blur-sm border-gray-300 pl-10" />
          </div>
          <Button className="bg-primary-botech hover:bg-primary-botech/90 text-white px-8">Contáctanos</Button>
          <Button variant="outline" className="bg-white/80 backdrop-blur-sm border-gray-300">
            <FiMessageCircle className="w-4 h-4 mr-2" />
            Revisar catálogo
          </Button>
        </div>
      </div>
    </div>
  );
} 