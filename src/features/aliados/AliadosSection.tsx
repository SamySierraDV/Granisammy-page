import { motion } from 'motion/react';
import { ArrowUpRight, ShieldCheck, HelpCircle, CheckCircle } from 'lucide-react';
import MarbleShimmer from '../../components/MarbleShimmer';

export default function AliadosSection() {
  const sharedProjects = [
    { name: 'Hotel San Francisco', type: 'Cartagena' },
    { name: 'Centro Comercial Arkadia', type: 'Medellín' },
    { name: 'Templo Mormón', type: 'Barranquilla' },
    { name: 'Familia Condominios Morros', type: 'Serena del Mar' },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-selva text-crema overflow-hidden" id="aliados">
      {/* Decorative Gold top divider */}
      <div className="absolute top-0 left-12 right-12 h-[0.5px] bg-gold/30" />

      <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
        
        {/* Partnership Label */}
        <div className="space-y-4">
          <span className="text-xs md:text-sm uppercase tracking-widest text-gold font-semibold block">
            Sinergia y Respeto de Calidad
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight text-white">
            Aliado Estratégico
          </h2>
          <div className="h-[2px] w-20 bg-gold mx-auto" />
        </div>

        {/* Dynamic Stylized Gramar Logo (Since no image assets exist) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block bg-[#1f352c] border border-gold/20 px-10 py-8 rounded-sm shadow-xl"
        >
          <MarbleShimmer />
          <div className="flex flex-col items-center">
            <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gold font-bold tracking-widest uppercase">
              GRAMAR®
            </span>
            <span className="text-[10px] uppercase font-sans tracking-[0.4em] text-white/60 mt-1 block">
              Granitos y Mármoles S.A.S.
            </span>
          </div>
        </motion.div>

        {/* Partnership Description copy */}
        <p className="text-lg md:text-xl font-sans font-light leading-relaxed max-w-3xl mx-auto text-crema/90">
          <strong>Granisammy</strong> es instalador certificado de <strong>Gramar — Granitos y Mármoles S.A.S.</strong>,
          referente nacional en importaciones de piedras naturales y tecnológicas de primera clase. Una alianza
          que garantiza el suministro del mejor material del mercado mundial, instalado con la precisión técnica y
          maestría artesanal que solo da la experiencia de nuestros operarios.
        </p>

        {/* Shared Projects List Grid */}
        <div className="space-y-6 max-w-2xl mx-auto pt-6">
          <span className="text-[11px] font-mono tracking-widest text-gold uppercase block">
            Obras emblemáticas ejecutadas en conjunto:
          </span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sharedProjects.map((project, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-[#1e342b]/65 border border-gold/15 p-4 rounded-xs text-left hover:border-gold/30 transition-colors duration-200"
              >
                <CheckCircle className="w-5 h-5 text-gold shrink-0 stroke-[1.5]" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-white">{project.name}</h4>
                  <span className="text-[10px] font-sans font-light text-crema/60 block uppercase tracking-wider">
                    {project.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* External outbound link */}
        <div className="pt-8 block">
          <a
            href="https://www.gramar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 group text-gold font-sans font-semibold text-xs md:text-sm tracking-widest uppercase hover:text-white transition-colors duration-300 pointer-events-auto"
            aria-label="Ir a la web de Gramar (abre en ventana nueva)"
          >
            <span>Conoce más en www.gramar.com</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
