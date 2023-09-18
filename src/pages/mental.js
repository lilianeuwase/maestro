import React from "react";
import MentalIntro from "../components/mental/mentalIntro";

const Mental = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <div>
      <MentalIntro imageDetails={imageDetails} />
    </div>
  );
};

export default Mental;
