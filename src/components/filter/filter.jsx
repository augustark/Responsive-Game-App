import React from 'react'
import { FilterIcon } from '../../assets/fluent-icons'
import useClickOutside from '../../utils/custom-hooks/useClickOutside'
import './filter.scss'

function Filter() {
  const [open, setOpen, ref] = useClickOutside()

  return (
    <div ref={ref}>
      <button 
        type='button' 
        className={`filter-header ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
      >
        Filter <FilterIcon/>
      </button>
      <div className={`filter ${open ? 'open' : ''}`}>
        <h1>Set Filter</h1>
        <div className='filter-sub'>
          <h1>Platforms</h1>
          <div className='filter-sub__list'>
            <button className='filter-sub__list-item'>Nintendo</button>
            <button className='filter-sub__list-item'>PlayStation</button>
            <button className='filter-sub__list-item'>Xbox</button>
            <button className='filter-sub__list-item'>Oculus</button>
            <button className='filter-sub__list-item'>PC (Microsoft Windows)</button>
          </div>
        </div>
        <div className='filter-sub'>
          <h1>Genres</h1>
          <div className='filter-sub__list'>
            <button
              className='filter-sub__list-item'
              onClick={() => console.log('add or remove this')}
            >Adventure</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter