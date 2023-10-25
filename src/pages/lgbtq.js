import React from "react";
import LGBTQIntro from "../components/lgbtq/lgbtqIntro";
import MentalSupport from "../components/lgbtq/mentalSupport";
import Guidance from "../components/lgbtq/guidance";

const LGBTQ = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <>
      <div>
        <LGBTQIntro />
        <MentalSupport imageDetails={imageDetails} />
        <Guidance/>
      </div>
    </>
  );
};

export default LGBTQ;
