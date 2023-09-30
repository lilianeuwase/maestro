export const Homestats = () => {
  return (
    <div className="bg-customized-6">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-customized-10">
              3.3M
              </h6>
              <div className="flex items-center justify-center rounded-full bg-customized-12 w-7 h-7">
                <svg
                  className="text-customized-2 w-7 h-7"
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
            </div>
            <p className="mb-2 font-bold md:text-lg">Deaths due to alcohol</p>
            <p className="text-gray-700">
            The World Health Organization (WHO) estimation deaths that were attributed to alcohol consumption in 2016.
            <br/>(5.9% of all global deaths)
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-customized-10">
              585K
              </h6>
              <div className="flex items-center justify-center rounded-full bg-customized-12 w-7 h-7">
                <svg
                  className="text-customized-2  w-7 h-7"
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
            </div>
            <p className="mb-2 font-bold md:text-lg">Deaths due to drugs</p>
            <p className="text-gray-700">
            Drug-related deaths due to overdosethe in 2017. According to the World Drug Report by the United Nations Office on Drugs and Crime (UNODC)
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-customized-10">
                283M
              </h6>
              <div className="flex items-center justify-center rounded-full bg-customized-12 w-7 h-7">
                <svg
                  className="text-customized-2  w-7 h-7"
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
            </div>
            <p className="mb-2 font-bold md:text-lg">Alcoholics</p>
            <p className="text-gray-700">
            Globally, it is estimated that 237 million men and 46 million women have alcohol use disorders
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
