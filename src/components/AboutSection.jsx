import { motion } from "framer-motion";
import { Section, SectionLabel, SectionTitle, GradientText, StatCard } from "./ui/SharedUI";

export default function AboutSection({ theme }) {
  return (
    <Section id="about">
      <div className="mb-12">
        <SectionLabel theme={theme}>About Me</SectionLabel>
        <SectionTitle theme={theme}>
          The Dev
          <br />
          <GradientText theme={theme}>Behind the Code</GradientText>
        </SectionTitle>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `conic-gradient(from 0deg, ${theme.accent}, ${theme.cyan}, ${theme.pink}, ${theme.accent})`,
                padding: "2px",
              }}
            >
              <div className="w-full h-full rounded-3xl" style={{ background: theme.bg }} />
            </motion.div>
            <div
              className="absolute inset-1.5 rounded-3xl flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${theme.surface}, ${theme.surface2})`,
                border: `1px solid ${theme.border}`,
              }}
            >
              <span className="text-8xl">👨‍💻</span>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{
                background: `linear-gradient(135deg, ${theme.accent}, #8b7cf8)`,
                color: "#fff",
                boxShadow: `0 4px 16px rgba(${theme.accentRgb},0.4)`,
              }}
            >
              ⚛️ React Dev
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full text-xs font-bold"
              style={{
                background: `linear-gradient(135deg, ${theme.cyan}, #0891b2)`,
                color: "#fff",
                boxShadow: `0 4px 16px rgba(34,211,238,0.4)`,
              }}
            >
              🟩 Node.js
            </motion.div>
          </div>
        </motion.div>

        {/* Bio */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
          >
            <h3 className="text-2xl font-black mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              Hi, I'm <GradientText theme={theme}>Harsha</GradientText> 👋
            </h3>
            <p className="text-sm leading-relaxed mb-3" style={{ color: theme.text2 }}>
              I'm a Full Stack Developer pursuing B.Tech in Electronics & Communication Engineering
              at M.J.R. College of Engineering & Technology, Pileru (CGPA: 7.8/10).
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: theme.text2 }}>
              My expertise spans the entire MERN stack — designing efficient REST APIs with Node.js
              & Express, and crafting responsive interfaces with React.js. I love solving real-world
              deployment challenges.
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: theme.text2 }}>
              Currently working as a Frontend & Backend Developer at{" "}
              <span style={{ color: theme.accent, fontWeight: 600 }}>
                Unified Mentor & SkillDzire
              </span>
              , building real-time applications and delivering optimized codebases.
            </p>

            {/* Education card */}
            <div
              className="p-4 rounded-xl mb-6"
              style={{ background: theme.surface, border: `1px solid ${theme.border}` }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <div className="text-sm font-bold" style={{ color: theme.text }}>
                    M.J.R. College of Engineering & Technology
                  </div>
                  <div className="text-xs" style={{ color: theme.text2 }}>
                    B.Tech ECE · Jun 2023 – May 2026 · CGPA: 7.8/10
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["💼 Open to Work", "🌐 Full Stack", "☁️ Cloud Deploy", "🔐 JWT / Auth", "📍 India"].map(
                (t, i) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs px-3 py-1.5 rounded-full font-semibold"
                    style={{
                      background: theme.surface2,
                      color: theme.text2,
                      border: `1px solid ${theme.border}`,
                    }}
                  >
                    {t}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
        <StatCard num="3+" label="Projects Built" icon="🚀" theme={theme} delay={0.1} />
        <StatCard num="7.8" label="CGPA Score" icon="🎓" theme={theme} delay={0.2} />
        <StatCard num="MERN" label="Stack Expert" icon="⚛️" theme={theme} delay={0.3} />
        <StatCard num="2026" label="Graduation" icon="🎯" theme={theme} delay={0.4} />
      </div>
    </Section>
  );
}
