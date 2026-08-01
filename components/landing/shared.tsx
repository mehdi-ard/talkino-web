export const features = [
  ["Secure Messaging", "Real-time conversations across every device, with end-to-end encryption by default.", "▣"],
  ["Organized Channels", "Keep projects and conversations in focused, topic-based channels.", "⌘"],
  ["Video Meetings", "High-quality video with integrated recording and transcription.", "▱"],
  ["Team Whiteboard", "A shared canvas for brainstorming, product planning, and system architecture.", "✎"],
];

export const comparison = [
  ["AI-First Summaries", "Standard", "Add-on", "Manual"],
  ["End-to-End Encryption", "Standard", "Enterprise Only", "Limited"],
  ["Integrated Whiteboard", "Built-in", "External App", "External App"],
  ["Global Latency", "< 30ms", "~ 120ms", "~ 200ms"],
];

export function Logo() {
  return <a href="#" className="flex items-center gap-2 font-extrabold text-slate-950"><span className="grid size-7 place-items-center rounded-lg bg-blue-600 text-xs text-white">T</span><span>Talkino</span></a>;
}
