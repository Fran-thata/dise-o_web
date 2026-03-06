import SubPageLayout from '../components/SubPageLayout';
import { Reveal } from '../components/Reveal';

const ServicioMedida = () => {
  return (
    <SubPageLayout 
      title="Diseño web a medida"
      subtitle="Cuando tu proyecto necesita ir un paso más allá de las plantillas convencionales. Soluciones únicas para necesidades específicas."
      ctaText="Contar mi idea"
      ctaHref="/#contacto"
    >
      <Reveal width="100%">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">Desarrollo sin límites</h2>
          <p className="text-slate-400 mb-6">
            Si tienes una idea de negocio que requiere funcionalidades especiales, integraciones con APIs externas o una estructura de datos compleja, el diseño web a medida es la solución.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">¿Qué podemos construir?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-400">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">Directorios de empresas o servicios</div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">Plataformas de reservas avanzadas</div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">Intranets para clientes o empleados</div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">Configuradores de productos</div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">Integraciones con CRMs o ERPs</div>
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">Webs multi-idioma complejas</div>
          </div>
        </section>
      </Reveal>
    </SubPageLayout>
  );
};

export default ServicioMedida;
