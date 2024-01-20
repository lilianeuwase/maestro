import React from "react";
import { NavLink } from "react-router-dom";

const NavigationKinya = () => {
  return (
    <nav>
      <div className="containerHome">
        <div className="nav-columnsHome">
          <div className="nav-columnHome mt-6">
            {/* <div className="nav-labelHome">
              <NavLink to="/" exact>
                Kinyarwanda
              </NavLink>
            </div> */}
            <ul className="nav-linksHome">
            
              <li>
                <NavLink to="/kinya" exact>
                  Ahabanza
                </NavLink>
              </li>
              <li>
                <NavLink to="/kinyamentalhealth" exact>
                Amakuru K’ubuzima Bwo Mumutwe
                </NavLink>
              </li>
              <li>
                <NavLink to="/kinyatherapy" exact>
                  Ubuvuzi
                </NavLink>
              </li>
              <li>
                <NavLink to="/kinyalgbtq" exact>
                Ubufasha Kuri LGBTQI+
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-columnHome mt-6">
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
                  <NavLink to="/kinyatest" exact>
                  Suzuma Uburwayi Bwo Mumutwe
                  </NavLink>
                </li>
                <li>
                  {/* <NavLink to="/" exact> */}
                  <a
                    href="https://wa.me/27600136875?text=join%20rwanda-youth8678"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ganira Natwe
                  </a>
                  {/* </NavLink> */}
                </li>
                <li>
                  <NavLink to="/kinyagetinvolved" exact>
                   Fatanya Natwe
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/kinyaabout-us" exact>
                  Byinshi Kuri Twe
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

export default NavigationKinya;
