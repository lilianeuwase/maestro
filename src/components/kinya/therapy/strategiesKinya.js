import StrategyCard1Kinya from "./cardsKinya/strategyCard1Kinya";

export default function StrategiesKinya() {
  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Guhangana & Kwifasha
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Uburyo bwo Kwihagararaho
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <StrategyCard1Kinya
            title="Inzira zo Kwifasha "
            item1="Guhumeka utekereza "
            subitem1="humeka cyane winjiza umwuka ndetse unawusohora, arinako utekereza"
            item2="Gusikana Umubiri"
            subitem2="Ita ndetse unishimire burigice cyigize umubiri wawe , wirinde kwiyumva nkaho udahagije ndetse utanejeje"
            item3="Kurya Neza"
            subitem3="Fata amafunguro yawe gahoro gahoro wumva uburyohe buri muri buri funguro urya"
            item4="Ubuhanga bwo Gushingira"
            subitem4="Ita kungingo zawe zumva ,usobanukirwe ibyo ureba, wumva,wiyumvamo,nibindi…"
          />
          <StrategyCard1Kinya
            title="Imyitozo y’Intekerezo"
            item1="Uburyo bwo guhangana"
            subitem1="Andika ibyo uri gutekereza ndetse nuburyo urikwiyumva ibi bishobora kugufasha mugusobanukirwa ndetse no kurwanya ibyiyumviro bibi"
            item2="Humeka cyane"
            subitem2="Itoze guhumeka ugezayo(cyane) kandi buhoro buhoro mugufasha guturisha intekerezo zawe no kugabanya imihangayiko."
            item3="Irerememo imbaraga"
            subitem3="Wibwira amagambo meza ndetse uhore uyasubiramo bizakongerera umunezero n’ikizere"
            item4="Sabana"
            subitem4="Sabana n’inshuti, n’umuryango ndetse nabandi bantu kugirango ubasangize uko wiyumva"
          />
          <StrategyCard1Kinya
            title="Igitwenge Gikiza"
            item1="YOGA"
            subitem1="Igitwenge gikiza gikubiyemo imyitozo yo guhumeka cyane ndetse nigitwenge kigufasha kuruhuka hamwe no gusabana nabandi. Ibukako uburyo bushobora gutanga ingaruka zitandukanye bitewe nuko buri muntu yihariye."
            item2="Uburyo bwo kwifasha"
            subitem2="Hindura intekerezo mbi, mu gihe ufite intekerezo mbi zishobora kukwangiza nibyiza ko wisuzuma ukamenya niba koko ibyo utekereza bifite ishingiro ndetse ukanareba ingaruka bizanira ubuzima bwawe ukaba wafata ingamba zo guhindura intekerezo."
            item3="Humeka cyane"
            subitem3="Huza umwitozo w’igitwenge ndetse no guhumeka cyane , winjiriza umwuka mumazuru ndetse uwusohorera mukanwa bizagufasha kuruhuka"
            item4="Zirikana ko ubu buryo bwavuzwe bushobora gufasha abantu kugigero gitandukanye"
            subitem4=""
          />

          <StrategyCard1Kinya
            title="Uburyo bwo kwifasha"
            item1="Hindura intekerezo mbi"
            subitem1="Intekerezo ziteye ubwoba ndetse zinahangayikishije  rimwe na rimwe zishobora kuba ntakamaro zigufitiye, iga kureba niba koko zifite ishingiro"
            item2="Shaka uburyo bwo kwifasha"
            subitem2="Mugihe uhangayitse shaka umwitozo runaka wagufasha mukuruhuka ndetse no kwirukana ibyo byiyumvo bihangayikishije"
            item3="Gukemura ibibazo"
            subitem3="Gushaka uburyo bushya bwo gukemura ibibazo byawe bishobora kugufasha kumva bitakugenga ahubwo ufite uburyo bwo kubikemura"
            item4="Hangana/ Tera intambwe"
            subitem4="Tera intambwe wite kubuzima bwawe bwo mumutwe burimunsi bizagufasha mukuguha ubumenyi bwo  guhangana"
          />
        </div>
      </div>
    
    </div>
  );
}
