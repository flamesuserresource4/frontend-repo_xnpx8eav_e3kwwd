import { Mail, Linkedin, Github, MapPin, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
      <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-8 sm:pt-24">
        <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:gap-12">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/60 px-3 py-1 text-xs font-medium text-sky-700 shadow-sm backdrop-blur">
              <Rocket className="h-3.5 w-3.5" />
              Data Analyst • MS Data Science @ Stony Brook University
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Turning data into decisions
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              I design analytical systems, predictive models, and executive dashboards that move metrics. Proficient in Python, SQL, and modern BI tools with a strong focus on KPI design, automation, and clear communication.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="mailto:youremail@example.com"
                className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-white shadow transition hover:bg-slate-800"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                View Projects
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-sky-200 bg-sky-50 px-4 py-2 text-sky-700 shadow-sm transition hover:bg-sky-100"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> New York, USA
              </div>
              <span>Open to full-time and internship roles</span>
            </div>
          </div>

          <div className="relative w-full max-w-md flex-1 self-stretch md:self-auto">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-100 via-white to-emerald-50 p-6 shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.2),transparent_40%)]" />
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-white/80 ring-1 ring-slate-200 backdrop-blur" />
                  <h2 className="text-xl font-semibold text-slate-900">Your Name</h2>
                  <p className="text-slate-600">Data Analyst • BI & ML</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
