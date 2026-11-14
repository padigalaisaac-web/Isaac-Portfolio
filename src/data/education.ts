export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution?: string;
  score: string;
  scoreLabel: string;
  period: string;
  status: string;
  description: string;
  coursework?: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
    institution: "Hyderabad, India",
    score: "8.11 CGPA",
    scoreLabel: "Current Cumulative Grade Point Average",
    period: "2024 – 2028",
    status: "In Progress (Expected 2028)",
    description: "Deep dive into algorithms, data structures, AI/ML foundations, database systems, object-oriented software design, and full-stack application development.",
    coursework: [
      "Data Structures & Algorithms",
      "Artificial Intelligence & Machine Learning",
      "Object Oriented Programming (Java/C++)",
      "Database Management Systems",
      "Operating Systems & Computer Networks",
      "Web Technologies & API Architecture",
    ],
  },
  {
    id: "intermediate",
    degree: "Intermediate / Higher Secondary (10+2)",
    field: "Mathematics, Physics, Chemistry (MPC)",
    institution: "Telangana State Board of Intermediate Education",
    score: "88.4%",
    scoreLabel: "Aggregate Percentage",
    period: "2022 – 2024",
    status: "Completed (2024)",
    description: "Rigorous curriculum focused on analytical problem-solving, advanced mathematics, physics, and computational thinking.",
    coursework: [
      "Calculus & Linear Algebra",
      "Physics & Electronics Principles",
      "Analytical Chemistry",
    ],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    field: "General Academic Curriculum",
    institution: "Board of Secondary Education",
    score: "9.2 GPA",
    scoreLabel: "Grade Point Average",
    period: "2021 – 2022",
    status: "Completed (2022)",
    description: "Strong academic foundation with distinction across mathematics, sciences, and computer applications.",
    coursework: [
      "Mathematics & Geometry",
      "General Science",
      "Computer Science Basics",
    ],
  },
];
