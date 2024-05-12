import Footer from '../../components/Footer/Footer'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <h1 className='home-title'>Marvelous Marvel: Unveiling the Universe</h1>
      <div className='button-container-home'>
        <button className='home-button'>Characters</button>
        <button className='home-button'>Comics</button>
        <button className='home-button'>Series</button>
      </div>
      <Footer />
    </div>
  )
}

export default Home
