import { useState, useEffect } from 'react'

// Theme
import { THEME } from './theme'

// Effects
import { ParticleField, Spotlight } from './components/effects/BackgroundEffects'

// Layout
import ResizableNavbar from './components/Navbar'
import FloatingDock from './components/FloatingDock'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

// Sections
import HomeSection from './components/HomeSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const theme = darkMode ? THEME.dark : THEME.light

  // Inject Google Fonts
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap'
    document.head.appendChild(link)
  }, [])

  return (
    <div
      style={{
        background: theme.bg,
        color: theme.text,
        minHeight: '100vh',
        transition: 'background 0.4s ease, color 0.4s ease',
      }}
    >
      {/* ── Custom Cursor ── */}
      <CustomCursor theme={theme} />

      {/* ── Global Effects ── */}
      <ParticleField theme={theme} />
      <Spotlight theme={theme} />

      {/* ── Navigation ── */}
      <ResizableNavbar darkMode={darkMode} setDarkMode={setDarkMode} theme={theme} />

      {/* ── Floating Social Dock ── */}
      <FloatingDock theme={theme} />

      {/* ── Page Sections ── */}
      <HomeSection theme={theme} />
      <AboutSection theme={theme} />
      <SkillsSection theme={theme} />
      <ProjectsSection theme={theme} />
      <ContactSection theme={theme} />

      {/* ── Footer ── */}
      <Footer theme={theme} />

      {/* Bottom padding for dock */}
      <div className="h-24" />
    </div>
  )
}