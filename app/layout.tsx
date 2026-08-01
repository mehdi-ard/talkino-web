import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talkino | Team communication for the modern workplace",
  description: "Messaging, meetings, and AI in one fast, unified workspace.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr"><body>{children}</body></html>;
}
