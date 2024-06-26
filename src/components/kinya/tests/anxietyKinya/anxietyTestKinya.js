import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon, Squares2X2Icon } from "@heroicons/react/20/solid";
import { TestTableAxKinya } from "./testTableAxKinya";
import TestInterpretationAxKinya from "./testInterpretationAxKinya";

const filters = [
  {
    id: "interpretation",
    name: "Ibisobanuro kw’isuzuma ",
    options: [
      {
        value: "white",
        label:
          "Iyo isuzuma wakoze ritanze amanota 8 cyangwa no hejuru yayo bitanga ikimenyetso ngenderwaho ko ufite uburwayi bw’umuhangayiko gusa isuzuma ryimbitse  ryakozwe na muganga rirakenewe ngo hemezwe neza ko aribyo ndetse nubwoko bwumuhangayiko urwaye . igipimo cyumuhangayiko(GAD-7) gifite ubushobozi bungna na 92% bwo kwerekana ko umuntu afite unurwayi ndetse na 76% mukwerekana ko umuntu ntaburwayi afite.",
      },
    ],
  },
  {
    id: "note",
    name: "Icyo kumenya",
    options: [
      {
        value: "note",
        label:
          "Hashingiwe ku isesengura riherutse, abahanga bamwe basabye ko harebwa ikoreshwa ry'amanota 8 kumanura kugira ngo barusheho kwiyumvisha ibintu bitabangamiye umwihariko.",
      },
    ],
  },
  // {
  //   id: "size",
  //   name: "Size",
  //   options: [{ value: "2l", label: "2L" }],
  // },
];

export default function AnxietyTestKinya() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white ">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-7xl">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Ufite Uburwayi bw’Umuhangayiko?
          </h1>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              ></Transition>
            </Menu>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-12 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block">
              <p className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                Umuhangayiko ni ibyiyumviro byo kumva uhangayitse ,udatuje
                ugaterwa ubwoba nibintu bishobora no kuba ntacyo byagutwara
                /bidateje icyago ndetse bikagaragarira mubimenyetso bigaragara
                inyuma nko kudatuza, gutera cyane kumutima,ndetse no kubira
                ibyuya byinshi
              </p>

              {filters.map((section) => (
                <Disclosure
                  as="div"
                  key={section.id}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="flex items-center"
                            >
                              {option.label}
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
              <TestInterpretationAxKinya />
            </form>
            {/* Product grid */}
            <div className="lg:col-span-3">
              <TestTableAxKinya />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
