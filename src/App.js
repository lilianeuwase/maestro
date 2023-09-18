import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
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

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/mentalhealth", name: "mental", Component: Mental },
  { path: "/lgbtq", name: "lgbtq", Component: LGBTQ },
  
  { path: "/services", name: "services", Component: Services },
  { path: "/about-us", name: "about", Component: About },
  { path: "/motive", name: "motive", Component: MotivePic },
  { path: "/space", name: "motive", Component: SpacePic },
  { path: "/relax", name: "motive", Component: RelaxPic },
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
    <ScrollToTop/>
      <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
