import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import "../mental/mentalIntro.scss";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const MentalSupport = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='containerWelcome'>
        <div className='rowWelcome centerWelcome'>
          <div className='image-containerWelcome'>

            <div
              className='thumbnailWelcome'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frameWelcome'>
                <Link to={`/mentalhealth`}>
                  <ProgressiveImage
                    src={require("../../assets/face.png")}
                    placeholder={require("../../assets/faceCompressed.png")}>
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Yasmeen Tariq'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='informationWelcome'>
              <div className='titleWelcome'>Mental Health</div>
              {/* <div className='titleWelcome'>CLICK ON THE IMAGE</div> */}
              <div className='locationWelcome'>
                <span>HealthY</span>
                <span>Mind</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default MentalSupport;
