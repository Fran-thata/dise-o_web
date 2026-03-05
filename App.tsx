import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import QuienSoy from './pages/QuienSoy';
import PorQueElegirme from './pages/PorQueElegirme';
import Garantia from './pages/Garantia';
import ServicioCorporativo from './pages/ServicioCorporativo';
import ServicioLanding from './pages/ServicioLanding';
import ServicioMedida from './pages/ServicioMedida';
import SectorAbogados from './pages/SectorAbogados';
import SectorClinicas from './pages/SectorClinicas';
import SectorFisio from './pages/SectorFisio';
import SectorInmobiliaria from './pages/SectorInmobiliaria';
import SectorRestaurantes from './pages/SectorRestaurantes';
import SectorEstetica from './pages/SectorEstetica';
import SectorReformas from './pages/SectorReformas';
import ComoTrabajamos from './pages/ComoTrabajamos';
import Proyectos from './pages/Proyectos';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quien-soy" element={<QuienSoy />} />
          <Route path="/por-que-elegirme" element={<PorQueElegirme />} />
          <Route path="/garantia" element={<Garantia />} />
          <Route path="/servicio-corporativo" element={<ServicioCorporativo />} />
          <Route path="/servicio-landing" element={<ServicioLanding />} />
          <Route path="/servicio-medida" element={<ServicioMedida />} />
          <Route path="/sector-abogados" element={<SectorAbogados />} />
          <Route path="/sector-clinicas" element={<SectorClinicas />} />
          <Route path="/sector-fisio" element={<SectorFisio />} />
          <Route path="/sector-inmobiliaria" element={<SectorInmobiliaria />} />
          <Route path="/sector-restaurantes" element={<SectorRestaurantes />} />
          <Route path="/sector-estetica" element={<SectorEstetica />} />
          <Route path="/sector-reformas" element={<SectorReformas />} />
          <Route path="/como-trabajamos" element={<ComoTrabajamos />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;