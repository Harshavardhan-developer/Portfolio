export const PROJECTS = [
  {
    id: 1,
    title: "TaskFlow",
    subtitle: "MERN Stack Task Manager",
    year: "2024",
    description:
      "Full-stack task management application with JWT authentication, RESTful CRUD APIs, MongoDB Atlas for cloud storage, and real-world deployment resolving CORS & environment challenges on Vercel & Render.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "JWT"],
    link: "https://taskflow-fawn-sigma.vercel.app/",
    color: "#7c6af7",
    icon: "📋",
    metrics: [
      { label: "Auth", val: "JWT" },
      { label: "DB", val: "Atlas" },
      { label: "Deploy", val: "Vercel" },
    ],
  },
  {
    id: 2,
    title: "Weather App",
    subtitle: "Real-time Weather Dashboard",
    year: "2024",
    description:
      "Real-time weather application powered by OpenWeatherMap API. Features dynamic UI with reliable error handling, modularised components, and 30% reduction in API response time through optimised caching.",
    tags: ["React.js", "OpenWeatherMap API", "CSS", "REST API"],
    link: "https://weather-apr.vercel.app",
    color: "#22d3ee",
    icon: "🌤️",
    metrics: [
      { label: "API", val: "OWM" },
      { label: "Response", val: "-30%" },
      { label: "Cities", val: "1M+" },
    ],
  },
  {
    id: 3,
    title: "Jobby App",
    subtitle: "Secure Job Search Platform",
    year: "2023",
    description:
      "Secure job search platform using JWT authentication, protected routing, REST APIs, and dynamic query filtering. Implemented efficient state management and loading indicators, reducing page load time by 20%.",
    tags: ["React", "React Router", "JavaScript", "REST APIs", "JWT", "CSS"],
    link: "https://jobsAppharsh.ccbp.tech",
    color: "#4ade80",
    icon: "💼",
    metrics: [
      { label: "Load", val: "-20%" },
      { label: "Auth", val: "JWT" },
      { label: "Filter", val: "Dynamic" },
    ],
  },
];
