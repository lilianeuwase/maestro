import React from "react";
import TherapyIntro from "../components/therapy/therapyIntro";
import CardsAnimation  from "../components/therapy/cards/cardsAnimation";
import Dates from "../components/TBU/dates/dates";
import { HowCBTWorks } from "../components/therapy/howCBTWorks";
import { HowCBTDAS } from "../components/therapy/CBTForDAS";
import { AnxietyResources } from "../components/therapy/anxietyResources";
import { SubstanceResources } from "../components/therapy/substanceResources";
import { Remember } from "../components/therapy/remember";
import {Articles} from "../components/therapy/articles";
import Strategies from "../components/therapy/strategies";
import ParticipateYoga from "../components/therapy/participateYoga";
import DarkSeparation from "../components/therapy/darkSeparation";
import { Resources } from "../components/therapy/resources";


const Therapy = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <div>
      <TherapyIntro imageDetails={imageDetails} />
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

export default Therapy;
