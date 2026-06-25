import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectCard from '../features/projects/ProjectCard';
import { Project } from '../types';

const mockProject: Project = {
  id: 'test-project',
  name: 'Casa Caracol',
  city: 'Barranquilla',
  locationDetails: 'El Golf',
  area: 14200,
  category: 'RESIDENCIAL',
  description: 'Un residencial costero impecable frente al Mar Caribe con cortes exactos.',
  scope: ['Pisos', 'Baños', 'Mesón de Cocina'],
  imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
  contractorBadge: 'Contratista Gramar',
};

describe('ProjectCard Component', () => {
  it('renderiza nombre, m² y categoría', () => {
    render(<ProjectCard project={mockProject} onClick={() => {}} />);

    // Renders name correctly
    expect(screen.getByText('Casa Caracol')).toBeInTheDocument();

    // Renders properly formatted area
    expect(screen.getByText('14.200')).toBeInTheDocument();
    expect(screen.getByText(/m² ejecutados/i)).toBeInTheDocument();

    // Renders category badge
    expect(screen.getByText('RESIDENCIAL')).toBeInTheDocument();
  });
});
