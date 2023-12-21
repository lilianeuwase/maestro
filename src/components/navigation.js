import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="containerHome">
        <div className="nav-columnsHome">
          <div className="nav-columnHome">
            <ul className="nav-linksHome">
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/mentalhealth" exact>
                  Mental Health Information
                </NavLink>
              </li>
              <li>
                <NavLink to="/therapy" exact>
                  Therapy
                </NavLink>
              </li>
              <li>
                <NavLink to="/lgbtq" exact>
                  LGBTQI+ Support
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-columnHome">
            <div className="nav-infosHome">
              {/* <ul className="nav-infoHome">
                <li>
                  <NavLink to="/" exact>
                    Maestro Live chat
                  </NavLink>
                </li>
                <li>
                  <li>info@rwandayvchange.org</li>
                  <li>+250 783 014 486</li>
                </li>
              </ul> */}
              {/* <ul className="nav-infoHome"> */}
              <ul className="nav-linksHome text-right">
                <li>
                  <NavLink to="/test" exact>
                    Mental Health Tests
                  </NavLink>
                </li>
                <li>
                  {/* <NavLink to="/" exact> */}
                    <a
                      href="https://wa.me/27600136875?text=join%20rwanda-youth8678"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Maestro Live chat
                    </a>
                  {/* </NavLink> */}
                </li>
                <li>
                  <NavLink to="/getinvolved" exact>
                    Get Involved
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about-us" exact>
                    About Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
