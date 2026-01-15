import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  { question: "¿Cuánto cuesta una página web profesional?", answer: "No hay un precio único, pero la calidad tiene un coste. Webs corporativas parten de rangos profesionales, y tiendas online requieren mayor inversión. Lo importante: diseñamos para que recuperes la inversión." },
  { question: "¿Cuánto tiempo tardáis en entregarla?", answer: "Somos ágiles. Una landing page puede estar en 10 días. Una web corporativa completa suele tomar 3-4 semanas, siempre que tengamos los contenidos a tiempo." },
  { question: "¿Incluye mantenimiento y hosting?", answer: "Ofrecemos planes de mantenimiento opcionales para que duermas tranquilo: copias de seguridad, actualizaciones de seguridad y servidor de alta velocidad." },
  { question: "¿Es compatible con el Kit Digital?", answer: "Sí. Somos Agentes Digitalizadores. Si cumples los requisitos, podemos gestionar tu bono de hasta 2.000€ para cubrir el coste del proyecto." },
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