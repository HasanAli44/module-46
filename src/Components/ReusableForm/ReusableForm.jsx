const ReusableForm = ({
  formTittle,
  handleSubmit,
  submitBtnText = "Submit",
}) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>{formTittle}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="text" name="phone" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReusableForm;
