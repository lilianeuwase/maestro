const stats = [
  {
    name: "To reduce risks, keep your operating system and browser up to date with the newest security patches.",
    value: "Regular Updates",
  },
  {
    name: "Access our website using secure, private networks. Avoid using public Wi-Fi for sensitive activities.",
    value: "Secure Network",
  },

  {
    name: "There's no account creation or personal data collection when accessing our website.",
    value: "Stay Anonymous",
  },
  {
    name: "Your queries might be logged for statistical purposes. But, no personal data is collected on our website.",
    value: "Data Usage",
  },
];

export default function MiniFooter() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-customized-2 py-12 sm:py-16">
        <img
          src={require("../assets/d (1).png")}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-50"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#e8a87c] to-[#e85a4f] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#e8a87c] to-[#e85a4f] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-customized-10 sm:text-5xl">
              Privacy and Safety
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              At Maestro Mind Lab, we prioritize your online privacy while
              providing valuable mental health resources. Here are guidelines to
              ensure privacy protection
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-white">
                    {stat.name}
                  </dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-customized-10">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
