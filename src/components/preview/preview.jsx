import React from 'react'
<<<<<<< HEAD
import { useLocation, useOutletContext } from 'react-router-dom'
=======
import { useOutletContext, useLocation } from 'react-router-dom'
>>>>>>> 9f29bfb1dad20be79c4892e8101d0308b7ae1f76
import Card from '../card/card'
import './preview.scss'

function Preview({ title, oneCol, response, searchGrid }) {
  const { pathname } = useLocation()
  const { data, isFetching, isError } = useOutletContext() || response
  if (isError) return <h1>Error</h1>

  return (
    <div className={`preview ${oneCol || pathname.includes('upcoming') ? 'one-col' : ''}`}>
      {title && <h1>Coming this Week</h1>}
      <div className={`cards ${searchGrid ? 'search-grid' : ''}`}>
        {data?.map((item, idx) => (
          <Card key={idx} {...item} isLoading={isFetching}/>
        ))}
      </div>
    </div>
  )
}

export default Preview
