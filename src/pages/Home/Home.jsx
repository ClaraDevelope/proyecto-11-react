import { useEffect, useState } from 'react'
import './Home.css'
import { hash, publicKey, timestamp } from '../../utils/constants'
import Card from '../../components/Card/Card'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'

const Home = () => {
  const [character, setCharacter] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [offset, setOffset] = useState(0)
  const limit = 12

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&offset=${offset}&limit=${limit}`
        )
        const data = await response.json()
        setCharacter(data.data.results)
        setTotalResults(data.data.total)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [offset])

  const nextPage = () => {
    if (offset + limit < totalResults) {
      setOffset(offset + limit)
    }
  }

  const prevPage = () => {
    if (offset - limit >= 0) {
      setOffset(offset - limit)
    }
  }

  return (
    <div className='principal'>
      <Title text={'Todos los personajes del Universo Marvel 🕷️'} />
      <ul className='cards-container'>
        {character.map((character) => (
          <Card
            key={character.id}
            title={character.name}
            path={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
        ))}
      </ul>
      <div className='button-container'>
        <Button text={'Anterior'} action={prevPage} disabled={offset === 0} />
        <Button
          text={'Siguiente'}
          action={nextPage}
          disabled={offset + limit >= totalResults}
        />
      </div>
    </div>
  )
}

export default Home
