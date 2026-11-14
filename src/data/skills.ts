export interface SkillItem {
  name: string;
  category: 'programming' | 'frontend' | 'backend' | 'databases' | 'tools' | 'core';
  level?: string; // e.g. "Proficient", "Experienced", "Working Knowledge" without fake percentages
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    description: "Core languages used for algorithms, systems programming, AI/ML models, and web servers.",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C", "C++"],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Modern UI development focused on responsive layouts, accessibility, component reusability, and fluid user experience.",
    skills: ["React", "TypeScript", "Vite", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "High-performance REST API services, asynchronous handlers, and server-side business logic.",
    skills: ["Python", "FastAPI", "Node.js", "Express.js", "PHP", "REST APIs"],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Relational schemas, document storage, and modern cloud database backends.",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "SQLite"],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    description: "Development environments, version control, containerization, and automation engines.",
    skills: ["Git", "GitHub", "Docker", "VS Code", "n8n", "LiveKit"],
  },
  {
    id: "core",
    title: "Core Software Competencies",
    description: "Foundational software development practices implemented across full-stack applications.",
    skills: [
      "Full Stack Development",
      "Responsive Design",
      "API Integration",
      "CRUD Architectures",
      "Database Integration",
      "Authentication Workflows",
      "Deployment & CI/CD",
    ],
  },
];
