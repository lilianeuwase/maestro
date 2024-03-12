export const Footer = () => {
  return (
    <div className="relative bg-customized-10">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-customized-10"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              {/* <svg
                className="w-8 text-teal-accent-400"
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
              </svg> */}
              <span className="ml-2 text-xl font-bold tracking-wide text-customized-12 uppercase">
                <div className="logoHome">
                  <img
                    src={require("../assets/Maestro Logo - 2-Dark.png")}
                    width={80}
                    height={80}
                  />{" "}
                  {/* MAESTRO. */}
                </div>
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-customized-6">
                At Maestro Mind Lab, we prioritize your online privacy while
                providing valuable mental health resources.
              </p>
              <p className="mt-4 text-sm text-customized-6">
                Data security and protection are of utmost importance to Maestro
                Mind.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <div>
              <p className="font-semibold tracking-wide text-customized-12 text-2xl">
                Menu
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-customized-6 hover:text-customized-12"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/mentalhealth"
                    className="transition-colors duration-300 text-customized-6 hover:text-customized-12"
                  >
                    Mental Health Information
                  </a>
                </li>
                <li>
                  <a
                    href="/therapy"
                    className="transition-colors duration-300 text-customized-6 hover:text-customized-12"
                  >
                    Therapy
                  </a>
                </li>
                <li>
                  <a
                    href="/lgbtq"
                    className="transition-colors duration-300 text-customized-6 hover:text-customized-12"
                  >
                    LGBTQI+ Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-customized-12 text-2xl">
                Get Help
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/test"
                    className="transition-colors duration-300 text-customized-6 hover:text-customized-12"
                  >
                    Mental Health Tests
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-customized-6 hover:text-customized-12"
                  >
                    Live Chat
                  </a>
                </li>
                <li>
                  <a
                    href="/getinvolved"
                    className="transition-colors duration-300 text-customized-6 hover:text-customized-12"
                  >
                    Get Involved
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="transition-colors duration-300 text-customized-6 hover:text-customized-12"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-customized-12 text-2xl">
                Contact Us
              </p>
              <ul className="mt-2 space-y-2">
                <li className="transition-colors duration-300 text-customized-6 hover:text-customized-12">
                  +250 798 979 117
                </li>
                <li className="transition-colors duration-300 text-customized-6 hover:text-customized-12">
                  info@rwandayvchange.org
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-customized-3 sm:flex-row">
          <p className="text-sm text-customized-6">
            © Copyright 2023 Maestro Mind Lab All rights reserved.
            <br />
            <br />
            Website designed & developed by{" "}
            <a
              href="https://8linescode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              8 Lines Code
            </a>
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://twitter.com/ryvc_org"
              target="_blank"
              className="transition-colors duration-300 text-customized-6 hover:text-customized-12"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/rwandayvc/"
              target="_blank"
              className="transition-colors duration-300 text-customized-6 hover:text-customized-12"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Rwandayvchange"
              target="_blank"
              className="transition-colors duration-300 text-customized-6 hover:text-customized-12"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/rwanda-youth-voice-for-change/?viewAsMember=true"
              target="_blank"
              className="transition-colors duration-300 text-customized-6 hover:text-customized-12"
            >
              <svg fill="currentColor" className="h-5" viewBox="0 0 192 192">
                <path d="M0,192v-192h192v192z" fill="none" />
                <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
