import { useState } from "react";
import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  //   const [name, handleNameChange] = useInputState("nafiz vuri");
  const emailState = useInputState("mdhasanali@gmail.com");

  const handleSubmit = (e) => {
    console.log("form data", emailState.value);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" id="" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
