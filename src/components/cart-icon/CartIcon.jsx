import "./cart-icon.scss";
import { useDispatch, useSelector } from "react-redux";
import imgSrc from "../../assets/shopping-bag.svg";
import { cartActions } from "../../redux";
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

const CartIcon = () => {
  const { toggleCartHidden } = cartActions;
  const dispatch = useDispatch(); 
  const itemCount = useSelector(state => {
    return selectCartItemsCount(state)
  })

  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <img src={imgSrc} className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
