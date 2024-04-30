import { MoreDepressionKinya } from "./moreDepressionKinya";

export const DepressionKinya = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12">
        {/* <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Make history
          </p>
        </div> */}
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                width="52"
                height="24"
              />
            </svg>
            {/* <span className="relative">Let's</span> */}
          </span>{" "}
          Agahinda Gakabije
        </h2>

        <p className="text-base text-gray-700 md:text-lg">
          Hashingiwe kubyatangajwe nikigo cy’Isi cyita kubuzima (WHO) agahinda
          gakabije ni imwe mumpamvu ziyoboye mugutera abantu ubumuga ku Isi. Iki
          kigo cyagaragaje ko miliyoni 322 zabantu ku Isi barwaye indwara
          y’agahinda gakabije. Muri Afurika, ikigero cyubu burwayi
          kiratandukanye bitewe nigihugu kugihugu, bitanga ingano yo guhera hafi
          ya 3% kugeza 47% byabaturage bose. Ubushakashatsi bwakorewe muri
          Tanzania ndetse no muri afurika yepfo bwerekanyeko ikigero cyagahinda
          gakabije mubagabo baryamana nabandi bagabo ari 46.3% ndetse 44% uko
          bikurikirana.
        </p>
        <MoreDepressionKinya />
        <div className="mt-1 flex items-center justify-center gap-x-6">
          <a
            href="/kinyatest"
            className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-gray-50 shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
           Igipimo cy’agahinda gakabije
          </a>
          <a
            href="/kinyagetinvolved"
            className="text-sm font-semibold leading-6 text-black"
          >
            Fatanta Natwe <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3 mb-7">
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-customized-2 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-customized-2">
              1
            </p>
            <p className="text-lg font-bold leading-5">Ikinyoma</p>
          </div>
          <p className="text-sm text-gray-900">
          Agahinda gakabije ni indwara idakunze kuboneka, sinayirwara
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-customized-3 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-customized-3">
              2
            </p>
            <p className="text-lg font-bold leading-5">Ikinyoma</p>
          </div>
          <p className="text-sm text-gray-900">
          Agahinda gakabije ni ikimenyetso cy’imbaraga nke
          </p>
        </div>
        <div className="relative p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-customized-13 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-customized-13">
              3
            </p>
            <p className="text-lg font-bold leading-5">Ikinyoma</p>
          </div>
          <p className="text-sm text-gray-900">
          Agahinda gakabije ni ukumva ubabaye
          </p>
          {/* <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-customized-13 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p> */}
        </div>
      </div>
      <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
        <div className="p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-customized-2 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-customized-2">
              1
            </p>
            <p className="text-lg font-bold leading-5">Ukuri </p>
          </div>
          <p className="text-sm text-gray-900">
          Agahinda gakabije ni indwara yaba kumuntu uwo ariwe wese hatitawe kugitsina,ubwoko,n’imyaka
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-customized-2 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
        <div className=" p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-customized-3 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-customized-3">
              2
            </p>
            <p className="text-lg font-bold leading-5">Ukuri</p>
          </div>
          <p className="text-sm text-gray-900">
          Agahinda gakabije ntabwo ari ikimenyetso cy’imbaraga nke, ahubwo ni uburwayi, agahinda gakabije ni uguhindagurika kwimisemburo yubwonko kandi bishobora kuvurwa.
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-customized-3 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-customized-13 hover:-translate-y-2">
          <div className="flex items-center mb-2">
            <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-customized-13">
              3
            </p>
            <p className="text-lg font-bold leading-5">Ukuri</p>
          </div>
          <p className="text-sm text-gray-900">
          Agahinda gakabije ni ibyiyumviro birenze agahinda, agahinda gahoraho ni kimwe mu bimenyetso byubu burwayi.
          </p>
          <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-customized-13 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
            <svg
              className="text-white w-7"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <polyline
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="6,12 10,16 18,8"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};
