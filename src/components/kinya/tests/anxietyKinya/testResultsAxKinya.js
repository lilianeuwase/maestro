export default function TestResultsAxKinya({ result, sum, treat }) {
  return (
    <>
      <div class=" border border-gray-200 rounded-xl mt-4 bg-customized-1 px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
        <p class="text-xl text-gray-600 dark:text-gray-400">
          <span class="font-semibold text-black dark:text-gray-200">
          Ibisubizo Byawe
          </span>
        </p>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-0 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-xl leading-7 text-rose-700">
                {result}
              </dt>
              <dd className="order-first text-xl font-semibold tracking-tight sm:text-xl">
                Uburwayi
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-xl leading-7 text-rose-700">{sum}</dt>
              <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
                Amanota
              </dd>
            </div>
            <div className="mx-auto flex max-w-3xl flex-col gap-y-4">
              <dt className="text-lg leading-7 text-rose-700">{treat}</dt>
              <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
                Ubuvuzi Bwagufasha
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="border border-gray-200 rounded-xl bg-customized-7 px-6 py-4 grid gap-3 md:flex md:justify-center md:items-center border-t border-gray-200 dark:border-gray-700">
        <p class="text-lg text-gray-600 dark:text-gray-400">
          <span class="font-semibold text-black dark:text-gray-200 ">
            Hamagara umurongo wacu nimero +250 798 979 117 cyangwa{" "}
            <a
              href="https://wa.me/27600136875?text=join%20rwanda-youth8678"
              target="_blank"
              className="text-customized-3"
            >
              {" "}
              utwandikire
            </a>{" "}
            ubone ubufasha k'ubuzima bw'umuhangayiko
          </span>
        </p>
      </div>
    </>
  );
}
