import SubPageLayout from '../components/SubPageLayout';
import Contact from '../components/Contact';
const ContactoPage = () => {
  return (
    <SubPageLayout 
      title="Hablemos de tu próxima web"
      subtitle="¿Tienes un proyecto en mente? Cuéntame qué necesitas y te responderé en menos de 24 horas con una propuesta clara."
    >
      <div className="-mt-20">
        <Contact />
      </div>
    </SubPageLayout>
  );
};
export default ContactoPage;
