import HomeIntroKinya from "../../components/kinya/home/homeIntroKinya";
import React, { useEffect } from "react";
import gsap from "gsap";
import WhyMentalKinya from "../../components/kinya/home/whyMentalKinya";
import { HomeWelcomeKinya } from "../../components/kinya/home/homeWelcomeKinya";
import { NavigateKinya } from "../../components/kinya/home/navigateKinya";
import { HomestatsKinya } from "../../components/kinya/home/homeStatsKinya";
import {JoinCommunityKinya} from "../../components/kinya/home/joinCommunityKinya";
import { CallActionKinya } from "../../components/kinya/home/callActionKinya";
import { WhyMentalIntroKinya } from "../../components/kinya/home/WhyMentalIntroKinya";

const HomeKinya = () => {
  function debounce(fn, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <div>
      <HomeIntroKinya dimensions={dimensions} />
      <HomeWelcomeKinya />
      <HomestatsKinya />
      <NavigateKinya />
      <JoinCommunityKinya/>
      <CallActionKinya/>
      <WhyMentalIntroKinya/>
      <WhyMentalKinya />
    </div>
  );
};

export default HomeKinya;
