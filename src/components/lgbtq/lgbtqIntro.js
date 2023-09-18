import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "./lgbtqIntro.scss";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from "./introAnimations";

import dallas from "../../assets/dallas.webp";
import austin from "../../assets/austin.webp";
import newyork from "../../assets/newyork.webp";
import sanfrancisco from "../../assets/sanfrancisco.webp";
import beijing from "../../assets/beijing.webp";

const cities = [
  { name: "Dallas", image: dallas },
  { name: "Austin", image: austin },
  { name: "New York", image: newyork },
  { name: "San Francisco", image: sanfrancisco },
  { name: "Beijing", image: beijing },
];

const LGBTQIntro = () => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  return (
    <div className="headerLG">
      <div
        // ref={el => (menuLayer = el)}
        className="hamburger-menuLG"
      >
        <div
          // ref={el => (reveal1 = el)}
          className="menu-secondary-background-colorLG"
        ></div>
        <div
          // ref={el => (reveal2 = el)}
          className="menu-layerLG"
        >
          <div
            ref={(el) => (cityBackground = el)}
            className="menu-city-backgroundLG"
          ></div>
          <div className="containerLG">
            <div className="wrapperLG">
              <div className="menu-linksLG">
                <div className="navLG">
                  <ul>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line1 = el)}
                        to="/opportunities"
                      >
                        Opportunities
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line2 = el)}
                        to="/solutions"
                      >
                        Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line3 = el)}
                        to="/contact-us"
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  // ref={el => (info = el)}
                  className="infoLG"
                >
                  <h3>Our Promise</h3>
                  <p>
                    The passage experienced a surge in popularity during the
                    1960s when Letraset used it on their dry-transfer sheets,
                    and again during the 90s as desktop publishers bundled the
                    text with their software.
                  </p>
                </div>
                <div className="locationsLG">
                  Locations:
                  {/* Returning the list of cities */}
                  {cities.map((el) => (
                    <span
                      key={el.name}
                      onMouseEnter={() => handleCity(el.image, cityBackground)}
                      onMouseOut={() => handleCityReturn(cityBackground)}
                    >
                      {el.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LGBTQIntro;
