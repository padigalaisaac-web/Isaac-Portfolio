import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Code2, 
  Sparkles, 
  Terminal,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { personalData } from '../data/personal';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'capabilities' | 'terminal'>('profile');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Open to Internships status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6 shadow-subtle">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Internship Opportunities</span>
            </div>

            {/* Name & Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading tracking-tight leading-[1.12]">
              Hello, I'm{' '}
              <span className="text-primary relative inline-block">
                Padigala Isaac
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2 text-primary/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path d="M0 5 Q 50 10, 100 5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle / Role */}
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-800 tracking-tight">
              Software Engineer | Full Stack Developer | AI/ML Enthusiast
            </p>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-body max-w-2xl leading-relaxed">
              {personalData.tagline}
            </p>

            {/* Quick Context Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary border border-border">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                {personalData.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary border border-border">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                B.Tech CSE (AI & ML) • CGPA 8.11
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary border border-border">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                Graduating 2028
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Explore My Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-primary hover:bg-primary-700 shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download Resume */}
              <a
                href={personalData.resumeUrl}
                download="Padigala_Isaac_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-border shadow-subtle transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Download Padigala Isaac Resume PDF"
              >
                <FileDown className="w-4 h-4 text-primary" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-primary bg-primary/10 hover:bg-primary/15 border border-primary/20 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Target internship roles pills */}
            <div className="mt-10 pt-6 border-t border-border w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2.5">
                Targeting Internship Roles
              </span>
              <div className="flex flex-wrap gap-2">
                {personalData.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-slate-700 border border-border/80"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Developer-Themed Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Backing decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-lg opacity-20" />

              {/* Card Container */}
              <div className="relative bg-white rounded-2xl border border-border shadow-card overflow-hidden">
                
                {/* Window Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                      isaac@workspace: ~/developer-profile
                    </span>
                  </div>

                  {/* Window Action: Copy quick contact */}
                  <button
                    onClick={copyEmail}
                    className="text-slate-400 hover:text-white text-xs flex items-center gap-1.5 px-2 py-1 rounded hover:bg-slate-800 transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="text-[11px] font-mono">{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
                  </button>
                </div>

                {/* Card Sub-Navigation Tabs */}
                <div className="bg-slate-950 px-4 pt-2 flex items-center gap-2 border-b border-slate-800 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors ${
                      activeTab === 'profile'
                        ? 'bg-slate-900 text-blue-400 border-t-2 border-primary font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>profile.ts</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('capabilities')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors ${
                      activeTab === 'capabilities'
                        ? 'bg-slate-900 text-blue-400 border-t-2 border-primary font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>stack.json</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-slate-900 text-blue-400 border-t-2 border-primary font-semibold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>status.sh</span>
                  </button>
                </div>

                {/* Tab Content Display */}
                <div className="bg-slate-900 p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto min-h-[320px]">
                  {activeTab === 'profile' && (
                    <div>
                      <p className="text-slate-500">// Personal Developer Contract</p>
                      <p>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-300">developer</span>:{' '}
                        <span className="text-emerald-400">SoftwareEngineer</span> = &#123;
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">name:</span>{' '}
                        <span className="text-amber-300">"Padigala Isaac"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">education:</span> &#123;
                      </p>
                      <p className="pl-8">
                        <span className="text-slate-400">degree:</span>{' '}
                        <span className="text-amber-300">"B.Tech CSE (AI &amp; ML)"</span>,
                      </p>
                      <p className="pl-8">
                        <span className="text-slate-400">cgpa:</span>{' '}
                        <span className="text-emerald-400">8.11</span>,
                      </p>
                      <p className="pl-8">
                        <span className="text-slate-400">graduation:</span>{' '}
                        <span className="text-amber-300">"2028"</span>,
                      </p>
                      <p className="pl-4">&#125;,</p>
                      <p className="pl-4">
                        <span className="text-slate-400">location:</span>{' '}
                        <span className="text-amber-300">"Hyderabad, India"</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">availableForHire:</span>{' '}
                        <span className="text-emerald-400">true</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-slate-400">builds:</span> [
                      </p>
                      <p className="pl-8 text-amber-300">"Web Apps", "FastAPI Services", "AI Tools"</p>
                      <p className="pl-4">],</p>
                      <p>&#125;;</p>
                    </div>
                  )}

                  {activeTab === 'capabilities' && (
                    <div>
                      <p className="text-slate-500">// Architecture &amp; Stack</p>
                      <p className="text-purple-400">&#123;</p>
                      <p className="pl-4">
                        <span className="text-blue-300">"frontend"</span>: [
                        <span className="text-amber-300">"React"</span>,{' '}
                        <span className="text-amber-300">"TypeScript"</span>,{' '}
                        <span className="text-amber-300">"Tailwind"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-blue-300">"backend"</span>: [
                        <span className="text-amber-300">"Python"</span>,{' '}
                        <span className="text-amber-300">"FastAPI"</span>,{' '}
                        <span className="text-amber-300">"Node.js"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-blue-300">"databases"</span>: [
                        <span className="text-amber-300">"PostgreSQL"</span>,{' '}
                        <span className="text-amber-300">"Supabase"</span>,{' '}
                        <span className="text-amber-300">"MongoDB"</span>],
                      </p>
                      <p className="pl-4">
                        <span className="text-blue-300">"ai_tooling"</span>: [
                        <span className="text-amber-300">"OpenCV"</span>,{' '}
                        <span className="text-amber-300">"n8n"</span>,{' '}
                        <span className="text-amber-300">"Docker"</span>]
                      </p>
                      <p className="text-purple-400">&#125;</p>
                    </div>
                  )}

                  {activeTab === 'terminal' && (
                    <div className="space-y-2">
                      <p className="text-emerald-400">$ render status isaac-portfolio</p>
                      <p className="text-slate-300">✓ Service: Static Web Site</p>
                      <p className="text-slate-300">✓ Health: 100% Operational</p>
                      <p className="text-slate-300">✓ Build: Vite TS Bundle (0 errors)</p>
                      <p className="text-emerald-400 mt-4">$ ping padigalaisaac@gmail.com</p>
                      <p className="text-slate-300">✓ Response: Available for 2025/2026 internships</p>
                      <div className="flex items-center gap-2 pt-2 text-primary font-semibold">
                        <span className="animate-pulse">▶ Ready to build impactful software.</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer of Card */}
                <div className="bg-slate-950 p-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Clean Architecture Verified</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500">TypeScript 5 • React 18</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
