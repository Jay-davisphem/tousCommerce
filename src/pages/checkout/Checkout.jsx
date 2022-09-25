import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import PaystackCheckoutButton from "../../components/paystack-button/PaystackButton";
import "./checkout.scss";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const total = useSelector((state) => selectCartTotal(state));
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ₦{total}</span>
      </div>
      <div className="test-warning">
        *Please do not input your credit card for payments. This is just for
        testing
      </div>
      <PaystackCheckoutButton price={total} />
    </div>
  );
};
export default CheckoutPage;
