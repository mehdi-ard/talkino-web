import Image from "next/image";
import { Icon } from "./shared";

function ProductPreview() {
  return (
    <div className="product-stage">
      <div className="float-card float-left">
        <Icon>✓</Icon>
        <span>
          <b>Launch plan approved</b>
          <small>Product · just now</small>
        </span>
      </div>
      <div className="float-card float-right">
        <span className="avatars">
          <i>MK</i>
          <i>AR</i>
          <i>+8</i>
        </span>
        <span>
          <b>Design sync</b>
          <small>Live now</small>
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
          <div className="secure">● Secure</div>
        </div>
        <Image
          src="/images/image.png"
          alt="Talkino team workspace showing organized conversations"
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
  return (
    <section className="hero shell" id="top">
      <div className="hero-glow" />
      <div className="eyebrow">
        <span className="status-dot" /> Built for teams in motion <span>→</span>
      </div>
      <h1>
        Where great teams
        <br />
        <span>find their flow.</span>
      </h1>
      <p className="hero-copy">
        One calm, intelligent space for conversations, meetings, and the work
        that happens between them.
      </p>
      <div className="hero-actions">
        <a className="button" href="#start">
          Start for free <span>↗</span>
        </a>
        <a className="button ghost" href="#solutions">
          <i>▶</i> See how it works
        </a>
      </div>
      <p className="microcopy">Free for teams up to 10 · No credit card</p>
      <ProductPreview />
    </section>
  );
}
