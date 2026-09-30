import { motion } from 'motion/react';
import { Project } from '../../types';
import MarbleShimmer from '../../components/MarbleShimmer';
import { MapPin, Maximize2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const formattedArea = project.area.toLocaleString('es-CO');

  return (
    <motion.article
      layout="position"
      id={`project-card-${project.id}`}
      className="group relative bg-white border border-gold/15 overflow-hidden shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full cursor-pointer"
      onClick={() => onClick(project)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(project);
        }
      }}
      aria-label={`Ver detalles del proyecto ${project.name} en ${project.city}`}
    >
      {/* Visual Area */}
      <div className="relative overflow-hidden aspect-[4/3] bg-onyx w-full">
        <img
          src={project.imageUrl}
          alt={project.name}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 via-transparent to-transparent opacity-80" />
        
        {/* Category Badge on Floating top-left */}
        <span className="absolute top-4 left-4 z-10 bg-onyx/80 backdrop-blur-md border border-gold/40 text-gold font-sans font-semibold text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-xs">
          {project.category}
        </span>

        {/* Action Icon on Hover (top-right) */}
        <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-crema/90 text-onyx border border-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Maximize2 className="w-3.5 h-3.5 text-gold-700" />
        </div>

        {/* Area Overlay Bottom Left */}
        <div className="absolute bottom-4 left-4 z-10 text-white flex items-baseline gap-1" id={`project-card-area-${project.id}`}>
          <span className="text-xl md:text-2xl font-serif font-bold text-gold">{formattedArea}</span>
          <span className="text-xs font-sans font-light tracking-wide text-crema/90">m² ejecutados</span>
        </div>

        {/* Marble shimmer overlay */}
        <MarbleShimmer />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl text-onyx font-bold tracking-tight mb-2 group-hover:text-gold transition-colors duration-200 block" id={`project-card-title-${project.id}`}>
            {project.name}
          </h3>
          <div className="flex items-center gap-1.5 text-stone-500 text-xs tracking-wider uppercase font-sans font-light">
            <MapPin className="w-3.5 h-3.5 text-gold stroke-[1.5]" />
            <span>{project.city}{project.locationDetails ? `, ${project.locationDetails}` : ''}</span>
          </div>
        </div>

        {/* Brief description constraint (2 lines) */}
        <p className="text-stone-600 text-sm md:text-base font-light leading-relaxed font-sans line-clamp-2">
          {project.description}
        </p>

        {/* Dynamic badges list for scope preview */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.scope.slice(0, 3).map((item, idx) => (
            <span
              key={idx}
              className="text-[9px] font-mono tracking-wider uppercase bg-crema text-selva border border-selva/10 px-2 py-0.5 rounded-sm"
            >
              {item}
            </span>
          ))}
          {project.scope.length > 3 && (
            <span className="text-[9px] font-mono text-stone-400 font-light px-1">+{project.scope.length - 3}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
