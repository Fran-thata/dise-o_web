import React from 'react';
import { Gauge, Search, LayoutTemplate } from 'lucide-react';

const TechBenefits: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
            Lo que hace que tu web se sienta <span className="text-primary-400">moderna</span> (y funcione)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-secondary-500/30 transition-all duration-300 group">
            <Gauge className="w-10 h-10 text-secondary-400 mb-6 group-hover:animate-pulse" />
            <h3 className="text-2xl font-bold text-white mb-4 font-display">Velocidad real</h3>
            <p className="text-slate-400 leading-relaxed">
              Google penaliza las webs lentas. Optimizamos imágenes, código y servidor para que tu web cargue en milisegundos.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-primary-500/30 transition-all duration-300 group">
            <Search className="w-10 h-10 text-primary-500 mb-6 group-hover:animate-bounce" />
            <h3 className="text-2xl font-bold text-white mb-4 font-display">SEO friendly desde el inicio</h3>
            <p className="text-slate-400 leading-relaxed">
              Estructura de encabezados (H1, H2), sitemaps, metadatos y schema markup configurados para que Google te entienda.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-gold-500/30 transition-all duration-300 group">
            <LayoutTemplate className="w-10 h-10 text-gold-400 mb-6 group-hover:rotate-3" />
            <h3 className="text-2xl font-bold text-white mb-4 font-display">Estructura pensada para vender</h3>
            <p className="text-slate-400 leading-relaxed">
              No ponemos elementos al azar. Cada sección, botón e imagen está colocada estratégicamente para guiar al usuario a la compra.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechBenefits;