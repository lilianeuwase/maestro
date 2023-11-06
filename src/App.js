import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import LGBTQ from "./pages/lgbtq";
import Therapy from "./pages/therapy";
import Mental from "./pages/mental";
import Home from "./pages/home";
import { MotivePic } from "./components/home/motivePic";
import { SpacePic } from "./components/home/spacePic";
import { RelaxPic } from "./components/home/relaxPic";
import ScrollToTop from "./components/ScrollToTop";
import CardsAnimation from "./components/therapy/cards/cardsAnimation";
import { AnimateSharedLayout } from "framer-motion";
import { Footer } from "./components/footer";
import Tests from "./pages/tests";
import GetInvolved from "./pages/getInvolved";
import MiniFooter from "./components/miniFooter";
import AboutUs from "./pages/aboutUs";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/therapy", name: "therapy", Component: Therapy },
  { path: "/lgbtq", name: "lgbtq", Component: LGBTQ },
  { path: "/motive", name: "motive", Component: MotivePic },
  { path: "/space", name: "space", Component: SpacePic },
  { path: "/relax", name: "relax", Component: RelaxPic },
  { path: "/test", name: "test", Component: Tests },
  { path: "/getinvolved", name: "getinvolved", Component: GetInvolved },
  { path: "/mentalhealth", name: "about", Component: Mental },
  { path: "/about-us", name: "aboutus", Component: AboutUs },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <>
      <ScrollToTop />
      <Header dimensions={dimensions} />
      <div className="AppHome">
        <Switch>
          {routes.map(({ path, Component, id }) => (
            <Route key={path} exact path={path}>
              <Component dimensions={dimensions} id={id} />
            </Route>
          ))}
          {/* <AnimateSharedLayout type="crossfade">
            <Route exact path={["/mentalhealth/:id", "/mentalhealth"]}>
              <CardsAnimation />
            </Route>
          </AnimateSharedLayout> */}
        </Switch>
      </div>
      <Navigation />
      <MiniFooter/>
      <Footer />
    </>
  );
}

export default App;
