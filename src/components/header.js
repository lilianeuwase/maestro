import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
import { openMenu, closeMenu } from "../animations/menuAnimations";

// Define reducer

const Header = ({ history, dimensions }) => {
  
  const[navbar,setNavbar]=useState(false);
  const changeBackground =()=>{
   if(window.scrollY >= 80){
    setNavbar(true)
   }
   else{
    setNavbar(false)
   }
  }
  window.addEventListener('scroll', changeBackground);


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
    <div className={navbar ? 'headerHome active': 'headerHome'}>
      <div className="containerHome">
        <div className="rowHome v-centerHome space-betweenHome">
          <div className="logoHome">
            <NavLink to="/" exact>
            <img src={require("../assets/Maestro Logo - 2.png")} width={100} height={100} /> {" "}
              {/* MAESTRO. */}
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
