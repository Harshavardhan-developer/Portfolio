import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SKILLS } from "../data/skillsData";
import { SectionLabel, SectionTitle, GradientText } from "./ui/SharedUI";

function SkillOrb({ skill, theme, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7, rotateY: -30 }}
      animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ delay: index * 0.04, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.08, rotateY: 8, z: 30 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl cursor-default select-none"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${skill.color}22, ${skill.color}08)`
          : theme.surface,
        border: `1px solid ${hovered ? skill.color + "66" : theme.border}`,
        boxShadow: hovered ? `0 8px 32px ${skill.color}33, 0 0 0 1px ${skill.color}44` : "none",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        transformStyle: "preserve-3d",
        aspectRatio: "1",
        minWidth: 0,
      }}
    >
      {hovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ boxShadow: `inset 0 0 20px ${skill.color}22` }}
        />
      )}
      <span
        className="text-2xl leading-none"
        style={{ filter: hovered ? "drop-shadow(0 0 8px currentColor)" : "none" }}
      >
        {skill.icon}
      </span>
      <span
        className="text-xs font-bold text-center leading-tight"
        style={{ color: hovered ? skill.color : theme.text2, fontFamily: "'Syne', sans-serif" }}
      >
        {skill.name}
      </span>
      {/* Level bar */}
      <div className="w-full h-0.5 rounded-full overflow-hidden" style={{ background: theme.border }}>
        <motion.div
          className="h-full rounded-full"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: skill.level / 100 } : { scaleX: 0 }}
          transition={{ delay: index * 0.04 + 0.3, duration: 1, ease: [0.4, 0, 0.2, 1] }}
          style={{
            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
            transformOrigin: "left",
          }}
        />
      </div>
      {/* Category tag */}
      <span
        className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold tracking-wider"
        style={{
          background: `${skill.color}18`,
          color: skill.color,
          border: `1px solid ${skill.color}33`,
        }}
      >
        {skill.cat}
      </span>
    </motion.div>
  );
}

export default function SkillsSection({ theme }) {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6"
      style={{
        background: `linear-gradient(180deg, ${theme.bg} 0%, ${theme.bg2} 50%, ${theme.bg} 100%)`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <SectionLabel theme={theme}>Technical Skills</SectionLabel>
          <SectionTitle theme={theme}>
            My <GradientText theme={theme}>Toolkit</GradientText>
          </SectionTitle>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm max-w-lg"
            style={{ color: theme.text2 }}
          >
            Technologies I use to bring ideas to life — hover to explore proficiency levels.
          </motion.p>
        </div>

        <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))" }}>
          {SKILLS.map((skill, i) => (
            <SkillOrb key={skill.name} skill={skill} theme={theme} index={i} />
          ))}
        </div>

        {/* Category legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {["Frontend", "Backend", "Database", "Language", "Tools"].map((cat) => {
            const skill = SKILLS.find((s) => s.cat === cat);
            return (
              <span
                key={cat}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                style={{
                  background: theme.surface,
                  border: `1px solid ${theme.border}`,
                  color: theme.text2,
                }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: skill?.color }} />
                {cat}
              </span>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
