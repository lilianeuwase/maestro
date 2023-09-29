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
                <NavLink to="/aboutus" exact>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/mentalhealth" exact>
                  Mental Health
                </NavLink>
              </li>
              <li>
                <NavLink to="/lgbtq" exact>
                  LGBTQ+ Support
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
                <li className="nav-info-labelHome">Email</li>
                <li>
                  <NavLink to="/contact" exact>
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <li className="nav-info-labelHome">Phone</li>
                  <li>+250 783 014 486</li>
                </li>
              </ul>
              <ul className="nav-infoHome">
                <li>
                  <NavLink to="/getinvolved" exact>
                    Get Involved
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/getinvolved" exact>
                    Maestro Live chat
                  </NavLink>
                </li>
                {/* <li></li>
                <li>Kigali</li>
                <li>Rwanda</li> */}
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
