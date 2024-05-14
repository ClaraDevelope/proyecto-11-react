// import md5 from 'md5'
import Card from './../../components/Card/Card'
import { useEffect, useState } from 'react'
import './Comics.css'
import { hash, publicKey, timestamp } from '../../utils/constants'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'

import Loading from '../../components/Loading/Loading'
import Filter from '../../components/Filter/Filter'
const Comics = () => {
  const [comics, setComics] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const limit = 12

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&offset=${offset}&limit=${limit}`
        )
        const data = await response.json()
        setComics(data.data.results)
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
  const handleSearch = async (query) => {
    try {
      if (query === '') {
        setOffset(0)
      } else {
        setLoading(true)
        const response = await fetch(
          `https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&nameStartsWith=${query}`
        )
        const data = await response.json()
        setComics(data.data.results)
        setTotalResults(data.data.total)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='principal'>
      <Title text={'Marvel Comics'}></Title>
      <Filter onSearch={handleSearch} />
      <ul className='cards-container'>
        {loading ? (
          <Loading />
        ) : (
          comics.map((comic) => (
            <Card
              entityType='comics'
              key={comic.id}
              title={comic.title}
              id={comic.id}
              path={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
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
    </div>
  )
}

export default Comics
