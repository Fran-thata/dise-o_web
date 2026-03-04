import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import SectorServices from './components/SectorServices';
import ValueProp from './components/ValueProp';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <SectorServices />
      <ValueProp />
      <Process />
      <Portfolio />
      <FAQ />
      <Contact />
    </Layout>
  );
}

export default App;