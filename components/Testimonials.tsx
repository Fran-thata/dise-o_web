import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elena Richardson",
    role: "CEO",
    company: "TechSolutions",
    content: "La inversión se recuperó en 2 meses. El rediseño nos posicionó como líderes en nuestro sector. Impecable.",
    rating: 5,
    image: "https://picsum.photos/seed/u1/100/100"
  },
  {
    id: 2,
    name: "David M.",
    role: "Fundador",
    company: "E-Shop Future",
    content: "Velocidad brutal. Pasamos de perder ventas por carga lenta a duplicar la conversión. WooCommerce experto.",
    rating: 5,
    image: "https://picsum.photos/seed/u2/100/100"
  },
  {
    id: 3,
    name: "Ana S.",
    role: "Marketing",
    company: "Consultoría Global",
    content: "Entendieron la psicología de nuestro cliente. No es solo una web bonita, es una máquina de ventas.",
    rating: 5,
    image: "https://picsum.photos/seed/u3/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-bg-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display">
            Opiniones reales. <span className="text-secondary-400">Resultados reales.</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="flex text-gold-400 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} className="drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />)}
            </div>
            <span className="font-semibold text-slate-300 ml-2">5.0 Estrellas en Google</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="glass-card p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12 rotate-180" />
              
              <div className="flex items-center mb-6">
                 <div className="p-[2px] rounded-full bg-gradient-to-r from-primary-500 to-secondary-400 mr-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-bg-900" />
                 </div>
                 <div>
                    <h4 className="font-bold text-white font-display">{t.name}</h4>
                    <p className="text-xs text-primary-400 uppercase tracking-wide font-bold">{t.company}</p>
                 </div>
              </div>

              <div className="flex text-gold-400 mb-4 gap-0.5">
                {[...Array(t.rating)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
              </div>
              
              <p className="text-slate-300 leading-relaxed font-light">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;