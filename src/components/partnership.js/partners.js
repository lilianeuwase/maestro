export default function Partners() {
  return (
    <div className="pt-40 py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 flex-wrap gap-x-12 justify-between md:flex md:px-8 lg:flex-nowrap">
        <div className="max-w-xl space-y-3">
          {/* <h3 className="text-customized-10 text-lg font-semibold uppercase">
            The partnership
          </h3> */}

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
