export default function Partners() {
  return (
    <div className="pt-16 py-16 bg-white">
      <div class="items-center justify-center">
        <div class="mb-12 mx-auto max-w-xl relative">
          <div class="flex-[1_0_0%]">
            <h1 class="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
              Our{" "}
              <span class="text-orange-600">Part</span>
              <span class="text-cyan-600">ners</span>
            </h1>
          </div>
          <div class="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32">
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
            {/* <svg
              class="w-40 h-auto text-cyan-500"
              width="347"
              height="188"
              viewBox="0 0 347 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                stroke="currentColor"
                stroke-width="7"
                stroke-linecap="round"
              />
            </svg> */}
          </div>
        </div>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-2">
        <div className="max-w-xl space-y-3">
          <p className="text-black text-xl font-semibold sm:text-2xl">
            Grand Challenges Canada
          </p>
          <p className="text-gray-600">
            Maestro Mind Lab is supported by Grand Challenges Canada; Grand
            Challenges Canada is funded by the Government of Canada and is
            dedicated to supporting Bold Ideas with Big Impact®.
          </p>
          <p className="text-gray-600">
            Grand Challenges Canada’s Global Mental Health program supports Bold
            Ideas with Big Impact.® The aim of the program is to seed and
            transition to scale high impact innovations that support the mental
            health needs of underserved individuals, in particular young people,
            in low-and middle-income countries.
          </p>
          <a
            href="https://www.grandchallenges.ca/programs/global-mental-health/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-88 m-auto flex-none mt-8"
              src={require("../../assets/canadaBG.png")}
              viewBox="0 0 163 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            />
          </a>
        </div>

        <div className="max-w-xl space-y-3">
          <p className="text-black text-xl font-semibold sm:text-2xl">
            Rwanda Youth Voice for Change (RYVC)
          </p>
          <p className="text-gray-600">
            Maestro Mind Lab project is being implemented by Rwanda Youth Voice
            for Change (RYVC), RYVC is a non-political, non-governmental, and
            non-profit organization that was established in 2009. RYVC ‘s
            mission is to harness the power of data and human-centered design to
            improve the health and wellbeing of Rwandans, particularly youth and
            other under-served groups, through innovative solutions, research,
            education, and sustainable livelihoods, while also contributing to
            the achievement of SDG 3. RYVC believes in using evidence-based
            approaches to drive decision-making and advocacy efforts, in
            collaboration with other stakeholders and communities. By leveraging
            the latest technologies and working closely with our beneficiaries,
            we strive to create sustainable solutions that address the unique
            needs and challenges among our beneficiaries.
          </p>
          <img
            className="w-28 m-auto flex-none"
            src={require("../../assets/ryvc.png")}
            viewBox="0 0 163 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          />
        </div>
      </div>
    </div>
  );
}
