import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ImpactQuote from './components/ImpactQuote';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import ValueProp from './components/ValueProp';
import Process from './components/Process';
import TechBenefits from './components/TechBenefits';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <ImpactQuote />
      <Services />
      <ValueProp />
      <Process />
      <TechBenefits />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </Layout>
  );
}

export default App;