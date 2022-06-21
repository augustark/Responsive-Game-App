import React, { useState } from 'react'
import { ChevDownIcon, ChevUpIcon } from '../../assets/fluent-icons'
import useClickOutside from '../../utils/custom-hooks/useClickOutside'
import './dropdown.scss'

const sortData = [
  {
    id: 1,
    value: 'Rating: Low to High',
    text: 'Low to High',
    order: 'asc'
  },
  {
    id: 2,
    value: 'Rating: High to Low',
    text: 'High to Low',
    order: 'desc'
  },
  {
    id: 3,
    value: 'A to Z',
    order: 'asc'
  },
  {
    id: 4,
    value: 'Z to A',
    order: 'desc'
  },
  {
    id: 5,
    value: 'Most Recent',
    order: 'desc'
  }
]

function Dropdown() {
  const [open, setOpen, ref] = useClickOutside()
  const [sortBy, setSortBy] = useState('')

  return (
    <div ref={ref} className='dropdown'>
      <button 
        className={`dropdown-header ${open ? 'active' : ''}`} 
        onClick={() => setOpen(!open)} 
      >
        <p>Sort 
          {sortBy && (<span>: {sortBy.text || sortBy.value}</span>)}
        </p>
        {open ? <ChevUpIcon/> : <ChevDownIcon/>}
      </button>
      <div className={`dropdown-menu__list ${open ? 'open' : ''}`}>
        {sortData.map((item) => (
          <button 
            type='button' 
            key={item.id}
            className='dropdown-menu__list-item'
            onClick={() => {
              setSortBy(item)
              setOpen(!open)
            }}
          >
            {item.text || item.value}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Dropdown