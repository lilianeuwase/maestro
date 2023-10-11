import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
// import styles from "./index.css"
import Header from "./components/header";
import Navigation from "./components/navigation";
import LGBTQ from "./pages/lgbtq";
import Mental from "./pages/mental";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/home";
import { MotivePic } from "./components/home/motivePic";
import { SpacePic } from "./components/home/spacePic";
import { RelaxPic } from "./components/home/relaxPic";
import ScrollToTop from "./components/ScrollToTop";
import CardsAnimation from "./components/mental/cards/cardsAnimation";
import { AnimateSharedLayout } from "framer-motion";
import { Footer } from "./components/footer";
import Test from "./pages/test";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/mentalhealth", name: "mentalhealth", Component: Mental },
  { path: "/lgbtq", name: "lgbtq", Component: LGBTQ },
  { path: "/motive", name: "motive", Component: MotivePic },
  { path: "/space", name: "space", Component: SpacePic },
  { path: "/relax", name: "relax", Component: RelaxPic },
  { path: "/test", name: "test", Component: Test },

  { path: "/services", name: "services", Component: Services },
  { path: "/about-us", name: "about", Component: About },
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
          <AnimateSharedLayout type="crossfade">
            <Route exact path={["/mentalhealth/:id", "/mentalhealth"]}>
              <CardsAnimation />
            </Route>
          </AnimateSharedLayout>
        </Switch>
      </div>
      <Navigation />
      <Footer />
    </>
  );
}

export default App;
