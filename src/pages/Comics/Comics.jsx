import React from 'react'
import DataFetcher from '../../utils/callApi'
import Card from '../../components/Card/Card'
import Title from '../../components/Title/Title'

const Comics = () => {
  const apiEndpoint = 'https://gateway.marvel.com/v1/public/comics'

  const renderItem = (comic) => (
    <Card
      entityType='comics'
      key={comic.id}
      title={comic.title}
      id={comic.id}
      path={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
    />
  )

  return (
    <div className='principal'>
      <Title text={'Marvel Comics'} />
      <DataFetcher apiEndpoint={apiEndpoint} renderItem={renderItem} />
    </div>
  )
}

export default Comics
