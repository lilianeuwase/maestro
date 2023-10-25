import React from "react";
import MentalIntro from "../components/mental/mentalIntro";
import CardsAnimation  from "../components/mental/cards/cardsAnimation";
import Dates from "../components/TBU/dates/dates";
import { HowCBTWorks } from "../components/mental/howCBTWorks";
import { HowCBTDAS } from "../components/mental/CBTForDAS";
import { AnxietyResources } from "../components/mental/anxietyResources";
import { SubstanceResources } from "../components/mental/substanceResources";
import { Remember } from "../components/mental/remember";
import {Articles} from "../components/mental/articles";
import Strategies from "../components/mental/strategies";
import ParticipateYoga from "../components/mental/participateYoga";
import DarkSeparation from "../components/mental/darkSeparation";
import { Resources } from "../components/mental/resources";


const Mental = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <div>
      <MentalIntro imageDetails={imageDetails} />
      <HowCBTWorks/>
      <HowCBTDAS/>
      <Resources/>
      {/* <AnxietyResources/>
      <SubstanceResources/> */}
      <Remember/>
      <Articles/>
      <Strategies/>
      {/* <DarkSeparation/> */}
      <ParticipateYoga/>
      {/* <CardsAnimation/> */}
      {/* <Dates/> */}
    </div>
  );
};

export default Mental;
