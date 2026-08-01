import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talkino — Where great teams find their flow",
  description: "A calm, intelligent workspace for team conversations, meetings, and everything in between.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
