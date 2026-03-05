import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  { 
    question: "¿Cuánto cuesta una página web profesional?", 
    answer: "Depende del tipo de web y de las funcionalidades. Te preparo un presupuesto a medida (desde landing pages sencillas hasta desarrollos más completos)." 
  },
  { 
    question: "¿Cuánto tiempo tarda el desarrollo?", 
    answer: "Depende del alcance, pero solemos trabajar por fases. Primero estructura y diseño, después desarrollo y optimización, y finalmente publicación." 
  },
  { 
    question: "¿Qué plataforma es mejor para mi proyecto?", 
    answer: "Se decide según objetivo: si necesitas autogestionar contenido, escalar o integrar funcionalidades. Te recomiendo la opción más práctica para tu caso." 
  },
  { 
    question: "¿La web estará optimizada para móvil y velocidad?", 
    answer: "Sí. Priorizamos móvil y rendimiento para que cargue rápido y sea fácil de usar." 
  },
  { 
    question: "¿Incluye SEO?", 
    answer: "Incluye base SEO: estructura, headings correctos, velocidad, indexación y configuración esencial. Si quieres posicionamiento continuo, lo trabajamos como servicio aparte." 
  },
  { 
    question: "¿Ofreces mantenimiento y soporte?", 
    answer: "Sí. Puedes quedarte con soporte puntual o contratar mantenimiento para mejoras, seguridad y actualizaciones." 
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bg-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center font-display">
          Preguntas frecuentes sobre diseño web
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden border border-white/5 transition-colors hover:border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-white font-display text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-primary-400 flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-slate-500 flex-shrink-0" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;