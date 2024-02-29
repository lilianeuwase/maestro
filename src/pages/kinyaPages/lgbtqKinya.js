import React from "react";
import LGBTQIntroKinya from "../../components/kinya/lgbtq/lgbtqIntroKinya";
import MentalSupportKinya from "../../components/kinya/lgbtq/mentalSupportKinya";
import GuidanceKinya from "../../components/kinya/lgbtq/guidanceKinya";
import TherapyContactsKinya from "../../components/kinya/lgbtq/therapyContactsKinya";

const LGBTQKinya = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <>
      <div>
        <LGBTQIntroKinya />
        <TherapyContactsKinya/>
        <GuidanceKinya />
        <MentalSupportKinya imageDetails={imageDetails} />
      </div>
    </>
  );
};

export default LGBTQKinya;
