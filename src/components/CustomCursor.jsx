import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor({ theme }) {
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [label, setLabel] = useState("");

  // Raw mouse position
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Outer ring - smooth lag
  const outerX = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.5 });
  const outerY = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.5 });

  // Inner dot - snappy
  const innerX = useSpring(rawX, { stiffness: 400, damping: 28, mass: 0.2 });
  const innerY = useSpring(rawY, { stiffness: 400, damping: 28, mass: 0.2 });

  useEffect(() => {
    const move = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setHidden(false);
    };

    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    // Detect hoverable elements
    const onOver = (e) => {
      const el = e.target.closest("a, button, [data-cursor]");
      if (el) {
        setHovered(true);
        setLabel(el.dataset.cursor || "");
      }
    };
    const onOut = (e) => {
      const el = e.target.closest("a, button, [data-cursor]");
      if (el) {
        setHovered(false);
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [rawX, rawY]);

  return (
    <>
      {/* Hide default cursor globally */}
      <style>{`* { cursor: none !important; }`}</style>

      {/* ── OUTER RING ── */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 99999,
        }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: clicked ? 0.75 : hovered ? 1.8 : 1,
        }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 22 }, opacity: { duration: 0.2 } }}
      >
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: `1.5px solid transparent`,
            background: `linear-gradient(${theme.bg}, ${theme.bg}) padding-box, linear-gradient(135deg, ${theme.accent}, ${theme.cyan}, ${theme.pink}) border-box`,
          }}
        />

        {/* Label on hover */}
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "9px",
              fontWeight: 700,
              fontFamily: "'Syne', sans-serif",
              color: theme.accent,
              whiteSpace: "nowrap",
              letterSpacing: "0.05em",
            }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* ── INNER DOT ── */}
      <motion.div
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 99999,
        }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: clicked ? 0.4 : hovered ? 0 : 1,
          width: 6,
          height: 6,
        }}
        transition={{ scale: { type: "spring", stiffness: 500, damping: 30 }, opacity: { duration: 0.15 } }}
      >
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: `linear-gradient(135deg, ${theme.accent}, ${theme.cyan})`,
            boxShadow: `0 0 8px ${theme.accent}`,
          }}
        />
      </motion.div>

      {/* ── CLICK BURST ── */}
      {clicked && (
        <motion.div
          style={{
            position: "fixed",
            top: 0, left: 0,
            x: innerX,
            y: innerY,
            translateX: "-50%",
            translateY: "-50%",
            pointerEvents: "none",
            zIndex: 99998,
          }}
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              border: `1px solid ${theme.accent}`,
            }}
          />
        </motion.div>
      )}
    </>
  );
}