import PropTypes from 'prop-types'
import './Button.css'
const Button = ({ text, image, action }) => {
  return (
    <button onClick={action}>
      {image ? <img src={image} alt={text} /> : text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  action: PropTypes.func.isRequired
}

export default Button
