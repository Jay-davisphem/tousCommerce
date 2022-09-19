import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import CustomButton from "../custom-button/CustomButton";
import CartItem from '../cart-item/CartItem'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import {cartActions} from '../../redux'
import "./cart-dropdown.scss";

const CartDropdown = () => {
  const {toggleCartHidden} = cartActions
  const cartItems = useSelector(state => selectCartItems(state))
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          !cartItems.length? (
            <span className='empty-message'>Your cart is empty!</span>
          ):
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
        }
      </div>
      <CustomButton onClick={() => {
        dispatch(toggleCartHidden())
        navigate('/checkout')
        }}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
