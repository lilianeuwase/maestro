import React from "react";
import Anxiety from "../components/mental/anxiety";
import { Depression } from "../components/mental/depression";
import { Intro } from "../components/mental/intro";
import LGBTQIndividuals from "../components/mental/LGBTIndividuals";
import Substance from "../components/mental/substance";

const Mental = () => {
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

export default Mental;
