import SignInPage from "../../components/sign-in/SignInPage";
import SignUpPage from '../../components/sign-up/SignUpPage'
import "./auth.scss";

const AuthPage = () => {
  return (
    <div className="auth">
      <SignInPage />
      <SignUpPage />
    </div>
  );
};

export default AuthPage;
