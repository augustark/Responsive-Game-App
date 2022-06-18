import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './overview.scss'

function Overview({ size }) {
  const [sliderRef] = useKeenSlider({
    mode: 'snap',
    slides: () => [...Array(5).fill({
        size: size || 0.38,
        spacing: 0.04,
        origin: 0.09
      }),
      {
        size: size || 0.4,
        origin: size ? 0.4 : 0.6 ,
      },
    ]
  })
  
  return (
    <div className='overview'>
      <div className='overview-header'>
        <h1>Popular</h1>
        <span>View All</span>
      </div>
      <Slides sliderRef={sliderRef}>
        {Array(6).fill('').map((i, idx) => (
          <div className={`keen-slider__slide card ${size && 'bg'}`} key={idx}>
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