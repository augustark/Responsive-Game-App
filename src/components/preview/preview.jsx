import React from 'react'
import { useLocation, useOutletContext } from 'react-router-dom'
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