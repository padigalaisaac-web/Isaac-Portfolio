export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  type: 'certification' | 'workshop';
  description: string;
  skillsAcquired: string[];
  verificationLabel?: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "infosys-programming-fundamentals",
    title: "Programming Fundamentals",
    issuer: "Infosys Springboard",
    type: "certification",
    description: "In-depth certification covering foundational computer science principles, core algorithm design, control structures, object-oriented concepts, and structured problem-solving.",
    skillsAcquired: [
      "Algorithmic Thinking",
      "Control Flow & Loops",
      "Object-Oriented Design",
      "Data Structures Basics",
      "Code Efficiency",
    ],
    verificationLabel: "Verified Credential",
  },
  {
    id: "web-development-workshop",
    title: "Web Development Workshop",
    issuer: "Hands-on Technical Bootcamp",
    type: "workshop",
    description: "Practical engineering workshop focused on modern client-side architectures, responsive UI patterns, semantic markup, asynchronous API requests, and web standards.",
    skillsAcquired: [
      "Responsive Web Design",
      "Modern JavaScript ES6+",
      "DOM Manipulation & Events",
      "RESTful API Consumption",
      "CSS Grid & Flexbox",
    ],
    verificationLabel: "Hands-on Workshop",
  },
  {
    id: "database-management-workshop",
    title: "Database Management Workshop",
    issuer: "Technical Training & Hands-on Lab",
    type: "workshop",
    description: "Hands-on workshop covering relational database design, entity-relationship modeling, normalized schemas, complex SQL queries, and transaction management.",
    skillsAcquired: [
      "Relational Schema Design",
      "Complex SQL Queries & Joins",
      "ACID Properties & Transactions",
      "Data Normalization (1NF to 3NF)",
      "Database Indexing Concepts",
    ],
    verificationLabel: "Hands-on Workshop",
  },
];
