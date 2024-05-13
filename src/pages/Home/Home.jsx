import Button from '../../components/Button/Button'
import Footer from '../../components/Footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <h1 className='home-title'>Marvelous Marvel: Unveiling the Universe</h1>
      <div className='button-container-home'>
        <Button text='Characters' link='/characters' className='home-button' />
        <Button text='Comics' link='/comics' className='home-button' />
      </div>
      <Footer />
    </div>
  )
}

export default Home
