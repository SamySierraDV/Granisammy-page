import { motion, useReducedMotion } from 'motion/react';
import { workProcessSteps } from '../../data/projects';
import { ClipboardList, Layers, Hammer, Sparkles } from 'lucide-react';

const iconMap = [ClipboardList, Layers, Hammer, Sparkles];

export default function ProcesoTrabajoSection() {
  const shouldReduceMotion = useReducedMotion();

  // Animations definitions
  const lineVariants = {
    hidden: { scaleX: 0, scaleY: 0 },
    visible: {
      scaleX: 1,
      scaleY: 1,
      transition: { duration: 1.5, ease: 'easeInOut' }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customIndex: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : customIndex * 0.25,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-crema overflow-hidden" id="proceso">
      {/* Decorative separation line */}
      <div className="absolute top-0 left-12 right-12 h-[0.5px] bg-gold/20" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs md:text-sm uppercase tracking-widest text-gold font-semibold block">
            Nuestra Metodología de Trabajo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight text-onyx">
            Proceso de Trabajo
          </h2>
          <div className="h-[2px] w-20 bg-gold mx-auto" />
          <p className="text-stone-600 font-sans font-light text-base md:text-lg">
            Aseguramos la máxima calidad en acabados de mármol a través de un riguroso control metodológico paso a paso.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Connector Line - Desktop: Horizontal | Mobile: Vertical */}
          <div className="absolute top-[36px] bottom-10 left-1/2 md:left-9 lg:left-0 lg:right-0 lg:top-14 lg:bottom-auto w-[2px] lg:w-full lg:h-[2px] bg-gold/20 -translate-x-1/2 lg:translate-x-0" />
          
          {/* Growing Line on Viewport */}
          {!shouldReduceMotion && (
            <motion.div
              className="absolute top-[36px] bottom-10 left-1/2 md:left-9 lg:left-0 lg:right-0 lg:top-14 lg:bottom-auto w-[2px] lg:w-full lg:h-[2px] bg-gold origin-top lg:origin-left -translate-x-1/2 lg:translate-x-0"
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
          )}

          {/* Timeline Steps layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {workProcessSteps.map((step, idx) => {
              const IconComponent = iconMap[idx] || ClipboardList;
              return (
                <motion.div
                  key={step.step}
                  custom={idx}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  className="flex flex-col md:flex-row lg:flex-col items-center md:items-start lg:items-center text-center md:text-left lg:text-center gap-6"
                >
                  
                  {/* Step ID & Icon wrapper */}
                  <div className="relative shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 bg-white border-2 border-gold flex items-center justify-center text-gold shadow-md rounded-full transition-transform duration-300 hover:scale-110">
                      <IconComponent className="w-7 h-7 stroke-[1.5]" />
                    </div>
                    {/* Floating mini-step label */}
                    <span className="absolute -top-1.5 -right-1.5 bg-onyx text-crema font-mono font-bold text-[10px] w-6 h-6 flex items-center justify-center rounded-full border border-gold/40">
                      {step.step}
                    </span>
                  </div>

                  {/* Step content */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl text-onyx font-bold uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-stone-600 font-sans text-sm md:text-base font-light leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
