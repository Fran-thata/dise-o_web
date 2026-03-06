import React from 'react';
import { Sparkles, Gauge, MessageSquare } from 'lucide-react';
import { Reveal } from './Reveal';

const ValueProp: React.FC = () => {
  return (
    <section className="py-24 bg-bg-800/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-6">
              Por qué elegir Thiara para tu diseño web en Valencia
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-bg-900 border border-white/10 flex items-center justify-center mb-6 text-secondary-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">Diseño con intención (no decoración)</h3>
            <p className="text-sm text-slate-400">
              Cada sección tiene una función: explicar, convencer y llevar al contacto. Menos “relleno”, más claridad.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-bg-900 border border-white/10 flex items-center justify-center mb-6 text-secondary-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <Gauge size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">Web rápida y optimizada</h3>
            <p className="text-sm text-slate-400">
              Optimización de velocidad, imágenes y estructura para que cargue bien y se use mejor (especialmente en móvil).
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-bg-900 border border-white/10 flex items-center justify-center mb-6 text-primary-400 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
              <MessageSquare size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">Soporte y mejoras postlanzamiento</h3>
            <p className="text-sm text-slate-400">
              No te dejo tirado cuando se publica: ajustes, mejoras y mantenimiento si lo necesitas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProp;