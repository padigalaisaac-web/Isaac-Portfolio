import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-base sm:text-lg text-body">
            Formal computer science education specializing in AI/ML, accompanied by consistent academic distinction.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-border hover:border-primary/30 p-6 sm:p-8 shadow-subtle hover:shadow-card transition-all duration-300 relative overflow-hidden"
            >
              {/* Highlight bar on current B.Tech */}
              {index === 0 && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-primary" />
              )}

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                {/* Degree & Field */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-heading">
                      {item.degree}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-primary border border-blue-100">
                      {item.status}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-primary">
                    {item.field}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-body pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.period}
                    </span>
                    {item.institution && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {item.institution}
                      </span>
                    )}
                  </div>
                </div>

                {/* Score Pill / Callout */}
                <div className="sm:text-right shrink-0">
                  <div className="inline-flex flex-col items-start sm:items-end px-4 py-2 rounded-xl bg-secondary border border-border">
                    <span className="text-xs font-medium text-slate-500">
                      {item.scoreLabel}
                    </span>
                    <span className="text-xl font-extrabold text-heading">
                      {item.score}
                    </span>
                  </div>
                </div>

              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-body leading-relaxed">
                {item.description}
              </p>

              {/* Coursework Tags */}
              {item.coursework && (
                <div className="mt-5 pt-4 border-t border-border/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Key Coursework &amp; Competencies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-slate-700 border border-border"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
