import React from 'react';
import SubPageLayout from '../components/SubPageLayout';
import { Reveal } from '../components/Reveal';

interface SectorPageProps {
  sector: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const SectorPage: React.FC<SectorPageProps> = ({ sector, title, subtitle, description, features }) => {
  return (
    <SubPageLayout 
      title={title}
      subtitle={subtitle}
      ctaText={`Presupuesto para ${sector}`}
      ctaHref="/#contacto"
    >
      <Reveal width="100%">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">Diseño web especializado</h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            {description}
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4 font-display">¿Qué incluimos?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-400">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="text-primary-500 font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </SubPageLayout>
  );
};

export default SectorPage;
