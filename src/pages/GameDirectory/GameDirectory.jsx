import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Dropdown, Filter } from '../../components'
import './GameDirectory.scss'

function GameDirectory() {
  const activeClassName = ({ isActive }) => isActive ? 'active' : ''

  return (
    <div className='game-directory'>
      <div className='header'>
        <h1>Featured</h1>
      </div>
      <div className='toggle-content'>
        <NavLink className={activeClassName} to='/games' end>Featured</NavLink>
        <NavLink className={activeClassName} to='/games/coming'>Coming Soon</NavLink>
        <NavLink className={activeClassName} to='/games/recent'>Recently Released</NavLink>
      </div>
      <div className='filters'>
        <Dropdown/>
        <Filter/>
      </div>
      <Outlet/>
    </div>
  )
}

export default GameDirectory