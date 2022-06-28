import React, { useState } from 'react'
import { useEffect } from 'react'
import { ChevDownIcon, ChevUpIcon } from '../../assets/fluent-icons'
import { useDirectoryStore } from '../../store'
import useClickOutside from '../../utils/custom-hooks/useClickOutside'
import './dropdown.scss'

const sortData = [
  {
    id: 1,
    value: 'Rating: Low to High',
    text: 'Low to High',
    order: 'asc',
    case: 'rating'
  },
  {
    id: 2,
    value: 'Rating: High to Low',
    text: 'High to Low',
    order: 'desc',
    case: 'rating'
  },
  {
    id: 3,
    value: 'A to Z',
    order: 'asc',
    case: 'title'
  },
  {
    id: 4,
    value: 'Z to A',
    order: 'desc',
    case: 'title'
  },
  {
    id: 5,
    value: 'Most Recent',
    order: 'desc',
    case: 'release date'
  }
]

function Dropdown() {
  const [open, setOpen, ref] = useClickOutside()
  const [sortBy, setSortBy] = useState(sortData[4])
  const setSort = useDirectoryStore((state) => state.setSort) 

  useEffect(() => {
    setSort({
      option: sortBy.case,
      order: sortBy.order
    })
  }, [sortBy, setSort])

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
            className={`dropdown-menu__list-item ${item.id === sortBy.id ? 'selected' : ''}`}
            onClick={() => {
              setSortBy(item)
              setOpen(!open)
            }}
          >
            {item.value}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Dropdown