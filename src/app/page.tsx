import { ArrowRight, CheckCircle2, Layers3, MonitorSmartphone } from "lucide-react";

const proofPoints = [
  "Discovery, copy, UI, and testing stay in one tracked workflow.",
  "Every page ships with responsive layout and accessibility checks.",
  "Agent decisions are written down before implementation expands.",
];

const services = [
  {
    title: "Brand site",
    description: "A sharp public website with clear positioning, pages, and conversion paths.",
  },
  {
    title: "Product UI",
    description: "Interactive flows, dashboards, and forms designed for repeated real use.",
  },
  {
    title: "Launch system",
    description: "Testing, deployment readiness, and agent memory for future iteration.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header" aria-label="Primary">
        <a className="brand" href="#top" aria-label="Digital home">
          <span className="brand-mark" aria-hidden="true" />
          <span>Digital</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Agent-first web studio</p>
          <h1>Build a website that can keep improving after launch.</h1>
          <p className="hero-text">
            A focused starter for turning product intent into a fast, tested, responsive website.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">
              Start project
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-action" href="#process">
              View process
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Website launch dashboard preview">
          <div className="preview-bar">
            <span />
            <span />
            <span />
          </div>
          <div className="preview-grid">
            <div className="preview-panel preview-panel-wide">
              <MonitorSmartphone size={24} aria-hidden="true" />
              <strong>Responsive launch</strong>
            </div>
            <div className="preview-panel">
              <span className="metric">98</span>
              <span>Quality</span>
            </div>
            <div className="preview-panel">
              <Layers3 size={24} aria-hidden="true" />
              <span>Reusable sections</span>
            </div>
            <div className="preview-panel preview-panel-accent">
              <CheckCircle2 size={24} aria-hidden="true" />
              <span>Verified</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Built for the first useful version.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="process-section">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>Short loops, clear evidence.</h2>
        </div>
        <ul className="proof-list">
          {proofPoints.map((point) => (
            <li key={point}>
              <CheckCircle2 size={20} aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">Next step</p>
          <h2>Start with the product brief.</h2>
        </div>
        <a className="primary-action" href="mailto:hello@example.com">
          Contact
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
