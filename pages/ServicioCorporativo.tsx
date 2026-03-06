import SubPageLayout from '../components/SubPageLayout';
import { Reveal } from '../components/Reveal';
const ServicioCorporativo = () => {
  return (
    <SubPageLayout 
      title="Diseño web corporativo"
      subtitle="Creamos la imagen digital que tu empresa merece. Webs profesionales, elegantes y optimizadas para generar confianza."
      ctaText="Solicitar presupuesto"
      ctaHref="/#contacto"
    >
      <Reveal width="100%">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">¿Qué incluye nuestro diseño web corporativo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-400">
            <div className="flex gap-3">
              <span className="text-primary-500 font-bold">●</span>
              <span>Diseño 100% personalizado y alineado con tu identidad visual.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary-500 font-bold">●</span>
              <span>Estructura de navegación intuitiva para el usuario.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary-500 font-bold">●</span>
              <span>Optimización de velocidad de carga (WPO).</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary-500 font-bold">●</span>
              <span>Adaptación total a dispositivos móviles y tablets.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary-500 font-bold">●</span>
              <span>Configuración de seguridad y copias de seguridad.</span>
            </div>
            <div className="flex gap-3">
              <span className="text-primary-500 font-bold">●</span>
              <span>SEO básico para que Google empiece a encontrarte.</span>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">Ideal para...</h2>
          <p className="text-slate-400 mb-6">
            Empresas de servicios, consultorías, estudios de arquitectura, pymes y cualquier negocio que necesite una carta de presentación impecable en internet para captar nuevos clientes.
          </p>
        </section>
      </Reveal>
    </SubPageLayout>
  );
};
export default ServicioCorporativo;
