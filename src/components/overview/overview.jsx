import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import './overview.scss'

function Overview({ size }) {
  const [sliderRef] = useKeenSlider({
    mode: 'snap',
    slides: () => [...Array(5).fill({
        size: size || 0.39,
        spacing: 0.04,
        origin: 0.09
      }),
      {
        size: size || 0.39,
        origin: size ? 0.41 : 0.6 ,
      },
    ],
    breakpoints: {
      "(min-width: 340px)": {
        slides: () => [...Array(5).fill({
            size: size || 0.39,
            spacing: 0.04,
            origin: 0.09
          }),
          {
            size: size || 0.39,
            origin: size ? 0.41 : 0.6 ,
          },
        ],
        range: {
          min: 0,
          max: size ? 5 : 4,
          align: false
        },
      },
      "(min-width: 450px)": {
        slides: () => [...Array(5).fill({
            size: 0.5 - 0.06,
            spacing: 0.04,
            origin: 0.09 - 0.02
          }),
          {
            size: 0.5 - 0.06,
            spacing: 0.04,
            origin: 0.41 + 0.08 
          },
        ],
        range: {
          min: 0,
          max: 5,
          align: false
        },
      },
      "(min-width: 525px)": {
        slides: {
          origin: 0.09,
          perView: 2.4,
          spacing: 15
        },
        range: {
          min: 0,
          max: 4,
          align: true
        },
      },
      "(min-width: 600px)": {
        slides: {
          origin: 0,
          perView: 4,
          spacing: 15
        },
        range: {
          min: 0,
          max: 5,
          align: true
        },
      },
      "(min-width: 850px)": {
        slides: {
          origin: 0,
          perView: 5,
          spacing: 15
        },
        range: {
          min: 0,
          max: 5,
          align: true
        },
      },
      "(min-width: 1400px)": {
        slides: {
          origin: 0,
          perView: 5,
          spacing: 25
        },
        range: {
          min: 0,
          max: 5,
          align: true
        },
      },
    },
  })
  
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