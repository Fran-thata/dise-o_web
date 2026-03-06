import SubPageLayout from '../components/SubPageLayout';
import { Reveal } from '../components/Reveal';
const PorQueElegirme = () => {
  return (
    <SubPageLayout 
      title="Por qué elegirme para tu proyecto web"
      subtitle="Experiencia, compromiso y un método de trabajo diseñado para que tu inversión retorne lo antes posible."
      ctaText="Ver servicios"
      ctaHref="/#servicios"
    >
      <Reveal width="100%">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3 font-display">Diseño con intención</h3>
            <p className="text-slate-400">No diseño por decorar. Cada botón, imagen y texto está colocado para guiar al usuario hacia la acción que nos interesa.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3 font-display">Optimización real</h3>
            <p className="text-slate-400">Webs que cargan en menos de 2 segundos, totalmente adaptables a móviles y preparadas para el posicionamiento en buscadores.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3 font-display">Soporte post-lanzamiento</h3>
            <p className="text-slate-400">No desaparezco tras entregar la web. Te acompaño en las primeras semanas y ofrezco planes de mantenimiento para que no te preocupes de nada.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-3 font-display">Transparencia total</h3>
            <p className="text-slate-400">Presupuestos cerrados, plazos de entrega realistas y comunicación constante durante todo el proceso de creación.</p>
          </div>
        </div>
      </Reveal>
    </SubPageLayout>
  );
};
export default PorQueElegirme;
