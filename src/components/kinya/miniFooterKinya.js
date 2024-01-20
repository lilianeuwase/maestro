const stats = [
  {
    name: "Kugirango ugabanye ibyago sisitemu ya mudasobwa yawe igomba kuba iri kugihe.",
    value: "Hora Ku Gihe",
  },
  {
    name: "Irinde gukoresha iyakure(interineti) rusange ubonye iyo ari yo yose.",
    value: "Interineti",
  },

  {
    name: "Maestro Mind Lab ntabwo isaba kuba ufitemo konti kugirango uyikoreshe.",
    value: "Horana Amakenga",
  },
  {
    name: "Ibisubizo ndetse n’amakuru utanga mugihe uyikoresha bishoborwa gukoreshwa kumpamvu zibaruramibare ariko amakuru bwite yawe ntabwo akoreshwa.",
    value: "Ibanga",
  },
];

export default function MiniFooterKinya() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-black py-12 sm:py-16 text-center">
        <img
          src={require("../../assets/MiniFooter.jpeg")}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-50"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <div className="mx-auto max-w-2xl lg:mx-0"> */}
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-customized-10 sm:text-5xl">
            Ibanga N’umutekano 
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
            Muri Maestro Mind Lab ibanga ndetse n’umutekano ni ikintu kibanze gishyirwa imbere mugihe dutanga amakuru k’ubuzima bwo mumutwe aha hari imirongo ngenderwaho kugirango wicungire umutekano wo kuri murandasi.
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
