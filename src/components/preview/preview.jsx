import React from 'react'
import { useOutletContext } from 'react-router-dom'
import useViewport from '../../utils/custom-hooks/useViewport'
import Card from '../card/card'
import './preview.scss'


function Preview({ title, oneCol, response }) {
  const { width: mobileWidth, breakpoint: mobileBreakpoint } = useViewport('540px')
  const { width: desktopWidth, breakpoint: desktopBreakpoint } = useViewport('1000px')
  
  const dataLength = mobileWidth >= mobileBreakpoint && desktopWidth <= desktopBreakpoint ? 21 : 20

  const { data, isFetching, isError } = useOutletContext() || response
  if (isError) return <h1>Error</h1>

  return (
    <div className={`preview ${oneCol ? 'one-col' : ''}`}>
      {title && <h1>Coming this Week</h1>}
      <div className='cards'>
        {data?.slice(0, dataLength).map((item, idx) => (
          <Card key={idx} {...item} isLoading={isFetching}/>
        ))}
      </div>
    </div>
  )
}

export default Preview