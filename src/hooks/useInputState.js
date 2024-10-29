import { useState } from "react";

const useInputState = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);
  const handlechange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onchange,
  };
};
export default useInputState;
