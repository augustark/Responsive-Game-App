import React, { useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import { IoArrowForwardOutline } from 'react-icons/io5'
import "keen-slider/keen-slider.min.css"
import './News.scss'
import { NavLink, Outlet } from 'react-router-dom'

function News() {
  const [lastSlide, setLastSlide] = useState(0)

  const [sliderRef] = useKeenSlider({
    mode: 'snap',
    initial: 0,
    slides: {
      origin: 'center',
      perView: 1,
      spacing: 15,
    },
    slideChanged({ track, slides }) {
      setLastSlide({
        current: track.details.rel,
        slides: slides.length
      })
    }
  })

  const activeClassName = ({ isActive }) => isActive ? 'active' : ''

  return (
    <div className='news'>
      <div className='toggle-content'>
        <NavLink className={activeClassName} to='/news' end>Latest News</NavLink>
        <NavLink className={activeClassName} to='/news/upcoming-games' end>Coming Soon</NavLink>
      </div>
      <div className='slides-header'>
        <h2>Top Rated This Month</h2>
        <IoArrowForwardOutline/> 
      </div>
      <div ref={sliderRef} className='keen-slider'>
        <div className="keen-slider__slide card">
          <img src='https://images.igdb.com/igdb/image/upload/t_original/ar9qp.jpg' alt='game artwork'/>
          <h1>Card Shark</h1>
        </div>
        <div className="keen-slider__slide card">
          <img src='https://images.igdb.com/igdb/image/upload/t_original/ar9qp.jpg' alt='game artwork'/>
          <h1>Card Shark</h1>
        </div>
        <div className="keen-slider__slide card">
          <img src='https://images.igdb.com/igdb/image/upload/t_original/ar9qp.jpg' alt='game artwork'/>
          <h1>Card Shark</h1>
        </div>
        <div className="keen-slider__slide card">
          <img src='https://images.igdb.com/igdb/image/upload/t_original/ar9qp.jpg' alt='game artwork'/>
          <h1>Card Shark</h1>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default News