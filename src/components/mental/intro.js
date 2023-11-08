export const Intro = () => {
  return (
    <div class="dark px-4 py-20 sm:px-6 lg:px-8 lg:py-28 mx-auto bg-black">
      <div class="mb-12 max-w-2xl text-center mx-auto">
        <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
          Did you{" "}
          <span class="bg-clip-text bg-gradient-to-tl from-red-600 to-yellow-600 text-transparent">
            Know ?
          </span>
        </h1>
      </div>
      <div
        class="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4"
        aria-label="Tabs"
        role="tablist"
      >
        <button
          type="button"
          class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active"
          id="tabs-with-card-item-1"
          data-hs-tab="#tabs-with-card-1"
          aria-controls="tabs-with-card-1"
          role="tab"
        >
          <span class="md:flex">
            <svg
              class="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-customized-10 text-gray-500 dark:hs-tab-active:text-customized-10 dark:text-gray-500"
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
              <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
              <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
              <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
              <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
            </svg>

            <span class="md:grow md:ml-5">
              <span class="hs-tab-active:text-customized-10 block font-semibold text-gray-800 dark:hs-tab-active:text-customized-10 dark:text-gray-200">
                Depression
              </span>
              <span class="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                Depression can happen to anyone, regardless of sex, race, or
                age.
              </span>
            </span>
          </span>
        </button>

        <button
          type="button"
          class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
          id="tabs-with-card-item-2"
          data-hs-tab="#tabs-with-card-2"
          aria-controls="tabs-with-card-2"
          role="tab"
        >
          <span class="md:flex">
            <svg
              class="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-customized-10 text-gray-500 dark:hs-tab-active:text-customized-10 dark:text-gray-500"
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
              <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <circle cx="17.5" cy="17.5" r="3.5" />
            </svg>

            <span class="md:grow md:ml-5">
              <span class="hs-tab-active:text-customized-10 block font-semibold text-gray-800 dark:hs-tab-active:text-customized-10 dark:text-gray-200">
                Anxiety
              </span>
              <span class="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                Persistent worrying and racing thoughts are part of the
                diagnostic criteria for anxiety.
              </span>
            </span>
          </span>
        </button>

        <button
          type="button"
          class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
          id="tabs-with-card-item-3"
          data-hs-tab="#tabs-with-card-3"
          aria-controls="tabs-with-card-3"
          role="tab"
        >
          <span class="md:flex">
            <svg
              class="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-customized-10 text-gray-500 dark:hs-tab-active:text-customized-10 dark:text-gray-500"
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
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>

            <span class="md:grow md:ml-5">
              <span class="hs-tab-active:text-customized-10 block font-semibold text-gray-800 dark:hs-tab-active:text-customized-10 dark:text-gray-200">
                Substance Abuse
              </span>
              <span class="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                Addiction can happen at any age.
              </span>
            </span>
          </span>
        </button>
        <button
          type="button"
          class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700"
          id="tabs-with-card-item-4"
          data-hs-tab="#tabs-with-card-4"
          aria-controls="tabs-with-card-4"
          role="tab"
        >
          <span class="md:flex">
            <svg
              class="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-customized-10 text-gray-500 dark:hs-tab-active:text-customized-10 dark:text-gray-500"
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
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>

            <span class="md:grow md:ml-5">
              <span class="hs-tab-active:text-customized-10 block font-semibold text-gray-800 dark:hs-tab-active:text-customized-10 dark:text-gray-200">
                LGBTQI+ Individuals
              </span>
              <span class="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                Many LGBTQI+ people experience mental health struggles.
              </span>
            </span>
          </span>
        </button>
      </div>
      {/* End Tab Nav */}

      {/* Tab Content */}
      <div class="mt-12 md:mt-16">
        <div
          id="tabs-with-card-1"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-1"
        >
          {/* Devices */}
          <div class="max-w-[1140px] lg:pb-32 relative">
            {/* Mobile Device */}
            <figure class="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
              <div class="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <img
                  class="max-w-full h-auto rounded-[1.25rem]"
                  src={require("../../assets/DepressionPhone.png")}
                  alt="Image Description"
                />
              </div>
            </figure>
            {/* End Mobile Device */}

            {/* Browser Device */}
            <figure class="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div class="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                  <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                  <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                  <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                </div>
                <div class="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">
                  www.maestromindlab.org
                </div>
              </div>

              <div class="bg-gray-800 rounded-b-lg">
                <img
                  class="max-w-full h-auto rounded-b-lg"
                  src={require("../../assets/DepressionPC.png")}
                  alt="Image Description"
                />
              </div>
            </figure>
            {/* End Browser Device */}
          </div>
          {/* End Devices */}
        </div>

        <div
          id="tabs-with-card-2"
          class="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-2"
        >
          {/* Devices */}
          <div class="max-w-[1140px] lg:pb-32 relative">
            {/* Mobile Device */}
            <figure class="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
              <div class="p-1.5 bg-gray-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <img
                  class="max-w-full h-auto rounded-[1.25rem]"
                  src={require("../../assets/AnxietyPhone.png")}
                  alt="Image Description"
                />
              </div>
            </figure>
            {/* End Mobile Device */}

            {/* Browser Device */}
            <figure class="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div class="relative flex items-center max-w-[50rem] bg-gray-800 border-b border-gray-700 rounded-t-lg py-2 px-24">
                <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                  <span class="w-2 h-2 bg-gray-700 rounded-full"></span>
                  <span class="w-2 h-2 bg-gray-700 rounded-full"></span>
                  <span class="w-2 h-2 bg-gray-700 rounded-full"></span>
                </div>
                <div class="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-200 rounded-sm sm:text-[.5rem]">
                  www.maestromindlab.org
                </div>
              </div>

              <div class="bg-gray-800 rounded-b-lg">
                <img
                  class="max-w-full h-auto rounded-b-lg"
                  src={require("../../assets/AnxietyPC.png")}
                  alt="Image Description"
                />
              </div>
            </figure>
            {/* End Browser Device */}
          </div>
          {/* End Devices */}
        </div>

        <div
          id="tabs-with-card-3"
          class="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-3"
        >
          {/* Devices */}
          <div class="max-w-[1140px] lg:pb-32 relative">
            {/* Mobile Device */}
            <figure class="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
              <div class="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <img
                  class="max-w-full h-auto rounded-[1.25rem]"
                  src={require("../../assets/SubstancePhone.png")}
                  alt="Image Description"
                />
              </div>
            </figure>
            {/* End Mobile Device */}

            {/* Browser Device */}
            <figure class="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div class="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                  <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                  <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                  <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                </div>
                <div class="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">
                  www.maestromindlab.org
                </div>
              </div>

              <div class="bg-gray-800 rounded-b-lg">
                <img
                  class="max-w-full h-auto rounded-b-lg"
                  src={require("../../assets/SubstancePc.png")}
                  alt="Image Description"
                />
              </div>
            </figure>
            {/* End Browser Device */}
          </div>
          {/* End Devices */}
        </div>
        <div
          id="tabs-with-card-4"
          class="hidden"
          role="tabpanel"
          aria-labelledby="tabs-with-card-item-4"
        >
          {/* Devices */}
          <div class="max-w-[1140px] lg:pb-32 relative">
            {/* Mobile Device */}
            <figure class="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
              <div class="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
                <img
                  class="max-w-full h-auto rounded-[1.25rem]"
                  src={require("../../assets/lgbtqPhone.png")}
                  alt="Image Description"
                />
              </div>
            </figure>
            {/* End Mobile Device */}

            {/* Browser Device */}
            <figure class="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div class="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
                <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                  <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                  <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                  <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
                </div>
                <div class="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">
                  www.maestromindlab.org
                </div>
              </div>

              <div class="bg-gray-800 rounded-b-lg">
                <img
                  class="max-w-full h-auto rounded-b-lg"
                  src={require("../../assets/lgbtqPc.png")}
                  alt="Image Description"
                />
              </div>
            </figure>
            {/* End Browser Device */}
          </div>
          {/* End Devices */}
        </div>
      </div>
      {/* End Tab Content */}
    </div>
  );
};
