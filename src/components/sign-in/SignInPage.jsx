import "./sign-in.scss";
import { useState } from "react";
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

const SignInPage = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ email: "", password: "" });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          name="email"
          type="email"
          value={state.email}
          handleChange={handleChange}
          required
        />
        <FormInput
          label='Password'
          name="password"
          type="password"
          value={state.password}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign In</CustomButton>
      </form>
    </div>
  );
};

export default SignInPage;
