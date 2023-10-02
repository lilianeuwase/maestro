export const Intro = () => {
  return (
    <div class="dark px-4 py-24 sm:px-6 lg:px-8 lg:py-32 mx-auto bg-black">
      {/* Tab Nav */}
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
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
              <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
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
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"
              />
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
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
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
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
              />
            </svg>
            <span class="md:grow md:ml-5">
              <span class="hs-tab-active:text-customized-10 block font-semibold text-gray-800 dark:hs-tab-active:text-customized-10 dark:text-gray-200">
                LGBTQ+ Individuals
              </span>
              <span class="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">
                Many LGBTQ+ people experience mental health struggles.
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
