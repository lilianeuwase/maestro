import React, { useEffect, useState } from "react";
import IntroOverlay from "./introOverlay";
import Banner from "./banner";
import Cases from "./cases";
import gsap from "gsap";
import MentalIntro from "../therapy/therapyIntro";
// import WelcomeIntro from "../components/home/welcomeIntro";

let tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
  tl.from(".lineHome span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  })
    .to(".overlay-topHome", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4,
    })
    .to(".overlay-bottomHome", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to(".intro-overlayHome", 0, {
      css: { display: "none" },
    })
    .from(".case-imageHome img", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4,
      },
      onComplete: completeAnimation,
    });
};

const HomeIntro = ({ dimensions }) => {
  const imageDetails = {
    width: 524,
    height: 650,
  };

  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [dimensions.width]);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />
      <Cases />
    </>
  );
};

export default HomeIntro;
