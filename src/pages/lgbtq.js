import React from "react";
import LGBTQIntro from "../components/lgbtq/lgbtqIntro";
import MentalSupport from "../components/lgbtq/mentalSupport";
import Guidance from "../components/lgbtq/guidance";
import LgbtqPhotos from "../components/lgbtq/lgbtqPhotos";
import TherapyContacts from "../components/lgbtq/therapyContacts";

const LGBTQ = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <>
      <div>
        <LGBTQIntro />
        <TherapyContacts/>
        {/* <LgbtqPhotos/> */}
        <Guidance />
        <MentalSupport imageDetails={imageDetails} />
      </div>
    </>
  );
};

export default LGBTQ;
