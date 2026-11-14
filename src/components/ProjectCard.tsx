import React from 'react';
import { Github, ExternalLink, ArrowRight, Eye } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const isPlaceholderGithub = !project.githubUrl || project.githubUrl.includes('placeholder');
  const isPlaceholderDemo = !project.demoUrl || project.demoUrl.includes('placeholder');

  return (
    <article className="group bg-white rounded-2xl border border-border hover:border-primary/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden">
      
      {/* Project Image Preview Container */}
      <div 
        className="relative aspect-video w-full overflow-hidden bg-slate-50 border-b border-border cursor-pointer group"
        onClick={() => onViewDetails(project)}
      >
        <img
          src={project.image}
          alt={`${project.title} Preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover overlay with "View Details" prompt */}
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-semibold text-sm">
          <Eye className="w-4 h-4" />
          <span>Click to Inspect Architecture</span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md border border-slate-200 text-heading text-xs font-semibold shadow-sm">
            {project.badge || 'Project'}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Subtitle */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-semibold text-primary mt-0.5">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-body line-clamp-3 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Key highlights pills */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.highlights.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-2.5 py-1 rounded-lg bg-secondary text-slate-700 border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Row */}
        <div className="pt-4 border-t border-border/80 flex items-center justify-between gap-2">
          
          {/* View Details Primary Action */}
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-primary rounded p-1"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* External Links */}
          <div className="flex items-center gap-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg border border-border text-slate-600 hover:text-heading hover:bg-slate-50 transition-colors ${
                  isPlaceholderGithub ? 'opacity-85' : ''
                }`}
                title={isPlaceholderGithub ? "Repository placeholder (Access available upon request)" : "View Source Code on GitHub"}
                aria-label={`View ${project.title} source on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            ) : null}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors ${
                  isPlaceholderDemo ? 'opacity-85' : ''
                }`}
                title={isPlaceholderDemo ? "Live demo placeholder (Demo available upon request)" : "Open Live Application Demo"}
                aria-label={`Open live demo of ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : null}
          </div>

        </div>

      </div>

    </article>
  );
};
