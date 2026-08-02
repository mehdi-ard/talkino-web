"use client";

import Image from "next/image";
import { Icon } from "./shared";
import { useLanguage } from "./i18n";

function ProductPreview() {
  const { locale, dictionary: t } = useLanguage();
  return (
    <div className="product-stage">
      <div className={`float-card float-left ${locale === "fa" ? "!text-right" : ""}`}>
        <Icon>✓</Icon>
        <span>
          <b>{t.hero.approved}</b>
          <small>{t.hero.approvedMeta}</small>
        </span>
      </div>
      <div className={`float-card float-right ${locale === "fa" ? "!text-right" : ""}`}>
        <span className="avatars">
          <i>MK</i>
          <i>AR</i>
          <i>+8</i>
        </span>
        <span>
          <b>{t.hero.sync}</b>
          <small>{t.hero.live}</small>
        </span>
      </div>
      <div className="product-window">
        <div className="window-bar">
          <div className="traffic">
            <i />
            <i />
            <i />
          </div>
          <span>talkino.app / workspace</span>
          <div className="secure">● {t.hero.secure}</div>
        </div>
        <Image
          src="/images/image.png"
          alt={t.hero.imageAlt}
          width={1024}
          height={768}
          sizes="(max-width: 900px) 94vw, 1080px"
          priority
        />
      </div>
    </div>
  );
}

export function Hero() {
  const { locale, dictionary: t } = useLanguage();
  return (
    <section className="hero shell" id="top">
      <div className="hero-glow" />
      <div className="eyebrow">
        <span className="status-dot" /> {t.hero.eyebrow} <span>→</span>
      </div>
      <h1 className={locale === "fa" ? "!tracking-[-.025em]" : ""}>
        {t.hero.title}
        <br />
        <span>{t.hero.titleAccent}</span>
      </h1>
      <p className="hero-copy">
        {t.hero.copy}
      </p>
      <div className="hero-actions">
        <a className="button" href="#start">
          {t.hero.start} <span>↗</span>
        </a>
        <a className="button ghost" href="#solutions">
          <i>▶</i> {t.hero.demo}
        </a>
      </div>
      <p className="microcopy">{t.hero.microcopy}</p>
      <ProductPreview />
    </section>
  );
}
