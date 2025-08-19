import { useEffect, type FC } from "react";
import * as Component from "./Components";

const Home: FC = () => {

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])


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
