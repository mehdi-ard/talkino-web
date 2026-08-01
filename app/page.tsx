import {
  AiSection,
  Comparison,
  Features,
  FinalCta,
  Footer,
  Header,
  Hero,
  MeetingShowcase,
  MessagingShowcase,
  TrustedTeams,
} from "@/components/landing";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#faf9ff] text-slate-950">
      <Header />
      <Hero />
      <TrustedTeams />
      <Features />
      <MessagingShowcase />
      <MeetingShowcase />
      <AiSection />
      <Comparison />
      <FinalCta />
      <Footer />
    </main>
  );
}
