import SubPageLayout from '../components/SubPageLayout';
import Portfolio from '../components/Portfolio';
const Proyectos = () => {
  return (
    <SubPageLayout 
      title="Proyectos realizados"
      subtitle="Una selección de trabajos donde el diseño y la estrategia se unen para ayudar a negocios reales."
      ctaText="Quiero una web así"
      ctaHref="/#contacto"
    >
      <div className="-mt-20">
        <Portfolio />
      </div>
      <div className="mt-12 text-center text-slate-400 italic">
        * Por confidencialidad, algunos proyectos no se muestran públicamente. Si quieres ver ejemplos de un sector específico, contáctame.
      </div>
    </SubPageLayout>
  );
};
export default Proyectos;
