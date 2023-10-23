import StrategyCard1 from "./cards/strategyCard1";


export default function Strategies() {
  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Coping & Self-help
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Coping strategies, self-help techniques, mindfulness exercises, and
            Yoga (laughter)
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <StrategyCard1
            title="Coping Strategies"
            item1="Journaling"
            subitem1="Write down what you're thinking and how you're feeling. This can help you understand things better and let go of your emotions"
            item2="Deep Breathing"
            subitem2="Practice deep, slow breaths to calm your mind and reduce stress"
            item3="Positive Affirmations"
            subitem3="Repeat positive statements to increase your mood and self-esteem"
            item4="Social Support"
            subitem4="Connect with friends, family, or support groups to share your feelings"
          />
          <StrategyCard1
            title="Self-Help Techniques"
            item1="Changing negative thoughts"
            subitem1="Anxious thoughts can sometimes be unhelpful. Learn how to step back, and examine the evidence for your thoughts."
            item2="Addressing your Concerns"
            subitem2="Find out about the worry time technique It helps a lot"
            item3="Problem-solving"
            subitem3="Finding innovative solutions to your problems can help you feel more in control of them."
            item4="Bouncing back"
            subitem4="Taking steps to look after your mental health every day can give you the skills you need to build resilience"
          />
          <StrategyCard1
            title="Mindfulness Exercises"
            item1="Breathing Meditation"
            subitem1="Focus on your breath, observing each inhale and exhale"
            item2="Body Scan"
            subitem2="Pay attention to each part of your body, noticing sensations without judgment"
            item3="Mindful Eating"
            subitem3="Eat your food slowly and enjoy each bite. Notice how it tastes and feels in your mouth"
            item4="Grounding Technique"
            subitem4="Focus on your senses, describing what you see, hear, feel, etc"
          />
          <StrategyCard1
            title="Laughter Yoga"
            subitem1="Laughter yoga combines laughter exercises with deep yogic breathing. It's believed to reduce stress and improve mood. "
            item1="YOGA"
            item2="Fake Laughter"
            subitem2="Start with fake laughter, turning it into genuine laughter"
            item3="Deep Breaths: "
            subitem3="Combine laughter with deep breaths, inhaling through the nose and exhaling through the mouth"
            item4="Remember that these techniques might work differently for each individual"
            subitem4=""
          />
        </div>
      </div>
    </div>
  );
}
