"use client";

import { Kicker } from "./shared";
import { useLanguage } from "./i18n";

export function AiSection() {
  const { locale, dictionary: t } = useLanguage();
  return (
    <section className="ai-section shell" id="ai"><div className="ai-card">
      <div className="ai-orb">✦</div><Kicker cyan>{t.ai.kicker}</Kicker><h2 className={locale === "fa" ? "!tracking-[-.025em]" : ""}>{t.ai.title}<br /><em>{t.ai.titleAccent}</em></h2><p>{t.ai.copy}</p>
      <div className={`prompt ${locale === "fa" ? "!text-right" : ""}`}><span>✦</span><div><small>{t.ai.ask}</small><b>{t.ai.prompt}</b></div><kbd>↵</kbd></div>
      <div className="ai-stats">{t.ai.stats.map(([value, label], index) => <span className={locale === "fa" && index > 0 ? "!border-l-0 !border-r !border-r-white/10" : ""} key={value}><b>{value}</b><small>{label}</small></span>)}</div>
    </div></section>
  );
}
