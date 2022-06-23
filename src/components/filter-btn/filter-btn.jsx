import React from 'react'
import { FilterIcon } from '../../assets/fluent-icons'
import useClickOutside from '../../utils/custom-hooks/useClickOutside'
import Filter from '../filter/filter'
import './filter-btn.scss'

function FilterBtn() {
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
      <Filter mobile open={open}/>
    </div>
  )
}

export default FilterBtn