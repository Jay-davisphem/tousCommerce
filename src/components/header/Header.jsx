import "./header.scss";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import logo from "../../assets/tousLogo.png";
import { auth } from "../../firebase/firebase.utils";
const Header = () => {
  const currentUser = useSelector(state => state.currentUser)
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => auth.signOut()}
            title={`${window.location.origin}/auth`}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/auth">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
