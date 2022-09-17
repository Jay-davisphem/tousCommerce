import "./cart-icon.scss";
import { useDispatch, useSelector } from "react-redux";
import imgSrc from "../../assets/shopping-bag.svg";
import { cartActions } from "../../redux";
const CartIcon = () => {
  const { toggleCartHidden } = cartActions;
  const dispatch = useDispatch();
  const itemCount = useSelector(state => {
    console.error('I am being called!')
    return state.cart.cartItems
      .reduce((acc, cartItem) => acc + cartItem.quantity, 0)
}
)

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <img src={imgSrc} className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
