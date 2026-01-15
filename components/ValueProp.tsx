import React from 'react';
import { MousePointerClick, Gem, MessageSquare } from 'lucide-react';

const ValueProp: React.FC = () => {
  return (
    <section className="py-24 bg-bg-800/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-6">
            Tu web tiene una misión: <br/>
            <span className="text-primary-400">que el cliente entienda y actúe</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-bg-900 border border-white/10 flex items-center justify-center mb-6 text-secondary-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <ZapIcon />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">Mensaje claro en 5 segundos</h3>
            <p className="text-slate-400">
              Si el usuario no sabe qué haces en 5 segundos, se va. Clarificamos tu propuesta de valor.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-bg-900 border border-white/10 flex items-center justify-center mb-6 text-primary-400 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
              <Gem size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">Diseño premium que genera confianza</h3>
            <p className="text-slate-400">
              La estética importa. Una web moderna y cuidada justifica tus precios y elimina dudas.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-bg-900 border border-white/10 flex items-center justify-center mb-6 text-gold-400 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
              <MousePointerClick size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 font-display">CTA visibles</h3>
            <p className="text-slate-400">
              Botones de WhatsApp, llamada y formulario siempre a mano. Reducimos la fricción de contacto.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

const ZapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);

export default ValueProp;