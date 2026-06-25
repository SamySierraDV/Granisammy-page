import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, useReducedMotion } from 'motion/react';
import { Phone, Mail, Instagram, MapPin, CheckCircle, Send } from 'lucide-react';
import MarbleShimmer from '../../components/MarbleShimmer';

// Validation Schema with Zod
const contactSchema = z.object({
  nombre: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres.' }),
  empresa: z.string().optional(),
  ciudad: z.string().min(2, { message: 'La ciudad es requerida.' }),
  telefono: z.string().regex(/^\+?\d{8,15}$/, {
    message: 'Ingrese un número telefónico válido (8 a 15 dígitos).',
  }),
  tipoProyecto: z.string().min(1, { message: 'Seleccione un tipo de proyecto.' }),
  mensaje: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

type ContactFormFields = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: '',
      empresa: '',
      ciudad: '',
      telefono: '',
      tipoProyecto: '',
      mensaje: '',
    },
  });

  const onSubmit = async (data: ContactFormFields) => {
    // Simulate API Route server-side call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submission successful:', data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-onyx text-crema overflow-hidden" id="contacto">
      
      {/* Decorative Gold Marble Veins in background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none stroke-gold"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <path d="M-10,200 Q200,300 400,250 T800,450 T1200,400 T1500,500" fill="none" strokeWidth="0.5" />
        <path d="M100,50 Q300,120 700,90 T1100,220 T1500,180" fill="none" strokeWidth="0.5" />
        <path d="M-50,600 Q250,550 600,680 T1000,580 T1450,650" fill="none" strokeWidth="0.5" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column Left: Contact Info details */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-xs md:text-sm uppercase tracking-widest text-gold font-semibold block">
                Herramienta de Ventas Directas
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight text-white">
                Cotiza Tu Proyecto
              </h2>
              <div className="h-[2px] w-20 bg-gold" />
              <p className="text-stone-400 font-sans font-light leading-relaxed text-sm sm:text-base">
                Inicia una consulta especializada B2B y asegura materiales selectos y obra impecable para tus proyectos hoteleros o residenciales premium.
              </p>
            </div>

            {/* Direct Information list */}
            <div className="space-y-6">
              
              {/* Phone item */}
              <a
                href="tel:+573112681041"
                className="flex items-center gap-5 p-4 bg-white/5 border border-gold/10 hover:border-gold/30 rounded-xs transition-colors group"
                aria-label="Llamar a Granisammy Acabados"
              >
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block">Teléfono / WhatsApp</span>
                  <span className="font-sans font-medium text-base text-crema block group-hover:text-gold transition-colors">
                    311 268 1041
                  </span>
                </div>
              </a>

              {/* Email item */}
              <a
                href="mailto:samuel.sierra.moreno@hotmail.com"
                className="flex items-center gap-5 p-4 bg-white/5 border border-gold/10 hover:border-gold/30 rounded-xs transition-colors group"
                aria-label="Enviar correo electrónico"
              >
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="break-all">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block">Correo Corporativo</span>
                  <span className="font-sans font-medium text-base text-crema block group-hover:text-gold transition-colors">
                    samuel.sierra.moreno@hotmail.com
                  </span>
                </div>
              </a>

              {/* Instagram item */}
              <a
                href="https://instagram.com/granisammy.acabados"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-4 bg-white/5 border border-gold/10 hover:border-gold/30 rounded-xs transition-colors group"
                aria-label="Ir a Instagram de la marca (abre en nueva pestaña)"
              >
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                  <Instagram className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block">Instagram</span>
                  <span className="font-sans font-medium text-base text-crema block group-hover:text-gold transition-colors">
                    @granisammy.acabados
                  </span>
                </div>
              </a>

              {/* Location site item */}
              <div
                className="flex items-center gap-5 p-4 bg-white/5 border border-gold/10 rounded-xs"
              >
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center text-gold">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block">Ubicación Administrativa</span>
                  <span className="font-sans font-medium text-base text-crema block">
                    Barranquilla, Colombia (Proyectos a nivel nacional)
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Column Right: Elegant Validated Form container */}
          <div className="lg:col-span-7 bg-white/5 border border-gold/15 p-6 sm:p-8 md:p-10 rounded-xs relative">
            <MarbleShimmer />

            {isSubmitted ? (
              // Success Screen View
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                id="success-message"
                className="text-center py-12 px-4 space-y-6 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-gold/10 text-gold border border-gold/30 rounded-full flex items-center justify-center mb-2 animate-bounce">
                  <CheckCircle className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                  ¡Solicitud Enviada!
                </h3>
                <p className="text-stone-300 font-sans font-light max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  Gracias por contactarnos. Hemos recibido los detalles de tu proyecto. Uno de nuestros ingenieros o asesores directos se comunicará contigo a la brevedad.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 bg-gold hover:bg-gold/90 text-onyx font-sans font-bold text-xs tracking-widest uppercase rounded-xs transition-colors cursor-pointer"
                >
                  Enviar otra cotización
                </button>
              </motion.div>
            ) : (
              // Contact Form Markup
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="contact-form">
                
                {/* Inputs Grid rows (2 cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name Input */}
                  <div className="space-y-1.5 flex flex-col">
                    <label id="label-nombre" htmlFor="nombre" className="text-xs uppercase tracking-wider text-gold font-semibold font-sans">
                      Nombre Completo *
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      aria-labelledby="label-nombre"
                      placeholder="Ej. Samuel Sierra"
                      className={`w-full bg-[#202020] border ${
                        errors.nombre ? 'border-red-500' : 'border-gold/20 focus:border-gold/60'
                      } px-4 py-3 text-sm text-crema outline-none transition-colors rounded-xs`}
                      {...register('nombre')}
                    />
                    {errors.nombre && (
                      <span className="text-[11px] text-red-500 font-sans" id="error-nombre">
                        {errors.nombre.message}
                      </span>
                    )}
                  </div>

                  {/* Company Input (Optional) */}
                  <div className="space-y-1.5 flex flex-col">
                    <label id="label-empresa" htmlFor="empresa" className="text-xs uppercase tracking-wider text-stone-400 font-medium font-sans">
                      Empresa (Opcional)
                    </label>
                    <input
                      id="empresa"
                      type="text"
                      aria-labelledby="label-empresa"
                      placeholder="Ej. Constructora Gramar S.A.S."
                      className="w-full bg-[#202020] border border-gold/20 focus:border-gold/60 px-4 py-3 text-sm text-crema outline-none transition-colors rounded-xs"
                      {...register('empresa')}
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* City Input */}
                  <div className="space-y-1.5 flex flex-col">
                    <label id="label-ciudad" htmlFor="ciudad" className="text-xs uppercase tracking-wider text-gold font-semibold font-sans">
                      Ciudad Proyecto *
                    </label>
                    <input
                      id="ciudad"
                      type="text"
                      aria-labelledby="label-ciudad"
                      placeholder="Ej. Barranquilla"
                      className={`w-full bg-[#202020] border ${
                        errors.ciudad ? 'border-red-500' : 'border-gold/20 focus:border-gold/60'
                      } px-4 py-3 text-sm text-crema outline-none transition-colors rounded-xs`}
                      {...register('ciudad')}
                    />
                    {errors.ciudad && (
                      <span className="text-[11px] text-red-500 font-sans" id="error-ciudad">
                        {errors.ciudad.message}
                      </span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5 flex flex-col">
                    <label id="label-telefono" htmlFor="telefono" className="text-xs uppercase tracking-wider text-gold font-semibold font-sans">
                      Teléfono de Contacto *
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      aria-labelledby="label-telefono"
                      placeholder="Ej. 3112681041"
                      className={`w-full bg-[#202020] border ${
                        errors.telefono ? 'border-red-500' : 'border-gold/20 focus:border-gold/60'
                      } px-4 py-3 text-sm text-crema outline-none transition-colors rounded-xs`}
                      {...register('telefono')}
                    />
                    {errors.telefono && (
                      <span className="text-[11px] text-red-500 font-sans" id="error-telefono">
                        {errors.telefono.message}
                      </span>
                    )}
                  </div>

                </div>

                {/* Project selector dropdown */}
                <div className="space-y-1.5 flex flex-col">
                  <label id="label-tipo" htmlFor="tipoProyecto" className="text-xs uppercase tracking-wider text-gold font-semibold font-sans">
                    Tipo de Proyecto *
                  </label>
                  <select
                    id="tipoProyecto"
                    aria-labelledby="label-tipo"
                    className={`w-full bg-[#202020] border ${
                      errors.tipoProyecto ? 'border-red-500' : 'border-gold/20 focus:border-gold/70'
                    } px-4 py-3 text-sm text-stone-300 outline-none transition-colors rounded-xs`}
                    {...register('tipoProyecto')}
                  >
                    <option value="">Seleccione una opción...</option>
                    <option value="Residencial Lujo">Residencial de Lujo</option>
                    <option value="Hotelero">Proyecto Hotelero o Resort</option>
                    <option value="Comercial">Acabados de Arquitectura Comercial</option>
                    <option value="Religioso">Edificación o Templo Religioso</option>
                    <option value="Brillado o Restauracion">Brillado y Pulido de Mármoles</option>
                  </select>
                  {errors.tipoProyecto && (
                    <span className="text-[11px] text-red-500 font-sans" id="error-tipoProyecto">
                      {errors.tipoProyecto.message}
                    </span>
                  )}
                </div>

                {/* Message TextArea */}
                <div className="space-y-1.5 flex flex-col">
                  <label id="label-mensaje" htmlFor="mensaje" className="text-xs uppercase tracking-wider text-gold font-semibold font-sans">
                    Detalles y Alcance de la Obra *
                  </label>
                  <textarea
                    id="mensaje"
                    aria-labelledby="label-mensaje"
                    rows={4}
                    placeholder="Cuéntanos sobre el metraje, el tipo de mármol que te interesa, o los plazos requeridos de entrega..."
                    className={`w-full bg-[#202020] border ${
                      errors.mensaje ? 'border-red-500' : 'border-gold/20 focus:border-gold/60'
                    } px-4 py-3 text-sm text-crema outline-none transition-colors rounded-xs resize-none`}
                    {...register('mensaje')}
                  />
                  {errors.mensaje && (
                    <span className="text-[11px] text-red-500 font-sans" id="error-mensaje">
                      {errors.mensaje.message}
                    </span>
                  )}
                </div>

                {/* Action submit button */}
                <button
                  id="btn-enviar-cotizacion"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 bg-gold hover:bg-gold/90 text-onyx font-sans font-semibold text-xs md:text-sm tracking-widest uppercase transition-colors shadow-lg shadow-gold/10 overflow-hidden flex items-center justify-center gap-2 cursor-pointer disabled:opacity-55"
                >
                  <MarbleShimmer />
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-onyx inline"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          document-path="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Procesando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Solicitar Cotización
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
