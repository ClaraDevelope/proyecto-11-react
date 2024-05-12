import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <img
          src='https://i.pinimg.com/564x/71/bd/6d/71bd6db31ad4398d82bc728f0bff4421.jpg'
          alt='marvel'
        />
      </div>
      <nav className='nav'>
        <NavLink to=''>Home</NavLink>
        <NavLink to='characters'>Characters</NavLink>
        <NavLink to='comics'>Comics</NavLink>
      </nav>
    </header>
  )
}

export default Header
