export const HowCBTDASKinya = () => {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: "Agahinda gakabije",
      desc: "Ubuvuzi bw’imitekerereze n’imyitwarire bugufasha mu gusuzuma intekerezo zawe mbi, uhora utekereza zitari ukuri ndetse bukakwigisha uburyo buzima bwo guhangana bwibanda mu kongerera umuntu kujya mubikorwa byiza no gushyiraho intego Wabasha kwesa, koresha ubu buvuzi bw’imitekerereze mugihe wumva ufite agahinda gakabije.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: "Indwara y’umuhangayiko & Icyoba",
      desc: "Ubuvuzi bw’imitekerereze n’imyitwarire bifasha umuntu mukumenya intekerezo zituma umuntu agira ubwoba ikagufasha kuzisimbuza ibitekerezo bizima inakwigisha kandi uburyo bwo kuruhuka ndetse nuburyo bwo kugabanya ibimenyetso by’indwara yicyoba&umuhangayiko.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "Kubatwa n’ibiyobyabwenge",
      desc: "Ubuvuzi bw’imitekerereze n’imyitwarire kumuntu wabaye imbata y’ibiyobyabwenge bumufasha kumenya impamvu mbarutso imutera kunywa ibiyobyabwenge, ndetse nintekerezo zikosamye zituma akoresha ibiyobyabwenge Ubu buvuzi bwibanda kandi ku kwigisha uburyo bwiza bwo guhangana, kurwanya ubushake bwo gukoresha ibiyobyabwenge maze ugatangira ingamba zubuzima bwiza Koresha ubu buvuzi mugihe wabaye imbata y’ibiyobyabwenge",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title:
        "Ubuvuzi bw’imitekerereze nimyitwarire ni ubuvuzi bushingiye kubimenyetso ndetse bugaragaza umusaruro mukuvura indwara nk’Agahinda gakabije, Umuhangayiko&Icyoba, Kubatwa n’ibiyobyabwenge binyuze muguha umuntu ubumenyi bwubuzima burebure mukwita kubuzima bwe bwo mumutwe.",
      desc: "",
    },
  ];

  return (
    <section className="relative py-28 bg-gray-900 mt-16">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
        <div className="max-w-xl">
          <h3 className="text-white text-3xl font-semibold sm:text-4xl">
            Ubuvuzi bw’imitekerereze n’imyitwarire ku ndwara y’agahinda
            gakabije, umuhangayiko ndetse no kubatwa n’ibiyobyabwenge.
          </h3>
          {/* <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
                    </p> */}
        </div>
        <div className="mt-12 lg:mt-0">
          <ul className="grid gap-8 sm:grid-cols-2">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 bg-gray-700 text-customized-3 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg text-gray-100 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}
      ></div>
    </section>
  );
};
