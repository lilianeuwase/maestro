import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";

import leftArrow from "../../assets/arrow-left1.svg";
import rightArrow from "../../assets/arrow-right1.svg";

// import "reset-css";
import "../../styles/home/whyMental.scss";

const testimonials = [
  {
    name: "Because of the pressure from how society treats them, LGBT youth are more likely to think about or try to end their own lives. Having the right mental health help can step in, teach them how to deal with this, and provide them with coping strategies that can stop these terrible things from happening.",
    title: "",
    image: `${require("../../assets/2hands.jpeg")}`,
    quote: "Suicide Prevention",
  },
  {
    name: "Access to mental health resources enables LGBT youth to build healthy relationships, set boundaries, and recognize signs of abuse or manipulation.",
    title: "",
    image: `${require("../../assets/cover3.png")}`,
    quote: "Healthy Relationships",
  },
  {
    name: "Helping with mental health now gives LGBT youth the emotional tools to get past problems and follow their dreams, making their future happier and more satisfying.",
    title: "",
    image: `${require("../../assets/highfive.jpeg")}`,
    quote: "Future Success",
  }
];

function WhyMental() {
  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false
  });

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0, {
      opacity: 1
    });
  }, []);

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut
    });
  };

  //Content transition

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 0
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 1,
      delay: 1
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
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(2, 1);
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
            <ul ref={el => (imageList = el)}>
              <li className={state.isActive1 ? "active  flex-shrink-0" : " flex-shrink-0"}>
                <img src={testimonials[0].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive2 ? "active  flex-shrink-0" : " flex-shrink-0"}>
                <img src={testimonials[1].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive3 ? "active  flex-shrink-0" : "  flex-shrink-0"}>
                <img src={testimonials[2].image} alt={testimonials[0].name} />
              </li>
            </ul>
          </div>
          <div className="t-contentChoose">
            <ul ref={el => (testimonialList = el)}>
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