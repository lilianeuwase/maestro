import React from "react";
import { Depression } from "../components/about/depression";
import { Intro } from "../components/about/intro";
import LGBTQIntro from "../components/lgbtq/lgbtqIntro";
import MentalSupport from "../components/lgbtq/mentalSupport";

const About = () => {
  return (
    <>
      <div>
      <Intro/>
      <Depression/>
      </div>
    </>
  );
};

export default About;
