import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../../data/projects';
import { Project, ProjectCategory } from '../../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('TODOS');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['TODOS', 'RESIDENCIAL', 'HOTELERO', 'COMERCIAL', 'RELIGIOSO'];

  // Filter project listing count
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'TODOS') return true;
    return project.category === activeCategory;
  });

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-crema overflow-hidden" id="proyectos">
      {/* Dynamic separators */}
      <div className="absolute top-0 left-12 right-12 h-[0.5px] bg-gold/25" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <span className="text-xs md:text-sm uppercase tracking-widest text-gold font-semibold block">
            Nuestra Trayectoria en Acabados de Lujo
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight text-onyx">
            Proyectos Destacados
          </h2>
          <div className="h-[2px] w-20 bg-gold mx-auto" />
          <p className="text-stone-600 font-sans font-light text-base md:text-lg">
            Garantía de precisión, impermeabilidad y elegancia en obras icónicas hoteleras, comerciales y presidenciales del país.
          </p>
        </div>

        {/* Categories Tab Selector with strict ARIA representation */}
        <div className="flex justify-center mb-12">
          <div
            role="tablist"
            aria-label="Filtrar proyectos por categoría de obra"
            className="flex flex-wrap justify-center gap-1.5 md:gap-3 p-1.5 bg-white border border-gold/15 rounded-sm max-w-3xl"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  id={`tab-${category.toLowerCase()}`}
                  aria-selected={isActive}
                  aria-controls="projects-grid"
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 sm:px-6 py-2.5 font-sans font-semibold text-[11px] tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-gold text-onyx shadow-md'
                      : 'text-stone-500 hover:text-onyx bg-transparent hover:bg-stone-50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid with Layout Animations */}
        <motion.div
          id="projects-grid"
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.toLowerCase()}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
          variants={parentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, y: 10, transition: { duration: 0.25 } }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  onClick={(p) => setSelectedProject(p)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty selection state fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-stone-400 font-sans font-light">
            No se encontraron proyectos disponibles en esta categoría.
          </div>
        )}

        {/* Modal Window Container */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
