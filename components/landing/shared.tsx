import Image from "next/image";
import LogoImage from '@/public/Logo.svg'

export const features = [
  [
    "Secure Messaging",
    "Real-time conversations across every device, with end-to-end encryption by default.",
    "▣",
  ],
  [
    "Organized Channels",
    "Keep projects and conversations in focused, topic-based channels.",
    "⌘",
  ],
  [
    "Video Meetings",
    "High-quality video with integrated recording and transcription.",
    "▱",
  ],
  [
    "Team Whiteboard",
    "A shared canvas for brainstorming, product planning, and system architecture.",
    "✎",
  ],
];

export const comparison = [
  ["End-to-End Encryption", "Standard", "Enterprise Only", "Limited"],
  ["Integrated Whiteboard", "Built-in", "External App", "External App"],
  ["Global Latency", "< 30ms", "~ 120ms", "~ 200ms"],
];

export function Logo() {
  return (
    <a
      href="#"
      className="flex items-center gap-2 font-extrabold text-slate-950 h-full w-32"
    >
      <Image src={LogoImage} alt="Talkino" className=" place-items-center rounded-lg h-full w-full text-xs text-white"/>
    </a>
  );
}
