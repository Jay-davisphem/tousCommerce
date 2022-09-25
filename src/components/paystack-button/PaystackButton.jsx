import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./paystack-button.scss";
import "../custom-button/custom-button.scss";

const PaystackCheckoutButton = ({ price }) => {
  const currentUser = useSelector((state) => selectCurrentUser(state));

  const priceForStripe = price * 100;
  const config = {
    reference: new Date().getTime().toString(),
    //firstname: currentUser?.displayName,
    email: currentUser?.email,
    amount: priceForStripe,
    publicKey: "pk_test_3479222b88fc017d49a89f64de7a1b0dde1025bd",
  };

  const handleSuccess = (reference) => {
    console.log(reference);
    alert(reference);
  };

  const handleClose = () => {
    console.log("closed");
    alert("closed");
  };

  const compProps = {
    ...config,
    text: "Pay with paystack",
    onSuccess: (ref) => handleSuccess(ref),
    onClose: handleClose,
  };
  return (
    <PaystackButton className="paystack-button custom-button" {...compProps} />
  );
};

export default PaystackCheckoutButton;
