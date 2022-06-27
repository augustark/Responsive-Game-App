import React from 'react'
import { useQuery } from 'react-query'
import { Carousel, NewsOverview, Slides } from '../../components'
import fetchGames from '../../utils/fetchApi/gameApi'
import fetchNews from '../../utils/fetchApi/gameNewsApi'
import { heroParams, popularParams, upcomingParams } from '../../utils/fetchApi/gameParams'
import './Home.scss'

function Home() {
  const res1 = useQuery(['featured', { body: heroParams}], fetchGames, { keepPreviousData: true })
  const res2 = useQuery(['featured', { body: popularParams}], fetchGames, { keepPreviousData: true })
  const res3 = useQuery(['featured', { body: upcomingParams}], fetchGames, { keepPreviousData: true })
  const res4 = useQuery('home-news', fetchNews, { keepPreviousData: true })

  return (
    <div className='home'>
      <Carousel response={res1}/>
      <Slides bg title={'Popular'} response={res2}/>
      <Slides title={'Upcoming Games'} response={res3}/>
      <NewsOverview response={res4}/>
    </div>
  )
}

export default Home