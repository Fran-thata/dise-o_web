import SubPageLayout from '../components/SubPageLayout';
import { Reveal } from '../components/Reveal';
const ServicioLanding = () => {
  return (
    <SubPageLayout 
      title="Diseño de Landing Pages"
      subtitle="Páginas de aterrizaje diseñadas con un único objetivo: convertir tus visitas en leads o ventas."
      ctaText="Crear mi landing"
      ctaHref="/#contacto"
    >
      <Reveal width="100%">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">Enfocadas a la conversión</h2>
          <p className="text-slate-400 mb-6">
            Una landing page no es una web convencional. Es una página sin distracciones, con una propuesta de valor clara y llamadas a la acción estratégicamente situadas para maximizar el retorno de tu inversión en publicidad (Google Ads, Facebook Ads, etc.).
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">Características clave</h2>
          <ul className="space-y-4 text-slate-400">
            <li className="flex gap-3">
              <span className="text-primary-500 font-bold">✓</span>
              <span><strong>Mensaje directo:</strong> Títulos impactantes que retienen al usuario.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-500 font-bold">✓</span>
              <span><strong>Sin fugas:</strong> Eliminamos menús innecesarios para que el usuario no se pierda.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-500 font-bold">✓</span>
              <span><strong>Pruebas sociales:</strong> Integración de testimonios y logos de confianza.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary-500 font-bold">✓</span>
              <span><strong>Formularios optimizados:</strong> Solo los campos necesarios para no frenar la conversión.</span>
            </li>
          </ul>
        </section>
      </Reveal>
    </SubPageLayout>
  );
};
export default ServicioLanding;
