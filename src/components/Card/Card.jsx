import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({ id, title, path, entityType }) => {
  return (
    <div className='card-container'>
      <Link to={`/${entityType}/${id}`} className='card-link'>
        <li className='card' id={id}>
          <h3 className='card-title'>{title}</h3>
          <div className='image-container'>
            <img src={`${path}`} alt={title} loading='lazy' />
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

// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import './Card.css'
// const Card = ({ id, title, path }) => {
//   return (
//     <div className='card-container'>
//       <Link to={`/characters/${id}`} className='card-link'>
//         <li className='card' id={id}>
//           <h3 className='card-title'>{title}</h3>
//           <div className='image-container'>
//             <img src={`${path}`} alt={title} loading='lazy' />
//           </div>
//         </li>
//       </Link>
//     </div>
//   )
// }

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   path: PropTypes.string.isRequired
// }
// export default Card
