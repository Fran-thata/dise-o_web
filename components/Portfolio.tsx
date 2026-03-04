import React from 'react';
import { PortfolioItem } from '../types';
import { Reveal } from './Reveal';

const items: PortfolioItem[] = [
  { id: 1, title: "Web corporativa para empresa", category: "Corporativa", description: "Diseño limpio y profesional para empresa de servicios.", image: "https://picsum.photos/seed/corp1/600/400" },
  { id: 2, title: "Landing page para captación de leads", category: "Landing", description: "Optimizada para conversiones y campañas de marketing.", image: "https://picsum.photos/seed/landing1/600/400" },
  { id: 3, title: "Tienda online para ecommerce", category: "Ecommerce", description: "Plataforma de venta online con gestión de stock.", image: "https://picsum.photos/seed/shop1/600/400" },
  { id: 4, title: "Página web a medida", category: "Medida", description: "Desarrollo personalizado con funcionalidades específicas.", image: "https://picsum.photos/seed/custom1/600/400" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-bg-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="max-w-2xl">
            <Reveal width="100%">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-display">
                Proyectos y casos de éxito
              </h2>
              <p className="text-slate-400">
                Algunos ejemplos de páginas web desarrolladas para empresas y profesionales de distintos sectores.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Updated grid for 4 items: 2 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 50}>
              {item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group relative overflow-hidden rounded-2xl glass-card border-white/5 transition-all hover:border-primary-500/50"
                >
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
                </a>
              ) : (
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
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;