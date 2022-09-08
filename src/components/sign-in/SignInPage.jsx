import { useState } from "react";
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import "./sign-in.scss";
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
        <div className='buttons'>
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleButton>Sign In Google</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
