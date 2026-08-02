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
import { LanguageProvider, type Locale } from "@/components/landing/i18n";
import { cookies, headers } from "next/headers";

async function getInitialLocale(): Promise<Locale> {
  const savedLocale = (await cookies()).get("talkino-locale")?.value;
  if (savedLocale === "fa" || savedLocale === "en") return savedLocale;

  const requestHeaders = await headers();
  const country = requestHeaders.get("x-vercel-ip-country")
    ?? requestHeaders.get("cf-ipcountry")
    ?? requestHeaders.get("x-country-code");
  return country?.toUpperCase() === "IR" ? "fa" : "en";
}

export default async function Home() {
  const initialLocale = await getInitialLocale();
  return (
    <LanguageProvider initialLocale={initialLocale}><main>
      <Header />
      <Hero />
      <TrustedTeams />
      <FeaturesSection />
      <ConversationSection />
      <AiSection />
      <BenefitsSection />
      <FinalCta />
      <Footer />
    </main></LanguageProvider>
  );
}
