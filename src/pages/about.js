import React from "react";
import Anxiety from "../components/about/anxiety";
import { Depression } from "../components/about/depression";
import { Intro } from "../components/about/intro";
import LGBTQIndividuals from "../components/about/LGBTIndividuals";
import Substance from "../components/about/substance";

const About = () => {
  return (
    <>
      <div>
      <Intro/>
      <Depression/>
      <Anxiety/>
      <Substance/>
      <LGBTQIndividuals/>
      </div>
    </>
  );
};

export default About;
