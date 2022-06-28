import React from 'react'
// import './filter.scss'
import './new-filter.scss'
import { _GENRES, _PLATFORMS } from './GnP'
import { useState } from 'react'
import { useDirectoryStore } from '../../store'
import { useEffect } from 'react'
import { CheckIcon } from '../../assets/fluent-icons'

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
    }), console.log(selectFilter))
  }

  useEffect(() => {
    const selectedFilter = selectFilter
      .filter((item) => item.isSelected)
      .map((item) => item.id)

    if (title.toLowerCase() === 'platforms') {
      addPlatform(selectedFilter)
    } else if (title.toLowerCase() === 'genres') {
      addGenre(selectFilter)
    }

  }, [addPlatform, addGenre, selectFilter, title])

  return (
    <div className='wrapper'>
      <h1>Genres</h1>
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