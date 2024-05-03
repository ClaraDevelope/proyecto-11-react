// import md5 from 'md5'
import Card from './../../components/Card/Card'
import { useEffect, useState } from 'react'
import './Comics.css'
import { hash, publicKey, timestamp } from '../../utils/constants'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'

const Comics = () => {
  const [comics, setComics] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [offset, setOffset] = useState(0)
  const limit = 12

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://gateway.marvel.com/v1/public/comics?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&offset=${offset}&limit=${limit}`
        )
        const data = await response.json()
        setComics(data.data.results)
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
      <Title text={'Marvel Comics'}></Title>
      <ul className='cards-container'>
        {comics.map((comic) => (
          <Card
            key={comic.id}
            title={comic.title}
            path={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
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

export default Comics
