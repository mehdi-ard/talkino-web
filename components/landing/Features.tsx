import { benefits, features } from "./data";
import { Icon, Kicker } from "./shared";

export function TrustedTeams() {
  return <section className="trust shell"><p>Trusted by focused teams at</p><div>{["Vertex", "Northstar", "Layers", "Metric", "Forma", "Craftwork"].map(team => <b key={team}>{team}</b>)}</div></section>;
}

export function FeaturesSection() {
  return (
    <section className="section shell" id="features">
      <div className="section-heading"><div><Kicker>EVERYTHING IN ONE PLACE</Kicker><h2>Less noise.<br />More momentum.</h2></div><p>Talkino brings your team&apos;s communication into one thoughtfully designed workspace, so everyone can focus on the work that matters.</p></div>
      <div className="feature-grid">{features.map((item, index) => <article className={`feature-card feature-${index + 1}`} key={item.title}><Icon>{item.icon}</Icon><h3>{item.title}</h3><p>{item.text}</p><a href="#solutions" aria-label={`Learn more about ${item.title}`}>Explore feature <span>→</span></a></article>)}</div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className="section shell" id="pricing">
      <div className="section-heading compact"><div><Kicker>BUILT DIFFERENT</Kicker><h2>Made for modern work.</h2></div><p>Thoughtful by default. Powerful when you need it. Secure at every layer.</p></div>
      <div className="mini-grid">{benefits.map(item => <article key={item.title}><Icon>{item.icon}</Icon><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </section>
  );
}
