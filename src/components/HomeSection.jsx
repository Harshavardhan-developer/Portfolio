import { motion } from "framer-motion";
import { GradientText } from "./ui/SharedUI";
import Typewriter from "./Typewriter";

export default function HomeSection({ theme }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Grid BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${theme.border}55 1px, transparent 1px), linear-gradient(90deg, ${theme.border}55 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.12, 0.18, 0.12] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 700, height: 700,
          background: `radial-gradient(circle, ${theme.accent} 0%, transparent 70%)`,
          top: "-200px", right: "-200px",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500, height: 500,
          background: `radial-gradient(circle, ${theme.cyan} 0%, transparent 70%)`,
          bottom: "-100px", left: "-100px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-medium"
          style={{ background: theme.surface, border: `1px solid ${theme.border2}`, color: theme.text2 }}
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 rounded-full"
            style={{ background: theme.green, boxShadow: `0 0 8px ${theme.green}` }}
          />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 18 }}
        >
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            <span style={{ color: theme.text }}>Harsha</span>
            <br />
            <GradientText theme={theme}>Vardhan</GradientText>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="text-xl sm:text-2xl font-light mb-4"
          style={{ color: theme.text2 }}
        >
          Full Stack Developer —{" "}
          <Typewriter
            words={["MERN Stack", "React.js", "Node.js", "REST APIs", "MongoDB"]}
            theme={theme}
          />
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="max-w-2xl mx-auto text-base leading-relaxed mb-10"
          style={{ color: theme.text2 }}
        >
          Building scalable web applications with modern technologies. Passionate about creating
          fast, accessible, and beautiful user experiences.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full font-bold text-white"
            style={{
              background: `linear-gradient(135deg, ${theme.accent}, #8b7cf8)`,
              boxShadow: `0 4px 24px rgba(${theme.accentRgb},0.45)`,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            View Projects ↓
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full font-semibold"
            style={{
              border: `1px solid ${theme.border2}`,
              color: theme.text,
              background: theme.surface,
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.35, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mt-10"
        >
          {["React", "Node.js", "MongoDB", "Express", "Tailwind", "JWT"].map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.07, duration: 0.4 }}
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                background: theme.surface2,
                color: theme.text2,
                border: `1px solid ${theme.border}`,
              }}
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: theme.text3 }}
      >
        <span
          className="text-xs tracking-widest font-semibold"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 rounded-full"
          style={{ background: `linear-gradient(to bottom, ${theme.accent}, transparent)` }}
        />
      </motion.div>
    </section>
  );
}