import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Typewriter({ words, theme }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    let timeout;
    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, words]);

  return (
    <span style={{ color: theme.accent }}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
        style={{ borderRight: `2px solid ${theme.accent}`, marginLeft: 2 }}
      />
    </span>
  );
}
