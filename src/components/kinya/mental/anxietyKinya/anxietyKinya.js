import AnxietyCardsKinya from "./anxietyCardsKinya";
import { MoreAnxietyKinya } from "./moreAnxietyKinya";

export default function AnxietyKinya() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-8xl py-4 sm:px-0 sm:py-4 lg:px-0">
        <div className="relative isolate overflow-hidden bg-gray-900 px-0 pt-16 shadow-2xl sm:rounded-3xl sm:px-0 md:pt-24 lg:flex lg:gap-x-20 lg:px-20 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Umuhangayiko
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ikigo cy’Isi kita kubuzima (WHO) gitangaza ko miliyoni 300
              z’abantu mubigero by’imyaka itandukanye barwaye indwara
              y’umuhangayiko kukigero cya 3.6% cyabantu batuye isi.
              Ubushakashatsi bwakorewe muri Afurika yepfo bwagaragaje ko ikigero
              cy’indwara yumuhangayiko ari hafi 15.8% mugihugu. Muri Nigeria,
              ingano y’uburwayi bwumuhangayiko bwagaragaye ko bungana na 3.3%
              hashingiwe kumubare wabaturage bakoreshejwe muri ubu
              bushakashatsi.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/kinyagetinvolved"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
               Korana Natwe
              </a>
              <a
                href="/kinya"
                className="text-sm font-semibold leading-6 text-white"
              >
               Ganira Natwe <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-32 ">
            <AnxietyCardsKinya />
          </div>
        </div>{" "}
        <MoreAnxietyKinya />
      </div>
    </div>
  );
}
