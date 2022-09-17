import "./cart-icon.scss";
import { useDispatch } from "react-redux";
import imgSrc from "../../assets/shopping-bag.svg";
import { cartActions } from "../../redux";
const CartIcon = () => {
  const { toggleCartHidden } = cartActions;
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <img src={imgSrc} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
