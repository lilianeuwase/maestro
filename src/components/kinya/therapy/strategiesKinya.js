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
            item2="Body Scan"
            subitem2="Pay attention to each part of your body, noticing sensations without judgment"
            item3="Mindful Eating"
            subitem3="Eat your food slowly and enjoy each bite. Notice how it tastes and feels in your mouth"
            item4="Grounding Technique"
            subitem4="Focus on your senses, describing what you see, hear, feel, etc"
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
            item3="Deep Breaths: "
            subitem3="Combine laughter with deep breaths, inhaling through the nose and exhaling through the mouth"
            item4="Remember that these techniques might work differently for each individual"
            subitem4=""
          />

          <StrategyCard1Kinya
            title="Uburyo bwo kwifasha"
            item1="Changing negative thoughts"
            subitem1="Anxious thoughts can sometimes be unhelpful. Learn how to step back, and examine the evidence for your thoughts."
            item2="Addressing your Concerns"
            subitem2="Find out about the worry time technique It helps a lot"
            item3="Problem-solving"
            subitem3="Finding innovative solutions to your problems can help you feel more in control of them."
            item4="Bouncing back"
            subitem4="Taking steps to look after your mental health every day can give you the skills you need to build resilience"
          />
        </div>
      </div>
    
    </div>
  );
}
