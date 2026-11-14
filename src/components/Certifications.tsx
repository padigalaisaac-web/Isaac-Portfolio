import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Workshops</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
            Certifications &amp; Training
          </h2>
          <p className="mt-3 text-base sm:text-lg text-body">
            Targeted technical certifications and intensive hands-on workshops in foundational programming, modern web development, and database architecture.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl border border-border p-6 shadow-subtle hover:shadow-card hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {cert.verificationLabel || 'Completed'}
                  </span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg font-bold text-heading">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-primary mt-1 mb-3">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-body leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Skills Acquired */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Topics Covered:
                  </span>
                  {cert.skillsAcquired.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-[11px]">Training Credential</span>
                <span className="text-slate-600 font-medium">Verified Completion</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
