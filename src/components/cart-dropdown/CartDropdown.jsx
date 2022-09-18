import {useSelector} from 'react-redux'

import CustomButton from "../custom-button/CustomButton";
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import "./cart-dropdown.scss";

const CartDropdown = () => {
  const cartItems = useSelector(state => selectCartItems(state))
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
