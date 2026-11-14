import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Terminal,
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/skills';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code2 className="w-5 h-5" />;
      case 'frontend':
        return <Layout className="w-5 h-5" />;
      case 'backend':
        return <Server className="w-5 h-5" />;
      case 'databases':
        return <Database className="w-5 h-5" />;
      case 'tools':
        return <Wrench className="w-5 h-5" />;
      case 'core':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Terminal className="w-5 h-5" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
            Technical Skills &amp; Stack
          </h2>
          <p className="mt-3 text-base sm:text-lg text-body">
            Categorized overview of languages, frameworks, databases, and engineering competencies I utilize to build modern software.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-primary text-white shadow-sm'
                : 'bg-secondary text-slate-700 hover:bg-slate-200/70 border border-border'
            }`}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-secondary text-slate-700 hover:bg-slate-200/70 border border-border'
              }`}
            >
              <span className="opacity-80">{getCategoryIcon(cat.id)}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl border border-border p-6 shadow-subtle hover:shadow-card hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="font-bold text-heading text-lg">
                      {category.title}
                    </h3>
                    <span className="text-[11px] font-medium text-slate-400">
                      {category.skills.length} core technologies
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-body leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Skills Badges List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-secondary hover:bg-blue-50 hover:text-primary text-slate-800 border border-border transition-colors cursor-default"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary/70 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Verified in Projects</span>
                <span className="text-primary font-semibold">Active Practice</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Notice */}
        <div className="mt-12 bg-secondary/70 border border-border rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-heading text-base">
                Engineering Approach: Quality &amp; Practical Problem Solving
              </h4>
              <p className="text-xs sm:text-sm text-body mt-1">
                Rather than claiming arbitrary skill percentages, I demonstrate proficiency through real working repositories, clean modular code, responsive interfaces, and testable API contracts.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-primary hover:bg-primary-700 transition-colors shadow-sm"
          >
            Review Project Proof
          </a>
        </div>

      </div>
    </section>
  );
};
