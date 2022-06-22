import React from 'react'
import { Carousel, NewsOverview, Slides } from '../../components'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
      <Carousel/>
      <Slides bg/>
      <Slides/>
      <NewsOverview/>
    </div>
  )
}

export default Home