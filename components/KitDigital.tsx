import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const KitDigital: React.FC = () => {
  return (
    <section id="kit-digital" className="py-20 bg-bg-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-bg-800 to-bg-900 p-8 md:p-16">
          
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-600/20 blur-[100px] rounded-full -mr-20 -mt-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded mb-6 backdrop-blur-md border border-white/10">
                Agente Digitalizador Oficial
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">
                Kit Digital: lo enfocamos a <span className="text-primary-400">resultados</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                No hacemos webs "por cumplir" con la subvención. Aprovechamos los 2.000€ de ayuda para construir un activo digital real para tu negocio.
              </p>
              
              <ul className="space-y-3 mb-8 inline-block text-left">
                <li className="flex items-center text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3" /> 100% Subvencionado (Fondo perdido)
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3" /> Gestión del papeleo incluida
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3" /> 12 meses de soporte técnico
                </li>
              </ul>

              <button className="bg-white text-bg-900 font-bold px-8 py-4 rounded-full hover:bg-slate-200 transition-colors shadow-lg shadow-white/10">
                Consultar Elegibilidad
              </button>
            </div>
            
            <div className="flex-1 relative">
               {/* Abstract graphic representing growth/digital */}
               <div className="glass-card p-6 rounded-2xl border-white/10 bg-white/5 rotate-3">
                  <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                     <span className="text-white font-bold">Bono Digital</span>
                     <span className="text-primary-400 font-mono font-bold">2.000€</span>
                  </div>
                  <div className="space-y-3">
                     <div className="h-2 bg-white/10 rounded w-3/4"></div>
                     <div className="h-2 bg-white/10 rounded w-1/2"></div>
                     <div className="h-2 bg-white/10 rounded w-5/6"></div>
                  </div>
                  <div className="mt-6 flex justify-end">
                     <div className="px-4 py-2 bg-primary-600 rounded text-xs font-bold text-white">APROBADO</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitDigital;