import React from 'react'
import { Carousel, NewsOverview, Overview } from '../../components'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
      <Carousel/>
      <Overview size={0.5}/>
      <Overview/>
      <NewsOverview/>
    </div>
  )
}

export default Home