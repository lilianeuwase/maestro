export default function TestResultsDepr({ result, sum, treat }) {
  return (
    <>
      <div class=" border border-gray-200 rounded-xl mt-4 bg-customized-1 px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
        <p class="text-xl text-gray-600 dark:text-gray-400">
          <span class="font-semibold text-black dark:text-gray-200">
            Your Results
          </span>
        </p>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-0 gap-y-16 text-center lg:grid-cols-3">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-xl leading-7 text-rose-700">
                {result} Depression
              </dt>
              <dd className="order-first text-xl font-semibold tracking-tight sm:text-xl">
                Diagnosis
              </dd>
            </div>
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-xl leading-7 text-rose-700">{sum}</dt>
              <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
                Score
              </dd>
            </div>
            <div className="mx-auto flex max-w-3xl flex-col gap-y-4">
              <dt className="text-lg leading-7 text-rose-700">{treat}</dt>
              <dd className="order-first text-xl font-semibold tracking-tight text-gray-900 sm:text-xl">
                Proposed Treatment
              </dd>
            </div>
          </dl>
        </div>

        {/* <div>
        <div class="inline-flex gap-x-2">
          <p
            type="button"
            class="text-lg py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xl"
          >
            {result}
          </p>
        </div>
      </div>
      <div>
        <div class="inline-flex gap-x-2">
          <p
            type="button"
            class="text-lg py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xl"
          >
            {sum}
          </p>
        </div>
      </div> */}
      </div>
      <div class="border border-gray-200 rounded-xl bg-customized-7 px-6 py-4 grid gap-3 md:flex md:justify-center md:items-center border-t border-gray-200 dark:border-gray-700">
        <p class="text-lg text-gray-600 dark:text-gray-400">
          <span class="font-semibold text-black dark:text-gray-200 ">
            Call our hotline number +250 798 979 117 or{" "}
            <a
              href="https://wa.link/6j1is9"
              target="_blank"
              className="text-customized-3"
            >
              {" "}
              Chat
            </a>{" "}
            with us for Mental Health Support
          </span>
        </p>
      </div>
    </>
  );
}
