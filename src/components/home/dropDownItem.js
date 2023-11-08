export const DropDownItem = (props) => {
  return (
    <div class="max-w-[85rem]">
      <div class="max-w-2xl">
        <div class="hs-accordion-group">
          <div
            class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl dark:hs-accordion-active:bg-white/[.05] active"
            id="hs-basic-with-title-and-arrow-stretched-heading-one"
          >
            <button
              class="hs-accordion-toggle group inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
            >
              <li className="mb-2 flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-customized-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                {props.title1}
              </li>
              <svg
                class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-one"
              class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
            >
              <p class="text-gray-800 dark:text-gray-200">{props.subtitle1}</p>
            </div>
          </div>

          <div
            class="hs-accordion rounded-xl dark:hs-accordion-active:bg-white/[.05]"
            id="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <button
              class="hs-accordion-toggle group inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
            >
              <li className="mb-2 flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-customized-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                {props.title2}
              </li>
              <svg
                class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-two"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              <p class="text-gray-800 dark:text-gray-200">{props.subtitle2}</p>
            </div>
          </div>

          <div
            class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl dark:hs-accordion-active:bg-white/[.05]"
            id="hs-basic-with-title-and-arrow-stretched-heading-three"
          >
            <button
              class="hs-accordion-toggle group inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
            >
              <li className="flex items-start">
                <span className="mr-1">
                  <svg
                    className="w-5 h-5 mt-px text-customized-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </span>
                {props.title3}
              </li>
              <svg
                class="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <svg
                class="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m18 15-6-6-6 6" />
              </svg>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-three"
              class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
            >
              <p class="text-gray-800 dark:text-gray-200">{props.subtitle3}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
