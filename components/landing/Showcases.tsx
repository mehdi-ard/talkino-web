"use client";

import Image from "next/image";
import { Kicker } from "./shared";
import { useLanguage } from "./i18n";

export function ConversationSection() {
  const { locale, dictionary: t } = useLanguage();
  return (
    <section className="showcase-wrap" id="solutions"><div className="showcase shell">
      <div className="showcase-copy"><Kicker cyan>{t.conversation.kicker}</Kicker><h2 className={locale === "fa" ? "!tracking-[-.025em]" : ""}>{t.conversation.title}<br />{t.conversation.titleSecond}</h2><p>{t.conversation.copy}</p><ul>{t.conversation.bullets.map(item => <li key={item}><span className={locale === "fa" ? "!mr-0 !ml-[9px]" : ""}>✓</span> {item}</li>)}</ul><a href="#start">{t.conversation.explore} <span>→</span></a></div>
      <div className="showcase-visual"><div className="image-panel"><Image src="/images/chat.png" alt={t.conversation.imageAlt} width={1024} height={768} sizes="(max-width: 900px) 94vw, 54vw" /></div><div className="search-chip">⌘ K &nbsp; {t.conversation.search}</div></div>
    </div></section>
  );
}
