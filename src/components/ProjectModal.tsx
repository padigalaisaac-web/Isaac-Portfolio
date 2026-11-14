import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers, AlertCircle } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  const isPlaceholderGithub = !project.githubUrl || project.githubUrl.includes('placeholder');
  const isPlaceholderDemo = !project.demoUrl || project.demoUrl.includes('placeholder');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-elevated border border-border overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-secondary/50">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold">
              {project.badge || 'Project Spotlight'}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              ID: {project.id}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-heading hover:bg-slate-200/60 transition-colors focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close Project Details Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Project Image Preview */}
          <div className="relative rounded-xl overflow-hidden border border-border bg-slate-50 aspect-video max-h-[300px] flex items-center justify-center">
            <img
              src={project.image}
              alt={`${project.title} Preview Architecture & Interface`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Titles */}
          <div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-heading">
              {project.title}
            </h3>
            <p className="text-sm font-semibold text-primary mt-1">
              {project.subtitle}
            </p>
            <p className="mt-3 text-sm sm:text-base text-body leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-heading mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Implemented Features &amp; Architecture</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-secondary border border-border/80 text-xs text-slate-700 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-heading mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-primary" />
              <span>Technology Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-primary border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Repository Status Note */}
          {(isPlaceholderGithub || isPlaceholderDemo) && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <div>
                <strong className="font-semibold">Repository / Live Demo Status:</strong>{' '}
                This project was created and evaluated as a complete application. For repositories in private client/academic review, live walkthrough code access is readily provided upon request.
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-secondary/80 border-t border-border flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-medium">
            Contact: <a href="mailto:padigalaisaac@gmail.com" className="text-primary hover:underline">padigalaisaac@gmail.com</a>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-border shadow-subtle transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            ) : null}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-primary hover:bg-primary-700 shadow-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : null}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-heading bg-transparent transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
