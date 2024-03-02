import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
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
import HeaderKinya from "./components/kinya/headerKinya";
import NavigationKinya from "./components/kinya/navigationKinya";
import MiniFooterKinya from "./components/kinya/miniFooterKinya";
import { FooterKinya } from "./components/kinya/footerKinya";

//Kinya
import HomeKinya from "./pages/kinyaPages/homeKinya";
import { MotivePicKinya } from "./components/kinya/home/motivePicKinya";
import { SpacePicKinya } from "./components/kinya/home/spacePicKinya";
import { RelaxPicKinya } from "./components/kinya/home/relaxPicKinya";
import MentalKinya from "./pages/kinyaPages/mentalKinya";
import TestsKinya from "./pages/kinyaPages/testsKinya";
import TherapyKinya from "./pages/kinyaPages/therapyKinya";
import LGBTQKinya from "./pages/kinyaPages/lgbtqKinya";
import GetInvolvedKinya from "./pages/kinyaPages/getInvolvedKinya";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/therapy", name: "therapy", Component: Therapy },
  { path: "/lgbtq", name: "lgbtq", Component: LGBTQ },
  { path: "/motive", name: "motive", Component: MotivePic },
  { path: "/space", name: "space", Component: SpacePic },
  { path: "/relax", name: "relax", Component: RelaxPic },
  { path: "/test", name: "test", Component: Tests },
  { path: "/getinvolved", name: "getinvolved", Component: GetInvolved },
  { path: "/mentalhealth", name: "mentalhealth", Component: Mental },
  { path: "/about-us", name: "aboutus", Component: AboutUs },

  //Kinya
  { path: "/kinya", name: "HomeKinya", Component: HomeKinya },
  { path: "/kinyamotive", name: "motiveKinya", Component: MotivePicKinya },
  { path: "/kinyaspace", name: "spaceKinya", Component: SpacePicKinya },
  { path: "/kinyarelax", name: "relaxKinya", Component: RelaxPicKinya },
  { path: "/kinyamentalhealth", name: "mentalhealthKinya", Component: MentalKinya },
  { path: "/kinyatest", name: "testKinya", Component: TestsKinya },
  { path: "/kinyatherapy", name: "therapyKinya", Component: TherapyKinya },
  { path: "/kinyalgbtq", name: "lgbtqKinya", Component: LGBTQKinya },
  { path: "/kinyagetinvolved", name: "getinvolvedKinya", Component: GetInvolvedKinya },
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

  let location = useLocation();

  if (location.pathname.substring(0, 6) == "/kinya") {
    var english = false;
  } else {
    var english = true;
  }
  console.log(location.pathname);
  console.log(location.pathname.substring(0, 6));
  console.log(english);

  return (
    <>
      <ScrollToTop />

      {english ? (
        <Header dimensions={dimensions} />
      ) : (
        <HeaderKinya dimensions={dimensions} />
      )}
      {/* <Header dimensions={dimensions} /> */}
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
      {english ? <Navigation /> : <NavigationKinya />}
      {english ? <MiniFooter /> : <MiniFooterKinya />}
      {english ? <Footer /> : <FooterKinya />}
      {/* <Navigation />
      <MiniFooter/>
      <Footer /> */}
    </>
  );
}

export default App;
