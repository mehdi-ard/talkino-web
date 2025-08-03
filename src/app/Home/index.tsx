import i18n from "@/i18n";
import type { FC } from "react";
import { FAQ, Features, Hero, Testimonials } from "./Components";

const Home: FC = () => {
  console.log(i18n.language);

  return (
    <div>
      <Hero />
      <Testimonials />
      <Features />
      <FAQ />
    </div>
  );
};

export default Home;
