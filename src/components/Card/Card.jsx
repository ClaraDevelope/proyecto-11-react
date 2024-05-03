import PropTypes from 'prop-types'
import './Card.css'

const Card = ({ id, title, path }) => {
  return (
    <li className='card' key={id}>
      <h3>{title}</h3>
      <div className='image-container'>
        <img src={`${path}`} alt={title} loading='lazy' />
      </div>
    </li>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default Card
