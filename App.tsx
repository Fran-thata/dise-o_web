import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Proyectos from './pages/Proyectos';
import ContactoPage from './pages/ContactoPage';
import ServicioCorporativo from './pages/ServicioCorporativo';
import ServicioLanding from './pages/ServicioLanding';
import ServicioMedida from './pages/ServicioMedida';
import SectorReformas from './pages/SectorReformas';
import QuienSoy from './pages/QuienSoy';
import PorQueElegirme from './pages/PorQueElegirme';
import Garantia from './pages/Garantia';
import ComoTrabajamos from './pages/ComoTrabajamos';
import SectorAbogados from './pages/SectorAbogados';
import SectorClinicas from './pages/SectorClinicas';
import SectorEstetica from './pages/SectorEstetica';
import SectorFisio from './pages/SectorFisio';
import SectorInmobiliaria from './pages/SectorInmobiliaria';
import SectorRestaurantes from './pages/SectorRestaurantes';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/servicio-corporativo" element={<ServicioCorporativo />} />
        <Route path="/servicio-landing" element={<ServicioLanding />} />
        <Route path="/servicio-medida" element={<ServicioMedida />} />
        <Route path="/sector-reformas" element={<SectorReformas />} />
        <Route path="/quien-soy" element={<QuienSoy />} />
        <Route path="/por-que-elegirme" element={<PorQueElegirme />} />
        <Route path="/garantia" element={<Garantia />} />
        <Route path="/como-trabajamos" element={<ComoTrabajamos />} />
        <Route path="/sector-abogados" element={<SectorAbogados />} />
        <Route path="/sector-clinicas" element={<SectorClinicas />} />
        <Route path="/sector-estetica" element={<SectorEstetica />} />
        <Route path="/sector-fisio" element={<SectorFisio />} />
        <Route path="/sector-inmobiliaria" element={<SectorInmobiliaria />} />
        <Route path="/sector-restaurantes" element={<SectorRestaurantes />} />
      </Routes>
    </Layout>
  );
}

export default App;