import { Kicker } from "./shared";

const stats = [["12 hrs", "saved per person / month"], ["4.8×", "faster team catch-up"], ["92%", "less time searching"]];

export function AiSection() {
  return (
    <section className="ai-section shell" id="ai"><div className="ai-card">
      <div className="ai-orb">✦</div><Kicker cyan>TALKINO AI</Kicker><h2>Catch up in seconds.<br /><em>Move forward with clarity.</em></h2><p>Talkino AI understands the conversations around your work. It finds the signal, captures decisions, and gives your team time back.</p>
      <div className="prompt"><span>✦</span><div><small>ASK TALKINO</small><b>What did I miss in #product-launch?</b></div><kbd>↵</kbd></div>
      <div className="ai-stats">{stats.map(([value, label]) => <span key={value}><b>{value}</b><small>{label}</small></span>)}</div>
    </div></section>
  );
}
