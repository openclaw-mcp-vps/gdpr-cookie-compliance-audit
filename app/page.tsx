export default function Home() {
  const faqs = [
    {
      q: "What does the scanner check?",
      a: "It detects all cookies set by a website, checks for a valid consent banner, verifies the cookie policy page, and flags third-party trackers that require explicit user consent under GDPR."
    },
    {
      q: "Who is this for?",
      a: "EU-based web agencies managing client sites and small business owners who need to prove GDPR compliance without hiring a legal consultant."
    },
    {
      q: "What do I get in the audit report?",
      a: "A downloadable PDF listing every cookie found, its category (necessary, analytics, marketing), compliance status, and prioritised remediation steps."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automated GDPR Cookie{" "}
          <span className="text-[#58a6ff]">Compliance Scanner</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Scan any website in seconds. Detect non-compliant cookies, missing consent banners, and broken cookie policies — then download a ready-to-share PDF audit report.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for first scan. Cancel anytime.</p>
      </section>

      {/* Feature pills */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: "🔍", label: "Deep Cookie Scan", desc: "Headless Chrome crawls every page and records all cookies set." },
            { icon: "📋", label: "PDF Audit Report", desc: "Professional report you can hand to clients or regulators." },
            { icon: "⚡", label: "Instant Results", desc: "Full compliance analysis delivered in under 60 seconds." }
          ].map((f) => (
            <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.label}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited website scans",
              "Full cookie inventory per scan",
              "Consent banner & policy check",
              "Downloadable PDF audit report",
              "Third-party tracker detection",
              "Email delivery of reports"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} CookieAudit. Built for GDPR compliance.
      </footer>
    </main>
  );
}
