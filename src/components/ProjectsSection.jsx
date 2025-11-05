import { BarChart3, PieChart, Layers, Brain } from 'lucide-react';

function ProjectCard({ icon: Icon, title, stack, bullets }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="rounded-md bg-sky-100 p-2 text-sky-700 ring-1 ring-sky-200">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
          <p className="text-xs text-slate-600">{stack}</p>
        </div>
      </div>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-center gap-2">
        <div className="rounded-md bg-slate-900 p-2 text-white">
          <BarChart3 className="h-4 w-4" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Selected Projects</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ProjectCard
          icon={PieChart}
          title="Retail Sales Performance Dashboard"
          stack="Tableau, Excel, SQL"
          bullets={[
            'Built multi-page executive dashboard integrating sales, marketing, and inventory.',
            'Automated KPI tracking for revenue growth and retention; improved decision speed by 30%.',
            'Delivered seasonality-based forecasts guiding pricing and inventory.'
          ]}
        />
        <ProjectCard
          icon={Brain}
          title="Bank Customer Churn Prediction"
          stack="Python, Scikit-learn, Pandas, Matplotlib"
          bullets={[
            'Engineered behavioral features and trained ensemble models (~89% accuracy).',
            'Automated evaluation and visualization; reduced analysis time by 40%.',
            'Informed retention strategy with actionable churn indicators.'
          ]}
        />
        <ProjectCard
          icon={Layers}
          title="Business Revenue Optimization Dashboard"
          stack="Power BI, SQL, Excel"
          bullets={[
            'Unified dashboards for sales, campaigns, and customers; +25% profit-tracking accuracy.',
            'Dynamic DAX KPIs for ROI and conversion; reporting lag cut from days to minutes.',
            'Promoted self-service analytics adoption across business units.'
          ]}
        />
        <ProjectCard
          icon={BarChart3}
          title="Customer Sentiment Analysis"
          stack="Python, NLP (spaCy, TextBlob), Tableau"
          bullets={[
            'Processed 50K+ reviews into category/geography sentiment insights.',
            'Interactive Tableau visualizations for product and CX improvements.',
            'Proposed automated feedback monitoring for continuous evaluation.'
          ]}
        />
      </div>
    </section>
  );
}
