import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({ id, title, path, entityType }) => {
  return (
    <div className='card-container'>
      <Link to={`/${entityType}/${id}`} className='card-link'>
        <li className='card' id={id}>
          <div className='image-container'>
            <img src={`${path}`} alt={title} loading='lazy' />
            <h3 className='card-title'>{title}</h3>
          </div>
        </li>
      </Link>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  entityType: PropTypes.oneOf(['characters', 'comics', 'series']).isRequired
}

export default Card
