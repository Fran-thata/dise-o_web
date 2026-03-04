import React from 'react';
import { Briefcase, HeartPulse, Activity, Home, Utensils, Sparkles, Hammer, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

const sectors = [
  {
    title: "Diseño web para abogados",
    desc: "Páginas web para abogados orientadas a generar consultas, transmitir confianza y mejorar el posicionamiento online.",
    icon: Briefcase,
    color: "text-blue-400"
  },
  {
    title: "Diseño web para clínicas y dentistas",
    desc: "Diseño web para clínicas y dentistas enfocado en captar pacientes y facilitar solicitudes de información o presupuesto.",
    icon: HeartPulse,
    color: "text-red-400"
  },
  {
    title: "Diseño web para fisioterapeutas",
    desc: "Webs profesionales para fisioterapeutas que buscan mejorar su visibilidad y captar nuevos pacientes.",
    icon: Activity,
    color: "text-emerald-400"
  },
  {
    title: "Diseño web para inmobiliarias",
    desc: "Páginas web para inmobiliarias orientadas a mostrar propiedades, generar contactos y aumentar conversiones.",
    icon: Home,
    color: "text-amber-400"
  },
  {
    title: "Diseño web para restaurantes",
    desc: "Diseño web para restaurantes con catálogo online, información clara y herramientas para aumentar reservas o pedidos.",
    icon: Utensils,
    color: "text-orange-400"
  },
  {
    title: "Diseño web para centros de estética",
    desc: "Webs para centros de estética enfocadas en mostrar servicios, precios y facilitar solicitudes de cita.",
    icon: Sparkles,
    color: "text-pink-400"
  },
  {
    title: "Diseño web para empresas de reformas",
    desc: "Páginas web para empresas de reformas orientadas a captar solicitudes de presupuesto y mostrar proyectos realizados.",
    icon: Hammer,
    color: "text-slate-400"
  }
];

const SectorServices: React.FC = () => {
  return (
    <section className="py-24 bg-bg-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
              Diseño web especializado por sector
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Cada sector tiene necesidades diferentes. Por eso desarrollamos páginas web adaptadas a cada tipo de negocio para mejorar la captación de clientes.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <Reveal key={index} delay={index * 50}>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${sector.color} border border-white/5 group-hover:scale-110 transition-transform`}>
                  <sector.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{sector.title}</h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {sector.desc}
                </p>
                <div className="flex items-center text-xs font-bold text-primary-400 uppercase tracking-widest group-hover:translate-x-2 transition-transform cursor-pointer">
                  Saber más <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorServices;
