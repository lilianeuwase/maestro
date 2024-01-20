export const CallActionKinya = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black-900 uppercase rounded-full bg-customized-10">
            A Call to Action
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d0d83814-78b6-480f-9a5f-7f637616b267"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Take</span>
          </span>{" "}
          the First Step Towards Healing
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Are you ready to start a journey of learning about yourself, getting
          better, and feeling strong? Our website is here to help you through
          the tricky parts of mental health and feeling good. Whether you want
          to know about handling worry, feeling better when you're sad, or being
          strong when things are tough, we have lots of things to help you.
        </p>
      </div>
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-gradient-to-r from-customized-1 via-customized-2 to-customized-8 lg:w-full lg:h-1" />
        </div>
        <div className="p-5 duration-300 transform bg-white border-4 border-customized-1 rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">
              Explore, Learn, and Grow{" "}
            </p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-customized-1 bg-indigo-50">
              1
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Dive into a world of articles, stories about succeeding, and advice
            from experts made just for you. Our place is full of helpful
            information where you can find easy ways to do things, calming
            exercises, and stories that make sense for your journey.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border-4 border-customized-2 rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">You're Not Alone </p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-customized-2 bg-indigo-50">
              2
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Remember, you're not alone as you go along this road. Our group is
            based on knowing how you feel, caring, and helping. As you explore
            our content, you'll see that other people have been through similar
            things and were able to deal with it in a healthy. Connect with
            their stories, share your own story, and be part of a group that
            makes you feel better and gives you comfort.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border-4 border-customized-5 rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">
              Ask for Help, Hold on to Hope
            </p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-customized-5 bg-indigo-50">
              3
            </p>
          </div>
          <p className="text-sm text-gray-900">
            If things get too hard to handle, remember that asking for help
            shows how strong you are, not how weak. Our website can lead you to
            experts who can guide you. Talk to professionals who are trained,
            like therapists, advisors, and hotlines, to take an important step
            toward feeling better.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border-4 border-customized-8 rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">
              Your Tomorrow Starts Today{" "}
            </p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-customized-8 bg-indigo-50">
              4
            </p>
          </div>
          <p className="text-sm text-gray-900">
            Your path to a happier, healthier, and more satisfying life starts
            here. Explore our content, talk to others like you, and ask for help
            if you need it. And remember, every little step you take gets you
            closer to a future that's full of hope, strength, and a fresh reason
            to go on.
          </p>
        </div>
      </div>
      {/* <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
         
Take the first step today. Explore our content and discover the path to healing and growth. You have the power to shape your own story – and we're here to be part of it.

        </a>
      </div> */}
    </div>
  );
};
