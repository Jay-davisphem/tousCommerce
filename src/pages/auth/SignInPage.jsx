import "./sign-in.scss";
import { useState, useEffect } from "react";
const SignInPage = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ email: '', password: ''});
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({...state, [name]: value });
  }
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input 
          name="email" 
          type="email" 
          value={state.email} 
          onChange={handleChange}
          required 
        />
        <label>Email</label>
        <input
          name="password"
          type="password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <label>Password</label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignInPage;
