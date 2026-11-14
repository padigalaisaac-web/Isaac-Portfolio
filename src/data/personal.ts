export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  roles: string[];
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  phone: string;
  educationSummary: {
    degree: string;
    specialization: string;
    cgpa: string;
    graduationYear: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
  resumeUrl: string;
  openToWork: boolean;
  targetRoles: string[];
  highlights: {
    label: string;
    value: string;
    description: string;
  }[];
  languages: string[];
  interests: string[];
  softSkills: string[];
}

export const personalData: PersonalInfo = {
  name: "Padigala Isaac",
  firstName: "Padigala",
  lastName: "Isaac",
  title: "Software Engineer | Full Stack Developer | AI/ML Enthusiast",
  roles: [
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Python & FastAPI Developer",
  ],
  tagline: "I build modern web applications, full-stack software solutions, AI-powered applications, and intelligent automation workflows.",
  bio: [
    "I am a Computer Science student specializing in Artificial Intelligence and Machine Learning. I have hands-on experience developing full-stack web applications, responsive interfaces, backend APIs, database-driven applications, and automation workflows.",
    "I enjoy building practical software solutions and exploring AI technologies, with a strong focus on clean code, solid architectures, and real-world impact.",
  ],
  location: "Hyderabad, India",
  email: "padigalaisaac@gmail.com",
  phone: "+91 9441909774",
  educationSummary: {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Artificial Intelligence & Machine Learning",
    cgpa: "8.11 / 10.0",
    graduationYear: "2028",
  },
  socialLinks: {
    github: "https://github.com/padigalaisaac-web",
    linkedin: "https://linkedin.com/in/padigalaisaac",
    email: "mailto:padigalaisaac@gmail.com",
    phone: "tel:+919441909774",
  },
  resumeUrl: "/resume.pdf",
  openToWork: true,
  targetRoles: [
    "Software Engineer Intern",
    "Full Stack Developer Intern",
    "Frontend Developer Intern",
    "Python Backend Developer Intern",
    "AI Application Developer Intern",
    "Generative AI Intern",
  ],
  highlights: [
    {
      label: "Current CGPA",
      value: "8.11",
      description: "B.Tech CSE (AI & ML)",
    },
    {
      label: "Featured Projects",
      value: "5+",
      description: "Full Stack & AI Applications",
    },
    {
      label: "Core Focus",
      value: "AI + Web",
      description: "FastAPI, React, Modern DBs",
    },
    {
      label: "Location",
      value: "Hyderabad",
      description: "Open to In-office & Remote",
    },
  ],
  languages: ["English", "Telugu", "Hindi"],
  interests: ["Full-Stack Development", "Web Applications", "APIs", "Databases", "AI Agents"],
  softSkills: [
    "Problem Solving",
    "Communication",
    "Teamwork & Collaboration",
    "Time Management",
    "Adaptability"
  ],
};
