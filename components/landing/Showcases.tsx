import Image from "next/image";
import { Kicker } from "./shared";

export function ConversationSection() {
  return (
    <section className="showcase-wrap" id="solutions"><div className="showcase shell">
      <div className="showcase-copy"><Kicker cyan>CONVERSATIONS, REFINED</Kicker><h2>Every conversation<br />has a place.</h2><p>Channels stay focused. Threads keep context close. Smart notifications make sure you see what matters—without pulling you out of flow.</p><ul>{["Deeply organized threads", "Powerful, instant search", "Notifications on your terms"].map(item => <li key={item}><span>✓</span> {item}</li>)}</ul><a href="#start">Explore messaging <span>→</span></a></div>
      <div className="showcase-visual"><div className="image-panel"><Image src="/images/chat.png" alt="A focused conversation inside Talkino" width={1024} height={768} sizes="(max-width: 900px) 94vw, 54vw" /></div><div className="search-chip">⌘ K &nbsp; Search anything</div></div>
    </div></section>
  );
}
