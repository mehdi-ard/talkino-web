import {
  AiSection,
  BenefitsSection,
  ConversationSection,
  FeaturesSection,
  FinalCta,
  Footer,
  Header,
  Hero,
  TrustedTeams,
} from "@/components/landing";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustedTeams />
      <FeaturesSection />
      <ConversationSection />
      <AiSection />
      <BenefitsSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
