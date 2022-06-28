import React from 'react'
import { useQuery } from 'react-query'
import { NavLink, Outlet } from 'react-router-dom'
import { Dropdown, Filter, FilterBtn } from '../../components'
import useViewport from '../../utils/custom-hooks/useViewport'
import './GameDirectory.scss'

import fetchGames from '../../utils/fetchApi/gameApi'

function GameDirectory() {
  const { width, breakpoint } = useViewport('830px')

  // const { data, isFetching, isError, isPreviousData } = useQuery(['directory', config], fetchGames, { keepPreviousData: true })

  const activeClassName = ({ isActive }) => isActive ? 'active' : ''

  return (
    <div className='directory'>
      {width > breakpoint && <Filter/>}
      <div className='game-directory'>
        <div className='header'>
          <h1>Featured</h1>
        </div>
        <div className='options'>
          <div className='toggle-content'>
            <NavLink className={activeClassName} to='/games' end>Featured</NavLink>
            <NavLink className={activeClassName} to='/games/coming'>Coming Soon</NavLink>
            <NavLink className={activeClassName} to='/games/recent'>Recently Released</NavLink>
          </div>
          <div className='filters'>
            <Dropdown/>
            {width < breakpoint && <FilterBtn/>}
          </div>
        </div>
        {/* <Outlet context={{title: 'hello'}}/> */}
      </div>
    </div>
  )
}

export default GameDirectory