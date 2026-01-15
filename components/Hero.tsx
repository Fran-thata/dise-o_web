import React from 'react';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg-900">
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-20 pointer-events-none"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-secondary-400/10 rounded-full blur-[100px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse shadow-[0_0_10px_#7C3AED]"></span>
            Diseño Web Premium
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-8">
            Diseño Web Profesional <br/>
            que convierte <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-300 to-primary-400 bg-300% animate-gradient">visitas en clientes</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Webs rápidas, limpias y SEO friendly: pensadas para generar contactos, llamadas y ventas.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="#contacto" className="group relative px-8 py-4 bg-white text-bg-900 font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 flex items-center">
                Solicitar auditoría gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a href="#portfolio" className="group px-8 py-4 text-white border border-white/20 rounded-full font-semibold hover:bg-white/5 hover:border-white/40 transition-all flex items-center backdrop-blur-sm">
              Ver portfolio
              <ChevronRight className="ml-2 w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple text or abstract logo placeholders for "Trust" */}
             <span className="font-display font-bold text-xl tracking-wider">WORDPRESS</span>
             <span className="font-display font-bold text-xl tracking-wider">WOOCOMMERCE</span>
             <span className="font-display font-bold text-xl tracking-wider">GOOGLE ADS</span>
             <span className="font-display font-bold text-xl tracking-wider">STRIPE</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;