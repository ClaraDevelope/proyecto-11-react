import { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import Card from '../../components/Card/Card'
import Loading from '../../components/Loading/Loading'
import Title from '../../components/Title/Title'
import { hash, publicKey, timestamp } from '../../utils/constants'
import Footer from '../../components/Footer/Footer'
// Esta página tiene rutas de paginación pero no funciona bien puesto que no se actualiza la página
const Characters = () => {
  const [character, setCharacter] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const limit = 12
  // Limpiar el characters cada vez que se llame a la api
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const response = await fetch(
          `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&offset=${offset}&limit=${limit}`
        )
        const data = await response.json()
        setCharacter(data.data.results)
        setTotalResults(data.data.total)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
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
        {loading ? (
          <Loading />
        ) : (
          character.map((character) => (
            <Card
              entityType='characters'
              key={character.id}
              id={character.id}
              title={character.name}
              path={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            />
          ))
        )}
      </ul>
      <div className='button-container'>
        <Button
          text={'Anterior'}
          action={prevPage}
          disabled={offset === 0}
          className='button'
        />
        <Button
          text={'Siguiente'}
          action={nextPage}
          disabled={offset + limit >= totalResults}
          className='button'
        />
      </div>
      <Footer />
    </div>
  )
}

export default Characters
