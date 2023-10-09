export const TestTable = () => {
  return (
    <div class="mx-auto lg:py-0">
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Test
                  </h2>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    Take test
                  </p>
                </div>
              </div>
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <div class="px-6 py-3">
                      <th
                        scope="col"
                        class="pl-8 lg:pl-3 xl:pl-0 pr-6 py-3 text-left"
                      >
                        <div class="flex items-center gap-x-2">
                          <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                            Over the last 2 weeks, how often have you been
                            bothered by the following problems?
                          </span>
                        </div>
                      </th>
                    </div>

                    <th scope="col" class="px-1 py-3 text-left">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Not at all
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-1 py-3 text-left">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Several days
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-1 py-3 text-left">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          More than half the days
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-1 py-3 text-left">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Nearly every day
                        </span>
                      </div>
                    </th>
                    {/* <th scope="col" class="px-6 py-3 text-right">hi</th> */}
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <div class="px-6 py-3">
                      <td class="">
                        <div class="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                          <div class="flex items-center gap-x-3">
                            <img
                              class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                              alt="Image Description"
                            />
                            Little interest or pleasure in doing things
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-1"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          0
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-blue-100 text-blue-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-2" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-2"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +1
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-pink-100 text-pink-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-3" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-3"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +2
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-lime-100 text-lime-950 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-4" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-4"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +3
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <div class="px-6 py-3">
                      <td class="">
                        <div class="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                          <div class="flex items-center gap-x-3">
                            <img
                              class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                              alt="Image Description"
                            />
                            Feeling down, depressed or hopeless
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-1"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          0
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-blue-100 text-blue-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-2" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-2"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +1
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-pink-100 text-pink-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-3" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-3"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +2
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-lime-100 text-lime-950 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-4" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-4"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +3
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <div class="px-6 py-3">
                      <td class="">
                        <div class="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                          <div class="flex items-center gap-x-3">
                            <img
                              class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                              alt="Image Description"
                            />
                            Trouble falling asleep, staying asleep, or sleeping
                            too much
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-1"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          0
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-blue-100 text-blue-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-2" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-2"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +1
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-pink-100 text-pink-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-3" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-3"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +2
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-lime-100 text-lime-950 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-4" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-4"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +3
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <div class="px-6 py-3">
                      <td class="h-2px w-2px ">
                        <div class="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                          <div class="flex items-center gap-x-3">
                            <img
                              class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                              alt="Image Description"
                            />
                            Feeling tired or having little energy
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-1"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          0
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-blue-100 text-blue-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-2" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-2"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +1
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-pink-100 text-pink-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-3" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-3"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +2
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-lime-100 text-lime-950 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-4" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-4"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +3
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <div class="px-6 py-3">
                      <td class="h-2px w-2px">
                        <div class="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                          <div class="flex items-center gap-x-3">
                            <img
                              class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                              alt="Image Description"
                            />
                            Poor appetite or overeating
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-1"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          0
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-blue-100 text-blue-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-2" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-2"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +1
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-pink-100 text-pink-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-3" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-3"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +2
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-lime-100 text-lime-950 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-4" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-4"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +3
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <div class="px-6 py-3">
                      <td class="">
                        <div class="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                          <div class="flex items-center gap-x-3">
                            <img
                              class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                              alt="Image Description"
                            />
                            Feeling bad about yourself - or that you’re a
                            failure or have let yourself or your family down
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-1"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          0
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-blue-100 text-blue-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-2" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-2"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +1
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-pink-100 text-pink-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-3" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-3"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +2
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-lime-100 text-lime-950 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-4" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-4"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +3
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <div class="px-6 py-3">
                      <td class="">
                        <div class="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                          <div class="flex items-center gap-x-3">
                            <img
                              class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                              alt="Image Description"
                            />
                            Trouble concentrating on things, such as reading the
                            newspaper or watching television
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-1"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          0
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-blue-100 text-blue-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-2" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-2"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +1
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-pink-100 text-pink-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-3" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-3"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +2
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-lime-100 text-lime-950 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-4" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-4"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +3
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <div class="px-6 py-3">
                      <td class="">
                        <div class="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                          <div class="flex items-center gap-x-3">
                            <img
                              class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                              alt="Image Description"
                            />
                            Moving or speaking so slowly that other people could
                            have noticed. Or, the opposite - being so fidgety or
                            restless that you have been moving around a lot more
                            than usual
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-1"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          0
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-blue-100 text-blue-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-2" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-2"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +1
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-pink-100 text-pink-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-3" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-3"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +2
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-lime-100 text-lime-950 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-4" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-4"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +3
                        </span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <div class="px-6 py-3">
                      <td class="">
                        <div class="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                          <div class="flex items-center gap-x-3">
                            <img
                              class="inline-block h-[2.375rem] w-[2.375rem] rounded-full"
                              src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                              alt="Image Description"
                            />
                            Thoughts that you would be better off dead or of
                            hurting yourself in some way
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-1"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          0
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-blue-100 text-blue-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-2" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-2"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +1
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-pink-100 text-pink-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-3" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-3"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +2
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-lime-100 text-lime-950 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-4" class="flex">
                            <input
                              type="checkbox"
                              class="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-4"
                            />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +3
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                    <span class="font-semibold text-gray-800 dark:text-gray-200">
                      6
                    </span>{" "}
                    results
                  </p>
                </div>

                <div>
                  <div class="inline-flex gap-x-2">
                    <button
                      type="button"
                      class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      <svg
                        class="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                      Prev
                    </button>

                    <button
                      type="button"
                      class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      Next
                      <svg
                        class="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
