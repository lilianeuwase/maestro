export default function LGBTQIndividuals() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-8xl py-24 sm:px-6 sm:py-32 lg:px-16">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
          <div className="mx-auto max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-28 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              LGBTQI+
              <br />
              Individuals
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Many LGBTQI+ people experience mental health struggles. The
              bisexual and transgender communities have the highest rates of
              mental health concerns within the LGBTQI+ population. Younger
              members of the LGBTQI+ community struggle the most with mental
              health concerns of all age groups.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            The Trevor Project's National Survey on LGBTQI+ Youth Mental Health reported that 40% of LGBTQI+ youth seriously considered attempting suicide in the past year, and more than half of transgender and nonbinary youth reported engaging in self-harm. The same survey found that 48% of LGBT youth reported using substances to cope with stress, including alcohol, drugs, and tobacco. The National Survey on Drug Use and Health (NSDUH) in the United States found that the rate of substance use disorder in the past year was higher among adults identifying as LGBTQI+ compared to those identifying as heterosexual (15.1% vs. 7.7%). 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="/lgbtq"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                LGBTQI+ Support
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-48 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={require("../../assets/Flags1.png")}
              //   src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
