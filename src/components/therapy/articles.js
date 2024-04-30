export const Articles = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black-900 uppercase rounded-full bg-customized-10">
            Maestro Mind Lab Recommendation
          </p>
        </div>
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="07690130-d013-42bc-83f4-90de7ac68f76"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#07690130-d013-42bc-83f4-90de7ac68f76)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Resources</span>
          </span>{" "}
          for LGBTQI+ youth
        </h2>
      </div>
      <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
        <div className="space-y-6 sm:px-16">
          <p className="text-base text-gray-700 md:text-lg mb-8">
            Articles on mental health topics specific to LGBTQI+ youth
          </p>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-customized-6">
                <svg
                  className="w-8 text-customized-3"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
              LGBTQI+ Internet Use
              </h6>
              <p className="text-sm text-gray-900">
                How LGBTQI+ Young People Use the Internet in Relation to Their Mental Health:
                Exploratory Study
              </p>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6320432/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-3 hover:text-deep-purple-800"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-customized-6">
                <svg
                  className="w-8 text-customized-3"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Social Media
              </h6>
              <p className="text-sm text-gray-900">
              Can Social Media Participation Enhance LGBTQI+ Youth Well-Being?
                {/* Development of
                the Social Media Benefits Scale */}
              </p>
              <a
                href="https://journals.sagepub.com/doi/full/10.1177/2056305121988931"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-3 hover:text-deep-purple-800"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-customized-6">
                <svg
                  className="w-8 text-customized-3"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Social Media Use
              </h6>
              <p className="text-sm text-gray-900">
              Social Media Use and Health and Well-being of LGBTQI+ Youth: Systematic Review
              </p>
              <a
                href="https://www.jmir.org/2022/9/e38449/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-3 hover:text-deep-purple-800"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-customized-6">
                <svg
                  className="w-8 text-customized-3"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                Examining Social Media
              </h6>
              <p className="text-sm text-gray-900">
                Experiences and Attitudes Toward Technology-Based Interventions
                for Reducing Social Isolation Among LGBTQI+ Youth Living in Rural
                United States: An Online Qualitative Study
              </p>
              <a
                href="https://www.frontiersin.org/articles/10.3389/fdgth.2022.900695/full"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-3 hover:text-deep-purple-800"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div> */}
        </div>
        <div className="space-y-6 sm:px-16">
          <p className="text-base text-gray-700 md:text-lg mb-8">
            Video links on mental health topics specific to LGBTQI+ youth
          </p>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-customized-6">
                <svg
                  className="w-8 text-customized-3"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">Mental HealthProtection</h6>
              <p className="text-sm text-gray-900">
                Protecting mental health in the LGBTQI+ community | Safe Space
              </p>
              <a
                href="https://www.youtube.com/watch?v=SlJqE1nL30Y"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-3 hover:text-deep-purple-800"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-customized-6">
                <svg
                  className="w-8 text-customized-3"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                LGBTQI+ Youth Mental Health
              </h6>
              <p className="text-sm text-gray-900">
                LGBTQI+ Youth Mental Health
              </p>
              <a
                href="https://www.youtube.com/watch?v=27cnH2XiLas"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-3 hover:text-deep-purple-800"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-customized-6">
                <svg
                  className="w-8 text-customized-3"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                A Slice of Heaven Film
              </h6>
              <p className="text-sm text-gray-900">
                Through the Rainbow Lens: a film exploring mental health issues
                affecting the LGBTQI+ community
              </p>
              <a
                href="https://www.youtube.com/watch?v=RVbx1O8bi8c "
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-3 hover:text-deep-purple-800"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col max-w-md sm:flex-row">
            <div className="mb-4 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-customized-6">
                <svg
                  className="w-8 text-customized-3"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5">
                LGBTQI+ Mental Health Matters
              </h6>
              <p className="text-sm text-gray-900">
              LGBTQI+ Mental Health Matters
              </p>
              <a
                href="https://www.youtube.com/watch?v=ZJrLnBGvi2Y"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-3 hover:text-deep-purple-800"
                target="_blank"
              >
                Learn more
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
