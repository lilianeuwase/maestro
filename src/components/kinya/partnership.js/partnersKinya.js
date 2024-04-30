export default function PartnersKinya() {
  return (
    <div class="relative overflow-hidden mt-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="items-center justify-center">
          <div class="mb-12 mx-auto max-w-xl relative">
            <div class="flex-[1_0_0%]">
              <h1 class="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
                Aba<span class="text-orange-600">Fatanya</span>
                <span class="text-cyan-600">Bikorwa</span>
              </h1>
            </div>
            <div class="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32 ">
              <svg
                class="w-40 h-auto text-orange-500"
                width="347"
                height="188"
                viewBox="0 0 347 288"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                  stroke="currentColor"
                  stroke-width="7"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="grid gap-4 row-gap-5 text-center">
          <div className="space-y-3 text-lg">
            <p className="text-gray-600">
              Umushinga{" "}
              <span className="text-customized-1 font-semibold">Maestro </span>
              <span className="text-customized-2 font-semibold">Mind </span>
              <span className="text-customized-10 font-semibold">Lab </span>
              uterwa inkunga na Grand challenge Canada. GCC ni ikigo gifashwa na
              leta ya Canada kugirango gitere inkunga ibitekerezo bigari ndetse
              bizana impinduka muri sosiyete Intego yiyi porogaramu ni uguteza
              imbere imishinga ikemura ibibazo byo mu mutwe ndetse cyane cyane
              mubyiciro by’abantu bahezwa inyuma, cyane urubyiruko, ndetse
              nabaturuka mubihugu bifite amikoro make.
            </p>
            <a
              href="https://www.grandchallenges.ca/programs/global-mental-health/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-full m-auto flex-none mt-8"
                src={require("../../../assets/canada.png")}
                viewBox="0 0 163 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              />
            </a>
          </div>
          <hr class="h-px my-4 bg-gray-200 border-2 dark:bg-gray-700" />
          <div className="space-y-3 text-center mt-16 mb-16 text-lg">
            <p className="text-gray-600">
              Umushinga{" "}
              <span className="text-customized-10 font-semibold">Maestro </span>
              <span className="text-customized-1 font-semibold">Mind </span>
              <span className="text-customized-2 font-semibold">Lab </span>{" "}
              ushyirwa mubikorwa na Rwanda Youth Voice for Change yandikwa mu
              mpine nka RYVC, ni umuryago utegamiye kuri Leta kandi udaharanira
              inyungu washinzwe muri 2009. RYVC ifite misiyo yo kuzamura ubuzima
              ndetse n’imibereho myiza y’abanyarwanda cyane cyane urubyiruko
              ndetse n’abandi bahezwa binyuze muguhanga
              ibisubizo,ubushakashatsi,uburezi ndetse no kuzamura imibereho
              myiza no gufasha kugera ku ntego za SDG3 .RYVC yizerako mu
              gukoresha uburyo bushingiye kubimenyetso mu gufata imyanzuro
              ndetse no gukora ubuvugizi ufatanyije nabafatanyabikorwa ndetse na
              kominote hakoreshejwe ikoranabuhanga ,ndetse no gukorana byahafi
              nabagenerwabikorwa bizana ibisubizo bivanaho ibibazo,n’inzitizi
              abagenerwabikorwa bahura nazo.
            </p>
            <a
              href="http://rwandayvchange.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-88 m-auto flex-none"
                src={require("../../../assets/ryvc.png")}
                viewBox="0 0 163 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
