import React from "react";
import Anxiety from "../components/mental/anxiety";
import { Depression } from "../components/mental/depression/depression";
import { Intro } from "../components/mental/intro";
import LGBTQIndividuals from "../components/mental/LGBTIndividuals";
import Substance from "../components/mental/substance";
import Dates from "../components/TBU/dates/dates";
import CardsAnimation from "../components/therapy/cards/cardsAnimation";

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
