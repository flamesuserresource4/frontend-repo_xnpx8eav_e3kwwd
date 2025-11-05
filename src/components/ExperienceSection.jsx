import { Briefcase, GraduationCap } from 'lucide-react';

function Item({ title, subtitle, period, bullets }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </div>
        <span className="text-xs font-medium text-slate-500">{period}</span>
      </div>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-center gap-2">
        <div className="rounded-md bg-slate-900 p-2 text-white">
          <Briefcase className="h-4 w-4" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Experience</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Item
          title="Research Assistant — Data Analyst"
          subtitle="Stony Brook University • Python, Pandas, SQL, ETL, AWS S3"
          period="Jan 2024 – Present"
          bullets={[
            'Led standardization across 1B+ EHR records; improved data consistency by 25%.',
            'Automated ETL from AWS S3; reduced refresh time from hours to minutes.',
            'Built bias-corrected dementia model (AUC ~0.87) with Balanced RF & Firth Logistic Regression.',
            'Designed interactive KPI/ROC dashboards cited for reproducibility and clarity.',
            'Mentored 5+ interns on wrangling and evaluation best practices.'
          ]}
        />

        <Item
          title="Data Analyst"
          subtitle="Accenture • Power BI, SQL, Python, SAP HANA, Oracle"
          period="Oct 2021 – Dec 2023"
          bullets={[
            'Automated KPI dashboards; cut reporting time by 35%.',
            'Standardized SQL across SAP HANA & Oracle; improved accuracy by 30%.',
            'Deployed automation scripts; boosted report generation speed by 40%.',
            'Launched real-time performance tracking adopted by multiple divisions.',
            'Trained associates in BI + SQL optimization and best practices.'
          ]}
        />
      </div>

      <div className="mt-10 flex items-center gap-2">
        <div className="rounded-md bg-slate-900 p-2 text-white">
          <GraduationCap className="h-4 w-4" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900">Education</h3>
      </div>
      <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-base font-semibold text-slate-900">MS in Data Science</p>
            <p className="text-sm text-slate-600">Stony Brook University • Coursework: Data Management, Statistical Computing, Statistical Learning, Data Analysis, Big Data Systems, LLM</p>
          </div>
          <span className="text-xs font-medium text-slate-500">Stony Brook, NY</span>
        </div>
      </div>
    </section>
  );
}
