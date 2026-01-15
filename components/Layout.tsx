import React, { useState } from 'react';
import { Menu, X, Globe, MessageCircle, FileText } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Kit Digital', href: '#kit-digital' },
  { label: 'FAQ', href: '#faq' },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-bg-900 text-white font-sans">
      
      {/* Main Header */}
      <header className="fixed top-0 w-full z-50 glass-card border-b-0 border-b-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center group cursor-pointer">
              <a href="#" className="text-2xl font-bold tracking-tighter text-white font-display">
                WEB<span className="text-primary-500">PRO</span>
                <span className="text-secondary-400 text-3xl leading-none">.</span>
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 hover:text-white hover:scale-105 transition-all duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-slate-400 hover:text-white transition-colors">
                <Globe size={20} />
              </button>
              <a
                href="#contacto"
                className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-2.5 rounded-full text-sm font-bold backdrop-blur-md transition-all hover:scale-105"
              >
                Auditoría Gratis
              </a>
              <a
                href="#contacto"
                className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all hover:scale-105"
              >
                Empezar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
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
          <div className="md:hidden glass-card border-t border-white/10 animate-fade-in absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-200 hover:bg-white/5 rounded-md"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                 <a
                  href="#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-white/10 text-white px-5 py-3 rounded-lg font-bold"
                >
                  Auditoría Gratis
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 text-slate-400 mb-20 md:mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div className="space-y-4">
             <a href="#" className="text-2xl font-bold tracking-tighter text-white font-display block">
                WEB<span className="text-primary-500">PRO</span>
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
             <h4 className="text-white font-bold mb-4 font-display">Social</h4>
             <div className="flex gap-4">
               {/* Socials placeholder */}
               <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary-500 transition-colors"></div>
               <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-primary-500 transition-colors"></div>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-xs opacity-50">
          © {new Date().getFullYear()} WebPro. All rights reserved.
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-bg-900/90 backdrop-blur-lg border-t border-white/10 z-50 flex gap-3">
        <a href="#contacto" className="flex-1 bg-white/10 border border-white/10 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all">
          <FileText size={18} /> Auditoría Gratis
        </a>
        <a href="https://wa.me/" className="flex-1 bg-primary-600 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-500 transition-all shadow-lg shadow-primary-500/20">
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Layout;