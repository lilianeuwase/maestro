import React from "react";
import LGBTQIntro from "../components/lgbtq/lgbtqIntro";
import MentalSupport from "../components/lgbtq/mentalSupport";

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
      </div>
    </>
  );
};

export default LGBTQ;
