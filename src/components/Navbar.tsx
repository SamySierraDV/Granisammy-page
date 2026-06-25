import React, { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MarbleShimmer from './MarbleShimmer';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Quiénes Somos', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Aliados', href: '#aliados' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-80 transition-all duration-300 ${
          isScrolled
            ? 'bg-onyx/90 border-b border-gold/15 py-3 shadow-lg backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Brand Logo Header */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex flex-col items-start gap-0.5 group outline-none"
            aria-label="Granisammy Acabados S.A.S. - Volver al Inicio"
          >
            <span className="font-serif text-lg sm:text-xl lg:text-2xl text-crema font-bold tracking-widest uppercase group-hover:text-gold transition-colors">
              GRANISAMMY
            </span>
            <div className="flex items-center gap-1">
              <span className="text-[8px] sm:text-[9px] uppercase font-sans tracking-[0.2em] text-gold font-semibold">
                Acabados de Lujo
              </span>
              <span className="h-1 w-1 bg-gold rounded-full" />
              <span className="text-[7px] font-mono text-stone-400">S.A.S.</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Menú principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans font-semibold text-xs tracking-widest uppercase transition-colors duration-200 text-stone-300 hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            
            {/* Quick Consultation CTA */}
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className="relative group px-5 py-2.5 bg-gold hover:bg-gold/95 text-onyx font-sans font-bold text-[10px] tracking-widest uppercase transition-colors overflow-hidden"
              aria-label="Solicitar cotización directa"
            >
              <MarbleShimmer />
              Cotizar
            </a>
          </nav>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-crema hover:text-gold p-2 outline-none transition-colors duration-200"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-70 bg-onyx pt-24 pb-8 px-6 lg:hidden flex flex-col justify-between"
          >
            {/* Nav List */}
            <nav className="flex flex-col gap-6" aria-label="Menú móvil">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-serif text-2xl text-crema hover:text-gold border-b border-gold/10 pb-2 transition-colors duration-200 uppercase tracking-wider block"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Micro Details bottom footer inside drawer */}
            <div className="space-y-4 border-t border-gold/15 pt-6 text-center">
              <span className="text-[10px] tracking-widest text-gold font-mono uppercase block">
                Barranquilla • Colombia
              </span>
              <a
                href="tel:+573112681041"
                className="text-stone-400 font-sans tracking-wide text-xs block hover:text-gold"
              >
                Llamar: 311 268 1041
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
