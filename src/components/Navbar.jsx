import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResizableNavbar({ darkMode, setDarkMode, theme }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["home", "about", "skills", "projects", "contact"];

  return (
    <>
      <style>{`
        .nav-logo {
          background: linear-gradient(135deg, ${theme.accent}, ${theme.cyan}) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          letter-spacing: -0.02em;
          white-space: nowrap;
          text-decoration: none;
        }
      `}</style>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="fixed top-4 z-50 flex items-center justify-between"
        style={{
          left: "50%",
          x: "-50%",
          width: scrolled ? "min(700px, calc(100vw - 32px))" : "min(900px, calc(100vw - 32px))",
          background: darkMode ? "rgba(8,8,20,0.82)" : "rgba(240,240,250,0.88)",
          backdropFilter: "blur(24px) saturate(200%)",
          WebkitBackdropFilter: "blur(24px) saturate(200%)",
          border: `1px solid ${theme.border}`,
          borderRadius: "999px",
          padding: scrolled ? "8px 20px" : "12px 28px",
          boxShadow: scrolled
            ? `0 8px 40px rgba(0,0,0,0.35),0 0 0 1px ${theme.border2},inset 0 1px 0 rgba(255,255,255,0.06)`
            : `0 4px 24px rgba(0,0,0,0.20),0 0 0 1px ${theme.border}`,
          transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="nav-logo"
          style={{ fontSize: scrolled ? "1rem" : "1.15rem" }}
        >
          &lt;Harsha /&gt;
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className="relative px-4 py-2 text-sm font-medium capitalize transition-all duration-300"
              style={{
                color: active === l ? theme.text : theme.text2,
                borderRadius: "999px",
              }}
            >
              {active === l && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: theme.surface2,
                    border: `1px solid ${theme.border2}`,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 35 }}
                />
              )}
              <span className="relative z-10">{l}</span>
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all duration-300"
            style={{
              background: theme.surface2,
              border: `1px solid ${theme.border}`,
              color: theme.text2,
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </motion.button>
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: theme.surface2, border: `1px solid ${theme.border}` }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="text-sm" style={{ color: theme.text }}>
              {mobileOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl p-4 flex flex-col gap-2"
            style={{
              background: darkMode ? "rgba(12,12,20,0.97)" : "rgba(248,248,255,0.97)",
              backdropFilter: "blur(20px)",
              border: `1px solid ${theme.border}`,
              boxShadow: `0 20px 60px rgba(0,0,0,0.4)`,
            }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l}`}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 rounded-xl capitalize font-semibold text-base transition-all"
                style={{
                  color: active === l ? theme.accent : theme.text2,
                  background: active === l ? `rgba(${theme.accentRgb},0.1)` : theme.surface,
                  border: `1px solid ${active === l ? theme.border2 : theme.border}`,
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}