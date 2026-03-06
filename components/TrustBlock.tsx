import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
const TrustBlock: React.FC = () => {
  return (
    <section className="py-24 bg-bg-800/50 border-y border-white/5 relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal width="100%">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-6 leading-tight">
                Una web bonita está bien. <br/>
                <span className="text-primary-400">Una web que vende, mejor.</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Aquí no vienes a “hacer una web”. Vienes a construir una herramienta que te ayude a cerrar clientes: mensaje claro, estructura pensada y llamadas a la acción donde toca.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Reveal delay={100}>
              <div className="glass-card p-6 rounded-2xl border-white/10 hover:border-primary-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="text-secondary-400" size={20} />
                  <h3 className="font-bold text-white font-display">Entrega por fases</h3>
                </div>
                <p className="text-sm text-slate-400">Ves avances desde el primer momento y decides con criterio.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="glass-card p-6 rounded-2xl border-white/10 hover:border-primary-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="text-secondary-400" size={20} />
                  <h3 className="font-bold text-white font-display">Soporte tras lanzamiento</h3>
                </div>
                <p className="text-sm text-slate-400">No te dejo tirado: ajustes y mantenimiento si lo necesitas.</p>
              </div>
            </Reveal>
            <Reveal delay={300} className="sm:col-span-2">
              <div className="glass-card p-6 rounded-2xl border-white/10 hover:border-primary-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="text-secondary-400" size={20} />
                  <h3 className="font-bold text-white font-display">Optimización básica SEO + velocidad</h3>
                </div>
                <p className="text-sm text-slate-400">Estructura técnica lista para buscadores y carga ultra rápida incluida.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrustBlock;
