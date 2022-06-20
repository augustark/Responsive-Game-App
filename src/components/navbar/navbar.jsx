import React from 'react'
import './navbar.scss'
import { 
  DarkLogo,GamesIcon, HomeIcon, 
  LightLogo, NewsIcon, SunIcon 
} from '../../assets/fluent-icons'
import useStore from '../../store'
import Input from '../input/input'
import { NavLink, useLocation } from 'react-router-dom'

function Navbar() {
  const isDark = useStore(state => state.isDark)
  const toggleDarkMode = useStore(state => state.toggleDarkMode)
  const { pathname } = useLocation()

  let isGameDetails = /[0-9]+$/.test(pathname)
  
  const activeClassName = ({ isActive }) => isActive ? 'link active' : 'link' 

  return (
    <div className='navbar'>
      <nav className='header'>
        {
          isDark || pathname === '/' || isGameDetails
          ? <DarkLogo className='logo'/> 
          : <LightLogo className='logo'/>
        }
        <Input overlay={pathname === '/' || isGameDetails}/>
      </nav>
      <div className='links container'>
        <NavLink to='/' className={activeClassName}>
          <HomeIcon/>
          <span>Home</span>
        </NavLink>
        <NavLink to='games' className={activeClassName}>
          <GamesIcon/>
          <span>Games</span>
        </NavLink>
        <NavLink to='news' className={activeClassName}>
          <NewsIcon/>
          <span>News</span>
        </NavLink>
        <div className='link theme' onClick={toggleDarkMode}>
          <SunIcon/>
          <span>Light</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar