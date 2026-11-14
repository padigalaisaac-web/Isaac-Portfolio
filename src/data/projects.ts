export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  image: string;
  githubUrl?: string; // If undefined or placeholder, UI handles gracefully with info tooltip
  demoUrl?: string;   // If undefined or placeholder, UI handles gracefully with info tooltip
  category: 'ai' | 'fullstack' | 'automation';
  badge?: string;
  highlights: string[];
}

export const projectsData: Project[] = [
  {
    id: "deepguard-ai",
    title: "DeepGuard AI",
    subtitle: "AI-Powered Deepfake Detection Web Application",
    description: "An advanced media authenticity and deepfake analysis system pairing a responsive React/TypeScript frontend with a Python/FastAPI analysis pipeline.",
    longDescription: "DeepGuard AI is designed to analyze uploaded video and image media for synthetic manipulation, artifact signatures, and facial anomalies. Built with a decoupled architecture, it leverages OpenCV and deep learning inference via an asynchronous FastAPI backend, displaying comprehensive authenticity scores and detection metrics through an interactive user dashboard.",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "OpenCV", "Docker"],
    features: [
      "Media authenticity and deepfake analysis workflows",
      "React/TypeScript frontend with interactive inspection view",
      "Python/FastAPI asynchronous backend for inference",
      "API-driven frame-by-frame artifact analysis",
      "Detailed detection result dashboards & confidence scores",
      "Database-backed analysis history & audit workflows",
      "Docker-based containerization for reproducible deployment",
    ],
    image: "/images/projects/deepguard.svg",
    githubUrl: "https://github.com/padigalaisaac-web/deepguard.ai",
    demoUrl: "https://deepguard-demo.placeholder.app",
    category: "ai",
    badge: "AI & Full Stack",
    highlights: ["FastAPI Inference", "OpenCV Computer Vision", "Dockerized Architecture"],
  },
  {
    id: "busgoo",
    title: "BusGoo",
    subtitle: "Full Stack Bus Booking Application",
    description: "Modern, high-performance bus reservation web application featuring interactive route search, live seat selection, and Supabase cloud persistence.",
    longDescription: "BusGoo streamlines intercity travel booking with an intuitive, mobile-responsive user interface. Built with React and Vite for blazing-fast transitions, it integrates Supabase for realtime bus availability, seat state synchronization, and robust booking records.",
    technologies: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS"],
    features: [
      "Dynamic bus route, date, and operator search",
      "Real-time seat selection & booking reservation workflows",
      "Fully responsive, mobile-first user interface",
      "Supabase PostgreSQL database & authentication integration",
      "Optimized production build with cloud hosting",
    ],
    image: "/images/projects/busgoo.svg",
    githubUrl: "https://github.com/padigalaisaac-web/busgoo",
    demoUrl: "https://busgoo-demo.placeholder.app",
    category: "fullstack",
    badge: "Full Stack Web",
    highlights: ["Supabase Realtime", "Vite Build", "Interactive Seat Selector"],
  },
  {
    id: "library-management-system",
    title: "Library Management System",
    subtitle: "Full Stack MERN Library Portal",
    description: "Robust administrative and student library system managing book catalogs, membership records, issue-return cycles, and audit transactions.",
    longDescription: "A comprehensive digital library portal designed to eliminate manual paper registers. Built using the MERN architecture, it implements complete CRUD operations for catalog management, tracks book availability statuses in real-time, and logs member circulation histories.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Complete book catalog inventory management",
      "Member profiles and registration management",
      "Automated issue, return, and due-date tracking",
      "Transaction audit trails with fine status updates",
      "RESTful API endpoints with Express.js routing",
    ],
    image: "/images/projects/library.svg",
    githubUrl: "https://github.com/placeholder-isaac/library-management-system",
    demoUrl: "", // Available on request placeholder
    category: "fullstack",
    badge: "Database System",
    highlights: ["MongoDB Collections", "Express REST APIs", "Circulation Tracking"],
  },
  {
    id: "online-bus-booking-system",
    title: "Online Bus Booking System",
    subtitle: "Relational Database-Driven Ticketing System",
    description: "Database-backed bus travel ticketing portal engineered with PHP and MySQL, supporting route schedules, passenger reservations, and PNR verification.",
    longDescription: "An end-to-end relational database application engineered with PHP and MySQL. It models complex schedule schemas, station stops, passenger manifests, and seat allocation constraints with server-side validation and transactional data integrity.",
    technologies: ["HTML5", "CSS3", "PHP", "MySQL"],
    features: [
      "Bus route discovery and schedule lookup",
      "Detailed station routes, timetables, and seat tiers",
      "Passenger booking workflow and PNR ticket generation",
      "Structured MySQL relational schema with transactional integrity",
      "Administrative portal for route and schedule adjustments",
    ],
    image: "/images/projects/onlinebus.svg",
    githubUrl: "https://github.com/placeholder-isaac/online-bus-booking",
    demoUrl: "",
    category: "fullstack",
    badge: "Relational Architecture",
    highlights: ["MySQL Schemas", "PHP Data Objects", "PNR Generation"],
  },
  {
    id: "ai-social-media-video-automation",
    title: "AI Social Media Video Automation",
    subtitle: "Autonomous Content Generation & Multi-Platform Publisher",
    description: "End-to-end workflow automation pipeline built with n8n, transforming prompt and media inputs into published Instagram Reels and YouTube Shorts.",
    longDescription: "An automated content creation and multi-channel distribution engine orchestrated with n8n. From a structured form trigger, the pipeline synthesizes media assets, prepares video renderings, formats platform-specific metadata, and publishes autonomously via social media APIs.",
    technologies: ["n8n", "Social Media APIs", "Automation Workflows", "REST APIs"],
    features: [
      "Form-based prompt and asset input ingestion",
      "Automated video synthesis & rendering processing",
      "Reliable event-driven workflow automation in n8n",
      "Direct publishing to Instagram Reels via Graph API",
      "Automated YouTube Shorts uploads with SEO tags and descriptions",
    ],
    image: "/images/projects/automation.svg",
    githubUrl: "https://github.com/padigalaisaac-web/n8n-Automation-social-media-uploading",
    demoUrl: "",
    category: "automation",
    badge: "AI Automation",
    highlights: ["n8n Orchestration", "Instagram Graph API", "YouTube Data API"],
  },
];
