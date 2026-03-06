import React from 'react';
import { Building2, Target, ArrowRight, Code, RefreshCw } from 'lucide-react';
import { Reveal } from './Reveal';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
              Servicios de diseño web profesional
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Elige el tipo de web según lo que necesitas hoy: presencia sólida, campañas que conviertan o un desarrollo más avanzado.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Diseño web corporativo */}
          <Reveal delay={0} className="h-full">
            <div className="glass-card p-8 rounded-3xl hover:border-secondary-500/50 transition-colors duration-300 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-secondary-400 border border-white/10">
                <Building2 size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-display">Diseño web corporativo</h3>
              <p className="text-slate-400 mb-8 flex-grow">
                Para empresas que quieren transmitir confianza, explicar servicios sin líos y conseguir contactos.
              </p>
              <Link to="/servicio-corporativo" className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center justify-center">
                 Más información <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </Reveal>

          {/* Card 2: Diseño de landing page */}
          <Reveal delay={100} className="h-full">
            <div className="glass-card p-8 rounded-3xl border-primary-500/30 shadow-[0_0_30px_rgba(217,70,239,0.15)] relative flex flex-col z-10 bg-[#0F131F] h-full">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center mb-6 text-white shadow-lg shadow-primary-500/30">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-display">Diseño de landing page</h3>
              <p className="text-slate-400 mb-8 flex-grow">
                Páginas enfocadas a conversiones: campañas, captación de leads o lanzamiento de un servicio.
              </p>
              <Link to="/servicio-landing" className="w-full py-3 rounded-xl bg-white text-bg-900 font-bold hover:bg-slate-200 transition-colors flex items-center justify-center">
                 Ver ejemplo
              </Link>
            </div>
          </Reveal>

          {/* Card 3: Diseño web a medida */}
          <Reveal delay={200} className="h-full">
            <div className="glass-card p-8 rounded-3xl hover:border-primary-500/50 transition-colors duration-300 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary-400 border border-white/10">
                <Code size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-display">Diseño web a medida</h3>
              <p className="text-slate-400 mb-8 flex-grow">
                Cuando necesitas algo más que “una web”: funcionalidades personalizadas, integraciones o estructura compleja.
              </p>
              <Link to="/servicio-medida" className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center justify-center">
                 Saber más <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </Reveal>

          {/* Card 4: Rediseño web */}
          <Reveal delay={400} className="h-full">
            <div className="glass-card p-8 rounded-3xl hover:border-primary-500/50 transition-colors duration-300 flex flex-col h-full">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary-400 border border-white/10">
                <RefreshCw size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-display">Rediseño web</h3>
              <p className="text-slate-400 mb-8 flex-grow">
                Si tu web se quedó vieja o carga lento: renovamos diseño, estructura, velocidad y conversión.
              </p>
              <Link to="/sector-reformas" className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center justify-center">
                 Actualizar mi web <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Services;