import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Preview } from '../../components'
import { capitalize } from '../../utils/helper'
import './Search.scss'

function Search() {
  const [searchParams] = useSearchParams()

  return (
    <div className='search'>
      <div className='search-header'>
        <span>8 Results for</span>
        <h1>'{capitalize(searchParams.get('q'))}'</h1>
      </div>
      <Preview/>
    </div>
  )
}

export default Search