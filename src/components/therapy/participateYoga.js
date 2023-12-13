import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const ParticipateYoga = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <hr class="h-px my-4 bg-gray-200 border-2 dark:bg-gray-700" />
      <section className="pt-12 pb-4 lg:pt-[60px] lg:pb-[20px]">
        <div className="container mx-auto max-w-6xl">
          <div className="lg:max-w-lg mb-16">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
              (link to sign up)
            </h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Participate in our Monthly Laughter Yoga
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Call Us on +250 798 979 117
            </p>
          </div>
          {/* <Swiper slidesPerView={1} ref={sliderRef}> */}
          {/* <SwiperSlide> */}
          <SingleTestimonial
          // image={require("../../assets/4pic 1.png")}
          // reviewImg={require("../../assets/lineiconCrop.png")}
          // reviewAlt="lineicon"
          // name="David D. Burns"
          // position="Author"
          // link="https://yes-pdf.com/electronic-book/1074"
          />
          {/* </SwiperSlide> */}
          {/* <SwiperSlide>
              <SingleTestimonial
                image={require("../../assets/4pic 6.png")}
                reviewImg={require("../../assets/lineiconCrop.png")}
                reviewAlt="lineicon"
                details="The Anxiety and Phobia Workbook"
                name="Edmund J. Bourne"
                position="Author"
                link="https://www.pdfdrive.com/the-anxiety-and-phobia-workbook-e176068677.html"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                image={require("../../assets/4pic 5.png")}
                reviewImg={require("../../assets/lineiconCrop.png")}
                reviewAlt="lineicon"
                details="The Upward Spiral: Using Neuroscience to Reverse the Course of Depression, One Small Change at a Time"
                name="Alex Korb"
                position="Author"
                link="https://www.pdfdrive.com/the-upward-spiral-using-neuroscience-to-reverse-the-course-of-depression-one-small-change-at-a-time-e178215619.html"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                image={require("../../assets/4pic 4.png")}
                reviewImg={require("../../assets/lineiconCrop.png")}
                reviewAlt="lineicon"
                details="Mental health and well-being: How to support your children and yourself"
                // name="Edmund J. Bourne"
                // position="Author"
                link="https://www.unicef.org/parenting/mental-health?gclid=CjwKCAjwloynBhBbEiwAGY25dPU2d65kcZdT3Ro7nnTaQ0L_x9FGRg2ucFXY9Or3eJiY-4JqORsvgRoCjNoQAvD_BwE"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                image={require("../../assets/4pic 3.png")}
                reviewImg={require("../../assets/lineiconCrop.png")}
                reviewAlt="lineicon"
                details="Doing What Matters in Times of Stress. "
                // name="Edmund J. Bourne"
                // position="Author"
                link="https://www.who.int/publications/i/item/9789240003927?gclid=CjwKCAjwloynBhBbEiwAGY25dLaUGjQfIg1ZjmOCVF8sFDPwEJQVAsN67iQz9vkRyGFuHi5mlYdCUBoCsKgQAvD_BwE"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SingleTestimonial
                image={require("../../assets/4pic 2.png")}
                reviewImg={require("../../assets/lineiconCrop.png")}
                reviewAlt="lineicon"
                details="Psychology Today: Health, Help, Happiness + Find a Therapist"
                // name="Edmund J. Bourne"
                // position="Author"
                link="https://www.psychologytoday.com/us"
              />
            </SwiperSlide> */}
          {/* <div className="absolute z-50 left-0 right-0 bottom-0 flex items-center justify-center lg:pl-[120px] 2xl:pl-0">
              <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                <button className="text-primary hover:bg-primary shadow-input mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all hover:text-white">
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    className="fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.24264 11.8033L0.46967 7.03037C0.176777 6.73748 0.176777 6.2626 0.46967 5.96971L5.24264 1.19674C5.53553 0.903845 6.01041 0.903845 6.3033 1.19674C6.59619 1.48963 6.59619 1.96451 6.3033 2.2574L2.81066 5.75004H14C14.4142 5.75004 14.75 6.08583 14.75 6.50004C14.75 6.91425 14.4142 7.25004 14 7.25004H2.81066L6.3033 10.7427C6.59619 11.0356 6.59619 11.5104 6.3033 11.8033C6.01041 12.0962 5.53553 12.0962 5.24264 11.8033Z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="next-arrow cursor-pointer" onClick={handleNext}>
                <button className="text-primary hover:bg-primary shadow-input mx-1 flex h-12 w-12 items-center justify-center rounded-full bg-white transition-all hover:text-white">
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    className="fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.75736 11.8033L14.5303 7.03037C14.8232 6.73748 14.8232 6.2626 14.5303 5.96971L9.75736 1.19674C9.46447 0.903845 8.98959 0.903845 8.6967 1.19674C8.40381 1.48963 8.40381 1.96451 8.6967 2.2574L12.1893 5.75004H1C0.585786 5.75004 0.25 6.08583 0.25 6.50004C0.25 6.91425 0.585786 7.25004 1 7.25004H12.1893L8.6967 10.7427C8.40381 11.0356 8.40381 11.5104 8.6967 11.8033C8.98959 12.0962 9.46447 12.0962 9.75736 11.8033Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div> */}
          {/* </Swiper> */}
        </div>
      </section>
    </>
  );
};

