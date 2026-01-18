import React from 'react';
import { Reveal } from './Reveal';

const ImpactQuote: React.FC = () => {
  return (
    <section className="py-20 bg-bg-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary-900/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal width="100%" delay={100}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-display text-slate-300 font-light">
            "No quieres una web, lo que quieres es que después de que te hayan comparado con <span className="text-white font-medium">20 competidores</span>, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 font-bold text-3xl md:text-4xl lg:text-5xl mt-2 inline-block">
              se acuerden de ti
            </span>."
          </h2>
        </Reveal>
      </div>
    </section>
  );
};

export default ImpactQuote;