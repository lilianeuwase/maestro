import HomeIntro from "../components/home/homeIntro";
import React, { useEffect } from "react";
import gsap from "gsap";
import WhyMental from "../components/home/whyMental";
import { HomeWelcome } from "../components/home/homeWelcome";
import { Navigate } from "../components/home/navigate";
import { Homestats } from "../components/home/homeStats";

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
      <HomeWelcome />
      <Homestats />
      <Navigate />
      <WhyMental />
    </div>
  );
};

export default Home;
