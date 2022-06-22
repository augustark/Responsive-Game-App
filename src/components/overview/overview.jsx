import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './overview.scss'
import slideOptions from './slidesOptions'

function Overview({ size }) {
  const [sliderRef] = useKeenSlider(slideOptions(size))
  
  return (
    <div className='overview'>
      <div className='overview-header'>
        <h1>Popular</h1>
        <span>View All</span>
      </div>
      <Slides sliderRef={sliderRef}>
        {Array(6).fill('').map((i, idx) => (
          <div className={`keen-slider__slide card ${size ? 'bg' : ''}`} key={idx}>
            <img src='https://i.imgur.com/wLJbKBZ.png' alt='' />
            <div className='card-info'>
              <h3>Super Mario Odyssey {idx}</h3>
            </div>
          </div>
        ))}
      </Slides>
    </div>
  )
}

export default Overview

const Slides = ({ children, sliderRef }) => {
  return (
    <div ref={sliderRef} className="keen-slider">
      {children}
    </div>
  )
}