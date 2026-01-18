import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-bg-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Info Block */}
          <div>
            <Reveal>
              <span className="text-primary-400 font-bold tracking-widest uppercase text-xs font-display">Contacto</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-8 font-display">
                Pide presupuesto
              </h2>
              <p className="text-slate-300 text-lg mb-12 leading-relaxed">
                ¿Listo para subir de nivel? Cuéntanos tu proyecto. Te responderemos con una propuesta clara, sin tecnicismos y enfocada en rentabilidad.
              </p>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={100}>
                <a href="tel:+34900000000" className="flex items-center group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-12 h-12 rounded-full bg-bg-800 border border-white/10 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <Phone className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg font-display">Llamada directa</h4>
                    <p className="text-slate-400 group-hover:text-white transition-colors">Habla con un experto ahora</p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={200}>
                <a href="mailto:hola@webpro.com" className="flex items-center group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="w-12 h-12 rounded-full bg-bg-800 border border-white/10 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <Mail className="text-secondary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg font-display">Email</h4>
                    <p className="text-slate-400 group-hover:text-white transition-colors">hola@webpro.com</p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={300}>
                 <div className="flex items-center p-4 rounded-xl opacity-60">
                  <div className="w-12 h-12 rounded-full bg-bg-800 border border-white/10 flex items-center justify-center mr-6">
                    <MapPin className="text-slate-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm font-display">Oficinas</h4>
                    <p className="text-xs text-slate-500">Servicio Global • Base en España</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form Block */}
          <Reveal delay={200}>
            <div className="glass-card rounded-3xl p-8 md:p-10 shadow-2xl relative">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">Tu proyecto empieza aquí</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Nombre</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-bg-800 border border-white/10 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder-slate-600" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Teléfono</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg bg-bg-800 border border-white/10 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder-slate-600" placeholder="+34..." required />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg bg-bg-800 border border-white/10 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder-slate-600" placeholder="tu@email.com" required />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">Cuéntanos sobre el proyecto</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-bg-800 border border-white/10 text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all placeholder-slate-600" placeholder="Tipo de web, objetivos, referencias..."></textarea>
                </div>

                <div className="flex items-start">
                  <input id="privacy" type="checkbox" className="h-4 w-4 bg-bg-800 border-white/20 rounded text-primary-600 focus:ring-primary-500 mt-1" required />
                  <label htmlFor="privacy" className="ml-2 block text-xs text-slate-400">
                    Acepto la política de privacidad.
                  </label>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(124,58,237,0.3)] transition-all hover:-translate-y-1 flex items-center justify-center">
                  Enviar Solicitud <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;