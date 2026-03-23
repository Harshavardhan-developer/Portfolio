# Harsha Vardhan — Portfolio

A modern, animated portfolio built with **Vite + React + Framer Motion + Tailwind CSS**.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

---

## 📁 Project Structure

```
portfolio/
├── index.html                        # HTML entry point
├── vite.config.js                    # Vite configuration
├── tailwind.config.js                # Tailwind configuration
├── postcss.config.js                 # PostCSS configuration
├── package.json
└── src/
    ├── main.jsx                      # React entry point
    ├── App.jsx                       # Root component
    ├── index.css                     # Global styles + Tailwind directives
    ├── theme.js                      # Dark / Light theme tokens
    │
    ├── data/
    │   ├── skillsData.js             # Skills array
    │   ├── projectsData.js           # Projects array
    │   └── socialsData.js            # Social links + icons
    │
    └── components/
        ├── ui/
        │   └── SharedUI.jsx          # Section, SectionLabel, GradientText, StatCard
        ├── effects/
        │   └── BackgroundEffects.jsx # ParticleField, Spotlight
        ├── Navbar.jsx
        ├── FloatingDock.jsx
        ├── Typewriter.jsx
        ├── HomeSection.jsx
        ├── AboutSection.jsx
        ├── SkillsSection.jsx
        ├── ProjectsSection.jsx
        ├── ContactSection.jsx
        └── Footer.jsx
```

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [React 18](https://react.dev/) | UI library |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |

## 🌍 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# drag & drop the dist/ folder to netlify.com
```
