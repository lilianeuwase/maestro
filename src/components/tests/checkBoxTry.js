import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Check() {
  let sum = 0;
  const [a, setA] = useState(0);

  const { register, watch, setValue } = useForm();
  const watchAllFields = watch();
  useEffect(() => {
    if (watchAllFields.first) {
      setValue("second", false);
      setValue("third", false);
      setValue("forth", false);
      setA(0);
    }
  }, [watchAllFields.first, setValue]);

  useEffect(() => {
    if (watchAllFields.second) {
      setValue("first", false);
      setValue("third", false);
      setValue("forth", false);
      setA(1);
    }
  }, [watchAllFields.second, setValue]);

  useEffect(() => {
    if (watchAllFields.third) {
      setValue("first", false);
      setValue("second", false);
      setValue("forth", false);
      setA(2);
    }
  }, [watchAllFields.third, setValue]);

  useEffect(() => {
    if (watchAllFields.forth) {
      setValue("first", false);
      setValue("second", false);
      setValue("third", false);
      setA(3);
    }
  }, [watchAllFields.forth, setValue]);

  sum = a;

  // const [isA1, setIsA1] = useState(false);
  // const [isA2, setIsA2] = useState(false);

  // const [checkedValues, setValue1] = useState([]);
  // function handleChange(event) {
  //   const { value, checked } = event.target;
  //   if (checked) {
  //     setValue1((pre) => [...pre, value]);
  //   } else
  //     setValue1((pre) => {
  //       return [...pre.filter((skill) => skill !== value)];
  //     });

  //   if (event.target.checked) {
  //     console.log("✅ Checkbox is checked");
  //   } else {
  //     console.log("⛔️ Checkbox is NOT checked");
  //   }
  //   setIsA1((current) => !current);

  //   if (watchAllFields.first) {
  //     setValue("second", false);
  //   }
  // }

  // const allValues = checkedValues.map((str) => {
  //   return parseInt(str, 10);
  // });

  // console.log(allValues);
  // console.log(allValues.reduce((a, v) => (a = a + v), 0));
  // const allValues1 = allValues.reduce((a, v) => (a = a + v), 0);

  return (
    <div className="App">
      <input type="checkbox" {...register("first")} value={0} />
      1
      <input type="checkbox" {...register("second")} value={1} />
      2
      <input type="checkbox" value={2} {...register("third")} />3
      <input type="checkbox" value={3} {...register("forth")} />4 <br />
      sum: {sum}
    </div>
  );
}
