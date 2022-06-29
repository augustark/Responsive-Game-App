import React from 'react'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import { fetchGamesBySearch } from '../../utils/fetchApi/gameApi'
import { capitalize } from '../../utils/helper'
import { Preview } from '../../components'
import './Search.scss'


function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')
  const response = useQuery(['search', query], fetchGamesBySearch, { keepPreviousData: true })

  return (
    <div className='search'>
      <div className='search-header'>
        <span>{response?.data?.length} Results for</span>
        <h1>'{capitalize(query)}'</h1>
      </div>
      <Preview response={response} searchGrid/>
    </div>
  )
}

export default Search