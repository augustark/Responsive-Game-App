import React from 'react'
import './navbar.scss'
import { 
  DarkLogo,GamesIcon, HomeIcon, 
  LightLogo, NewsIcon, SunIcon 
} from '../../assets/fluent-icons'
import useStore from '../../store'
import Input from '../input/input'
import { useLocation } from 'react-router-dom'

function Navbar() {
  const isDark = useStore(state => state.isDark)
  const toggleDarkMode = useStore(state => state.toggleDarkMode)
  const { pathname } = useLocation()

  return (
    <div className='navbar'>
      <nav className='header'>
        {
          isDark || pathname === '/' 
          ? <DarkLogo className='logo'/> 
          : <LightLogo className='logo'/>
        }
        <Input overlay={pathname === '/'}/>
      </nav>
      <div className='links container'>
        <div className='link active'>
          <HomeIcon/>
          <span>Home</span>
        </div>
        <div className='link'>
          <GamesIcon/>
          <span>Games</span>
        </div>
        <div className='link'>
          <NewsIcon/>
          <span>News</span>
        </div>
        <div className='link theme' onClick={toggleDarkMode}>
          <SunIcon/>
          <span>Light</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar