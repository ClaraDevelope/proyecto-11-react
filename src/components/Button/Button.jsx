import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ text, image, action, disabled }) => {
  return (
    <button onClick={action} disabled={disabled}>
      {image ? <img src={image} alt={text} /> : text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  action: PropTypes.func.isRequired,
  disabled: PropTypes.bool // Propiedad disabled
}

export default Button
