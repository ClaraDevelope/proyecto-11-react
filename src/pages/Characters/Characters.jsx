import React from 'react'
import DataFetcher from '../../utils/callApi'
import Card from '../../components/Card/Card'
import Title from '../../components/Title/Title'

const Characters = () => {
  const apiEndpoint = 'https://gateway.marvel.com/v1/public/characters'

  const renderItem = (character) => (
    <Card
      entityType='characters'
      key={character.id}
      id={character.id}
      title={character.name}
      path={`${character.thumbnail.path}.${character.thumbnail.extension}`}
    />
  )

  return (
    <div className='principal'>
      <Title text={'Todos los personajes del Universo Marvel 🕷️'} />
      <DataFetcher apiEndpoint={apiEndpoint} renderItem={renderItem} />
    </div>
  )
}

export default Characters
