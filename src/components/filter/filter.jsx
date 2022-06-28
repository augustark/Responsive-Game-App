import React, { useState, useEffect } from 'react'
import { _GENRES, _PLATFORMS } from './GnP'
import { useDirectoryStore } from '../../store'
import { CheckIcon } from '../../assets/fluent-icons'
import './filter.scss'

function Filter({ open, mobile }) {
  return (
    <div className={`filter ${mobile ? 'mobile' : 'desktop'} ${open ? 'open' : ''}`}>
      <div className='filter-container'>
        <h1>Set Filter</h1>
        <FilterType title='Platforms' data={_PLATFORMS}/>
        <FilterType title='Genres' data={_GENRES}/>
      </div>
    </div>
  )
}

export default Filter

function FilterType({ title, data }) {
  const [selectFilter, setSelectFilter] = useState(data)
  const addPlatform = useDirectoryStore((state) => state.addPlatform)
  const addGenre = useDirectoryStore((state) => state.addGenre)

  const handleSelect = (id) => {
    setSelectFilter((prev) => prev.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isSelected: !item.isSelected
        }
      }
      return item
    }))
  }

  useEffect(() => {
    const selectedFilter = selectFilter
      .filter((item) => item.isSelected)
      .map((item) => item.id)

    if (title.toLowerCase() === 'platforms') {
      addPlatform(selectedFilter)
    } else if (title.toLowerCase() === 'genres') {
      addGenre(selectedFilter)
    }

  }, [addPlatform, addGenre, selectFilter, title])

  return (
    <div className='wrapper'>
      <h1>{title}</h1>
      <div className='wrapper__list'>
        {selectFilter.map((filterItem) => 
          <button
            key={filterItem.id}
            className={`wrapper__list-item ${filterItem.isSelected ? 'selected' : ''}`}
            onClick={() => handleSelect(filterItem.id)}
          >
            {filterItem.isSelected && <CheckIcon/>}
            {filterItem.name}
          </button>
        )}
      </div>
    </div>
  )
}