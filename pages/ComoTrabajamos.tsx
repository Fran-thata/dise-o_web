import SubPageLayout from '../components/SubPageLayout';
import { Reveal } from '../components/Reveal';

const ComoTrabajamos = () => {
  return (
    <SubPageLayout 
      title="Cómo trabajamos en Thiara"
      subtitle="Un método probado para que el desarrollo de tu web sea una experiencia fluida, transparente y exitosa."
      ctaText="Empezar mi proyecto"
      ctaHref="/#contacto"
    >
      <Reveal width="100%">
        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-bg-900 font-bold text-xl">1</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">Toma de contacto y estrategia</h3>
              <p className="text-slate-400">Hablamos sobre tu negocio, tus objetivos y tu competencia. Definimos qué necesita tu web para ser una herramienta de venta real.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-bg-900 font-bold text-xl">2</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">Propuesta y estructura</h3>
              <p className="text-slate-400">Diseñamos el mapa del sitio y la estructura de las páginas principales (wireframes) para asegurar que la navegación sea perfecta.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-bg-900 font-bold text-xl">3</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">Diseño y desarrollo</h3>
              <p className="text-slate-400">Damos vida a la web con tu identidad visual, optimizando cada elemento para que cargue rápido y se vea bien en cualquier dispositivo.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-bg-900 font-bold text-xl">4</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">Revisión y lanzamiento</h3>
              <p className="text-slate-400">Hacemos las pruebas finales, corregimos detalles y publicamos tu web. Te enseñamos a usarla para que seas totalmente independiente.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </SubPageLayout>
  );
};

export default ComoTrabajamos;
