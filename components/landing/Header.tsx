"use client";

import { Brand } from "./shared";
import { useLanguage } from "./i18n";

function NavLinks() {
  const { dictionary } = useLanguage();
  return <>{dictionary.navigation.map(({ label, href }) => <a href={href} key={href}>{label}</a>)}</>;
}

export function Header() {
  const { locale, dictionary: t } = useLanguage();
  return (
    <header className="nav-wrap">
      <nav className="nav shell" aria-label={t.header.navigation}>
        <a className="brand" href="#top" aria-label={t.header.home}><Brand priority /></a>
        <div className="nav-links"><NavLinks /></div>
        <div className="nav-actions"><LanguageSwitcher /><a className="sign-in" href="#">{t.header.signIn}</a><a className="button small" href="#start">{t.header.getTalkino} <span>↗</span></a></div>
        <details className={`mobile-menu ${locale === "fa" ? "[&>div]:!right-auto [&>div]:!left-0" : ""}`}><summary aria-label={t.header.openMenu}>{t.header.menu}</summary><div><LanguageSwitcher /><NavLinks /><a href="#start">{t.header.getStarted}</a></div></details>
      </nav>
    </header>
  );
}

function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const buttonClass = "min-w-[31px] cursor-pointer rounded-md border-0 bg-transparent px-[7px] py-1 text-[10px] font-bold text-slate-500";
  const activeClass = " bg-white !text-blue-600 shadow-[0_1px_4px_rgba(15,23,42,.1)]";
  return <span className="mx-[7px] my-[5px] inline-flex self-start rounded-[9px] border border-slate-200 bg-slate-50 p-[3px] [direction:ltr] min-[901px]:m-0" role="group" aria-label={locale === "fa" ? "انتخاب زبان" : "Choose language"}>
    <button className={`${buttonClass}${locale === "fa" ? activeClass : ""}`} onClick={() => setLocale("fa")} type="button" aria-pressed={locale === "fa"}>فا</button>
    <button className={`${buttonClass}${locale === "en" ? activeClass : ""}`} onClick={() => setLocale("en")} type="button" aria-pressed={locale === "en"}>EN</button>
  </span>;
}
