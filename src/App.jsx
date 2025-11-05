import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';

function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="text-sm font-semibold tracking-tight text-slate-900">
          <span className="rounded-md bg-slate-900 px-2 py-1 text-white">DA</span> Portfolio
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
          <a className="hover:text-slate-900" href="#experience">Experience</a>
          <a className="hover:text-slate-900" href="#projects">Projects</a>
          <a className="hover:text-slate-900" href="#skills">Skills</a>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Your Name • Data Analyst & BI Engineer</p>
        </div>
      </footer>
    </div>
  );
}
