import "./sign-up.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth } from "../../firebase/firebase.utils";
import { createUserProfileDocument } from "../../firebase/userProfile";
import { useState } from "react";
const SignUpPage = () => {
  const [userAuth, setUserAuth] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userAuth;
    if (password !== confirmPassword) {
      alert("passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setUserAuth({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserAuth({ ...userAuth, [name]: value });
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account!</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          handleChange={handleChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUpPage;
