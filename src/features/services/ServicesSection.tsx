import React, { ComponentType } from 'react';
import { motion } from 'motion/react';
import { servicesData } from '../../data/projects';
import MarbleShimmer from '../../components/MarbleShimmer';
import {
  LayoutGrid,
  Droplet,
  Waves,
  Building,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

const iconMap: Record<string, ComponentType<any>> = {
  LayoutGrid: LayoutGrid,
  Droplet: Droplet,
  Waves: Waves,
  Building: Building,
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
};

export default function ServicesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-selva text-crema overflow-hidden" id="servicios">
      {/* Subtle background graphics */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-onyx/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs md:text-sm uppercase tracking-widest text-gold font-semibold block">
            Servicios e Instalación Especializada
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold uppercase tracking-tight text-white">
            Nuestros Servicios
          </h2>
          <div className="h-[2px] w-20 bg-gold mx-auto" />
          <p className="text-crema/80 font-sans font-light text-base md:text-lg">
            Suministramos y colocamos mármoles importados y nacionales con estándares de tolera-fricción e impermeabilización perfectos para cada tipo de obra.
          </p>
        </div>

        {/* 3-Column Grid for the 6 Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicesData.map((service) => {
            const IconComponent = iconMap[service.iconName] || LayoutGrid;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative bg-[#233b31] border border-gold/15 p-8 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-onyx/30"
              >
                {/* Marble shimmer light effect inside card on hover */}
                <MarbleShimmer />

                <div className="space-y-4 z-10">
                  {/* Icon Container */}
                  <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center text-gold transition-colors duration-300 group-hover:bg-gold/20">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-crema font-bold transition-colors duration-300 group-hover:text-gold block">
                    {service.title}
                  </h3>

                  {/* Description: 2-line styling */}
                  <p className="text-crema/70 text-sm md:text-base font-light leading-relaxed font-sans line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Aesthetic golden corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-2 right-2 w-[8px] h-[8px] border-t border-r border-gold" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
