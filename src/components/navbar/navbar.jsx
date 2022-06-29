import React from 'react'
import './navbar.scss'
import { 
  DarkLogo,GamesIcon, HomeIcon, 
  LightLogo, MoonIcon, NewsIcon, SunIcon 
} from '../../assets/fluent-icons'
import { useDarkModeStore } from '../../store'
import Input from '../input/input'
import { NavLink, useLocation } from 'react-router-dom'
import useViewport from '../../utils/custom-hooks/useViewport'
import { useEffect } from 'react'

function Navbar() {
  const isDark = useDarkModeStore(state => state.isDark)
  const toggleDarkMode = useDarkModeStore(state => state.toggleDarkMode)
  const isOverlay = useDarkModeStore(state => state.isOverlay)
  const toggleOverlay = useDarkModeStore(state => state.toggleOverlay)
  const { width, breakpoint } = useViewport('700px')
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname === '/' || /[0-9]+$/.test(pathname)) {
      toggleOverlay(true)
    } else {
      toggleOverlay(false)
    }
  }, [pathname, toggleOverlay])
  
  const activeClassName = ({ isActive }) => isActive ? 'link active' : 'link' 

  return (
    <nav className={`navbar ${isOverlay ? 'overlay' : ''}`}>
      <nav className='header'>
        {
          isDark || isOverlay
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
        <Input overlay={isOverlay}/>
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