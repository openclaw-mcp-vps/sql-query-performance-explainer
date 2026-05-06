export default function Home() {
  const faqs = [
    {
      q: 'What SQL databases are supported?',
      a: 'PostgreSQL, MySQL, SQLite, and SQL Server execution plans are all supported. Paste your EXPLAIN or EXPLAIN ANALYZE output and get instant visual breakdowns.'
    },
    {
      q: 'How does the visual explanation work?',
      a: 'We parse your execution plan, identify sequential scans, missing indexes, nested loop inefficiencies, and high-cost nodes, then render an interactive diagram with color-coded bottlenecks and fix suggestions.'
    },
    {
      q: 'Is my query data stored or shared?',
      a: 'No. Queries and execution plans are processed in-memory and never persisted to disk or shared with third parties. Your schema stays private.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          Database Visualization
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop Guessing Why Your{' '}
          <span className="text-[#58a6ff]">SQL Queries Are Slow</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Paste your SQL query and execution plan. Get an interactive visual breakdown of every bottleneck — missing indexes, sequential scans, costly joins — with specific fixes you can apply right now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start Optimizing — $22/mo
          </a>
          <a
            href="#how-it-works"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-xs text-[#6e7681]">No credit card required for the first analysis. Cancel anytime.</p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Paste Your Query', desc: 'Drop in your SQL and the EXPLAIN output from your database.' },
            { step: '02', title: 'Visual Analysis', desc: 'Our engine maps every node, cost, and row estimate into an interactive diagram.' },
            { step: '03', title: 'Fix It Fast', desc: 'Receive ranked recommendations: add this index, rewrite that join, avoid that scan.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-xs font-bold tracking-widest mb-2">{step}</div>
              <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$22</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited query analyses',
              'Interactive execution plan diagrams',
              'Index & rewrite recommendations',
              'PostgreSQL, MySQL, SQLite, SQL Server',
              'Export reports as PDF or PNG',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} SQL Query Performance Explainer. All rights reserved.
      </footer>
    </main>
  )
}
