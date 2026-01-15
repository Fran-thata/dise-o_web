import React from 'react';
import { Building2, ShoppingBag, Target, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
            Elige tu web según tu objetivo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="glass-card p-8 rounded-3xl hover:border-primary-500/50 transition-colors duration-300 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-primary-400 border border-white/10">
              <Building2 size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 font-display">Web corporativa</h3>
            <p className="text-slate-400 mb-8 flex-grow">
              Presencia digital sólida para empresas. Diseño multipágina, blog y servicios detallados.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-slate-300">
               <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-secondary-400 mr-2"></span>Autogestionable (WordPress)</li>
               <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-secondary-400 mr-2"></span>SEO Técnico incluido</li>
               <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-secondary-400 mr-2"></span>Multidioma</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center justify-center">
               Más información <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 rounded-3xl border-primary-500/30 shadow-[0_0_30px_rgba(124,58,237,0.1)] relative flex flex-col scale-105 z-10 bg-[#0F131F]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-600 to-secondary-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
               Más popular
            </div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center mb-6 text-white shadow-lg shadow-primary-500/30">
              <ShoppingBag size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 font-display">Tienda online</h3>
            <p className="text-slate-400 mb-8 flex-grow">
              (WooCommerce). Vende 24/7 con pasarelas de pago seguras y gestión de stock fácil.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-slate-300">
               <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-2"></span>Pagos (Stripe/Redsys)</li>
               <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-2"></span>Sin comisiones por venta</li>
               <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-2"></span>Panel de control fácil</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-white text-bg-900 font-bold hover:bg-slate-200 transition-colors">
               Empezar tienda
            </button>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-8 rounded-3xl hover:border-secondary-500/50 transition-colors duration-300 flex flex-col">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-secondary-400 border border-white/10">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 font-display">Landing page</h3>
            <p className="text-slate-400 mb-8 flex-grow">
              Web de captación (One Page). Enfocada 100% en campañas de publicidad y conversión.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-slate-300">
               <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-secondary-400 mr-2"></span>Copywriting persuasivo</li>
               <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-secondary-400 mr-2"></span>Carga ultrarrápida</li>
               <li className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-secondary-400 mr-2"></span>A/B Testing ready</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center justify-center">
               Ver ejemplo <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;