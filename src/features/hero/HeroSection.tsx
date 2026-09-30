import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import TextReveal from '../../components/TextReveal';
import MarbleShimmer from '../../components/MarbleShimmer';
import heroBackground from '../../../assets/images/fondo.webp';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll tracking for parallax
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 400]);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-crema px-4 py-20"
      id="hero"
    >
      {/* Parallax Background */}
      <motion.img
        src={heroBackground}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        style={{
          y: shouldReduceMotion ? 0 : yParallax,
          willChange: 'transform',
        }}
      />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(245,240,232,0.45),rgba(245,240,232,0.95))]" />

      {/* Decorative Gold Border Line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[0.5px] bg-gold/50 z-20" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Small Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-4 text-xs md:text-sm tracking-[0.25em] text-selva uppercase font-semibold"
        >
          Barranquilla, Colombia • Proyectos a nivel nacional
        </motion.div>

        {/* Brand Headline with TextReveal */}
        <h1 className="sr-only">GRANISAMMY ACABADOS S.A.S.</h1>
        <div className="mb-6 leading-none">
          <TextReveal
            text="GRANISAMMY ACABADOS S.A.S."
            as="h1"
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-onyx font-semibold uppercase tracking-tight"
          />
        </div>

        {/* Slogan */}
        <p className="sr-only">Excelencia en mármol desde el primer detalle</p>
        <div className="mb-10 max-w-2xl">
          <TextReveal
            text="Excelencia en mármol desde el primer detalle"
            as="p"
            delay={0.4}
            className="text-stone-600 text-lg sm:text-xl md:text-2xl font-serif italic"
          />
        </div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <button
            id="cta-ver-proyectos"
            onClick={() => handleScrollTo('proyectos')}
            className="group relative px-8 py-4 bg-gold hover:bg-gold/90 text-onyx font-sans font-semibold text-sm tracking-widest uppercase transition-colors shadow-lg shadow-gold/15 overflow-hidden w-full sm:w-auto cursor-pointer"
          >
            <MarbleShimmer />
            Ver Proyectos
          </button>

          <button
            id="cta-solicitar-cotizacion"
            onClick={() => handleScrollTo('contacto')}
            className="px-8 py-4 bg-transparent border border-gold hover:border-gold/60 text-gold hover:text-gold/95 font-sans font-semibold text-sm tracking-widest uppercase transition-all duration-300 backdrop-blur-xs w-full sm:w-auto cursor-pointer"
          >
            Solicitar Cotización
          </button>
        </motion.div>

        {/* Floating Badge (Animated) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.2,
            type: 'spring',
            stiffness: 100,
          }}
          className="group relative flex items-center gap-3 bg-white/70 border border-gold/30 hover:border-gold/60 px-6 py-4 backdrop-blur-md rounded-full shadow-md z-20 cursor-default"
        >
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <MarbleShimmer />
          </div>
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
          </span>
          <span className="text-xs tracking-wider uppercase text-selva font-semibold">
            Más de <strong className="text-gold">72.000 m²</strong> ejecutados
          </span>
        </motion.div>
      </div>

      {/* Ambient glowing gold lights */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-selva/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
