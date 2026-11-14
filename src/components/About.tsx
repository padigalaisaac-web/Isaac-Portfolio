import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  Code, 
  Cpu, 
  Workflow, 
  Layers, 
  MapPin, 
  CheckCircle,
  FileDown
} from 'lucide-react';
import { personalData } from '../data/personal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base sm:text-lg text-body">
            Computer Science undergraduate specializing in Artificial Intelligence &amp; Machine Learning with a passion for building practical, resilient full-stack applications.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Detailed Bio & Education Callout */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-white p-7 sm:p-8 rounded-2xl border border-border shadow-subtle space-y-5">
              <h3 className="text-xl font-bold text-heading">
                Engineering with Curiosity &amp; Purpose
              </h3>
              
              <div className="space-y-4 text-body text-base leading-relaxed">
                <p>
                  I am a Computer Science student specializing in <strong className="text-heading font-semibold">Artificial Intelligence and Machine Learning</strong>. I have hands-on experience developing full-stack web applications, responsive interfaces, backend APIs, database-driven applications, and automation workflows.
                </p>
                <p>
                  I enjoy building practical software solutions and exploring AI technologies. Rather than remaining confined to theoretical concepts, I focus on transforming ideas into working software — from architecting clean relational &amp; NoSQL database models to implementing high-performance Python FastAPI services and responsive React frontends.
                </p>
                <p>
                  Whether building deepfake detection pipelines, bus reservation systems with real-time state synchronization, or autonomous multi-platform content publishing workflows, I bring disciplined engineering practices, clean code standards, and eagerness to contribute to engineering teams.
                </p>
              </div>

              {/* Education Banner */}
              <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-secondary/80 p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-heading text-sm">
                      B.Tech in CSE (Artificial Intelligence &amp; Machine Learning)
                    </h4>
                    <p className="text-xs text-body">
                      Expected Graduation: 2028 • Hyderabad, India
                    </p>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-lg bg-white border border-border text-center shadow-sm">
                  <span className="block text-xs text-slate-500 font-medium">Cumulative CGPA</span>
                  <span className="text-base font-extrabold text-primary">8.11 / 10</span>
                </div>
              </div>

            </div>

            {/* Core Values / Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-border shadow-subtle flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-50 text-primary">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-heading text-sm">Full-Stack Execution</h4>
                  <p className="text-xs text-body mt-1">
                    End-to-end fluency across UI components, REST APIs, and database migrations.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-border shadow-subtle flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-50 text-primary">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-heading text-sm">AI/ML Integration</h4>
                  <p className="text-xs text-body mt-1">
                    Connecting deep learning models and computer vision pipelines to usable web APIs.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-border shadow-subtle flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-50 text-primary">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-heading text-sm">Automation Mindset</h4>
                  <p className="text-xs text-body mt-1">
                    Automating workflows with n8n and event-driven hooks to eliminate repetitive tasks.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-border shadow-subtle flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-50 text-primary">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-heading text-sm">Reliable Architectures</h4>
                  <p className="text-xs text-body mt-1">
                    Writing clean TypeScript, robust error handling, and structured data queries.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Key Stats & Career Objectives */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalData.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-border shadow-subtle flex flex-col justify-between"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {item.label}
                  </span>
                  <div className="my-2">
                    <span className="text-3xl font-extrabold text-heading">
                      {item.value}
                    </span>
                  </div>
                  <span className="text-xs text-body font-medium">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>

            {/* Target Internship Opportunities Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-border shadow-subtle">
              <h4 className="font-bold text-heading text-base mb-1">
                Immediate Career Focus
              </h4>
              <p className="text-xs text-body mb-4">
                Seeking summer &amp; semester internship positions where I can build production features and learn from seasoned engineering mentors.
              </p>

              <ul className="space-y-2.5">
                {personalData.targetRoles.map((role) => (
                  <li key={role} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Hyderabad, India (Relocation/Remote Open)</span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href={personalData.resumeUrl}
                  download="Padigala_Isaac_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/15 border border-primary/20 transition-colors"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Complete Resume</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
