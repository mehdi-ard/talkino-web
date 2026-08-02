"use client";

import { Brand } from "./shared";
import { useLanguage } from "./i18n";

export function FinalCta() {
  const { locale, dictionary: t } = useLanguage();
  return <section className="cta shell" id="start"><div className="cta-glow" /><span className="cta-mark">✦</span><h2 className={locale === "fa" ? "!tracking-[-.025em]" : ""}>{t.cta.title}<br />{t.cta.titleSecond}</h2><p>{t.cta.copy}</p><a className="button light" href="#">{t.cta.button} <span>↗</span></a><small>{t.cta.note}</small></section>;
}

export function Footer() {
  const { locale, dictionary: t, setLocale } = useLanguage();
  return <footer><div className="footer-main shell"><div className="footer-brand"><Brand /><p>{t.footer.tagline}</p></div>{t.footer.columns.map(column => <div className="footer-column" key={column.title}><h3>{column.title}</h3>{column.links.map(link => <a href="#" key={link}>{link}</a>)}</div>)}</div><div className="footer-bottom shell"><span>{t.footer.rights}</span><div><a href="#">{t.footer.privacy}</a><a href="#">{t.footer.terms}</a><button className="cursor-pointer border-0 bg-transparent p-0 text-[9px] text-slate-400" type="button" onClick={() => setLocale(locale === "fa" ? "en" : "fa")}>{locale === "fa" ? "English" : "فارسی"}</button></div></div></footer>;
}
