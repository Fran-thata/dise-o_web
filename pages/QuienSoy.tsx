import SubPageLayout from '../components/SubPageLayout';
import { Reveal } from '../components/Reveal';

const QuienSoy = () => {
  return (
    <SubPageLayout 
      title="Diseño web con enfoque estratégico"
      subtitle="No solo hago webs. Construyo herramientas de venta para negocios que quieren destacar en el entorno digital."
      ctaText="Pedir presupuesto"
      ctaHref="/#contacto"
    >
      <Reveal width="100%">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">Mi filosofía de trabajo</h2>
          <p className="text-slate-400 mb-6">
            Me llamo Thiara y ayudo a empresas y profesionales a mejorar su presencia online a través de un diseño web que no solo es estético, sino que está pensado para convertir visitas en clientes.
          </p>
          <p className="text-slate-400 mb-6">
            En un mercado saturado, tener una web "bonita" ya no es suficiente. Necesitas una estructura clara, una velocidad de carga óptima y un mensaje que conecte con tu cliente ideal desde el primer segundo.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">¿Por qué trabajar conmigo?</h2>
          <ul className="space-y-4 text-slate-400">
            <li className="flex gap-3">
              <span className="text-primary-500 font-bold">✓</span>
              <span><strong>Trato directo:</strong> Sin intermediarios. Hablas directamente con la persona que diseña y desarrolla tu proyecto.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-500 font-bold">✓</span>
              <span><strong>Enfoque en resultados:</strong> Cada decisión de diseño tiene un objetivo: captar leads, vender productos o generar confianza.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-500 font-bold">✓</span>
              <span><strong>Tecnología moderna:</strong> Utilizo herramientas que garantizan webs rápidas, seguras y fáciles de gestionar por ti mismo.</span>
            </li>
          </ul>
        </section>
      </Reveal>
    </SubPageLayout>
  );
};

export default QuienSoy;
