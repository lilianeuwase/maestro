import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const ParticipateYogaKinya = () => {
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
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ifatanye natwe mumwitozo wigitwenge gikiza buri kwezi
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Duhamagare kuri +250798979117
            </p>
          </div>
          <SingleTestimonial />
        </div>
      </section>
    </>
  );
};

export default ParticipateYogaKinya;

const SingleTestimonial = () => {
  return (
    <div className="relative flex justify-center">
      <div className="relative w-full pb-16 md:w-11/12 lg:w-10/12 xl:w-8/12 xl:pb-0">
        <div className="w-full items-center md:flex">
          <div className="relative mb-12 w-full max-w-[310px] md:mr-12 md:mb-0 md:max-w-[250px] lg:mr-14 lg:max-w-[280px] 2xl:mr-16">
            <img
              src={require("../../../assets/4pic 1.png")}
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
              <h4 className="text-dark text-xl font-semibold mb-11">
              Ushobora gukurikira izi mfasha nyigisho mugihe ukeneye ubumenyi kubuzima bwo mumutwe
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
                  The Upward Spiral: Using Neuroscience to Reverse the Course of
                  Depression, One Small Change at a Time" by Alex Korb
                </a>
                <br />
                <br />
                <a
                  href="https://www.unicef.org/parenting/mental-health?gclid=CjwKCAjwloynBhBbEiwAGY25dPU2d65kcZdT3Ro7nnTaQ0L_x9FGRg2ucFXY9Or3eJiY-4JqORsvgRoCjNoQAvD_BwE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mental health and well-being: How to support your children and
                  yourself
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
