import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import "../../../styles/lgbtq/lgbtqIntro.scss";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from "./introAnimationsKinya";

import orange from "../../../assets/orange.jpeg";
import yellow from "../../../assets/Yellow.jpeg";
import green from "../../../assets/green.jpeg";
import blue from "../../../assets/blue.jpeg";
import violet from "../../../assets/violet.jpeg";

const cities = [
  { name: "Abantu", image: orange },
  { name: "Bose", image: yellow },
  { name: "Bafite", image: green },
  { name: "Uburenganzira", image: blue },
  { name: "Bungana", image: violet },
];

const LGBTQIntroKinya = () => {
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
                      <a
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line1 = el)}
                        href="https://wa.me/27600136875?text=join%20rwanda-youth8678"
                        target="_blank"
                      >
                        Ganira Natwe
                      </a>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line2 = el)}
                        to="/test"
                      >
                        Isuzume Uburwayi
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line3 = el)}
                        to="/getinvolved"
                      >
                       Korana Natwe
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line3 = el)}
                        to="/lgbtq"
                      >
                        Hamagara 0798979117
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  // ref={el => (info = el)}
                  className="infoLG"
                >
                  <h3>Icyo Kuzirikana</h3>
                  <p>
                    Gushaka umuvuzi ugufasha kwita k’ubuzima bwawe bwo mumutwe
                    rimwe na rimwe ni amahitamo ashobora kugorana ngo ubone
                    umwiza ndetse ukunogeye, mugihe utishimiye amahitamo yawe
                    yambere ibukako byemewe kureba undi ukunejeje. Ita k’ubuzima
                    bwawe kandi ntutindiganye gusaba ubufasha aho ubukeneye
                  </p>
                </div>
                <div className="locationsLG">
                  Sobanukirwa:
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

export default LGBTQIntroKinya;
