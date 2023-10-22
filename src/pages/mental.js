import React from "react";
import MentalIntro from "../components/mental/mentalIntro";
import CardsAnimation  from "../components/mental/cards/cardsAnimation";
import Dates from "../components/TBU/dates/dates";
import { HowCBTWorks } from "../components/mental/howCBTWorks";
import { HowCBTDAS } from "../components/mental/CBTForDAS";
import { DepressionResources } from "../components/mental/depressionResources";
import { AnxietyResources } from "../components/mental/anxietyResources";
import { SubstanceResources } from "../components/mental/substanceResources";
import { Remember } from "../components/mental/remember";


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
      <DepressionResources/>
      <AnxietyResources/>
      <SubstanceResources/>
      <Remember/>
      {/* <CardsAnimation/> */}
      {/* <Dates/> */}
    </div>
  );
};

export default Mental;
