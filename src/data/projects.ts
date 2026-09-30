import { Project, ServiceItem, Metric } from '../types';
import arkadia from '../../assets/images/arkadia.webp';
import hotelSanFrancisco from '../../assets/images/hotel-sanFrancisco.webp';
import morroIo from '../../assets/images/morroIo.webp';
import morrosEco from '../../assets/images/morrosEco.webp';
import morrosKai from '../../assets/images/morrosKai.webp';
import morrosPark from '../../assets/images/morrosPark.webp';
import morrosZoe from '../../assets/images/morrosZoe.webp';
import portomarine from '../../assets/images/portomarine.webp';
import temploMormon from '../../assets/images/temploMormon.webp';

export const projectsData: Project[] = [
  {
    id: 'hotel-san-francisco',
    name: 'Hotel San Francisco',
    city: 'Cartagena',
    locationDetails: 'Getsemaní',
    area: 25000,
    category: 'HOTELERO',
    description: 'Acabados de pisos, baños y cocinas en mármol de alta gama para un proyecto hotelero de lujo de renombre internacional en el corazón histórico de Cartagena.',
    scope: ['Pisos', 'Baños', 'Cocinas', 'Zonas Comunes'],
    contractorBadge: 'Contratista Gramar',
    imageUrl: hotelSanFrancisco,
    details: 'Instalación ejecutada bajo los más altos estándares hoteleros. Se colocaron más de 25.000 m² de mármol seleccionado de primera calidad que definen la excelencia y calidez del proyecto.'
  },
  {
    id: 'cc-arkadia',
    name: 'C.C. Arkadia',
    city: 'Medellín',
    locationDetails: 'Medellín, Antioquia',
    area: 20000,
    category: 'COMERCIAL',
    description: 'Diseño arquitectónico de vanguardia con acabados en mármol para pisos y baños con composición tipo graderías de estadio, fusionando funcionalidad y estética premium.',
    scope: ['Pisos', 'Baños', 'Escaleras Graderías', 'Detalles Decorativos'],
    contractorBadge: 'Contratista Gramar',
    imageUrl: arkadia,
    details: 'Un hito comercial en Medellín con más de 20.000 m² en acabados. Su majestuoso diseño tipo graderías de estadio fusiona transiciones de tráfico pesado con la delicadeza del mármol pulido.'
  },
  {
    id: 'templo-mormon',
    name: 'Templo Mormón',
    city: 'Puerto Colombia',
    locationDetails: 'Barranquilla, Área Metropolitana',
    area: 7000,
    category: 'RELIGIOSO',
    description: 'Pisos brillados en mármol de alta pureza para un templo religioso de escala metropolitana costera. Ejecución de precisión artesanal en cada detalle.',
    scope: ['Pisos Brillados', 'Paredes Internas', 'Altares y Molduras'],
    contractorBadge: 'Contratista Gramar',
    imageUrl: temploMormon,
    details: 'Con 7.000 m² de mármol de alta pureza instalados y brillados, este espacio espiritual es una muestra fiel de la maestría en cortes y acabados perfectos sin juntas visibles.'
  },
  {
    id: 'edificio-portomarine',
    name: 'Edificio Portomarine',
    city: 'Cartagena',
    locationDetails: 'Cartagena de Indias',
    area: 20000,
    category: 'RESIDENCIAL',
    description: 'Uno de los proyectos inmobiliarios más ambiciosos de Colombia. Interiores de lujo y confort ejecutados en mármol seleccionado de primera calidad para vestíbulos y zonas comunes.',
    scope: ['Pisos', 'Vestíbulos', 'Zonas Comunes', 'Zonas de Alto Tráfico'],
    contractorBadge: 'Contratista Gramar',
    imageUrl: portomarine,
    details: 'Un referente de exclusividad frente a la bahía de Cartagena. Acabados magistrales en mármol brillado y pulido de precisión artesanal para brindar sofisticación y permanencia.'
  },
  {
    id: 'morros-zoe',
    name: 'Morros Zoe',
    city: 'Serena del Mar',
    locationDetails: 'Cartagena, Bolívar',
    area: 4500,
    category: 'RESIDENCIAL',
    description: 'Un condominio de estándares internacionales en Serena del Mar. En Morros Zoe, el mármol instalado en pisos, baños, mesones y piscinas refleja la excelencia de nuestro trabajo.',
    scope: ['Pisos', 'Baños', 'Mesones', 'Piscinas', 'Zonas Comunes'],
    contractorBadge: 'Contratista Gramar',
    imageUrl: morrosZoe,
    details: 'Residencial de lujo de diseño biofílico. Con más de 150 mesones de baños y cocinas, y acabados costeros pulidos con resistencia salina.'
  },
  {
    id: 'morros-io',
    name: 'Morros Ío',
    city: 'Serena del Mar',
    locationDetails: 'Cartagena, Bolívar',
    area: 4500,
    category: 'RESIDENCIAL',
    description: 'Consolidando una alianza de confianza con los desarrolladores más renombrados de Colombia. En Morros Ío ejecutamos acabados perfectos en áreas interiores y exteriores flotantes.',
    scope: ['Pisos Interiores', 'Baños', 'Mesones', 'Zonas Comunes', 'Piscinas'],
    contractorBadge: 'Contratista Gramar',
    imageUrl: morroIo,
    details: 'Cada rincón de Morros Ío está recubierto con la calidad premium seleccionada por Gramar e instalada artesanalmente por nuestros maestros de obra.'
  },
  {
    id: 'morros-eco',
    name: 'Morros Eco',
    city: 'Serena del Mar',
    locationDetails: 'Cartagena, Bolívar',
    area: 4500,
    category: 'RESIDENCIAL',
    description: 'El primer condominio de la serie Morros en Serena del Mar. Fue el punto de partida de nuestra duradera relación basada en confianza, precisión y cero tolerancia con la mediocridad.',
    scope: ['Pisos', 'Baños', 'Mesones', 'Zonas de Tránsito', 'Piscina Jacuzzi'],
    contractorBadge: 'Contratista Gramar',
    imageUrl: morrosEco,
    details: 'Puntualidad e instalación impecable que pavimentó el camino para acompañar subsecuentemente a toda la familia de condominios de alta gama del noreste cartagenero.'
  },
  {
    id: 'morros-kai',
    name: 'Morros Kai',
    city: 'Serena del Mar',
    locationDetails: 'Cartagena, Bolívar',
    area: 4500,
    category: 'RESIDENCIAL',
    description: 'El quinto condominio de playa de la familia Morros. Una demostración fehaciente de capacidad técnica, adaptabilidad artesanal e instalación impecable en cada milímetro.',
    scope: ['Pisos', 'Vestíbulos', 'Mesones de Cocina', 'Zonas Húmedas'],
    contractorBadge: 'Contratista Gramar',
    imageUrl: morrosKai,
    details: 'Garantizamos transiciones suaves de materiales y juntas micro-selladas que evitan el paso de la humedad costera en apartamentos de alto valor de mercado.'
  },
  {
    id: 'morros-park',
    name: 'Morros Park',
    city: 'Serena del Mar',
    locationDetails: 'Cartagena, Bolívar',
    area: 20000,
    category: 'RESIDENCIAL',
    description: 'El proyecto más ambicioso de la serie Morros. Un desarrollo de profunda sensibilidad biofílica, donde ejecutamos acabados premium de pisos, vestíbulos y zonas de alto tráfico.',
    scope: ['Pisos', 'Baños', 'Mesones', 'Piscinas', 'Jacuzzis', 'Zonas Comunes'],
    contractorBadge: 'Contratista Gramar',
    imageUrl: morrosPark,
    details: 'Con 20.000 m² de mármol pulido y zonas húmedas impermeabilizadas. Integra amplias áreas de piscinas y relajación con el entorno natural, elevando el lujo en el Caribe colombiano.'
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: 'pisos',
    title: 'Pisos en mármol',
    description: 'Instalaciones de gran formato con cortes milimétricos y juntas perfectas para un flujo visual continuo y elegante.',
    iconName: 'LayoutGrid'
  },
  {
    id: 'banos',
    title: 'Baños y mesones',
    description: 'Diseño integral y encimeras de alta gama tolerantes a la humedad, pulidos al detalle con esmero artesanal.',
    iconName: 'Droplet'
  },
  {
    id: 'piscinas',
    title: 'Piscinas y jacuzzis',
    description: 'Revestimientos antideslizantes de mármol que resisten la intemperie y el agua, creando oasis lujosos.',
    iconName: 'Waves'
  },
  {
    id: 'enchapes',
    title: 'Enchapes hoteleros',
    description: 'Instalaciones masivas con estrictos cronogramas B2B para hoteles de lujo y resorts de estándar mundial.',
    iconName: 'Building'
  },
  {
    id: 'brillado',
    title: 'Brillado y pulido',
    description: 'Acondicionamiento y restauración profunda para lograr el brillo de espejo del mármol natural de alta pureza.',
    iconName: 'Sparkles'
  },
  {
    id: 'zonas-comunes',
    title: 'Zonas comunes',
    description: 'Vestíbulos residenciales y graderías comerciales que fusionan la durabilidad del tráfico pesado con distinción estética.',
    iconName: 'ShieldCheck'
  }
];

export const metricsData: Metric[] = [
  { id: 'm2', value: 72000, suffix: '+ m²', label: 'Ejecutados con precisión' },
  { id: 'anos', value: 15, suffix: '+ Años', label: 'De trayectoria sólida' },
  { id: 'proyectos', value: 9, suffix: '+ Proyectos', label: 'Emblemáticos terminados' }
];

export const workProcessSteps = [
  {
    step: '01',
    title: 'Consultoría',
    description: 'Análisis detallado de planos, especificaciones de constructoras, y selección de acabados ideales para cumplir metas presupuestales y estéticas.'
  },
  {
    step: '02',
    title: 'Selección de Material',
    description: 'Curaduría y suministro controlado de bloques o placas de mármol junto a Gramar, revisando tonalidades, vetas y resistencia mecánica.'
  },
  {
    step: '03',
    title: 'Instalación',
    description: 'Colocación ejecutada rigorosamente por maestros especializados con décadas de experiencia en mármoles de gran formato.'
  },
  {
    step: '04',
    title: 'Acabado y Pulido',
    description: 'Tratamiento químico de juntas, brillado con grano diamantado para efecto espejo y sellado hidrófugo final de protección.'
  }
];
