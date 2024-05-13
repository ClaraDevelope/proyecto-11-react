import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { hash, publicKey, timestamp } from '../../utils/constants'
import './Details.css'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Details = ({ entityType }) => {
  const { id } = useParams()
  const numericId = parseInt(id)
  const [result, setResult] = useState({})

  useEffect(() => {
    let requestUrl = ''
    switch (entityType) {
      case 'characters':
        requestUrl = `https://gateway.marvel.com/v1/public/characters/${numericId}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
        break
      case 'comics':
        requestUrl = `https://gateway.marvel.com/v1/public/comics/${numericId}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
        break
      default:
        break
    }

    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.results)
        setResult(data.data.results[0])
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [entityType, numericId])

  return (
    <div className='details-container principal'>
      <h1 className='details-title'>{result.title || result.name}</h1>
      {result.thumbnail && (
        <div className='image-container-detail'>
          <img
            src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
            alt={result.title || result.name}
          />
        </div>
      )}
      {result.description && (
        <p className='details-description'>{result.description}</p>
      )}
      {result.series && (
        <p className='details-description'>
          Series: {result.series.available}
          {result.series.name}
        </p>
      )}
      <Footer />
    </div>
  )
}

Details.propTypes = {
  entityType: PropTypes.oneOf(['characters', 'comics', 'series']).isRequired
}

export default Details
