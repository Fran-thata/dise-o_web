import React from 'react';
import { Reveal } from './Reveal';

const steps = [
  { num: "01", title: "Reunión", desc: "Objetivos claros" },
  { num: "02", title: "Estrategia", desc: "Estructura SEO" },
  { num: "03", title: "Diseño", desc: "UI Premium" },
  { num: "04", title: "Desarrollo", desc: "Código limpio" },
  { num: "05", title: "Lanzamiento", desc: "Web lista" },
];

const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-24 bg-bg-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <Reveal>
            <span className="text-secondary-400 font-bold tracking-widest uppercase text-xs mb-2 block font-display">Proceso</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
              De idea a web lista: en 5 pasos
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* Mobile Continuous Vertical Line */}
          <div className="md:hidden absolute left-[3rem] top-0 bottom-0 w-[1px] bg-white/10"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative">
            {steps.map((step, index) => (
              <Reveal key={index} delay={index * 100} className="h-full" width="100%">
                <div className="relative group h-full">
                  {/* Desktop Connector Line */}
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-[1px] bg-white/10 -z-10 group-last:hidden"></div>
                  
                  <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors border-white/5 h-full flex flex-row md:flex-col items-center md:items-start gap-6 md:gap-0 bg-bg-900/80 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none">
                    {/* Circle Number */}
                    <div className="w-12 h-12 rounded-full bg-bg-800 border border-white/20 flex items-center justify-center text-primary-400 font-bold font-display text-lg md:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0 z-10 relative">
                      {step.num}
                    </div>
                    {/* Text */}
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white mb-1 font-display">{step.title}</h3>
                      <p className="text-sm text-slate-400">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;