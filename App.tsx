import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import ValueProp from './components/ValueProp';
import Process from './components/Process';
import TechBenefits from './components/TechBenefits';
import Portfolio from './components/Portfolio';
import KitDigital from './components/KitDigital';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Testimonials />
      <Services />
      <ValueProp />
      <Process />
      <TechBenefits />
      <Portfolio />
      <KitDigital />
      <FAQ />
      <Contact />
    </Layout>
  );
}

export default App;