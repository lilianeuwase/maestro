import React from "react";
import Anxiety from "../components/about/anxietyCards/anxiety";
import { Depression } from "../components/about/depression";
import { Intro } from "../components/about/intro";

const About = () => {
  return (
    <>
      <div>
      <Intro/>
      <Depression/>
      <Anxiety/>
      </div>
    </>
  );
};

export default About;