export default ParticipateYoga;

const SingleTestimonial = () =>
  //   {
  //   image,
  //   reviewImg,
  //   reviewAlt,
  //   details,
  //   name,
  //   position,
  //   link,
  // }
  {
    return (
      <div className="relative flex justify-center">
        <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0">
          <div className="w-full items-center md:flex">
            <div className="relative mb-12 w-full max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
              <img
                src={require("../../assets/4pic 1.png")}
                alt="image"
                className="w-full"
              />
              <span className="absolute -top-6 -left-6 z-[-1] hidden sm:block">
                <DotShape />
              </span>
              <span className="absolute -bottom-0 -right-6 z-[-1]">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 32C3 15.9837 15.9837 3 32 3C48.0163 2.99999 61 15.9837 61 32C61 48.0163 48.0163 61 32 61C15.9837 61 3 48.0163 3 32Z"
                    stroke="#13C296"
                    strokeWidth="6"
                  />
                </svg>
              </span>
            </div>
            <div className="w-full">
              <div>
                {/* <div className="mb-7">
                <img src={require("../../assets/lineiconCrop.png")} />
              </div> */}
                <h4 className="text-dark text-xl font-semibold mb-11">
                  Links to relevant books, articles, and external resources
                </h4>
                <p className="text-body-color text-base font-medium italic">
                  <a
                    href="https://yes-pdf.com/electronic-book/1074"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Feeling Good: The New Mood Therapy" by David D. Burns
                  </a>{" "}
                  <br />
                  <br />
                  <a
                    href="https://www.pdfdrive.com/the-anxiety-and-phobia-workbook-e176068677.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    The Anxiety and Phobia Workbook" by Edmund J. Bourne
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://www.pdfdrive.com/the-upward-spiral-using-neuroscience-to-reverse-the-course-of-depression-one-small-change-at-a-time-e178215619.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    The Upward Spiral: Using Neuroscience to Reverse the Course
                    of Depression, One Small Change at a Time" by Alex Korb
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://www.unicef.org/parenting/mental-health?gclid=CjwKCAjwloynBhBbEiwAGY25dPU2d65kcZdT3Ro7nnTaQ0L_x9FGRg2ucFXY9Or3eJiY-4JqORsvgRoCjNoQAvD_BwE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mental health and well-being: How to support your children
                    and yourself
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://www.who.int/publications/i/item/9789240003927?gclid=CjwKCAjwloynBhBbEiwAGY25dLaUGjQfIg1ZjmOCVF8sFDPwEJQVAsN67iQz9vkRyGFuHi5mlYdCUBoCsKgQAvD_BwE "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Doing What Matters in Times of Stress
                  </a>
                  <br />
                  <br />
                  <a
                    href="https://www.psychologytoday.com/us "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Psychology Today: Health, Help, Happiness + Find a Therapist
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

const DotShape = () => {
  return (
    <>
      <svg
        width="77"
        height="77"
        viewBox="0 0 77 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="1.66343"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 1.66343 74.5221)"
          fill="#3056D3"
        />
        <circle
          cx="1.66343"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 1.66343 30.94)"
          fill="#3056D3"
        />
        <circle
          cx="16.3016"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 16.3016 74.5221)"
          fill="#3056D3"
        />
        <circle
          cx="16.3016"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 16.3016 30.94)"
          fill="#3056D3"
        />
        <circle
          cx="30.9398"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 30.9398 74.5221)"
          fill="#3056D3"
        />
        <circle
          cx="30.9398"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 30.9398 30.94)"
          fill="#3056D3"
        />
        <circle
          cx="45.578"
          cy="74.5221"
          r="1.66343"
          transform="rotate(-90 45.578 74.5221)"
          fill="#3056D3"
        />
        <circle
          cx="45.578"
          cy="30.94"
          r="1.66343"
          transform="rotate(-90 45.578 30.94)"
          fill="#3056D3"
        />
        <circle
          cx="60.2162"
          cy="74.5216"
          r="1.66343"
          transform="rotate(-90 60.2162 74.5216)"
          fill="#3056D3"
        />
        <circle
          cx="74.6634"
          cy="74.5216"
          r="1.66343"
          transform="rotate(-90 74.6634 74.5216)"
          fill="#3056D3"
        />
        <circle
          cx="60.2162"
          cy="30.9398"
          r="1.66343"
          transform="rotate(-90 60.2162 30.9398)"
          fill="#3056D3"
        />
        <circle
          cx="74.6634"
          cy="30.9398"
          r="1.66343"
          transform="rotate(-90 74.6634 30.9398)"
          fill="#3056D3"
        />
        <circle
          cx="1.66343"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 1.66343 59.8839)"
          fill="#3056D3"
        />
        <circle
          cx="1.66343"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 1.66343 16.3017)"
          fill="#3056D3"
        />
        <circle
          cx="16.3016"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 16.3016 59.8839)"
          fill="#3056D3"
        />
        <circle
          cx="16.3016"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 16.3016 16.3017)"
          fill="#3056D3"
        />
        <circle
          cx="30.9398"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 30.9398 59.8839)"
          fill="#3056D3"
        />
        <circle
          cx="30.9398"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 30.9398 16.3017)"
          fill="#3056D3"
        />
        <circle
          cx="45.578"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 45.578 59.8839)"
          fill="#3056D3"
        />
        <circle
          cx="45.578"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 45.578 16.3017)"
          fill="#3056D3"
        />
        <circle
          cx="60.2162"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 60.2162 59.8839)"
          fill="#3056D3"
        />
        <circle
          cx="74.6634"
          cy="59.8839"
          r="1.66343"
          transform="rotate(-90 74.6634 59.8839)"
          fill="#3056D3"
        />
        <circle
          cx="60.2162"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 60.2162 16.3017)"
          fill="#3056D3"
        />
        <circle
          cx="74.6634"
          cy="16.3017"
          r="1.66343"
          transform="rotate(-90 74.6634 16.3017)"
          fill="#3056D3"
        />
        <circle
          cx="1.66343"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 1.66343 45.2455)"
          fill="#3056D3"
        />
        <circle
          cx="1.66343"
          cy="1.66342"
          r="1.66343"
          transform="rotate(-90 1.66343 1.66342)"
          fill="#3056D3"
        />
        <circle
          cx="16.3016"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 16.3016 45.2455)"
          fill="#3056D3"
        />
        <circle
          cx="16.3016"
          cy="1.66342"
          r="1.66343"
          transform="rotate(-90 16.3016 1.66342)"
          fill="#3056D3"
        />
        <circle
          cx="30.9398"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 30.9398 45.2455)"
          fill="#3056D3"
        />
        <circle
          cx="30.9398"
          cy="1.66342"
          r="1.66343"
          transform="rotate(-90 30.9398 1.66342)"
          fill="#3056D3"
        />
        <circle
          cx="45.578"
          cy="45.2455"
          r="1.66343"
          transform="rotate(-90 45.578 45.2455)"
          fill="#3056D3"
        />
        <circle
          cx="45.578"
          cy="1.66344"
          r="1.66343"
          transform="rotate(-90 45.578 1.66344)"
          fill="#3056D3"
        />
        <circle
          cx="60.2162"
          cy="45.2458"
          r="1.66343"
          transform="rotate(-90 60.2162 45.2458)"
          fill="#3056D3"
        />
        <circle
          cx="74.6634"
          cy="45.2458"
          r="1.66343"
          transform="rotate(-90 74.6634 45.2458)"
          fill="#3056D3"
        />
        <circle
          cx="60.2162"
          cy="1.66371"
          r="1.66343"
          transform="rotate(-90 60.2162 1.66371)"
          fill="#3056D3"
        />
        <circle
          cx="74.6634"
          cy="1.66371"
          r="1.66343"
          transform="rotate(-90 74.6634 1.66371)"
          fill="#3056D3"
        />
      </svg>
    </>
  );
};
