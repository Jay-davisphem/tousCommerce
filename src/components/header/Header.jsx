import "./header.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/tousLogo.png";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { cartActions } from "../../redux"; 
const Header = () => {
  const { hideCart } = cartActions;
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const hidden = useSelector((state) => selectCartHidden(state));
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Link className="logo-container" to="/" onClick={() => dispatch(hideCart())}>
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop" onClick={() => dispatch(hideCart())}>
          SHOP
        </Link>
        <Link className="option" to="/contact" onClick={() => dispatch(hideCart())}>
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              dispatch(hideCart())
              auth.signOut()}
            }
            title={`${window.location.origin}/auth`}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/auth" onClick={() => dispatch(hideCart())}>
            SIGN IN
          </Link>
        )}

        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

export default Header;
