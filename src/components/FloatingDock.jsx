import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIALS } from "../data/socialsData";

function DockItem({ item, theme, hovered, setHovered, index }) {
  const dist = hovered !== null ? Math.abs(hovered - index) : 10;
  const scale = hovered !== null ? Math.max(1, 1.6 - dist * 0.25) : 1;

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <AnimatePresence>
        {hovered === index && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.85 }}
            className="absolute -top-10 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none"
            style={{
              background: theme.surface2,
              border: `1px solid ${theme.border2}`,
              color: theme.text,
              boxShadow: `0 4px 16px rgba(0,0,0,0.3)`,
            }}
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ scale, y: hovered === index ? -6 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="flex items-center justify-center rounded-xl transition-colors duration-300"
        style={{
          width: 44,
          height: 44,
          background: hovered === index ? `rgba(${theme.accentRgb},0.15)` : theme.surface2,
          border: `1px solid ${hovered === index ? theme.border2 : theme.border}`,
          color: hovered === index ? item.color : theme.text2,
          boxShadow: hovered === index ? `0 0 20px ${item.color}44` : "none",
        }}
        aria-label={item.label}
      >
        {item.icon}
      </motion.a>
    </div>
  );
}

export default function FloatingDock({ theme }) {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 25 }}
      className="fixed bottom-6 z-50 flex items-end gap-3 px-5 py-3 rounded-2xl"
      style={{
        left: "50%",
        x: "-50%",
        backdropFilter: "blur(20px)",
        border: `1px solid ${theme.border2}`,
        boxShadow: `0 8px 40px rgba(0,0,0,0.3),0 0 0 1px ${theme.border}`,
        background: "rgba(12,12,20,0.85)",
      }}
    >
      {SOCIALS.map((s, i) => (
        <DockItem
          key={i}
          item={s}
          theme={theme}
          hovered={hovered}
          setHovered={setHovered}
          index={i}
        />
      ))}
    </motion.div>
  );
}