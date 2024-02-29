import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
export default function StrategyCard1Kinya(props) {
  return (
    <div>
      <div class="p-8 bg-gray-900 rounded ">
        <div class="mb-4 text-center">
          <p class="text-xl font-medium tracking-wide text-white">
            {props.title}
          </p>
        </div>
        <ul class="mb-8 space-y-8 ">
          <li class="flex items-center">
            <div class="mr-3">
              <svg
                class="w-4 h-4 text-customized-1"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeWidth="2"
              >
                <polyline
                  fill="none"
                  stroke="currentColor"
                  points="6,12 10,16 18,8"
                />
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="11"
                  stroke="currentColor"
                />
              </svg>
            </div>
            <p class="font-medium text-gray-300"> {props.item1}</p>
          </li>
          <span class="text-sm text-gray-300"> {props.subitem1}</span>
          <li class="flex items-center">
            <div class="mr-3">
              <svg
                class="w-4 h-4 text-customized-1"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeWidth="2"
              >
                <polyline
                  fill="none"
                  stroke="currentColor"
                  points="6,12 10,16 18,8"
                />
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="11"
                  stroke="currentColor"
                />
              </svg>
            </div>
            <p class="font-medium text-gray-300"> {props.item2}</p>
          </li>{" "}
          <span class="text-sm text-gray-300"> {props.subitem2}</span>
          <li class="flex items-center">
            <div class="mr-3">
              <svg
                class="w-4 h-4 text-customized-1"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeWidth="2"
              >
                <polyline
                  fill="none"
                  stroke="currentColor"
                  points="6,12 10,16 18,8"
                />
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="11"
                  stroke="currentColor"
                />
              </svg>
            </div>
            <p class="font-medium text-gray-300"> {props.item3}</p>
          </li>{" "}
          <span class="text-sm text-gray-300"> {props.subitem3}</span>
          <li class="flex items-center">
            <div class="mr-3">
              <svg
                class="w-4 h-4 text-customized-1"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeWidth="2"
              >
                <polyline
                  fill="none"
                  stroke="currentColor"
                  points="6,12 10,16 18,8"
                />
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="11"
                  stroke="currentColor"
                />
              </svg>
            </div>
            <p class="font-medium text-gray-300"> {props.item4}</p>
          </li>{" "}
          <span class="text-sm text-gray-300"> {props.subitem4}</span>
        </ul>
        {/* <a href={props.link}>
          <button
            type="submit"
            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            {props.button}
          </button>
        </a> */}
      </div>
      <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
      <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
      <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
    </div>
  );
}
