export const PROJECTS = [
  {
    id: 1,
    title: "Job Market Analysis & Salary Prediction",
    subtitle: "End-to-End AI/ML & Data Analytics Platform",
    year: "2026",
    description:
      "End-to-end AI/ML platform that cleans and analyzes 6,000+ synthetic job postings, performs EDA and feature engineering, compares regression models, and predicts salary with explainable feature importance through a 7-page interactive Streamlit dashboard. Gradient Boosting achieved an R² of 0.9309 on the held-out test set.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Gradient Boosting",
      "Plotly",
      "Streamlit",
      "SQL",
      "Joblib",
    ],
    link: "https://github.com/Harshavardhan-developer/Job-Market-Analysis",
    color: "#f59e0b",
    icon: "🤖",
    metrics: [
      { label: "R²", val: "0.9309" },
      { label: "Dataset", val: "6K+" },
      { label: "Models", val: "3" },
    ],
  },

  {
    id: 2,
    title: "InsightFlow",
    subtitle: "Sales & Customer Data Analytics Platform",
    year: "2026",
    description:
      "End-to-end sales analytics platform processing 100K+ synthetic transaction records through a Python/Pandas ETL pipeline with data cleaning, outlier handling, feature engineering, RFM customer segmentation, SQL analysis, and an interactive Plotly/Streamlit dashboard with automated business insights.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "SQLite",
      "RFM Analysis",
      "Plotly",
      "Streamlit",
    ],
    link: "https://github.com/Harshavardhan-developer/InsightFlow",
    color: "#8b5cf6",
    icon: "📊",
    metrics: [
      { label: "Records", val: "100K+" },
      { label: "Customers", val: "7K+" },
      { label: "SQL", val: "15+" },
    ],
  },

  {
    id: 3,
    title: "Hotel Bar Inventory Forecasting",
    subtitle: "Demand Forecasting & Dynamic Par-Level Recommendation",
    year: "2026",
    description:
      "End-to-end inventory forecasting solution that analyzes 6,575 transaction records across 6 bars and 16 brands, generates demand forecasts, recommends dynamic par levels, and validates the inventory policy through historical simulation backtesting.",
    tags: [
      "Python",
      "Pandas",
      "Time Series",
      "Forecasting",
      "Inventory Optimization",
      "Backtesting",
      "Jupyter",
      "Data Analysis",
    ],
    link:
      "https://github.com/Harshavardhan-developer/Hotel-Bar-Inventory-Forecasting-Par-Level-Recommendation-System",
    color: "#14b8a6",
    icon: "📦",
    metrics: [
      { label: "Records", val: "6.5K+" },
      { label: "Series", val: "96" },
      { label: "Stockouts", val: "-61%" },
    ],
  },

  {
    id: 4,
    title: "Northline Roofing Estimator",
    subtitle: "Config-Driven Full-Stack Estimator & Owner Panel",
    year: "2026",
    description:
      "Full-stack configurable roofing estimator with a mobile-first multi-step customer wizard and JWT-protected owner dashboard. Pricing rules, questions, rates, and multipliers are managed through the backend, while customer estimates and leads are persisted through MongoDB.",
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Tailwind CSS",
    ],
    link: "https://github.com/Harshavardhan-developer/roof-estimator",
    color: "#ef4444",
    icon: "🏠",
    metrics: [
      { label: "Auth", val: "JWT" },
      { label: "Database", val: "MongoDB" },
      { label: "Panels", val: "2" },
    ],
  },

  {
    id: 5,
    title: "Travel Unbounded",
    subtitle: "Full-Stack Travel & Enquiry Platform",
    year: "2026",
    description:
      "Full-stack travel website built with Next.js featuring responsive destination packages, validated booking enquiries, server-side API validation, MongoDB Atlas persistence with a JSON fallback, an enquiry management page, SEO metadata, and responsive UI components.",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "MongoDB Atlas",
      "Mongoose",
      "REST API",
      "Vercel",
    ],
    link: "https://github.com/Harshavardhan-developer/TRAVEL-UNBOUNDED",
    color: "#06b6d4",
    icon: "✈️",
    metrics: [
      { label: "Framework", val: "Next.js 16" },
      { label: "Packages", val: "10" },
      { label: "Database", val: "MongoDB" },
    ],
  },

  {
    id: 6,
    title: "TaskFlow",
    subtitle: "MERN Stack Task Manager",
    year: "2024",
    description:
      "Full-stack task management application with JWT authentication, protected RESTful CRUD APIs, MongoDB Atlas persistence, task priorities and filtering, progress statistics, and responsive React UI.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Tailwind CSS",
      "JWT",
    ],
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
    id: 7,
    title: "Jobby App",
    subtitle: "Secure Job Search Platform",
    year: "2023",
    description:
      "Secure job search platform using JWT authentication, protected routing, REST APIs, dynamic query filtering, loading states, and responsive React components.",
    tags: [
      "React",
      "React Router",
      "JavaScript",
      "REST APIs",
      "JWT",
      "CSS",
    ],
    link: "https://jobsAppharsh.ccbp.tech",
    color: "#4ade80",
    icon: "💼",
    metrics: [
      { label: "Auth", val: "JWT" },
      { label: "Filter", val: "Dynamic" },
      { label: "Routing", val: "Protected" },
    ],
  },

  {
    id: 8,
    title: "Weather App",
    subtitle: "Real-Time Weather Dashboard",
    year: "2024",
    description:
      "Real-time weather dashboard using the OpenWeatherMap API with dynamic weather data, modular React components, API error handling, responsive UI, and optimized data fetching.",
    tags: [
      "React.js",
      "OpenWeatherMap API",
      "REST API",
      "JavaScript",
      "CSS",
    ],
    link: "https://weather-apr.vercel.app",
    color: "#22d3ee",
    icon: "🌤️",
    metrics: [
      { label: "API", val: "OWM" },
      { label: "UI", val: "Dynamic" },
      { label: "Data", val: "Real-time" },
    ],
  },
];
