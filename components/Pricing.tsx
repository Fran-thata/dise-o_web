import React from 'react';
import { Check, ArrowRight, Zap, TrendingUp, Crown } from 'lucide-react';
import { Reveal } from './Reveal';

const Pricing: React.FC = () => {
  return (
    <section id="precios" className="py-24 relative overflow-hidden bg-bg-900">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Reveal width="100%">
            <span className="inline-block py-1 px-3 rounded bg-white/5 border border-white/10 text-secondary-400 font-bold tracking-widest uppercase text-xs mb-4 font-display backdrop-blur-md">
              Precios claros
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-display mb-6">
              Precios de diseño web
            </h2>
            <p className="text-lg text-slate-300 font-light leading-relaxed">
              Webs profesionales, rápidas y SEO friendly para captar leads, llamadas y ventas. 
              Elige el pack que encaja con tu negocio y te asesoramos para acertar desde el minuto uno.
            </p>
          </Reveal>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* PACK 1: ESENCIAL */}
          <Reveal delay={0} className="h-full">
            <div className="glass-card rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full relative group">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white font-display mb-2">Web Esencial</h3>
                <p className="text-sm text-slate-400 min-h-[40px]">Ideal si necesitas presencia profesional rápida y clara.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white font-display">600€</span>
                <span className="text-sm text-slate-500 font-medium ml-1">+</span>
                <p className="text-xs text-slate-500 mt-1">Pago único</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" /> Diseño responsive (móvil-first)
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" /> 1 página tipo “one page” o corporativa simple
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" /> Secciones clave: servicios, sobre mí, contacto
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" /> Formulario básico + botón WhatsApp
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" /> Optimización básica de velocidad
                </li>
              </ul>

              <div className="mt-auto">
                <a href="#contacto" className="w-full block text-center py-3 rounded-xl border border-white/20 hover:bg-white/5 text-white font-bold transition-all">
                  Pedir presupuesto
                </a>
                <p className="text-[10px] text-center text-slate-500 mt-3">Te respondemos en menos de 24h laborables.</p>
              </div>
            </div>
          </Reveal>

          {/* PACK 2: SEO LOCAL (Highlight) */}
          <Reveal delay={100} className="h-full">
            <div className="glass-card rounded-3xl p-8 border border-secondary-500/50 shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all duration-300 flex flex-col h-full relative transform md:-translate-y-4 bg-[#131b2e]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-500 text-bg-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-secondary-500/20">
                Más Popular
              </div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                   <h3 className="text-xl font-bold text-white font-display">Web + SEO Local</h3>
                   <TrendingUp className="w-5 h-5 text-secondary-400" />
                </div>
                <p className="text-sm text-slate-400 min-h-[40px]">Para negocios que quieren posicionarse en Google y captar clientes locales.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white font-display">1.000€</span>
                <span className="text-sm text-slate-500 font-medium ml-1">+</span>
                <p className="text-xs text-secondary-400 mt-1">Mejor relación calidad/precio</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start text-sm text-white font-medium">
                  <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" /> <strong>Todo lo del Pack Esencial</strong>
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" /> Estructura SEO on-page: H1/H2, titles
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" /> Keyword focus: “tu servicio + ciudad”
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" /> Optimización de Core Web Vitals
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" /> Configuración Search Console + Sitemap
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-secondary-400 mr-3 flex-shrink-0" /> Copy con propuesta de valor clara
                </li>
              </ul>

              <div className="mt-auto">
                <a href="#contacto" className="w-full block text-center py-3 rounded-xl bg-secondary-500 hover:bg-secondary-400 text-bg-900 font-bold transition-all shadow-lg shadow-secondary-500/20">
                  Quiero mi web con SEO
                </a>
                <p className="text-[10px] text-center text-slate-500 mt-3">Te decimos qué atacar primero para ganar visibilidad.</p>
              </div>
            </div>
          </Reveal>

          {/* PACK 3: PREMIUM */}
          <Reveal delay={200} className="h-full">
            <div className="glass-card rounded-3xl p-8 border border-primary-500/50 shadow-[0_0_30px_rgba(217,70,239,0.15)] transition-all duration-300 flex flex-col h-full relative group">
               <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                   <h3 className="text-xl font-bold text-white font-display">Premium + Conversión</h3>
                   <Crown className="w-5 h-5 text-primary-500" />
                </div>
                <p className="text-sm text-slate-400 min-h-[40px]">Diseño premium, velocidad + UX para convertir más visitas en contactos.</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white font-display">1.400€</span>
                <span className="text-sm text-slate-500 font-medium ml-1">+</span>
                <p className="text-xs text-primary-400 mt-1">Máximo impacto</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start text-sm text-white font-medium">
                  <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" /> <strong>Todo lo del Pack SEO Local</strong>
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" /> Diseño UI/UX premium (bloques estratégicos)
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" /> Animaciones suaves + microinteracciones
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" /> Sección testimonios + prueba social
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" /> Lead magnets / CTA avanzados
                </li>
                <li className="flex items-start text-sm text-slate-300">
                  <Check className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" /> Preparación para campañas (Landing-ready)
                </li>
              </ul>

              <div className="mt-auto">
                <a href="#contacto" className="w-full flex justify-center items-center py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)]">
                  Quiero el Premium <ArrowRight size={16} className="ml-2" />
                </a>
                <p className="text-[10px] text-center text-slate-500 mt-3">Pensado para vender, no solo para "estar".</p>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Trust Line - Updated to be more centered and contained */}
        <Reveal delay={300}>
          <div className="mt-16 text-center max-w-2xl mx-auto border-t border-white/5 pt-8">
             <p className="text-sm text-slate-400 leading-relaxed">
               Todas las webs se entregan optimizadas, con diseño responsive y base de SEO. Si necesitas ecommerce, multiidioma o funcionalidades a medida, te pasamos presupuesto en 24h.
             </p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Pricing;