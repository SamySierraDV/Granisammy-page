import React, { useEffect, useRef, KeyboardEvent } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Project } from '../../types';
import { X, MapPin, Ruler, CheckCircle2, ShieldCheck } from 'lucide-react';
import MarbleShimmer from '../../components/MarbleShimmer';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Handle opening and focus trap
  useEffect(() => {
    if (project) {
      // Record currently focused element to restore it later
      lastActiveElementRef.current = document.activeElement as HTMLElement;
      
      // Prevent body scrolling
      document.body.style.overflow = 'hidden';

      // Set focus to the close button or modal container after animation delay
      const timer = setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    } else {
      document.body.style.overflow = '';
      
      // Restore focus
      if (lastActiveElementRef.current) {
        lastActiveElementRef.current.focus();
      }
    }
  }, [project]);

  // Trap focus keydown handler
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      onClose();
      return;
    }

    if (e.key === 'Tab') {
      if (!modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        // Shift + Tab -> Wrap to last element
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        // Tab -> Wrap to first element
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          
          {/* Overlay mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-onyx/75 backdrop-blur-md cursor-pointer"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            onKeyDown={handleKeyDown}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-crema text-onyx w-full max-w-4xl h-[90svh] lg:h-auto lg:max-h-[85vh] rounded-sm shadow-2xl border border-gold/25 overflow-y-auto lg:overflow-hidden flex flex-col z-50"
          >
            
            {/* Top Close Bar (Floating) */}
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="absolute top-4 right-4 z-50 bg-onyx/40 text-crema hover:bg-gold hover:text-onyx p-2 rounded-full transition-colors duration-200 outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-crema cursor-pointer"
              aria-label="Cerrar modal de detalles"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Columns Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 h-full lg:max-h-[85vh]">
              
              {/* Left Column: Image Area */}
              <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:h-full bg-onyx">
                <img
                  src={project.imageUrl}
                  alt={`Fotografía en alta calidad de ${project.name}`}
                  className="w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
                
                {/* Brand watermark inside */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-onyx to-transparent p-6 text-crema font-serif">
                  <span className="text-[10px] tracking-widest text-gold font-sans block mb-1 uppercase">Barranquilla, Colombia</span>
                  <p className="text-sm italic font-light">"Granisammy Acabados — Obras que trascienden el tiempo"</p>
                </div>

                <MarbleShimmer />
              </div>

              {/* Right Column: Information details */}
              <div className="lg:col-span-6 p-6 md:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
                
                <div className="space-y-4">
                  {/* Category & Badge Row */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] tracking-widest bg-selva text-crema px-3 py-1 font-semibold uppercase rounded-xs">
                      {project.category}
                    </span>
                    {project.contractorBadge && (
                      <span className="text-[10px] tracking-widest bg-gold/15 text-gold border border-gold/30 px-3 py-1 font-semibold uppercase rounded-xs flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {project.contractorBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Location details */}
                  <div>
                    <h2 id="modal-title" className="text-2xl sm:text-3xl font-serif text-onyx font-bold uppercase tracking-tight leading-tight">
                      {project.name}
                    </h2>
                    <div className="flex items-center gap-1.5 text-stone-500 text-sm mt-1.5 font-light">
                      <MapPin className="w-4 h-4 text-gold stroke-[1.5]" />
                      <span>{project.city}, {project.locationDetails || 'Caribe'}</span>
                    </div>
                  </div>

                  <div className="border-t border-gold/15 pt-4" />

                  {/* Big Surface Area Metric box */}
                  <div className="flex items-center gap-3 bg-white/50 border border-gold/10 p-4 rounded-sm">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center text-gold rounded-xs">
                      <Ruler className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xl font-serif font-bold text-onyx">
                        {project.area.toLocaleString('es-CO')} m²
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-stone-500 font-sans font-light">
                        Superficie Total Ejecutada
                      </div>
                    </div>
                  </div>

                  {/* Complete details / descriptions */}
                  <div id="modal-description" className="space-y-3">
                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                      {project.description}
                    </p>
                    {project.details && (
                      <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light italic">
                        {project.details}
                      </p>
                    )}
                  </div>
                </div>

                {/* Scope list section */}
                <div className="space-y-3 pt-4 border-t border-gold/15">
                  <span className="text-xs uppercase tracking-widest text-gold font-semibold block">
                    Alcance de Obra Realizado:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-stone-700 text-xs sm:text-sm font-light">
                    {project.scope.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 stroke-[1.5]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Closing quote decoration */}
                <div className="pt-4 text-center">
                  <span className="text-[10px] font-mono tracking-widest text-stone-400 block uppercase">
                    Instalador certificado • Alianza Gramar
                  </span>
                </div>

              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
