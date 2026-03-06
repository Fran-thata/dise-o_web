import SubPageLayout from '../components/SubPageLayout';
import { Reveal } from '../components/Reveal';
const Garantia = () => {
  return (
    <SubPageLayout 
      title="Garantía y soporte postventa"
      subtitle="Tu tranquilidad es mi prioridad. Mi compromiso no termina con la entrega de las claves de tu nueva web."
      ctaText="Contactar ahora"
      ctaHref="/#contacto"
    >
      <Reveal width="100%">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">Garantía de funcionamiento</h2>
          <p className="text-slate-400 mb-6">
            Todas mis webs incluyen una garantía de 3 meses ante cualquier error técnico o fallo en el desarrollo. Si algo no funciona como debería, lo soluciono sin coste adicional.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">Soporte y formación</h2>
          <p className="text-slate-400 mb-6">
            Al finalizar el proyecto, te entrego una guía personalizada (o sesión por videollamada) para que aprendas a gestionar los contenidos de tu web: cambiar textos, subir imágenes o publicar en el blog.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">Mantenimiento técnico</h2>
          <p className="text-slate-400 mb-6">
            Si prefieres olvidarte de las actualizaciones, copias de seguridad y seguridad técnica, ofrezco planes de mantenimiento mensual para que tu web esté siempre al día y protegida.
          </p>
        </section>
      </Reveal>
    </SubPageLayout>
  );
};
export default Garantia;
