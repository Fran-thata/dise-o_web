import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  { 
    question: "¿Cuánto cuesta una página web profesional?", 
    answer: "No hay un precio único, pero la calidad tiene un coste. Webs corporativas parten de rangos profesionales, y tiendas online requieren mayor inversión. Lo importante: diseñamos para que recuperes la inversión." 
  },
  { 
    question: "¿Cuánto tiempo tardáis en entregarla?", 
    answer: "En 2 días. Somos ágiles. Tu landing page puede estar lista y publicada en 48 horas una vez tengamos el contenido." 
  },
  { 
    question: "¿Incluye dominio y hosting?", 
    answer: "Podemos gestionarlo o trabajar con tu proveedor. Se cotiza aparte según necesidades." 
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-bg-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center font-display">
          Preguntas frecuentes
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