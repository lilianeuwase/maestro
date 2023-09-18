import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./mentalIntro.scss";

//Components
import ScrollForMore from "../scrollForMore";
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const MentalIntro = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className="singleWelcome"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="containerWelcome fluidWelcome">
        <div className="rowWelcome centerWelcome top-rowWelcome">
          <div className="topWelcome">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className="detailsWelcome"
            >
              <div className="locationWelcome">
                <span>DEPRESSION</span>
                <span>ANXIETY</span>
                {/* <span>ABUSE</span>
                <span>LGBTQ+</span> */}
              </div>
              <div className="muaWelcome">
                Your mental health is the priority
              </div>
            </motion.div>
            <motion.div className="modelWelcome">
              <motion.span className="firstWelcome" variants={firstName}>
                <motion.span variants={letter}>H</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>l</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>h</motion.span>
                <motion.span variants={letter}>y</motion.span>
              </motion.span>
              <motion.span className="lastWelcome" variants={lastName}>
                <motion.span variants={letter}>M</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>d</motion.span>
                {/* <motion.span variants={letter}>q</motion.span> */}
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="rowWelcome bottom-rowWelcome">
          <div className="bottomWelcome">
            <motion.div className="image-container-singleWelcome">
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className="thumbnail-singleWelcome"
              >
                <motion.div
                  className="frame-singleWelcome"
                  whileHover="hover"
                  transition={transition}
                >
                  <motion.img
                    src={require("../../assets/face.png")}
                    alt="an image"
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -1200 : -600,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className="detailed-informationWelcome">
        <div className="containerWelcome">
          <div className="rowWelcome">
            <h2 className="titleWelcome">
              Cognitive Behavioral Therapy (CBT)
              {/* <br /> what it means. */}
            </h2>
            <p>
              Cognitive Behavioral Therapy (CBT) is a type of psychotherapy that
              focuses on identifying and changing negative thought patterns and
              behaviors. It's a widely used approach for treating various mental
              health issues, including depression, anxiety, and substance abuse.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MentalIntro;
