export type ProjectCategory = 'TODOS' | 'RESIDENCIAL' | 'HOTELERO' | 'COMERCIAL' | 'RELIGIOSO';

export interface Project {
  id: string;
  name: string;
  city: string;
  locationDetails: string;
  area: number; // in m²
  category: Exclude<ProjectCategory, 'TODOS'>;
  description: string;
  scope: string[]; // Alcance (e.g. ['Pisos', 'Baños', 'Mesones', 'Piscinas', 'Zonas comunes'])
  contractorBadge?: string; // e.g. "Contratista Gramar" o similar
  imageUrl: string;
  details?: string; // Additional details for the modal
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ContactFormData {
  nombre: string;
  empresa?: string;
  ciudad: string;
  telefono: string;
  tipoProyecto: string;
  mensaje: string;
}
