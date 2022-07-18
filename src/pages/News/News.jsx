import React from 'react'
import { useQuery } from 'react-query'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

import { topRatedParams, upcomingParams } from '../../utils/fetchApi/gameParams'
import fetchGames from '../../utils/fetchApi/gameApi'
import useViewport from '../../utils/custom-hooks/useViewport'
import { NewsPreview, NewsSlides, Preview } from '../../components'
import './News.scss'
import { useEffect } from 'react'

function News() {
  const { width, breakpoint } = useViewport('700px')

  const res1 = useQuery(['topRatedGames', {body: topRatedParams}], fetchGames, { keepPreviousData: true})
  const res2 = useQuery(['upcoming', {body: upcomingParams}], fetchGames, { keepPreviousData: true})

  const navigate = useNavigate()

  useEffect(() => {
    if (width > breakpoint) {
      navigate('/news', { replace: true })
    }
  }, [width, breakpoint, navigate])

  const activeClassName = ({ isActive }) => isActive ? 'active' : ''

  return (
    <div className='news'>
      {width < breakpoint && (
        <div className='toggle-content'>
          <NavLink className={activeClassName} to='/news' end>Latest News</NavLink>
          <NavLink className={activeClassName} to='/news/upcoming-games' end>Coming Soon</NavLink>
        </div>
      )}
      <NewsSlides response={res1}/>
      {width < breakpoint ? <Outlet context={res2}/> : <NewsPreview/>}
      { width > breakpoint && <Preview oneCol response={res2} title={'Coming this week'}/> }
    </div>

  )
}

export default News