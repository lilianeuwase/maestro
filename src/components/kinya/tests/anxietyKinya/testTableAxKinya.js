import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TestResultsAxKinya from "./testResultsAxKinya";
export const TestTableAxKinya = () => {
  //Test Summation & Results
  const [sum, setSum] = useState(0);
  const [result, setResult] = useState("");
  const [treat, setTreatment] = useState("");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);

  const { register, watch, setValue } = useForm();
  const watchAllFields = watch();

  //For first row
  useEffect(() => {
    if (watchAllFields.a1) {
      setValue("a2", false);
      setValue("a3", false);
      setValue("a4", false);
      setA(0);
    }
  }, [watchAllFields.a1, setValue]);

  useEffect(() => {
    if (watchAllFields.a2) {
      setValue("a1", false);
      setValue("a3", false);
      setValue("a4", false);
      setA(1);
    }
  }, [watchAllFields.a2, setValue]);

  useEffect(() => {
    if (watchAllFields.a3) {
      setValue("a1", false);
      setValue("a2", false);
      setValue("a4", false);
      setA(2);
    }
  }, [watchAllFields.a3, setValue]);

  useEffect(() => {
    if (watchAllFields.a4) {
      setValue("a1", false);
      setValue("a2", false);
      setValue("a3", false);
      setA(3);
    }
  }, [watchAllFields.a4, setValue]);

  //For second row
  useEffect(() => {
    if (watchAllFields.b1) {
      setValue("b2", false);
      setValue("b3", false);
      setValue("b4", false);
      setB(0);
    }
  }, [watchAllFields.b1, setValue]);

  useEffect(() => {
    if (watchAllFields.b2) {
      setValue("b1", false);
      setValue("b3", false);
      setValue("b4", false);
      setB(1);
    }
  }, [watchAllFields.b2, setValue]);

  useEffect(() => {
    if (watchAllFields.b3) {
      setValue("b1", false);
      setValue("b2", false);
      setValue("b4", false);
      setB(2);
    }
  }, [watchAllFields.b3, setValue]);

  useEffect(() => {
    if (watchAllFields.b4) {
      setValue("b1", false);
      setValue("b2", false);
      setValue("b3", false);
      setB(3);
    }
  }, [watchAllFields.b4, setValue]);

  //For third row
  useEffect(() => {
    if (watchAllFields.c1) {
      setValue("c2", false);
      setValue("c3", false);
      setValue("c4", false);
      setC(0);
    }
  }, [watchAllFields.c1, setValue]);

  useEffect(() => {
    if (watchAllFields.c2) {
      setValue("c1", false);
      setValue("c3", false);
      setValue("c4", false);
      setC(1);
    }
  }, [watchAllFields.c2, setValue]);

  useEffect(() => {
    if (watchAllFields.c3) {
      setValue("c1", false);
      setValue("c2", false);
      setValue("c4", false);
      setC(2);
    }
  }, [watchAllFields.c3, setValue]);

  useEffect(() => {
    if (watchAllFields.c4) {
      setValue("c1", false);
      setValue("c2", false);
      setValue("c3", false);
      setC(3);
    }
  }, [watchAllFields.c4, setValue]);

  //For fourth row
  useEffect(() => {
    if (watchAllFields.d1) {
      setValue("d2", false);
      setValue("d3", false);
      setValue("d4", false);
      setD(0);
    }
  }, [watchAllFields.d1, setValue]);

  useEffect(() => {
    if (watchAllFields.d2) {
      setValue("d1", false);
      setValue("d3", false);
      setValue("d4", false);
      setD(1);
    }
  }, [watchAllFields.d2, setValue]);

  useEffect(() => {
    if (watchAllFields.d3) {
      setValue("d1", false);
      setValue("d2", false);
      setValue("d4", false);
      setD(2);
    }
  }, [watchAllFields.d3, setValue]);

  useEffect(() => {
    if (watchAllFields.d4) {
      setValue("d1", false);
      setValue("d2", false);
      setValue("d3", false);
      setD(3);
    }
  }, [watchAllFields.d4, setValue]);

  //For fifth row
  useEffect(() => {
    if (watchAllFields.e1) {
      setValue("e2", false);
      setValue("e3", false);
      setValue("e4", false);
      setE(0);
    }
  }, [watchAllFields.e1, setValue]);

  useEffect(() => {
    if (watchAllFields.e2) {
      setValue("e1", false);
      setValue("e3", false);
      setValue("e4", false);
      setE(1);
    }
  }, [watchAllFields.e2, setValue]);

  useEffect(() => {
    if (watchAllFields.e3) {
      setValue("e1", false);
      setValue("e2", false);
      setValue("e4", false);
      setE(2);
    }
  }, [watchAllFields.e3, setValue]);

  useEffect(() => {
    if (watchAllFields.e4) {
      setValue("e1", false);
      setValue("e2", false);
      setValue("e3", false);
      setE(3);
    }
  }, [watchAllFields.e4, setValue]);

  //For sixth row
  useEffect(() => {
    if (watchAllFields.f1) {
      setValue("f2", false);
      setValue("f3", false);
      setValue("f4", false);
      setF(0);
    }
  }, [watchAllFields.f1, setValue]);

  useEffect(() => {
    if (watchAllFields.f2) {
      setValue("f1", false);
      setValue("f3", false);
      setValue("f4", false);
      setF(1);
    }
  }, [watchAllFields.f2, setValue]);

  useEffect(() => {
    if (watchAllFields.f3) {
      setValue("f1", false);
      setValue("f2", false);
      setValue("f4", false);
      setF(2);
    }
  }, [watchAllFields.f3, setValue]);

  useEffect(() => {
    if (watchAllFields.f4) {
      setValue("f1", false);
      setValue("f2", false);
      setValue("f3", false);
      setF(3);
    }
  }, [watchAllFields.f4, setValue]);

  //For seventh row
  useEffect(() => {
    if (watchAllFields.g1) {
      setValue("g2", false);
      setValue("g3", false);
      setValue("g4", false);
      setG(0);
    }
  }, [watchAllFields.g1, setValue]);

  useEffect(() => {
    if (watchAllFields.g2) {
      setValue("g1", false);
      setValue("g3", false);
      setValue("g4", false);
      setG(1);
    }
  }, [watchAllFields.g2, setValue]);

  useEffect(() => {
    if (watchAllFields.g3) {
      setValue("g1", false);
      setValue("g2", false);
      setValue("g4", false);
      setG(2);
    }
  }, [watchAllFields.g3, setValue]);

  useEffect(() => {
    if (watchAllFields.g4) {
      setValue("g1", false);
      setValue("g2", false);
      setValue("g3", false);
      setG(3);
    }
  }, [watchAllFields.g4, setValue]);

  //Score summation

  useEffect(() => {
    setSum(a + b + c + d + e + f + g);
  });

  useEffect(() => {
    if (sum >= 0 && sum <= 4) {
      setResult("Ibimenyetso bike");
      setTreatment(
        "Ugomba gukomeza kubaho neza (indyo yuzuye, amazi ahagije, kuruhuka bihagije, gukora imyitozo ngororamubiri) no gucukumbura impamvu nyamukuru itera guhangayika kugirango umenye icyo wirinda."
      );
    } else if (sum >= 5 && sum <= 9) {
      setResult("Ibimenyetso biringaniye");
      setTreatment(
        "Ugomba kuvugana n'inshuti, ukagira umwanya wo kwidagadura, kugisha inama urubuga rwacu kubijyanye no kwiga ubuhanga bwo guhangana, witegure gutangira urugendo rwo kuvurwa."
      );
    } else if (sum >= 10 && sum <= 14) {
      setResult("Ibimenyetso byinshi");
      setTreatment(
        "Ugomba kubona gahunda yo kuvurwa, shakisha umuvuzi wabigenewe, soma inama ku rubuga rwacu, kandi witeguye kuvurwa."
      );
    } else if (sum >= 15) {
      setResult("Ibimenyetso bikabije");
      setTreatment(
        "Ukeneye ubufasha bwihuse: Hamagara kuri 912, cyangwa ugana ibitaro bikwegereye, ganira n’inshuti zigufashe kugera kwa muganga."
      );
    }
  });

  return (
    <div class="mx-auto lg:py-0">
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Gusuzuma Indwara y'Umuhangayiko 
                  </h2>
                  <p class="text-sm text-gray-600 dark:text-gray-400">
                  Tangira isuzuma maze urebe ibisubizo mundiba/hasi yimbonerahamwe
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
                          Mu gihe cy’ibyumweru 2 bishize ni kangahe wabangamiwe nibimenyetso bikurikira 
                          </span>
                        </div>
                      </th>
                    </div>

                    <th scope="col" class="px-1 py-3 text-left">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Ntanarimwe 
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-1 py-3 text-left">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Iminsi myinshi 
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-1 py-3 text-left">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Birenze kimwe cya kabiri kiminsi  
                        </span>
                      </div>
                    </th>

                    <th scope="col" class="px-1 py-3 text-left">
                      <div class="flex items-center gap-x-2">
                        <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Hafi ya burimunsi 
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
                          Kugira ubwoba, no guhangayika gutuma udatuza
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="1a" class="flex">
                            <input type="checkbox" {...register("a1")} />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          0
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-blue-100 text-blue-800 dark:bg-green-900 dark:text-green-200">
                          <label for="1b" class="flex">
                            <input type="checkbox" {...register("a2")} />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +1
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-pink-100 text-pink-800 dark:bg-green-900 dark:text-green-200">
                          <label for="1c" class="flex">
                            <input type="checkbox" {...register("a3")} />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +2
                        </span>
                      </div>
                    </td>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-lime-100 text-lime-950 dark:bg-green-900 dark:text-green-200">
                          <label for="1d" class="flex">
                            <input type="checkbox" {...register("a4")} />
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
                          Kutabasha kurekera guhangayika 
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input type="checkbox" {...register("b1")} />
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
                            <input type="checkbox" {...register("b2")} />
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
                            <input type="checkbox" {...register("b3")} />
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
                            <input type="checkbox" {...register("b4")} />
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
                          Guhangayikishwa n'ibintu bitandukanye kandi cyane
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input type="checkbox" {...register("c1")} />
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
                            <input type="checkbox" {...register("c2")} />
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
                            <input type="checkbox" {...register("c3")} />
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
                            <input type="checkbox" {...register("c4")} />
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
                          Kutabasha gutuza muri wowe
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input type="checkbox" {...register("d1")} />
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
                            <input type="checkbox" {...register("d2")} />
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
                            <input type="checkbox" {...register("d3")} />
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
                            <input type="checkbox" {...register("d4")} />
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
                          Kuba udatuje kuburyo bigoye kwicara hamwe
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input type="checkbox" {...register("e1")} />
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
                            <input type="checkbox" {...register("e2")} />
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
                            <input type="checkbox" {...register("e3")} />
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
                            <input type="checkbox" {...register("e4")} />
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
                          Guhinduka cyangwa kurakara byoroshye
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input type="checkbox" {...register("f1")} />
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
                            <input type="checkbox" {...register("f2")} />
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
                            <input type="checkbox" {...register("f3")} />
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
                            <input type="checkbox" {...register("f4")} />
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
                          Kumva ufite ubwoba nkaho hari ikintu kibi gishobora kubaho
                          </div>
                        </div>
                      </td>
                    </div>
                    <td class="h-px w-px ">
                      <div class="px-1 py-3">
                        <span class="inline-flex items-center gap-3 py-0.5 px-2 rounded-full text-xl font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <label for="hs-at-with-checkboxes-1" class="flex">
                            <input type="checkbox" {...register("g1")} />
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
                            <input type="checkbox" {...register("g2")} />
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
                            <input type="checkbox" {...register("g3")} />
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
                            <input type="checkbox" {...register("g4")} />
                            <span class="sr-only">Checkbox</span>
                          </label>
                          +3
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <TestResultsAxKinya result={result} sum={sum} treat={treat} />
      </div>
    </div>
  );
};
