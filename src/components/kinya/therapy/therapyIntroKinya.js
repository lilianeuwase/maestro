import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "../../../styles/therapy/therapyIntro.scss";

//Components
import ScrollForMoreKinya from "./scrollForMoreKinya";
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

const TherapyIntroKinya = ({ imageDetails }) => {
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
                <span>AGAHINDA</span>
                <span>GUHANGAYIKA</span>
              </div>
              <div className="muaWelcome">
                Ubuzima bwawe bwo mumutwe ni ingenzi
              </div>
            </motion.div>
            <motion.div className="modelWelcome">
              <motion.span className="firstWelcome" variants={firstName}>
                <motion.span variants={letter}>I</motion.span>
                <motion.span variants={letter}>n</motion.span>
                <motion.span variants={letter}>t</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>k</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>z</motion.span>
                <motion.span variants={letter}>o</motion.span>
              </motion.span>
              <motion.span className="lastWelcome" variants={lastName}>
                <motion.span variants={letter}>N</motion.span>
                <motion.span variants={letter}>z</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>a</motion.span>
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
                    src={require("../../../assets/face.png")}
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
          <ScrollForMoreKinya />
        </div>
      </div>
      <div className="detailed-informationWelcome">
        <div className="containerWelcome">
          <div className="rowWelcome">
            <h2 className="titleWelcome">
              Ubuvuzi bw’Imitekerereze n’Imyitwarire (CBT)
              {/* <br /> what it means. */}
            </h2>
            <p>
              Ubuvuzi bw’imitekerereze n’imyitwarire ni ubuvuzi bwibiganiro
              bwita ku guhindura intekerezo mbi umuntu yaba afite ndetse
              n’imyitwarire, ni uburyo bukoreshwa mukuvura indwara nyinshi zo mu
              mutwe harimo agahinda gakabije, ndetse n’indwara yumuhangayiko.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TherapyIntroKinya;
