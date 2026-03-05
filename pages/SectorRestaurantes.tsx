import SectorPage from '../components/SectorPage';

const SectorRestaurantes = () => (
  <SectorPage 
    sector="Restaurantes"
    title="Diseño web para Restaurantes"
    subtitle="Abre el apetito de tus clientes antes de que lleguen al local. Carta online y reservas fáciles."
    description="Tu restaurante merece una web que sea tan buena como tu comida. Facilitamos que los clientes vean tu carta, conozcan tu ambiente y reserven mesa en pocos clics desde su móvil."
    features={[
      "Carta digital interactiva",
      "Gestión de reservas online",
      "Galería de platos y local",
      "Integración con redes sociales",
      "Información de horarios y ubicación",
      "Optimización para búsquedas locales"
    ]}
  />
);

export default SectorRestaurantes;
