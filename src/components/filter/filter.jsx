import React from 'react'
// import './filter.scss'
import './new-filter.scss'

function Filter({ open, mobile }) {
  return (
    <div className={`filter ${mobile ? 'mobile' : 'desktop'} ${open ? 'open' : ''}`}>
      <h1>Set Filter</h1>
      <div className='wrapper'>
        <h1>Platforms</h1>
        <div className='wrapper__list'>
          <button className='wrapper__list-item'>Nintendo</button>
          <button className='wrapper__list-item'>PlayStation</button>
          <button className='wrapper__list-item'>Xbox</button>
          <button className='wrapper__list-item'>Oculus</button>
          <button className='wrapper__list-item'>PC (Microsoft Windows)</button>
        </div>
      </div>
      <div className='wrapper'>
        <h1>Genres</h1>
        <div className='wrapper__list'>
          <button
            className='wrapper__list-item'
            onClick={() => console.log('add or remove this')}
          >Adventure</button>
        </div>
      </div>
    </div>
  )
}

export default Filter