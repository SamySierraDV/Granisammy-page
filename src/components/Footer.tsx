import React, { MouseEvent } from 'react';
import { Instagram, Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#111111] text-crema relative py-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Top 0.5px Gold separator line */}
      <div className="absolute top-0 left-12 right-12 h-[0.5px] bg-gold/25" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Col 1: Logo & Slogan (4 columns) */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="font-serif text-2xl lg:text-3xl font-bold tracking-widest text-crema block uppercase">
                GRANISAMMY
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-gold font-semibold">
                  Acabados de Lujo
                </span>
                <span className="h-1.5 w-1.5 bg-gold rounded-full" />
                <span className="text-[9px] font-mono text-stone-400">S.A.S.</span>
              </div>
            </div>

            <p className="text-stone-450 font-serif italic text-base leading-relaxed max-w-sm">
              "Excelencia en mármol desde el primer detalle"
            </p>

            <div className="flex items-center gap-2 text-stone-500 text-xs font-light">
              <Shield className="w-4 h-4 text-gold/60" />
              <span>Instalador Autorizado de Gramar S.A.S.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-gold">
              Navegación
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { name: 'Inicio', href: '#hero' },
                { name: 'Quiénes Somos', href: '#nosotros' },
                { name: 'Servicios', href: '#servicios' },
                { name: 'Proyectos', href: '#proyectos' },
                { name: 'Aliados', href: '#aliados' },
                { name: 'Proceso', href: '#proceso' },
                { name: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-stone-400 text-sm hover:text-gold transition-colors font-light block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Contact Details (4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-gold">
              Contacto Directo
            </h4>
            <div className="flex flex-col gap-3.5 text-stone-450 text-sm font-light">
              
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0 stroke-[1.5]" />
                <a href="tel:+573112681041" className="hover:text-gold">
                  311 268 1041
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0 stroke-[1.5] break-all" />
                <a href="mailto:samuel.sierra.moreno@hotmail.com" className="hover:text-gold break-all">
                  samuel.sierra.moreno@hotmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-gold shrink-0 stroke-[1.5]" />
                <a
                  href="https://instagram.com/granisammy.acabados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  @granisammy.acabados
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 stroke-[1.5]" />
                <span>Barranquilla, Colombia (Nacional)</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom copyright declaration */}
        <div className="border-t border-stone-850 mt-14 pt-8 text-center text-[10px] sm:text-xs text-stone-500 font-sans tracking-wide">
          <p>© {currentYear} Granisammy Acabados S.A.S. Todos los derechos reservados.</p>
          <p className="mt-1 font-mono text-[9px] text-stone-605 uppercase">
            Barranquilla, Atlántico • Colombia
          </p>
        </div>

      </div>
    </footer>
  );
}
