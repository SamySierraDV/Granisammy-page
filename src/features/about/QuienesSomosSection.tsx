import { motion } from 'motion/react';
import MetricsCounter from '../../components/MetricsCounter';
import { metricsData } from '../../data/projects';
import MarbleShimmer from '../../components/MarbleShimmer';
import aboutVisual from '../../../assets/images/portomarine.webp';

export default function QuienesSomosSection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-crema overflow-hidden" id="nosotros">
      {/* Decorative separating line */}
      <div className="absolute top-0 left-12 right-12 h-[0.5px] bg-gold/20" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column Left: High-end copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs md:text-sm uppercase tracking-widest text-gold font-semibold block">
                Nuestra Historia & Compromiso
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-onyx font-bold uppercase tracking-tight">
                Quiénes Somos
              </h2>
              <div className="h-[2px] w-20 bg-gold" />
            </div>

            <p className="text-stone-700 font-sans text-lg md:text-xl leading-relaxed font-light">
              Somos una empresa colombiana especializada en acabados en mármol de alta calidad para proyectos
              hoteleros, comerciales, religiosos y residenciales. Combinamos precisión artesanal, materiales nobles
              y visión estética para entregar espacios de distinción excepcional.
            </p>

            <p className="text-stone-600 font-sans text-base leading-relaxed font-light">
              A lo largo de más de una década, hemos forjado relaciones imperecederas con las constructoras y
              desarrolladoras más exigentes del país. Nuestra sede administrativa centralizada en Barranquilla nos
              permite desplegar operarios calificados en todo el territorio colombiano con agilidad logística,
              garantizando acabados pulidos que trascienden el tiempo.
            </p>
          </motion.div>

          {/* Column Right: Elegant Raw Slab / Finished space visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative group overflow-hidden bg-onyx cursor-default aspect-[4/3] rounded-sm shadow-2xl border border-gold/10">
              <img
                src={aboutVisual}
                alt="Detalle de mármol de lujo de la cantera instalado"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/50 to-transparent pointer-events-none" />
              {/* Marble Shimmer Overlay */}
              <MarbleShimmer />
              
              {/* Artistic floating caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-crema/90 backdrop-blur-md px-4 py-3 border-l-2 border-gold flex justify-between items-center">
                <span className="text-xs tracking-wider font-semibold text-onyx uppercase">Acabado pulido espejo</span>
                <span className="text-[10px] font-mono text-gold-700 uppercase">Barranquilla</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dynamic numerical counters below */}
        <div className="mt-20 pt-12 border-t border-gold/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MetricsCounter
              value={metricsData[0].value}
              suffix=" m²"
              prefix="+"
              label={metricsData[0].label}
            />
            <MetricsCounter
              value={metricsData[1].value}
              suffix=" Años"
              prefix="+"
              label={metricsData[1].label}
            />
            <MetricsCounter
              value={metricsData[2].value}
              suffix=" Proyectos"
              prefix="+"
              label={metricsData[2].label}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
