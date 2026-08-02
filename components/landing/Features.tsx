"use client";

import { Icon, Kicker } from "./shared";
import { useLanguage } from "./i18n";

export function TrustedTeams() {
  const { dictionary: t } = useLanguage();
  return <section className="trust shell"><p>{t.trust}</p><div>{["Vertex", "Northstar", "Layers", "Metric", "Forma", "Craftwork"].map(team => <b key={team}>{team}</b>)}</div></section>;
}

export function FeaturesSection() {
  const { locale, dictionary: t } = useLanguage();
  return (
    <section className="section shell" id="features">
      <div className="section-heading"><div><Kicker>{t.features.kicker}</Kicker><h2 className={locale === "fa" ? "!tracking-[-.025em]" : ""}>{t.features.title}<br />{t.features.titleSecond}</h2></div><p>{t.features.copy}</p></div>
      <div className="feature-grid">{t.features.items.map((item, index) => <article className={`feature-card feature-${index + 1}`} key={item.title}><Icon>{item.icon}</Icon><h3>{item.title}</h3><p>{item.text}</p><a href="#solutions" aria-label={`${t.features.learnMore} ${item.title}`}>{t.features.explore} <span>→</span></a></article>)}</div>
    </section>
  );
}

export function BenefitsSection() {
  const { locale, dictionary: t } = useLanguage();
  return (
    <section className="section shell" id="pricing">
      <div className="section-heading compact"><div><Kicker>{t.benefits.kicker}</Kicker><h2 className={locale === "fa" ? "!tracking-[-.025em]" : ""}>{t.benefits.title}</h2></div><p>{t.benefits.copy}</p></div>
      <div className="mini-grid">{t.benefits.items.map(item => <article key={item.title}><Icon>{item.icon}</Icon><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </section>
  );
}
