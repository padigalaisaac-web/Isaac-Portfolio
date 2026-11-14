import React, { useState } from 'react';
import { FolderGit2, Info } from 'lucide-react';
import { projectsData, Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'fullstack' | 'automation'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 bg-secondary/40 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-body">
            A curated collection of full-stack web applications, AI deepfake detection tools, database architectures, and automation systems.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'all'
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-border shadow-subtle'
            }`}
          >
            All Projects ({projectsData.length})
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'ai'
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-border shadow-subtle'
            }`}
          >
            AI &amp; Computer Vision
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'fullstack'
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-border shadow-subtle'
            }`}
          >
            Full Stack Web Apps
          </button>
          <button
            onClick={() => setFilter('automation')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === 'automation'
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-border shadow-subtle'
            }`}
          >
            Workflow Automation
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(proj) => setActiveProject(proj)}
            />
          ))}
        </div>

        {/* Configurable / Code Access Note */}
        <div className="mt-12 bg-white rounded-2xl border border-border p-5 sm:p-6 shadow-subtle flex items-start gap-3.5">
          <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div className="text-xs sm:text-sm text-body leading-relaxed">
            <span className="font-semibold text-heading">Need full code access or a live project walkthrough?</span>{' '}
            Project configurations and mock repositories are clearly separated in <code className="text-primary font-mono text-xs bg-blue-50 px-1 py-0.5 rounded">src/data/projects.ts</code>. For prospective internship employers and interview evaluations, complete live demonstrations and full code repositories can be reviewed on request.
          </div>
        </div>

      </div>

      {/* Interactive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
