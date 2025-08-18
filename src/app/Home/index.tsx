import i18n from "@/i18n";
import type { FC } from "react";
import * as Component from "./Components";

const Home: FC = () => {
  return (
    <div>
      <Component.Hero />
      <Component.CompanyUser/>
      <Component.Testimonials />
      <Component.Features />
      <Component.FAQ />
      <Component.Plan/>
      <Component.Download/>
    </div>
  );
};

export default Home;
