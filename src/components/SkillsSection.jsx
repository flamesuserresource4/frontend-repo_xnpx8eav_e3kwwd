import { Database, Server, PieChart, Code, Sparkles } from 'lucide-react';

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function Group({ icon: Icon, title, items }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <div className="rounded-md bg-emerald-100 p-2 text-emerald-700 ring-1 ring-emerald-200">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-center gap-2">
        <div className="rounded-md bg-slate-900 p-2 text-white">
          <Sparkles className="h-4 w-4" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Skills</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Group
          icon={Code}
          title="Programming"
          items={[
            'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'SQL'
          ]}
        />
        <Group
          icon={PieChart}
          title="BI & Visualization"
          items={[
            'Power BI', 'Tableau', 'KPI Dashboards', 'A/B Testing', 'Storytelling'
          ]}
        />
        <Group
          icon={Database}
          title="Data & Analytics"
          items={[
            'ETL', 'Data Cleaning', 'Forecasting', 'Regression', 'Window Functions', 'CTEs'
          ]}
        />
        <Group
          icon={Server}
          title="Platforms"
          items={[
            'AWS S3', 'Snowflake', 'Oracle', 'SAP HANA'
          ]}
        />
        <Group
          icon={Sparkles}
          title="Practices"
          items={[
            'KPIs', 'Automation', 'Stakeholder Reporting', 'Process Improvement'
          ]}
        />
      </div>
    </section>
  );
}
