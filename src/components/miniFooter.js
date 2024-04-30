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
    name: "Maestro website require no account creation nor do we collect personal data.",
    value: "Stay Anonymous",
  },
  {
    name: "Your queries might be collected for statistical purposes. But, no personal data is collected.",
    value: "Data Usage",
  },
];

export default function MiniFooter() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-black py-12 sm:py-16 text-center">
        <img
          src={require("../assets/MiniFooter.jpeg")}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-50"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <div className="mx-auto max-w-2xl lg:mx-0"> */}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
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
