import {
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/20/solid";

export default function PopSubstance() {
  return (
    <div className="relative isolate overflow-hidden bg-white lg:overflow-visible mt-4">
      <div className="mx-auto grid max-w-7xl lg:items-start lg:gap-y-10">
        <div className="lg:mx-auto lg:w-full">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What is Substance Abuse Disorder ?
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Substance Abuse Disorder refers to uncontrollably using drugs
            whether prescribed ones or illegal drugs in improper way that tends
            to make someone addicted and continuously craving for that certain
            drug and affects someone’s normal life.
          </p>
        </div>

        <div className="lg:mx-auto lg:w-full lg:max-w-7xl">
          <div className="text-base leading-7 text-gray-700">
            <p>
              Abusing drugs& Alcohols is a worst situation that affects
              someone’s life where it may bring an effect to social life, mental
              health, and physical health.
              <br /> <br />
              From testimonies that a lot of people testified most of them used
              drugs as an escape of their problems but later on the addiction
              bring and made their situation worse.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Causes of substance abuse
            </h2>
            <ul role="list" className="mt-8 text-gray-600">
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Peer pressure
                  </strong>{" "}
                  The pressure from friends and people around you can pushes you
                  to abuse drugs, where most of the time these are people you
                  spent all of your time together and if they abuse drugs here
                  is tendency for you also to start abusing them.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Poor punishments
                  </strong>{" "}
                  Poor punishments that are given someone who uses drugs may
                  lead to high number of people who abuses drugs.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Stress
                  </strong>{" "}
                  Many people having stresses and uses drugs as an escape of it.
                </span>
              </li>
            </ul>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Symptoms
            </h2>
            <p className="mt-8">
              Someone who abused drugs tends to show the following symptoms
            </p>
            <ul role="list" className="text-gray-600">
              <li className="flex gap-x-3">
                <ChevronDoubleRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Aggressiveness
                  </strong>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronDoubleRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Irritability
                  </strong>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronDoubleRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Significant changes in mood or behavior
                  </strong>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronDoubleRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Cravings for drugs.
                  </strong>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronDoubleRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Not wanting to sleep
                  </strong>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronDoubleRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Failing to do your responsibilities without using drugs
                  </strong>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronDoubleRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Self-care deficit
                  </strong>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronDoubleRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Failing to make decision on when and how to use drug.
                  </strong>
                </span>
              </li>
              <li className="flex gap-x-3">
                <ChevronDoubleRightIcon
                  className="mt-1 h-5 w-5 flex-none text-red-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Continuously using drugs regardless, the consequences they
                    caused you
                  </strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
