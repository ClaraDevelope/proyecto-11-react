import PropTypes from 'prop-types'
import './Title.css'
const Title = ({ text }) => {
  return <h1 className='title'>{text}</h1>
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}
export default Title
