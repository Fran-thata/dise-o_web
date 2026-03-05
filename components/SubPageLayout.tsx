import React from 'react';
import { Reveal } from './Reveal';

interface SubPageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

const SubPageLayout: React.FC<SubPageLayoutProps> = ({ title, subtitle, children, ctaText, ctaHref }) => {
  return (
    <div className="pt-32 pb-24 bg-bg-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal width="100%">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-display mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              {subtitle}
            </p>
          )}
        </Reveal>

        <div className="prose prose-invert prose-slate max-w-none">
          {children}
        </div>

        {ctaText && ctaHref && (
          <div className="mt-16 pt-12 border-t border-white/10">
            <Reveal width="100%">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-center">
                <h3 className="text-2xl font-bold text-white mb-4 font-display">¿Hablamos de tu proyecto?</h3>
                <p className="text-slate-400 mb-8">Cuéntame qué necesitas y te daré la mejor solución para tu negocio.</p>
                <a
                  href={ctaHref}
                  className="inline-block bg-white text-bg-900 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  {ctaText}
                </a>
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubPageLayout;
