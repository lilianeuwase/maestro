import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Check() {
  const { register, watch, setValue } = useForm();
  const watchAllFields = watch();
  useEffect(() => {
    if (watchAllFields.first) {
      setValue("second", false);
    }
  }, [watchAllFields.first, setValue]);

  useEffect(() => {
    if (watchAllFields.second) {
      setValue("first", false);
    }
  }, [watchAllFields.second, setValue]);

  const [checkedValues, setValue1] = useState([]);
  function handleChange(event) {
    const { value, checked } = event.target;

    if (checked) {
      setValue1((pre) => [...pre, value]);
    } else
      setValue1((pre) => {
        return [...pre.filter((skill) => skill !== value)];
      });
  }

  const allValues = checkedValues.map((str) => {
    return parseInt(str, 10);
  });

  console.log(allValues);
  console.log(allValues.reduce((a, v) => (a = a + v), 0));
  const allValues1 = allValues.reduce((a, v) => (a = a + v), 0);

  return (
    <div className="App">
      <input type="checkbox" value={1} onChange={handleChange} />
      1
      <input type="checkbox" value={2} onChange={handleChange} />2 <br />
      <br />
      sum: {allValues1}
    </div>
  );
}
