import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="containerHome">
        <div className="nav-columnsHome">
          <div className="nav-columnHome">
            <div className="nav-labelHome">Menu</div>
            <ul className="nav-linksHome">
              <li>
                <NavLink to="/therapy" exact>
                 Therapy
                </NavLink>
              </li>
              <li>
                <NavLink to="/lgbtq" exact>
                  LGBTQ+ Support
                </NavLink>
              </li>
              <li>
                <NavLink to="/mentalhealth" exact>
                Mental Health Education
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/getinvolved" exact>
                  Get Involved
                </NavLink>
              </li> */}
            </ul>
          </div>
          <div className="nav-columnHome">
            <div className="nav-labelHome">Contact</div>
            <div className="nav-infosHome">
              <ul className="nav-infoHome">
                {/* <li className="nav-info-labelHome">Contact</li> */}
                <li>
                  <NavLink to="/" exact>
                    Maestro Live chat
                  </NavLink>
                </li>
                <li>
                  {/* <NavLink to="/contact" exact>
                    Get in touch with us
                  </NavLink> */}
                  <li>info@rwandayvchange.org</li>
                  <li>+250 783 014 486</li>
                </li>

                {/* <li>
                  <li className="nav-info-labelHome">Phone</li>
                  <li>+250 783 014 486</li>
                </li> */}
              </ul>
              <ul className="nav-infoHome">
                <li>
                  <NavLink to="/about-us" exact>
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/getinvolved" exact>
                    Get Involved
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/test" exact>
                    Mental Health Tests
                  </NavLink>
                </li>

                {/* <li>
                  <NavLink to="/partnerships" exact>
                    Partnerships
                  </NavLink>
                </li> */}
              </ul>
              {/* <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>+250 783 014 486</li>
              </ul> */}
              {/* <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>All right reserved to Maestro</li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
