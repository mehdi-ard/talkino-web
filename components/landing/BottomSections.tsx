import { footerColumns } from "./data";
import { Brand } from "./shared";

export function FinalCta() {
  return <section className="cta shell" id="start"><div className="cta-glow" /><span className="cta-mark">✦</span><h2>Your team&apos;s best work<br />starts here.</h2><p>Bring your people, conversations, and ideas together.</p><a className="button light" href="#">Get started for free <span>↗</span></a><small>No credit card required · Set up in under 2 minutes</small></section>;
}

export function Footer() {
  return <footer><div className="footer-main shell"><div className="footer-brand"><Brand /><p>Communication that moves<br />work forward.</p></div>{footerColumns.map(column => <div className="footer-column" key={column.title}><h3>{column.title}</h3>{column.links.map(link => <a href="#" key={link}>{link}</a>)}</div>)}</div><div className="footer-bottom shell"><span>© 2026 Talkino. All rights reserved.</span><div><a href="#">Privacy</a><a href="#">Terms</a><a href="#">English <span>⌄</span></a></div></div></footer>;
}
