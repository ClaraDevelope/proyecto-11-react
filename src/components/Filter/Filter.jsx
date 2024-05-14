import { useState } from 'react'
import PropTypes from 'prop-types'
import './Filter.css'

const Filter = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleChange = (event) => {
    const value = event.target.value
    setQuery(value)
    onSearch(value)
  }

  return (
    <>
      <input
        type='text'
        placeholder='Buscar'
        value={query}
        onChange={handleChange}
      />
    </>
  )
}
Filter.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default Filter
