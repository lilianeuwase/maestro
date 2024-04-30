const LgbtqPhotos = () => {
  return (
    <main>
      <div className="containerWelcome">
        <div class="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid sm:grid-cols-12 gap-6">
            <div class="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
              <a
                class="group relative block rounded-xl overflow-hidden"
                href="https://lgbt.foundation/"
                target="_blank"
              >
                <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src={require("../../assets/LGFrame1.png")}
                    alt="Image Description"
                  />
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                    LGBTQI+ Foundation
                  </div>
                </div>
              </a>
            </div>

            <div class="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
              <a
                class="group relative block rounded-xl overflow-hidden"
                href="https://www.hrc.org/"
                target="_blank"
              >
                <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src={require("../../assets/Frame4.jpeg")}
                    alt="Image Description"
                  />
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                    Human Rights
                  </div>
                </div>
              </a>
            </div>

            <div class="col-span-12 md:col-span-4">
              <a
                class="group relative block rounded-xl overflow-hidden"
                href="https://www.lgbtqcenters.org/"
                target="_blank"
              >
                <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src={require("../../assets/LGFrame3.png")}
                    alt="Image Description"
                  />
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                   LGBTQI+ Centers
                  </div>
                </div>
              </a>
            </div>

            <div class="col-span-12 sm:col-span-6 md:col-span-4">
              <a
                class="group relative block rounded-xl overflow-hidden"
                href="https://www.gaytravel.com/gay-events/gay-pride-event-calendar"
                target="_blank"
              >
                <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src={require("../../assets/LGFrame4.png")}
                    alt="Image Description"
                  />
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                    Pride
                  </div>
                </div>
              </a>
            </div>

            <div class="col-span-12 sm:col-span-6 md:col-span-4">
              <a
                class="group relative block rounded-xl overflow-hidden"
                href="https://www.thetaskforce.org/"
                target="_blank"
              >
                <div class="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                  <img
                    class="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                    src={require("../../assets/LGFrame5.png")}
                    alt="Image Description"
                  />
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                  <div class="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                  Task Force
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LgbtqPhotos;
