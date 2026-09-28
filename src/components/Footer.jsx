import { motion } from "framer-motion";
import { SOCIALS } from "../data/socialsData";

export default function Footer({ theme }) {
  const projects = [
    {
      name: "Job Market Analysis",
      github:
        "https://github.com/Harshavardhan-developer/Job-Market-Analysis",
    },
    {
      name: "InsightFlow",
      github: "https://github.com/Harshavardhan-developer/InsightFlow",
      live: "https://insightflow-harsha.streamlit.app/",
    },
    {
      name: "Hotel Bar Forecasting",
      github:
        "https://github.com/Harshavardhan-developer/Hotel-Bar-Inventory-Forecasting-Par-Level-Recommendation-System",
    },
    {
      name: "Roofing Estimator",
      github:
        "https://github.com/Harshavardhan-developer/roof-estimator",
      live: "https://roof-estimator-gamma.vercel.app/",
    },
    {
      name: "Travel Unbounded",
      github:
        "https://github.com/Harshavardhan-developer/TRAVEL-UNBOUNDED",
      live: "https://travel-unbounded-woad.vercel.app/",
    },
    {
      name: "TaskFlow",
      github:
        "https://github.com/Harshavardhan-developer/TaskFlow",
      live: "https://taskflow-fawn-sigma.vercel.app/",
    },
    {
      name: "Jobby App",
      live: "https://jobsAppharsh.ccbp.tech",
    },
    {
      name: "Weather App",
      live: "https://weather-apr.vercel.app",
    },
  ];

  return (
    <footer
      style={{
        background: theme.bg2,
        borderTop: `1px solid ${theme.border}`,
      }}
    >
      <style>{`
        .footer-logo {
          background: linear-gradient(
            135deg,
            ${theme.accent},
            ${theme.cyan}
          ) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          font-family: 'Syne', sans-serif;
          font-weight: 900;
          font-size: 1.25rem;
          display: block;
          margin-bottom: 0.75rem;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        <div className="grid sm:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <span className="footer-logo">
              &lt;Harsha /&gt;
            </span>

            <p
              className="text-xs leading-relaxed"
              style={{ color: theme.text2 }}
            >
              Full Stack Developer working across modern web development,
              Python, data analytics, and machine learning. Building
              practical, scalable, and user-focused applications.
            </p>

            {/* Social Links */}
            <div className="flex gap-2 mt-4">
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                  style={{
                    background: theme.surface,
                    border: `1px solid ${theme.border}`,
                    color: theme.text2,
                  }}
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: theme.text3 }}
            >
              Navigation
            </h4>

            <ul className="flex flex-col gap-2">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "contact",
              ].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l}`}
                    className="text-sm capitalize transition-colors"
                    style={{ color: theme.text2 }}
                    onMouseEnter={(e) =>
                      (e.target.style.color = theme.accent)
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.color = theme.text2)
                    }
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: theme.text3 }}
            >
              Projects
            </h4>

            <ul className="flex flex-col gap-3">
              {projects.map((project) => (
                <li
                  key={project.name}
                  className="flex items-center justify-between gap-2"
                >
                  {/* Project Name */}
                  <span
                    className="text-sm"
                    style={{ color: theme.text2 }}
                  >
                    {project.name}
                  </span>

                  {/* Links */}
                  <div className="flex items-center gap-2 text-xs">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors"
                        style={{ color: theme.cyan }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = theme.accent)
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color = theme.cyan)
                        }
                      >
                        Live ↗
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors"
                        style={{ color: theme.text3 }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = theme.accent)
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color = theme.text3)
                        }
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{
            borderTop: `1px solid ${theme.border}`,
          }}
        >
          <p
            className="text-xs"
            style={{ color: theme.text3 }}
          >
            © 2026{" "}
            <span style={{ color: theme.accent }}>
              Harsha Vardhan Reddy
            </span>
            . Crafted with{" "}
            <span style={{ color: theme.pink }}>♥</span> in India.
          </p>

          <p
            className="text-xs"
            style={{ color: theme.text3 }}
          >
            Built with React · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

