import HomeIntro from "../components/home/homeIntro";
import React, { useEffect} from "react";
import gsap from "gsap";
import WhyMental from "../components/home/whyMental";
import { HomeWelcome } from "../components/home/homeWelcome";
import JoinCommunity from "../components/home/joinCommunity";
import JoinSm from "../components/home/joinSm";

const Home = () => {

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
      <HomeIntro dimensions={dimensions} />
      <HomeWelcome/>
      {/* <JoinCommunity/> */}
      {/* <JoinSm/> */}
      <WhyMental/>
    </div>
  );
};

export default Home;
