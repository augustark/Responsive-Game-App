import React from 'react'
import './navbar.scss'
import { 
  DarkLogo,GamesIcon, HomeIcon, 
  LightLogo, MoonIcon, NewsIcon, SunIcon 
} from '../../assets/fluent-icons'
import useStore from '../../store'
import Input from '../input/input'
import { NavLink, useLocation } from 'react-router-dom'
import useViewport from '../../utils/custom-hooks/useViewport'

function Navbar() {
  const isDark = useStore(state => state.isDark)
  const toggleDarkMode = useStore(state => state.toggleDarkMode)
  const { pathname } = useLocation()

  let isGameDetails = /[0-9]+$/.test(pathname)
  const { width, breakpoint } = useViewport('700px')
  
  const activeClassName = ({ isActive }) => isActive ? 'link active' : 'link' 

  return (
    <nav className={`navbar ${pathname === '/' || isGameDetails ? 'overlay' : ''}`}>
      <nav className='header'>
        {
          isDark || pathname === '/' || isGameDetails
          ? <DarkLogo className='logo'/> 
          : <LightLogo className='logo'/>
        }
        {width > breakpoint && (
          <div className='header-links'>
            <NavLink to='/' className={activeClassName}>Home</NavLink>
            <NavLink to='games' className={activeClassName}>Games</NavLink>
            <NavLink to='news' className={activeClassName}>News</NavLink>
          </div>
        )}
        <Input overlay={pathname === '/' || isGameDetails}/>
        {width > breakpoint && 
          (<div className='header-theme' onClick={toggleDarkMode}>
              Night Mode: <span>{isDark ? 'ON' : 'OFF'}</span>
          </div>
        )}
      </nav>
      {width < breakpoint && (
        <div className='links mobile'>
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
            {isDark ? <MoonIcon/> : <SunIcon/>}
            <span>{isDark ? 'Dark' : 'Light'}</span>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar