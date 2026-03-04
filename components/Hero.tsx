import React from 'react';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-20 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-bg-900">
      
      {/* --- Visual Background "All in One" --- */}
      
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none"></div>

      {/* 2. Dots Pattern */}
      <div className="absolute inset-0 bg-dots opacity-[0.2] pointer-events-none mask-gradient"></div>

      {/* 3. "Technologo" Curves/Waves (SVG Overlay) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Pink Glow Line Left */}
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent blur-[2px] opacity-70 rotate-12"></div>
        <div className="absolute top-[20%] left-[5%] w-4 h-4 rounded-full border border-primary-500 shadow-[0_0_10px_#d946ef]"></div>

        {/* Blue Glow Line Right/Bottom */}
        <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[400px] border-[1px] border-white/5 rounded-full blur-[1px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="text-left relative">
             {/* Small accent floating element */}
             <Reveal delay={0}>
                <div className="absolute -top-10 left-10 w-3 h-3 rounded-full bg-bg-900 border border-primary-500"></div>
             </Reveal>

            <Reveal delay={100}>
              <span className="text-secondary-400 font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block font-display">
                Thiara Diseño Web
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-[1.1] mb-6 text-white tracking-tight">
                Diseño web a medida
              </h1>
            </Reveal>
            
            <Reveal delay={150}>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl font-light">
                Desarrollo de páginas web corporativas, landing pages y proyectos de diseño web a medida optimizados para captar clientes y mejorar la presencia online de tu negocio.
              </p>
            </Reveal>

            {/* Badges Row (No H tags) */}
            <Reveal delay={200}>
              <div className="flex flex-wrap items-center gap-3 mb-10">
                {[
                  "100% Adaptable", 
                  "Optimizada para velocidad", 
                  "Diseño a medida"
                ].map((text, idx) => (
                  <span 
                    key={idx} 
                    className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-secondary-400 backdrop-blur-md hover:border-secondary-400/30 transition-colors"
                  >
                    {text}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={250}>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                {/* Primary: Gradient Button */}
                <a 
                  href="#contacto" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-[0_0_25px_rgba(217,70,239,0.4)] transition-all hover:scale-105"
                >
                  Pedir presupuesto
                </a>
                {/* Secondary: Outline Button */}
                <a 
                  href="#portfolio" 
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-white border border-white/30 hover:bg-white/5 hover:border-white/50 transition-all"
                >
                  Ver proyectos
                </a>
              </div>
            </Reveal>

            {/* Microcopy */}
            <Reveal delay={300}>
              <p className="text-xs text-slate-500 font-medium pl-2 border-l-2 border-primary-500/30">
                Trabajamos online en toda España. Reunión por videollamada en 24–48h.
              </p>
            </Reveal>
          </div>

          {/* --- RIGHT COLUMN: VISUAL (CIRCLE IMAGE) --- */}
          <div className="relative flex justify-center lg:justify-end">
            <Reveal delay={200} width="100%">
              {/* The "Circle" Container - Technologo Style */}
              <div className="relative w-[340px] h-[340px] md:w-[500px] md:h-[500px] mx-auto lg:mx-0">
                
                {/* The Cyan Ring Border */}
                <div className="absolute inset-0 rounded-full border-[6px] border-secondary-400 z-20"></div>
                
                {/* Image Mask */}
                <div className="absolute inset-[6px] rounded-full overflow-hidden z-10 bg-bg-800">
                   {/* New User Image */}
                  <img 
                    src="https://res.cloudinary.com/ddpujsrsg/image/upload/v1768753465/Captura_de_pantalla_2026-01-18_172329_u3nstx.png" 
                    alt="Experiencia Digital" 
                    className="w-full h-full object-cover"
                  />
                  {/* Purple overlay to blend slightly */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-900/50 via-transparent to-transparent mix-blend-overlay"></div>
                </div>

                {/* Floating Orbs / Decor */}
                {/* Pink Orb Left */}
                <div className="absolute top-[20%] -left-8 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full blur-md opacity-80 z-30 shadow-[0_0_20px_#d946ef]"></div>
                
                {/* Cyan Orb Bottom Right */}
                <div className="absolute bottom-[10%] -right-4 w-10 h-10 bg-secondary-400 rounded-full blur-sm z-30 opacity-90 shadow-[0_0_15px_#22d3ee]"></div>

                {/* Dotted half-circle decor (Simulated with border dashed) */}
                <div className="absolute -inset-10 border-2 border-dashed border-white/10 rounded-full z-0 animate-spin-slow" style={{animationDuration: '20s'}}></div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;