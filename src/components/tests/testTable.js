import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export const TestTable = () => {
  //Test Summation & Results
  const [sum, setSum] = useState(0);
  const [result, setResult] = useState("");
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);
  const [i, setI] = useState(0);

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

  //For eighth row
  useEffect(() => {
    if (watchAllFields.h1) {
      setValue("h2", false);
      setValue("h3", false);
      setValue("h4", false);
      setH(0);
    }
  }, [watchAllFields.h1, setValue]);

  useEffect(() => {
    if (watchAllFields.h2) {
      setValue("h1", false);
      setValue("h3", false);
      setValue("h4", false);
      setH(1);
    }
  }, [watchAllFields.h2, setValue]);

  useEffect(() => {
    if (watchAllFields.h3) {
      setValue("h1", false);
      setValue("h2", false);
      setValue("h4", false);
      setH(2);
    }
  }, [watchAllFields.h3, setValue]);

  useEffect(() => {
    if (watchAllFields.h4) {
      setValue("h1", false);
      setValue("h2", false);
      setValue("h3", false);
      setH(3);
    }
  }, [watchAllFields.h4, setValue]);

  //For nineth row
  useEffect(() => {
    if (watchAllFields.i1) {
      setValue("i2", false);
      setValue("i3", false);
      setValue("i4", false);
      setI(0);
    }
  }, [watchAllFields.i1, setValue]);

  useEffect(() => {
    if (watchAllFields.i2) {
      setValue("i1", false);
      setValue("i3", false);
      setValue("i4", false);
      setI(1);
    }
  }, [watchAllFields.i2, setValue]);

  useEffect(() => {
    if (watchAllFields.i3) {
      setValue("i1", false);
      setValue("i2", false);
      setValue("i4", false);
      setI(2);
    }
  }, [watchAllFields.i3, setValue]);

  useEffect(() => {
    if (watchAllFields.i4) {
      setValue("i1", false);
      setValue("i2", false);
      setValue("i3", false);
      setI(3);
    }
  }, [watchAllFields.i4, setValue]);

  //Score summation

  useEffect(() => {
    setSum(a + b + c + d + e + f + g + h + i);
  });

  useEffect(() => {
if(sum>=0 && sum<=4){
  setResult("None-minimal")
} 
else if(sum>=5 && sum<=9){
  setResult("Mild")
} 
else if(sum>=10 && sum<=14){
  setResult("Moderate")
} 
else if(sum>=15 && sum<=19){
  setResult("Moderate Severe")
}
else if(sum>=20 && sum<=27){
  setResult("Severe")
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
                            <input type="checkbox" {...register("h1")} />
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
                            <input type="checkbox" {...register("h2")} />
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
                            <input type="checkbox" {...register("h3")} />
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
                            <input type="checkbox" {...register("h4")} />
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
                            <input type="checkbox" {...register("i1")} />
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
                            <input type="checkbox" {...register("i2")} />
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
                            <input type="checkbox" {...register("i3")} />
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
                            <input type="checkbox" {...register("i4")} />
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
          <div class=" border border-gray-200 rounded-xl mt-4 bg-customized-1 px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
            <div>
              <p class="text-lg text-gray-600 dark:text-gray-400">
                <span class="font-semibold text-gray-800 dark:text-gray-200">
                  Your Results
                </span>
              </p>
            </div>
            <div>
              <div class="inline-flex gap-x-2">
                <p
                  type="button"
                  class="text-lg py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xl"
                >
                  {result}
                </p>
              </div>
            </div>
            <div>
              <div class="inline-flex gap-x-2">
                <p
                  type="button"
                  class="text-lg py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-xl"
                >
                  {sum}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
