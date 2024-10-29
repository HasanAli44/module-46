import "./App.css";
import Grandpa from "./Components/Grandpa/Grandpa";
import ReusableForm from "./Components/ReusableForm/ReusableForm";
// import HookForm from "./Components/HookForm/HookForm";
// import RefForm from "./Components/RefForm/RefForm";
// import SimpleForm from "./Components/SimpleForm/SimpleForm";
// import StatefulForm from "./Components/StatefulForm/StatefulForm";

function App() {
  const handleSignUpSubmit = (e) => {
    // e.preventDefault();
    console.log("sign up".data);
  };
  const handleUpdateProfile = (e) => {
    // e.preventDefault();
    console.log("Update profile".data);
  };
  return (
    <>
      <h1>Vite + React</h1>

      <Grandpa></Grandpa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReusableForm
        formTittle={"Sign Up"}
        handleSubmit={handleSignUpSubmit}
      ></ReusableForm> */}
      {/* <ReusableForm
        formTittle={"Update Profile"}
        submitBtnText="update"
        handleSubmit={handleUpdateProfile}
      ></ReusableForm> */}
    </>
  );
}

export default App;
