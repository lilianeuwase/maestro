import { DropDownItem } from "../../home/dropDownItem";

export const NavigateKinya = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
          Gutangira Urugendo Rwo Gukira
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-700 md:text-lg">
          Kwiyahuza ibiyobyabwenge ni igihe umuntu akoresha ibiyobyabwenge cyangwa inzoga cyane/byinshi  bigatangira guteza ibibazo kubuzima bwe cyangwa mumibanire n’inshuti cyangwa umuryango
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
          <h6 className="mb-2 font-semibold leading-5">Ntugwe mumutego</h6>
          <p className="mb-3 text-base text-gray-900">
          Ibiyobyabwenge byinshi bishobora kubata nabantu bakomeye ndetse bikanabagora kubireka
          </p>
          <DropDownItem
            title1="Isuzume"
            subtitle1="Bifasha kumenya impamvu ibitera ndetse n’ubryo wabihagarika"
            title2="Fata Igihe"
            subtitle2="Bifasha mu kwimenya ndetse no gukura"
            title3="Shishoza"
            subtitle3="Bifasha guhitamo imyanzuro ikwiye ndetse bikanagufasha murugendo rwo gukira"
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
          <h6 className="mb-2 font-semibold leading-5">Hangana no kubatwa n’ibiyobyabwenge</h6>
          <p className="mb-3 text-base text-gray-900">
            Kwisi hose byagaragaye ko miliyoni 237 z’abagabo ndetse na 46 z’abagore babana no kubatwa n’ibiyobyabwenge (inzoga)
          </p>
          <DropDownItem
            title1="Vuga"
            subtitle1="Kuvuga bifasha amarangamutima ndetse bigatuma umuntu atura umutwaro"
            title2="Hindura"
            subtitle2="Guhindura ujya munzira nziza bifasha ubuzima bwinyuma ndetse n’ubuzima bwo mumutwe"
            title3="Itegure"
            subtitle3="Kugirango uve kubiyobyabwenge bisaba kuba witeguye"
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
          <h6 className="mb-2 font-semibold leading-5">Dufashe wifasha</h6>
          <p className="mb-3 text-base text-gray-900">
          Abangana na 7 mubagabo ijana ndeste n’umuntu 1 mubagore ijana bagaragaje uburwayi bw’agahinda gakabije mubuzima bwabo binatera kwiyahura
          </p>
          <DropDownItem
            title1="Kwiyitaho"
            subtitle1="Ibi byongera ubumenyi /imbaraga zo guhangana n’uburwayi bwo mumutwe"
            title2="Sobanukirwa"
            subtitle2="Menya impamvu ukeneye ubufasha ndetse numumaro bifitiye ubuzima bwawe"
            title3="Saba Ubufasha"
            subtitle3="Mugihe ubona utabyishoboza saba abandi bagufashe"
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
          <h6 className="mb-2 font-semibold leading-5">Gira ubuzima bwiza turikumwe</h6>
          <p className="mb-3 text-base text-gray-900">
          Muri maestro mind intego yacu ni ukuguha  imbaraga zo kugabanya ndetse no kuva mububata bw’ibiyobyabwenge ugatangira ubuzima bushya kandi bwiza.
          </p>
          <DropDownItem
            title1="Shyiraho Intego"
            subtitle1="Gushyiraho intego bituma uyikoreraho ndetse bikongera n’amahirwa yo gutsinda intego wihaye"
            title2="Irinde Ikigare/Igitutu"
            subtitle2="Irinde ikigare cyangwa ikindi cyintu cyose cyagusubiza mubiyobyabwenge kandi uri munzira zo kubireka"
            title3="Shaka Ibiguhuza"
            subtitle3="Kugirango utabona umwanya wo kujya mubiyobyabwenge nibyiza gushaka ibiguhuza"
          />
        </div>
      </div>
    </div>
  );
};
