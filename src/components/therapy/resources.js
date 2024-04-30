import { CheckIcon } from "@heroicons/react/20/solid";
export const Resources = () => {
  return (
    <>
      <hr class="h-px mt-4 bg-gray-200 border-2 dark:bg-gray-700" />
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Resources</span>
            </span>
          </h2>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-3">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-customized-3 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Depression Resources
            </h6>

            <ul
              role="list"
              className="mt-8 gap-4 text-sm leading-6 text-gray-600"
            >
              <li>
                <a
                  href="https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-3 hover:text-customized-5"
                  target="_blank"
                >
                  Mayo Clinic
                </a>
              </li>
              <li>
                <a
                  href="https://www.jedfoundation.org/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-3 hover:text-customized-5"
                  target="_blank"
                >
                  The Jed Foundation
                </a>
              </li>
              <li>
                <a
                  href="https://www.dbsalliance.org/"
                  aria-label=""
                  className="inline-flex font-semibold transition-colors duration-200 text-customized-3 hover:text-customized-5"
                  target="_blank"
                >
                  Depression and Bipolar Support Alliance
                </a>
              </li>

              <li>
                <a
                  href="https://www.nimh.nih.gov/health/topics/depression"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-3 hover:text-customized-5"
                  target="_blank"
                >
                  National Institute of Mental Health
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-customized-1 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Anxiety Resources
            </h6>
            <ul
              role="list"
              className="mt-8 gap-4 text-sm leading-6 text-gray-600"
            >
              <li>
                <a
                  href="https://www.anxietycanada.com/resources/mindshift-cbt/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-1 hover:text-customized-5"
                  target="_blank"
                >
                  MindShift
                </a>
              </li>
              <li>
                <a
                  href="https://www.calmclinic.com/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-1 hover:text-customized-5"
                  target="_blank"
                >
                  Calm Clinic
                </a>
              </li>
              <li>
                <a
                  href="https://www.anxiety.org/"
                  aria-label=""
                  className="inline-flex font-semibold transition-colors duration-200 text-customized-1 hover:text-customized-5"
                  target="_blank"
                >
                  Anxiety Org
                </a>
              </li>
              <li>
                <a
                  href="https://adaa.org/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-customized-1 hover:text-customized-5"
                  target="_blank"
                >
                  Anxiety and Depression Association of America
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Substance Resources
            </h6>
            <ul
              role="list"
              className="mt-8 gap-4 text-sm leading-6 text-gray-600"
            >
              <li>
                <a
                  href="https://www.helpguide.org/articles/addictions/substance-abuse-and-mental-health.htm"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-accent-400 hover:text-customized-5"
                  target="_blank"
                >
                  Help Guide
                </a>
              </li>
              <li>
                <a
                  href="https://sumh.utah.gov/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-accent-400 hover:text-customized-5"
                  target="_blank"
                >
                  Department of Health and Human
                </a>
              </li>
              <li>
                <a
                  href="https://www.drugabuse.gov/"
                  aria-label=""
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-accent-400 hover:text-customized-5"
                  target="_blank"
                >
                  National Institute on Drug Abuse
                </a>
              </li>
              <li>
                <a
                  href="https://www.samhsa.gov/"
                  aria-label=""
                  className="inline-flex font-semibold transition-colors duration-200 text-purple-accent-400 hover:text-customized-5"
                  target="_blank"
                >
                  Substance Abuse and Mental Health Services Administration
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
