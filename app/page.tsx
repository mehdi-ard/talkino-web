import Image from "next/image";

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="icon" aria-hidden="true">{children}</span>
);

const features = [
  { icon: "↗", title: "Focused messaging", text: "Keep every decision, file, and conversation in the right place—with threads that stay useful." },
  { icon: "◉", title: "Meet without friction", text: "Jump into crisp, low-latency calls from any conversation. No links, no context switching." },
  { icon: "✦", title: "AI that gets the context", text: "Summarize busy channels, surface decisions, and turn discussions into clear next steps." },
];

const footer = [
  ["Product", "Features", "Security", "Enterprise", "Download"],
  ["Company", "About", "Careers", "Blog", "Contact"],
  ["Resources", "Help center", "Community", "Developers", "Status"],
];

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Talkino home">
            <Image src="/talkino-logo.svg" alt="Talkino" width={150} height={41} priority />
          </a>
          <div className="nav-links">
            <a href="#features">Features</a><a href="#solutions">Solutions</a><a href="#ai">Talkino AI</a><a href="#pricing">Pricing</a>
          </div>
          <div className="nav-actions"><a className="sign-in" href="#">Sign in</a><a className="button small" href="#start">Get Talkino <span>↗</span></a></div>
          <details className="mobile-menu"><summary aria-label="Open menu">Menu</summary><div><a href="#features">Features</a><a href="#solutions">Solutions</a><a href="#ai">Talkino AI</a><a href="#start">Get started</a></div></details>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-glow" />
        <div className="eyebrow"><span className="status-dot" /> Built for teams in motion <span>→</span></div>
        <h1>Where great teams<br /><span>find their flow.</span></h1>
        <p className="hero-copy">One calm, intelligent space for conversations, meetings, and the work that happens between them.</p>
        <div className="hero-actions"><a className="button" href="#start">Start for free <span>↗</span></a><a className="button ghost" href="#solutions"><i>▶</i> See how it works</a></div>
        <p className="microcopy">Free for teams up to 10 · No credit card</p>
        <div className="product-stage">
          <div className="float-card float-left"><Icon>✓</Icon><span><b>Launch plan approved</b><small>Product · just now</small></span></div>
          <div className="float-card float-right"><span className="avatars"><i>MK</i><i>AR</i><i>+8</i></span><span><b>Design sync</b><small>Live now</small></span></div>
          <div className="product-window">
            <div className="window-bar"><div className="traffic"><i /><i /><i /></div><span>talkino.app / workspace</span><div className="secure">● Secure</div></div>
            <Image src="/images/hero.png" alt="Talkino team workspace showing organized conversations" width={1024} height={768} sizes="(max-width: 900px) 94vw, 1080px" priority />
          </div>
        </div>
      </section>

      <section className="trust shell"><p>Trusted by focused teams at</p><div><b>Vertex</b><b>Northstar</b><b>Layers</b><b>Metric</b><b>Forma</b><b>Craftwork</b></div></section>

      <section className="section shell" id="features">
        <div className="section-heading"><div><span className="kicker">EVERYTHING IN ONE PLACE</span><h2>Less noise.<br />More momentum.</h2></div><p>Talkino brings your team&apos;s communication into one thoughtfully designed workspace, so everyone can focus on the work that matters.</p></div>
        <div className="feature-grid">{features.map((item, i) => <article className={`feature-card feature-${i + 1}`} key={item.title}><Icon>{item.icon}</Icon><h3>{item.title}</h3><p>{item.text}</p><a href="#solutions" aria-label={`Learn more about ${item.title}`}>Explore feature <span>→</span></a></article>)}</div>
      </section>

      <section className="showcase-wrap" id="solutions">
        <div className="showcase shell">
          <div className="showcase-copy"><span className="kicker cyan">CONVERSATIONS, REFINED</span><h2>Every conversation<br />has a place.</h2><p>Channels stay focused. Threads keep context close. Smart notifications make sure you see what matters—without pulling you out of flow.</p><ul><li><span>✓</span> Deeply organized threads</li><li><span>✓</span> Powerful, instant search</li><li><span>✓</span> Notifications on your terms</li></ul><a href="#start">Explore messaging <span>→</span></a></div>
          <div className="showcase-visual"><div className="image-panel"><Image src="/images/chat.png" alt="A focused conversation inside Talkino" width={1024} height={768} sizes="(max-width: 900px) 94vw, 54vw" /></div><div className="search-chip">⌘ K &nbsp; Search anything</div></div>
        </div>
      </section>

      <section className="ai-section shell" id="ai">
        <div className="ai-card"><div className="ai-orb">✦</div><span className="kicker cyan">TALKINO AI</span><h2>Catch up in seconds.<br /><em>Move forward with clarity.</em></h2><p>Talkino AI understands the conversations around your work. It finds the signal, captures decisions, and gives your team time back.</p><div className="prompt"><span>✦</span><div><small>ASK TALKINO</small><b>What did I miss in #product-launch?</b></div><kbd>↵</kbd></div><div className="ai-stats"><span><b>12 hrs</b><small>saved per person / month</small></span><span><b>4.8×</b><small>faster team catch-up</small></span><span><b>92%</b><small>less time searching</small></span></div></div>
      </section>

      <section className="section shell" id="pricing"><div className="section-heading compact"><div><span className="kicker">BUILT DIFFERENT</span><h2>Made for modern work.</h2></div><p>Thoughtful by default. Powerful when you need it. Secure at every layer.</p></div><div className="mini-grid"><article><Icon>⌁</Icon><h3>Fast by design</h3><p>Instant on every device, even when the connection isn&apos;t.</p></article><article><Icon>◇</Icon><h3>Private by default</h3><p>Enterprise-grade security with end-to-end encryption.</p></article><article><Icon>∞</Icon><h3>Works everywhere</h3><p>Mac, Windows, iOS, Android, and your favorite browser.</p></article><article><Icon>☼</Icon><h3>Human support</h3><p>Real people, ready to help whenever your team needs us.</p></article></div></section>

      <section className="cta shell" id="start"><div className="cta-glow" /><span className="cta-mark">✦</span><h2>Your team&apos;s best work<br />starts here.</h2><p>Bring your people, conversations, and ideas together.</p><a className="button light" href="#">Get started for free <span>↗</span></a><small>No credit card required · Set up in under 2 minutes</small></section>

      <footer><div className="footer-main shell"><div className="footer-brand"><Image src="/talkino-logo.svg" alt="Talkino" width={150} height={41} /><p>Communication that moves<br />work forward.</p></div>{footer.map(([title, ...links]) => <div className="footer-column" key={title}><h3>{title}</h3>{links.map(link => <a href="#" key={link}>{link}</a>)}</div>)}</div><div className="footer-bottom shell"><span>© 2026 Talkino. All rights reserved.</span><div><a href="#">Privacy</a><a href="#">Terms</a><a href="#">English <span>⌄</span></a></div></div></footer>
    </main>
  );
}
