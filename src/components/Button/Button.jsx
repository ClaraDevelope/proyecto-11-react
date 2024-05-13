import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({ text, image, action, disabled, link, className }) => {
  const buttonContent = image ? <img src={image} alt={text} /> : text

  if (link) {
    return (
      <Link to={link}>
        <button onClick={action} disabled={disabled} className={className}>
          {buttonContent}
        </button>
      </Link>
    )
  }

  return (
    <button onClick={action} disabled={disabled} className={className}>
      {buttonContent}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string,
  action: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  link: PropTypes.string,
  className: PropTypes.string
}

export default Button
