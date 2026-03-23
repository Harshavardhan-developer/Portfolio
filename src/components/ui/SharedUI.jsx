import { motion } from "framer-motion";

export function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionLabel({ children, theme }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
      style={{
        background: `rgba(${theme.accentRgb},0.12)`,
        color: theme.accent,
        border: `1px solid rgba(${theme.accentRgb},0.25)`,
      }}
    >
      <span style={{ fontSize: "0.4rem" }}>◆</span>
      {children}
    </motion.span>
  );
}

export function SectionTitle({ children, theme }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl sm:text-5xl font-black mb-4 leading-tight tracking-tight"
      style={{ fontFamily: "'Syne', sans-serif", color: theme.text }}
    >
      {children}
    </motion.h2>
  );
}

export function GradientText({ children, theme }) {
  const id = `gt-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <>
      <style>{`
        .${id} {
          background: linear-gradient(135deg, ${theme.accent}, ${theme.cyan}) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }
      `}</style>
      <span className={id}>{children}</span>
    </>
  );
}

export function StatCard({ num, label, icon, theme, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4, boxShadow: `0 12px 32px rgba(${theme.accentRgb},0.15)` }}
      className="p-5 rounded-2xl text-center"
      style={{ background: theme.surface, border: `1px solid ${theme.border}` }}
    >
      <div className="text-2xl mb-1">{icon}</div>
      <div
        className="text-2xl font-black"
        style={{ fontFamily: "'Syne', sans-serif", color: theme.accent }}
      >
        {num}
      </div>
      <div className="text-xs mt-1" style={{ color: theme.text3 }}>
        {label}
      </div>
    </motion.div>
  );
}