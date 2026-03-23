import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionLabel, SectionTitle, GradientText } from "./ui/SharedUI";

function InputField({ label, id, type = "text", value, onChange, placeholder, theme }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-bold mb-2 tracking-wider uppercase"
        style={{ color: theme.text3 }}
      >
        {label}
      </label>
      <motion.input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        whileFocus={{
          borderColor: theme.accent,
          boxShadow: `0 0 0 3px rgba(${theme.accentRgb},0.15)`,
        }}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
        style={{
          background: theme.bg2,
          border: `1px solid ${theme.border}`,
          color: theme.text,
          fontFamily: "'DM Sans', sans-serif",
        }}
      />
    </div>
  );
}

function ContactForm({ theme }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "⚠️ Please fill in all required fields." });
      return;
    }
    setLoading(true);
    setStatus(null);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setStatus({ type: "success", msg: "✅ Message sent! I'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form onSubmit={submit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Name *"
          id="name"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          placeholder="John Doe"
          theme={theme}
        />
        <InputField
          label="Email *"
          id="email"
          type="email"
          value={form.email}
          onChange={(v) => setForm({ ...form, email: v })}
          placeholder="john@example.com"
          theme={theme}
        />
      </div>
      <InputField
        label="Subject"
        id="subject"
        value={form.subject}
        onChange={(v) => setForm({ ...form, subject: v })}
        placeholder="Collaboration / Opportunity"
        theme={theme}
      />
      <div>
        <label
          className="block text-xs font-bold mb-2 tracking-wider uppercase"
          style={{ color: theme.text3 }}
        >
          Message *
        </label>
        <motion.textarea
          whileFocus={{
            borderColor: theme.accent,
            boxShadow: `0 0 0 3px rgba(${theme.accentRgb},0.15)`,
          }}
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about your project..."
          className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all"
          style={{
            background: theme.bg2,
            border: `1px solid ${theme.border}`,
            color: theme.text,
            fontFamily: "'DM Sans', sans-serif",
          }}
        />
      </div>
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 text-sm"
        style={{
          background: `linear-gradient(135deg, ${theme.accent}, #8b7cf8)`,
          boxShadow: `0 4px 20px rgba(${theme.accentRgb},0.4)`,
          opacity: loading ? 0.7 : 1,
          fontFamily: "'Syne', sans-serif",
        }}
      >
        {loading ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              ⏳
            </motion.span>
            Sending...
          </>
        ) : (
          <>Send Message 🚀</>
        )}
      </motion.button>
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="p-3 rounded-xl text-sm font-medium"
            style={{
              background:
                status.type === "success" ? "rgba(74,222,128,0.1)" : "rgba(248,113,113,0.1)",
              border: `1px solid ${
                status.type === "success"
                  ? "rgba(74,222,128,0.3)"
                  : "rgba(248,113,113,0.3)"
              }`,
              color: status.type === "success" ? theme.green : "#f87171",
            }}
          >
            {status.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export default function ContactSection({ theme }) {
  return (
    <Section id="contact">
      <div className="mb-12">
        <SectionLabel theme={theme}>Contact</SectionLabel>
        <SectionTitle theme={theme}>
          Let's <GradientText theme={theme}>Connect</GradientText>
        </SectionTitle>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <p className="text-sm leading-relaxed mb-8" style={{ color: theme.text2 }}>
            I'm open to freelance work, full-time roles, and interesting collaborations. Drop me a
            message — I respond quickly!
          </p>
          <div className="flex flex-col gap-3 mb-8">
            {[
              {
                icon: "📧",
                label: "Email",
                val: "nallavobul.reddigari@gmail.com",
                href: "mailto:nallavobul.reddigari@gmail.com",
              },
              { icon: "📱", label: "Phone", val: "+91 79933 20048", href: "tel:+917993320048" },
              {
                icon: "💼",
                label: "LinkedIn",
                val: "View Profile →",
                href: "https://www.linkedin.com/in/nallavobul-reddigari-harshavardhan-reddy-6315222a7/",
              },
              {
                icon: "🐙",
                label: "GitHub",
                val: "Harshavardhan-developer",
                href: "https://github.com/Harshavardhan-developer",
              },
              {
                icon: "✖",
                label: "X (Twitter)",
                val: "@NallavobulR",
                href: "https://x.com/NallavobulR",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ x: 6, boxShadow: `0 4px 20px rgba(${theme.accentRgb},0.12)` }}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                style={{ background: theme.surface, border: `1px solid ${theme.border}` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                  style={{
                    background: `rgba(${theme.accentRgb},0.12)`,
                    border: `1px solid rgba(${theme.accentRgb},0.25)`,
                  }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold" style={{ color: theme.text3 }}>
                    {item.label}
                  </div>
                  <div className="text-sm font-medium truncate" style={{ color: theme.text }}>
                    {item.val}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
          className="p-6 rounded-2xl relative overflow-hidden"
          style={{ background: theme.surface, border: `1px solid ${theme.border}` }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{
              background: `linear-gradient(90deg, ${theme.accent}, ${theme.cyan}, transparent)`,
            }}
          />
          <h3
            className="text-xl font-black mb-6"
            style={{ fontFamily: "'Syne', sans-serif", color: theme.text }}
          >
            Send a Message ✉️
          </h3>
          <ContactForm theme={theme} />
        </motion.div>
      </div>
    </Section>
  );
}
