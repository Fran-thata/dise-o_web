import React from 'react';
import { Briefcase, HeartPulse, Activity, Home, Utensils, Sparkles, Hammer, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { Link } from 'react-router-dom';

const sectors = [
  {
    title: "Diseño web para abogados",
    desc: "Webs que transmiten confianza, muestran áreas de práctica y facilitan solicitar consulta.",
    icon: Briefcase,
    color: "text-blue-400",
    link: "/sector-abogados"
  },
  {
    title: "Diseño web para clínicas y dentistas",
    desc: "Tratamientos claros, llamadas a la acción y contacto rápido para captar pacientes.",
    icon: HeartPulse,
    color: "text-red-400",
    link: "/sector-clinicas"
  },
  {
    title: "Diseño web para fisioterapeutas",
    desc: "Servicios, bonos y solicitud de cita sin fricción (móvil primero).",
    icon: Activity,
    color: "text-emerald-400",
    link: "/sector-fisio"
  },
  {
    title: "Diseño web para inmobiliarias",
    desc: "Presentación de inmuebles + captación de propietarios y compradores.",
    icon: Home,
    color: "text-amber-400",
    link: "/sector-inmobiliaria"
  },
  {
    title: "Diseño web para restaurantes",
    desc: "Carta visible, reservas fáciles y toda la info importante en segundos.",
    icon: Utensils,
    color: "text-orange-400",
    link: "/sector-restaurantes"
  },
  {
    title: "Diseño web para centros de estética",
    desc: "Servicios + precios + “pedir cita” bien colocado para convertir visitas.",
    icon: Sparkles,
    color: "text-pink-400",
    link: "/sector-estetica"
  },
  {
    title: "Diseño web para empresas de reformas",
    desc: "Portfolio de trabajos, captación de presupuestos y enfoque en confianza.",
    icon: Hammer,
    color: "text-slate-400",
    link: "/sector-reformas"
  }
];

const SectorServices: React.FC = () => {
  return (
    <section className="py-24 bg-bg-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-display">
              Diseño web por sector
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Cada sector vende distinto. Por eso adaptamos estructura, mensajes y contenidos a tu cliente ideal.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <Reveal key={index} delay={index * 50}>
              <Link 
                to={sector.link}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group block"
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${sector.color} border border-white/5 group-hover:scale-110 transition-transform`}>
                  <sector.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{sector.title}</h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                  {sector.desc}
                </p>
                <div className="flex items-center text-xs font-bold text-primary-400 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Saber más <ArrowRight size={14} className="ml-2" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorServices;
