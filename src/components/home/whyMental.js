import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";

import leftArrow from "../../assets/arrow-left1.svg";
import rightArrow from "../../assets/arrow-right1.svg";

// import "reset-css";
import "./whyMental.scss";

const testimonials = [
  {
    name: "Helping LGBT youth with their mental health is really important because they deal with some tough problems. They go through a lot because of who they like or who they are. Let's quickly look at why it's so vital to give them the right mental health support.",
    title: "Click on the right arrow",
    image: `${require("../../assets/2hands.jpeg")}`,
    quote: "Why mental health support for LGBT youth is crucial",
  },
  {
    name: "LGBT youth might find it hard to feel okay with who they are because of how society treats them. Mental health support gives them a safe place where they can understand and accept themselves without being afraid or embarrassed.",
    title: "LGBT Youth",
    image: `${require("../../assets/cover2.png")}`,
    quote: "Identity Acceptance",
  },
  {
    name: "LGBT youth are more likely to be picked on, treated badly, or left out, which can make them feel alone, worried, and sad. Having enough help makes it easier for them to handle these tough situations and become stronger.",
    title: "LGBT Youth",
    image: `${require("../../assets/cover3.png")}`,
    quote: "Bullying and Harassment",
  },
  {
    name: "Some LGBT youth get pushed away by their families, and this can make them have nowhere to live or not get along with their families anymore. Mental health services give them advice and help to deal with family issues and make better connections with people who support them.",
    title: "LGBT Youth",
    image: `${require("../../assets/cover4.png")}`,
    quote: "Family Rejection",
  },
  {
    name: "Because of the pressure from how society treats them, LGBT youth are more likely to think about or try to end their own lives. Having the right mental health help can step in, teach them how to deal with this, and provide them with coping strategies that can stop these terrible things from happening.",
    title: "LGBT Youth",
    image: `${require("../../assets/Black Hand.jpeg")}`,
    quote: "Suicide Prevention",
  },
  {
    name: "Access to mental health resources enables LGBT youth to build healthy relationships, set boundaries, and recognize signs of abuse or manipulation.",
    title: "LGBT Youth",
    image: `${require("../../assets/sad.jpeg")}`,
    quote: "Healthy Relationships",
  },
  {
    name: "Helping with mental health now gives LGBT youth the emotional tools to get past problems and follow their dreams, making their future happier and more satisfying.",
    title: "LGBT Youth",
    image: `${require("../../assets/warmwelcome.png")}`,
    quote: "Future Success",
  },
];

function WhyMental() {
  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
    isActive4: false,
    isActive5: false,
    isActive6: false,
    isActive7: false,
  });

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0, {
      opacity: 1,
    });
  }, []);

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  //Content transition

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 1,
      delay: 1,
    });
  };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive3: false, isActive4: true });
      //Image transition
      slideRight(1, 1);
      slideLeft(2, 1, 3);
      slideLeft(3, 1, 3);
      scale(3, 1);
      //content transition
      fadeOut(2, 1);
      fadeIn(3, 1);
    } else if (imageList.children[3].classList.contains("active")) {
      setState({ isActive4: false, isActive5: true });
      //Image transition
      slideRight(2, 1);
      slideLeft(3, 1, 4);
      slideLeft(4, 1, 4);
      scale(4, 1);
      //content transition
      fadeOut(3, 1);
      fadeIn(4, 1);
    } else if (imageList.children[4].classList.contains("active")) {
      setState({ isActive5: false, isActive6: true });
      //Image transition
      slideRight(3, 1);
      slideLeft(4, 1, 5);
      slideLeft(5, 1, 5);
      scale(5, 1);
      //content transition
      fadeOut(4, 1);
      fadeIn(5, 1);
    } else if (imageList.children[5].classList.contains("active")) {
      setState({ isActive6: false, isActive7: true });
      //Image transition
      slideRight(4, 1);
      slideLeft(5, 1, 6);
      slideLeft(6, 1, 6);
      scale(6, 1);
      //content transition
      fadeOut(5, 1);
      fadeIn(6, 1);
    } else if (imageList.children[6].classList.contains("active")) {
      setState({ isActive1: true, isActive7: false });
      //Image transition
      slideLeft(6, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(6, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };

  return (
    <div className="testimonial-sectionChoose">
      <div className="testimonial-containerChoose">
        <div onClick={prevSlide} className="arrowsChoose left">
          <span>
            <img src={leftArrow} alt="left arrow" />
          </span>
        </div>
        <div className="innerChoose">
          <div className="t-imageChoose">
            <ul ref={(el) => (imageList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <img src={testimonials[1].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={testimonials[2].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive4 ? "active" : ""}>
                <img src={testimonials[3].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive4 ? "active" : ""}>
                <img src={testimonials[4].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive4 ? "active" : ""}>
                <img src={testimonials[5].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive4 ? "active" : ""}>
                <img src={testimonials[6].image} alt={testimonials[0].name} />
              </li>
            </ul>
          </div>
          <div className="t-contentChoose">
            <ul ref={(el) => (testimonialList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <div className="content-innerChoose">
                  <p className="quoteChoose">{testimonials[0].quote}</p>
                  <h3 className="nameChoose">{testimonials[0].name}</h3>
                  <h4 className="titleChoose">{testimonials[0].title}</h4>
                </div>
              </li>
              <li className={state.isActive2 ? "active" : ""}>
                <div className="content-innerChoose">
                  <p className="quoteChoose">{testimonials[1].quote}</p>
                  <h3 className="nameChoose">{testimonials[1].name}</h3>
                  <h4 className="titleChoose">{testimonials[1].title}</h4>
                </div>
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <div className="content-innerChoose">
                  <p className="quoteChoose">{testimonials[2].quote}</p>
                  <h3 className="nameChoose">{testimonials[2].name}</h3>
                  <h4 className="titleChoose">{testimonials[2].title}</h4>
                </div>
              </li>
              <li className={state.isActive4 ? "active" : ""}>
                <div className="content-innerChoose">
                  <p className="quoteChoose">{testimonials[3].quote}</p>
                  <h3 className="nameChoose">{testimonials[3].name}</h3>
                  <h4 className="titleChoose">{testimonials[3].title}</h4>
                </div>
              </li>
              <li className={state.isActive4 ? "active" : ""}>
                <div className="content-innerChoose">
                  <p className="quoteChoose">{testimonials[4].quote}</p>
                  <h3 className="nameChoose">{testimonials[4].name}</h3>
                  <h4 className="titleChoose">{testimonials[4].title}</h4>
                </div>
              </li>
              <li className={state.isActive4 ? "active" : ""}>
                <div className="content-innerChoose">
                  <p className="quoteChoose">{testimonials[5].quote}</p>
                  <h3 className="nameChoose">{testimonials[5].name}</h3>
                  <h4 className="titleChoose">{testimonials[5].title}</h4>
                </div>
              </li>
              <li className={state.isActive4 ? "active" : ""}>
                <div className="content-innerChoose">
                  <p className="quoteChoose">{testimonials[6].quote}</p>
                  <h3 className="nameChoose">{testimonials[6].name}</h3>
                  <h4 className="titleChoose">{testimonials[6].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrowsChoose rightChoose" onClick={nextSlide}>
          <img src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
}

export default WhyMental;
