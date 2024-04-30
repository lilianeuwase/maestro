import React from "react";
import { IntroKinya } from "../../components/kinya/mental/introKinya";
import { DepressionKinya } from "../../components/kinya/mental/depressionKinya/depressionKinya";
import AnxietyKinya from "../../components/kinya/mental/anxietyKinya/anxietyKinya";
import SubstanceKinya from "../../components/kinya/mental/substanceKinya/substanceKinya";
import LGBTIndividualsKinya from "../../components/kinya/mental/LGBTIndividualsKinya";

const MentalKinya = () => {
  return (
    <>
      <div>
        <IntroKinya />
        <DepressionKinya />
        <AnxietyKinya />
        <SubstanceKinya />
        <LGBTIndividualsKinya />
      </div>
    </>
  );
};

export default MentalKinya;
