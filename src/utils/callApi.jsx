import { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading'
import Button from '../components/Button/Button'
import Filter from '../components/Filter/Filter'
import { hash, publicKey, timestamp } from '../utils/constants'

const DataFetcher = ({ apiEndpoint, renderItem, entityType }) => {
  const [items, setItems] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(true)
  const limit = 12

  const fetchData = async (query = '') => {
    try {
      setLoading(true)
      let url = `${apiEndpoint}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&offset=${offset}&limit=${limit}`
      if (query) {
        url += `&nameStartsWith=${query}`
      }
      const response = await fetch(url)
      const data = await response.json()
      setItems(data.data.results)
      setTotalResults(data.data.total)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
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

  const handleSearch = (query) => {
    setOffset(0)
    fetchData(query)
  }

  return (
    <div className='principal'>
      <Filter onSearch={handleSearch} />
      <ul className='cards-container'>
        {loading ? <Loading /> : items.map((item) => renderItem(item))}
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

export default DataFetcher
