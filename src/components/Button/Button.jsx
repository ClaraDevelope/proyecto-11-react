import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ text, image, action, disabled, link, className }) => {
  const buttonContent = image ? <img src={image} alt={text} /> : text

  if (link) {
    return (
      <a href={link}>
        <button onClick={action} disabled={disabled} className={className}>
          {buttonContent}
        </button>
      </a>
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
