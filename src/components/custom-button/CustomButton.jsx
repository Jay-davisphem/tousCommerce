import "./custom-button.scss";

const CustomButton = ({ children, isGoogleButton, inverted, ...others }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleButton ? "google-custom-button" : ""
      } custom-button`}
      {...others}
    >
      {children}
    </button>
  );
};

export default CustomButton;
