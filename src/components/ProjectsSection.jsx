import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { PROJECTS } from "../data/projectsData";
import { Section, SectionLabel, SectionTitle, GradientText } from "./ui/SharedUI";

function TimelineProject({ project, side, theme }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`relative flex items-center gap-0 ${
        side === "right" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: side === "left" ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
        className="w-[calc(50%-40px)] relative"
        style={{ [side === "left" ? "marginRight" : "marginLeft"]: "auto" }}
      >
        <motion.div
          whileHover={{ y: -6, boxShadow: `0 24px 60px ${project.color}22` }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="rounded-2xl p-6 relative overflow-hidden"
          style={{ background: theme.surface, border: `1px solid ${theme.border}` }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
          />
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${project.color}12 0%, transparent 70%)`,
            }}
          />

          <div className="flex items-start justify-between mb-3">
            <span
              className="text-xs font-bold tracking-widest uppercase px-2 py-1 rounded-full"
              style={{
                background: `${project.color}18`,
                color: project.color,
                border: `1px solid ${project.color}33`,
              }}
            >
              {project.year}
            </span>
            <span className="text-3xl">{project.icon}</span>
          </div>

          <h3
            className="text-xl font-black mb-1"
            style={{ fontFamily: "'Syne', sans-serif", color: theme.text }}
          >
            {project.title}
          </h3>
          <p className="text-sm font-medium mb-3" style={{ color: project.color }}>
            {project.subtitle}
          </p>
          <p className="text-sm leading-relaxed mb-4" style={{ color: theme.text2 }}>
            {project.description}
          </p>

          {/* Metrics */}
          <div className="flex gap-3 mb-4">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="text-center px-3 py-1.5 rounded-xl"
                style={{ background: theme.bg3, border: `1px solid ${theme.border}` }}
              >
                <div className="text-xs font-bold" style={{ color: project.color }}>
                  {m.val}
                </div>
                <div className="text-[10px]" style={{ color: theme.text3 }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((t, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
                style={{
                  background: theme.surface2,
                  color: theme.text3,
                  border: `1px solid ${theme.border}`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {project.link !== "#" && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold"
              style={{
                background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                color: "#fff",
                boxShadow: `0 4px 16px ${project.color}44`,
              }}
            >
              Live Demo ↗
            </motion.a>
          )}
        </motion.div>

        {/* Connector arrow */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-8 h-0.5"
          style={{
            [side === "left" ? "right" : "left"]: "-32px",
            background: `linear-gradient(${
              side === "left" ? "90deg" : "270deg"
            }, ${project.color}, transparent)`,
          }}
        />
      </motion.div>

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.05 }}
        className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center"
        style={{ width: 48, height: 48 }}
      >
        <motion.div
          animate={{
            boxShadow: [
              `0 0 0 0 ${project.color}44`,
              `0 0 0 12px ${project.color}00`,
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
          style={{
            background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
            border: `2px solid ${project.color}88`,
          }}
        >
          {project.icon}
        </motion.div>
      </motion.div>

      {/* Spacer */}
      <div className="w-[calc(50%-40px)]" />
    </div>
  );
}

export default function ProjectsSection({ theme }) {
  const containerRef = useRef(null);

  // Track scroll progress through the projects section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  });

  // The fill line grows from 0% to 100% as you scroll
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // The light beam position travels down the line
  const beamY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="projects">
      <div className="mb-12">
        <SectionLabel theme={theme}>Projects</SectionLabel>
        <SectionTitle theme={theme}>
          Things I've <GradientText theme={theme}>Built</GradientText>
        </SectionTitle>
      </div>

      {/* Vertical Timeline */}
      <div className="relative" ref={containerRef}>

        {/* ── BASE LINE (static, faint) ── */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-px hidden md:block"
          style={{
            background: `linear-gradient(to bottom, transparent, ${theme.border2}88, ${theme.border2}88, transparent)`,
          }}
        />

        {/* ── SCROLL-FILL LINE (grows as you scroll) ── */}
        <motion.div
          className="absolute left-1/2 top-0 w-px -translate-x-px hidden md:block overflow-hidden origin-top"
          style={{ height: lineHeight }}
        >
          {/* Solid filled portion */}
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(to bottom, ${theme.accent}, ${theme.cyan})`,
            }}
          />
        </motion.div>

        {/* ── LIGHT BEAM (glowing orb that travels down) ── */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 hidden md:block pointer-events-none z-20"
          style={{ top: beamY }}
        >
          {/* Outer glow */}
          <div
            style={{
              width: 2,
              height: 80,
              background: `linear-gradient(to bottom, transparent, ${theme.accent}, ${theme.cyan}, transparent)`,
              filter: `blur(1px)`,
              transform: "translateX(-50%)",
              marginLeft: "1px",
            }}
          />
          {/* Bright core spark */}
          <motion.div
            animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "38px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#fff",
              boxShadow: `0 0 6px 2px ${theme.accent}, 0 0 18px 4px ${theme.cyan}88`,
            }}
          />
          {/* Wide halo */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "38px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${theme.accent}55 0%, transparent 70%)`,
            }}
          />
        </motion.div>

        {/* Desktop timeline cards */}
        <div className="hidden md:flex flex-col gap-16">
          {PROJECTS.map((p, i) => (
            <TimelineProject
              key={p.id}
              project={p}
              side={i % 2 === 0 ? "left" : "right"}
              theme={theme}
            />
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden flex flex-col gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{ background: theme.surface, border: `1px solid ${theme.border}` }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
              />
              <div className="flex justify-between items-start mb-3">
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{ background: `${p.color}18`, color: p.color }}
                >
                  {p.year}
                </span>
                <span className="text-3xl">{p.icon}</span>
              </div>
              <h3
                className="text-lg font-black mb-1"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {p.title}
              </h3>
              <p className="text-xs font-medium mb-2" style={{ color: p.color }}>
                {p.subtitle}
              </p>
              <p className="text-xs leading-relaxed mb-3" style={{ color: theme.text2 }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{
                      background: theme.surface2,
                      color: theme.text3,
                      border: `1px solid ${theme.border}`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link !== "#" && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)` }}
                >
                  Live Demo ↗
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}