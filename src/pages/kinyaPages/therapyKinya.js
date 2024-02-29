import React from "react";

import { HowCBTWorksKinya } from "../../components/kinya/therapy/howCBTWorksKinya";
import { HowCBTDASKinya } from "../../components/kinya/therapy/CBTForDASKinya";
import { RememberKinya } from "../../components/kinya/therapy/rememberKinya";
import {ArticlesKinya} from "../../components/kinya/therapy/articlesKinya";
import StrategiesKinya from "../../components/kinya/therapy/strategiesKinya";
import ParticipateYogaKinya from "../../components/kinya/therapy/participateYogaKinya";
import { ResourcesKinya } from "../../components/kinya/therapy/resourcesKinya";
import TherapyIntroKinya from "../../components/kinya/therapy/therapyIntroKinya";


const TherapyKinya = () => {
  const imageDetails = {
    width: 524,
    height: 650,
  };
  return (
    <div>
      <TherapyIntroKinya imageDetails={imageDetails} />
      <HowCBTWorksKinya/>
      <HowCBTDASKinya/>
      <StrategiesKinya/>
      <ResourcesKinya/>
      <RememberKinya/>
      <ArticlesKinya/>
      <ParticipateYogaKinya/>
    </div>
  );
};

export default TherapyKinya;
