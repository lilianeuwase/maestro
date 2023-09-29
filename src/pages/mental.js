import React from "react";
import MentalIntro from "../components/mental/mentalIntro";
import CardsAnimation  from "../components/mental/cards/cardsAnimation";
import Dates from "../components/TBU/dates/dates";


const Mental = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <div>
      <MentalIntro imageDetails={imageDetails} />
      <CardsAnimation/>
      <Dates/>
    </div>
  );
};

export default Mental;
