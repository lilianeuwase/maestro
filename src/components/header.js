import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "../animations/menuAnimations";

// Define reducer

const Header = ({ history, dimensions }) => {

  
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
  });

  return (
    <div className="headerHome">
      <div className="containerHome">
        <div className="rowHome v-centerHome space-betweenHome">
          <div className="logoHome">
            <NavLink to="/" exact>
            <img src={require("../assets/5.png")} width={30} height={30} /> {" "}
              MAESTRO.
            </NavLink>
          </div>
          <div className="nav-toggleHome">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menuHome"
            >
              <span className="spanHome"></span>
              <span className="spanHome"></span>
            </div>
            <div
              className="hamburger-menu-closeHome"
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
