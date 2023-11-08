import { DropDownItem } from "./dropDownItem";

export const Navigate = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            Navigating the Road to Recovery
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg">
            Substance abuse is when a person uses too many drugs or alcohol and
            it starts causing problems in their life, like health issues or
            trouble with friends and family.
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-customized-6">
            <svg
              className="w-7 h-7 text-customized-10"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="13" fill="none" r="9" stroke="currentColor" />
              <path
                d=" M21.955,18.005c1.089,2.145,1.378,3.816,0.622,4.572C20.92,24.234,14.799,20.799,9,15S-0.234,3.08,1.423,1.423 C2.18,0.666,3.853,0.956,6,2.047"
                stroke="currentColor"
                fill="none"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Do not be trapped</h6>
          <p className="mb-3 text-base text-gray-900">
            Too much substances can trap even the very strong people, making it
            a hard to solve it.
          </p>
          <DropDownItem
            title1="Examine"
            subtitle1="Helps to gain insight on underlying cause and how to overcome it"
            title2="Take time"
            subtitle2="Helps in self-discovery, and personal growth"
            title3="Consider"
            subtitle3="Considering helps to choose good decision that promote your healing journey"
          />
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-customized-6">
            <svg
              className="w-7 h-7 text-customized-10"
              viewBox="0 0 24 24"
              strokeLinecap="round"
            >
              <path
                d="M2,10C2,5.029,6.47,1,12,1c5.379,0,10,4.029,10,9S15.712,23,12,23C8.212,23,2,14.971,2,10Z"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
              />
              <path
                d="M5,9a6.529,6.529,0,0,1,4.393,1.607C10.705,11.92,10,15,10,15a6.59,6.59,0,0,1-3.436-1.564C5.022,11.894,5,9,5,9Z"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
              />
              <path
                d="M19,9a6.523,6.523,0,0,0-4.392,1.608C13.3,11.92,14,15,14,15a6.59,6.59,0,0,0,3.436-1.564C18.978,11.894,19,9,19,9Z"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Fight the adiction</h6>
          <p className="mb-3 text-base text-gray-900">
            Globally, it is estimated that 237 million men and 46 million women
            have alcohol use disorders.
          </p>
          <DropDownItem
            title1="Talk"
            subtitle1="Provides emotional support and relives what seems to be a burden"
            title2="Change"
            subtitle2="Improves both physical and mental health"
            title3="Prepare"
            subtitle3="Makes you potential to fulfilling and be ready for substance-free life"
          />
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-customized-6">
            <svg
              className="w-7 h-7 text-customized-10"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.291,18.709,4.182,22.818c-.419.419-1.43.086-2.258-.742s-1.161-1.839-.742-2.258l4.11-4.11"
                fill="none"
                stroke="currentColor"
              />
              <ellipse
                cx="19.078"
                cy="4.922"
                fill="none"
                rx="2.5"
                ry="4.95"
                stroke="currentColor"
                transform="translate(2.107 14.932) rotate(-45)"
              />
              <path
                d="M9.185,9.815,5.3,13.7c-.7.7-.143,2.382,1.238,3.762S9.6,19.4,10.3,18.7l3.885-3.885"
                fill="none"
                stroke="currentColor"
              />
              <path
                d="M15.578,1.422,9.422,7.578c-.976.976-.2,3.335,1.732,5.268s4.292,2.708,5.268,1.732l6.156-6.156"
                fill="none"
                stroke="currentColor"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Help us help you</h6>
          <p className="mb-3 text-base text-gray-900">
            The estimated global number of drug-related deaths due to overdose
            was around 585,000 in 2017.
          </p>
          <DropDownItem
            title1="Self-care"
            subtitle1="This enhance coping skills"
            title2="Know Why"
            subtitle2="Know why you need help and benefits to your health"
            title3="Reach Out"
            subtitle3="Look for other people’s help when you can’t do it by yourself"
          />
        </div>
        <div>
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-customized-6">
            <svg
              className="w-7 h-7 text-customized-10"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M8,13l3,3,9.379-9.379a2.122,2.122,0,0,0,0-3h0a2.122,2.122,0,0,0-3,0Z"
                fill="none"
                stroke="currentColor"
              />
              <polyline
                fill="none"
                points="10 11 10 6 6 2 3 5 7 9"
                stroke="currentColor"
              />
              <polyline
                fill="none"
                points="15 12 15 17 19 21 22 18 18 14"
                stroke="currentColor"
              />
              <path d="M8,23a7,7,0,0,1-7-7" fill="none" stroke="currentColor" />
              <path d="M8,19a3,3,0,0,1-3-3" fill="none" stroke="currentColor" />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5">Get better together</h6>
          <p className="mb-3 text-base text-gray-900">
            At Maestro Mind Lab our goal is to give you the power to stop the
            cycle of addiction and start a fresh, new life.
          </p>
          <DropDownItem
            title1="Set Goals"
            subtitle1="Setting goals helps to work on target and increase chance of succeed"
            title2="Avoid Pressure"
            subtitle2="Avoid pressure that takes you in wrong way"
            title3="Keep Busy"
            subtitle3="Find what occupies you to avoid useless time that pulls you to drugs"
          />
        </div>
      </div>
    </div>
  );
};
