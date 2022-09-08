import './custom-button.scss'

const CustomButton = ({children, isGoogleButton, ...others}) => {
  return (
    <button className={`${isGoogleButton? 'google-custom-button': ''} custom-button`} {...others}>
      {children}
    </button>
  )
}

export default CustomButton
