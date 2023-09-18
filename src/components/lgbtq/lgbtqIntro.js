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

import orange from "../../assets/orange.jpeg";
import yellow from "../../assets/Yellow.jpeg";
import green from "../../assets/green.jpeg";
import blue from "../../assets/blue.jpeg";
import violet from "../../assets/violet.jpeg";

const cities = [
  { name: "Lesbian", image: orange },
  { name: "Gay", image: yellow },
  { name: "Bisexual", image: green },
  { name: "Transgender", image: blue },
  { name: "Queer+", image: violet },
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
                        to="/lgbtq/#choice"
                      >
                       Choice
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line2 = el)}
                        to="/lgbtq/#choice"
                      >
                        Consultation
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (line3 = el)}
                        to="/getinvolved"
                      >
                        Get Involved
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  // ref={el => (info = el)}
                  className="infoLG"
                >
                  <h3>A Kind Reminder</h3>
                  <p>
                    Finding the right mental health professional
                    could involve trying out a few options. If you're not
                    comfortable with your initial choice, remember that it's
                    completely acceptable to look for another professional who
                    better suits your requirements and preferences. Prioritize
                    your well-being and don't hesitate to reach out for help
                    when needed.
                  </p>
                </div>
                <div className="locationsLG">
                  Inclusion:
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
