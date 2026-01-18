import React from 'react';
import { PortfolioItem } from '../types';
import { Reveal } from './Reveal';

const items: PortfolioItem[] = [
  { id: 1, title: "Finanzas Capital", category: "Corporativa", description: "UI Futurist para Fintech", image: "https://picsum.photos/seed/tech1/600/400" },
  { id: 2, title: "Neon Shop", category: "Ecommerce", description: "Tienda de ropa urbana Dark Mode", image: "https://picsum.photos/seed/tech2/600/400" },
  { id: 3, title: "Legal Tech", category: "Landing", description: "Landing page alta conversión", image: "https://picsum.photos/seed/tech3/600/400" },
  { id: 4, title: "Crypto App", category: "Landing", description: "Web 3.0 Presentation", image: "https://picsum.photos/seed/tech4/600/400" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-bg-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
                Proyectos recientes
              </h2>
              <p className="text-slate-400">
                Diseño limpio. Código eficiente. Resultados medibles.
              </p>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <a href="#contacto" className="hidden md:inline-flex items-center text-primary-400 hover:text-primary-300 font-bold mt-4 md:mt-0">
              Ver todos los proyectos →
            </a>
          </Reveal>
        </div>

        {/* Updated grid for 4 items: 2 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 50}>
              <div className="group relative overflow-hidden rounded-2xl glass-card border-white/5 transition-all hover:border-primary-500/50">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-900 via-transparent to-transparent opacity-90"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-1">
                     <h3 className="text-2xl font-bold text-white font-display">{item.title}</h3>
                     <span className="text-xs font-bold uppercase tracking-widest text-bg-900 bg-white px-2 py-1 rounded">{item.category}</span>
                  </div>
                  <p className="text-base text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#contacto" className="inline-flex items-center text-primary-400 hover:text-primary-300 font-bold">
            Ver todos los proyectos →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;