import React from 'react'
import { useOutletContext } from 'react-router-dom'
// import useViewport from '../../utils/custom-hooks/useViewport'
import Card from '../card/card'
import Loading from '../loading/loading'
import './preview.scss'


function Preview({ title, oneCol }) {
  // const { width: mobileWidth, breakpoint: mobileBreakpoint } = useViewport('539px')
  // const { width: tabletWidth, breakpoint: tabletBreakpoint } = useViewport('539px')
  // const { width: desktopWidth, breakpoint: desktopBreakpoint } = useViewport('539px')

  //max-width: 539px => 10 items
  //min-width: 540px => 15 items
  //min-width: 900px => 20 items

  const { data, isFetching, isError } = useOutletContext()

  if (isFetching) return <Loading/>
  if (isError) return <h1>Error</h1>

  return (
    <div className={`preview ${oneCol ? 'one-col' : ''}`}>
      {title && <h1>Coming this Week</h1>}
      <div className='cards'>
        {data.map((item, idx) => (
          <Card key={idx} {...item}/>
        ))}
      </div>
    </div>
  )
}

export default Preview