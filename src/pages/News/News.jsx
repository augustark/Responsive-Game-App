import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import { NavLink, Outlet } from 'react-router-dom'
import useViewport from '../../utils/custom-hooks/useViewport'
import { NewsPreview, Preview } from '../../components'
import './News.scss'

function News() {
  const { width, breakpoint } = useViewport('700px')

  const [sliderRef] = useKeenSlider({
    mode: 'snap',
    initial: 0,
    slides: {
      origin: 'center',
      perView: 1,
      spacing: 15,
    },
  })
  const activeClassName = ({ isActive }) => isActive ? 'active' : ''

  return (
    <div className='news'>
      {width < breakpoint && (
        <div className='toggle-content'>
          <NavLink className={activeClassName} to='/news' end>Latest News</NavLink>
          <NavLink className={activeClassName} to='/news/upcoming-games' end>Coming Soon</NavLink>
        </div>
      )}
      <div className='news-slides'>
        <h2>Top Rated This Month</h2>
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
      </div>
      {width < breakpoint ? <Outlet/> : <NewsPreview/>}
      { width > breakpoint && <Preview oneCol title={'Coming this week'}/> }
    </div>

  )
}

export default News