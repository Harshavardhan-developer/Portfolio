import { useState } from "react";
import { motion} from "framer-motion";
import { Section, SectionLabel, SectionTitle, GradientText } from "./ui/SharedUI";

export default function ContactSection({ theme }) {
  return (
    <Section id="contact">
      <div className="mb-12">
        <SectionLabel theme={theme}>Contact</SectionLabel>
        <SectionTitle theme={theme}>
          Let's <GradientText theme={theme}>Connect</GradientText>
        </SectionTitle>
      </div>

      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: theme.text2 }}
          >
            I'm open to freelance work, full-time roles, and interesting
            collaborations. Feel free to connect with me through any of the
            platforms below.
          </p>

          <div className="flex flex-col gap-3">
            {[
              {
                icon: "📧",
                label: "Email",
                val: "nallavobul.reddigari@gmail.com",
                href: "mailto:nallavobul.reddigari@gmail.com",
              },
              {
                icon: "📱",
                label: "Phone",
                val: "+91 79933 20048",
                href: "tel:+917993320048",
              },
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
                whileHover={{
                  x: 6,
                  boxShadow: `0 4px 20px rgba(${theme.accentRgb},0.12)`,
                }}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                style={{
                  background: theme.surface,
                  border: `1px solid ${theme.border}`,
                }}
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
                  <div
                    className="text-xs font-semibold"
                    style={{ color: theme.text3 }}
                  >
                    {item.label}
                  </div>

                  <div
                    className="text-sm font-medium truncate"
                    style={{ color: theme.text }}
                  >
                    {item.val}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
