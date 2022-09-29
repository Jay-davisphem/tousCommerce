import "./with-spinner.scss";

const WithSpinner =
  (Commponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container"></div>
      </div>
    ) : (
      <Commponent {...otherProps} />
    );
  };

export default WithSpinner;
