import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Kit Digital', href: '#kit-digital' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-bg-900 text-white font-sans overflow-x-hidden">
      
      {/* Main Header - Changed to absolute (scrolls away), transparent background */}
      <header className="absolute top-0 w-full z-50 transition-all duration-300 bg-transparent border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo [MARCA] - Updated to Thiara */}
            <div className="flex-shrink-0 flex items-center group cursor-pointer">
              <a href="#" className="flex items-center gap-2">
                {/* Logo icon T */}
                <div className="w-8 h-8 rounded-full bg-white text-bg-900 flex items-center justify-center font-bold font-display text-lg">T</div>
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  Thiara<span className="text-primary-500">.</span>
                </span>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors py-2 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Link secundario */}
              <a
                href="#portfolio"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Ver portfolio
              </a>
              {/* Botón CTA (pill) */}
              <a
                href="#contacto"
                className="bg-white text-bg-900 hover:bg-slate-200 px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                Pedir presupuesto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-bg-900 border-t border-white/10 animate-fade-in absolute w-full h-screen overflow-y-auto z-50">
            <div className="px-4 pt-4 pb-20 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-4 text-lg font-medium text-slate-200 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-6 flex flex-col gap-4 px-4">
                 <a
                  href="#portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center text-slate-300 font-medium py-2"
                >
                  Ver portfolio
                </a>
                 <a
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-white text-bg-900 px-5 py-4 rounded-xl font-bold text-lg"
                >
                  Pedir presupuesto
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Removed pt-20 from main so hero background starts at very top under transparent header */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 text-slate-400 mb-20 md:mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div className="space-y-4">
             <a href="#" className="text-2xl font-bold tracking-tighter text-white font-display block">
                Thiara
              </a>
            <p className="leading-relaxed opacity-70">
              Transformamos negocios con diseño web estratégico y tecnología moderna.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 font-display">Servicios</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Diseño Web Corporativo</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">E-commerce</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Marketing Digital</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 font-display">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Cookies</a></li>
            </ul>
          </div>
          <div>
             <h4 className="text-white font-bold mb-4 font-display">Redes</h4>
             <div className="flex gap-4">
               {/* Socials placeholder */}
               <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary-500 transition-colors cursor-pointer"></div>
               <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary-500 transition-colors cursor-pointer"></div>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-xs opacity-50">
          © {new Date().getFullYear()} Thiara Diseño Web. Todos los derechos reservados.
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-bg-900/95 backdrop-blur-xl border-t border-white/10 z-50 flex gap-3">
        <a href="#contacto" className="flex-1 bg-white/10 border border-white/10 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all text-sm">
          Auditoría Gratis
        </a>
        <a href="https://wa.me/" className="flex-1 bg-primary-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-500 transition-all shadow-lg shadow-primary-500/20 text-sm">
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Layout;