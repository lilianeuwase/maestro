import React from "react";
import Anxiety from "../components/about/anxiety";
import { Depression } from "../components/about/depression";
import { Intro } from "../components/about/intro";
import Substance from "../components/about/substance";

const About = () => {
  return (
    <>
      <div>
      <Intro/>
      <Depression/>
      <Anxiety/>
      <Substance/>
      </div>
    </>
  );
};

export default About;
