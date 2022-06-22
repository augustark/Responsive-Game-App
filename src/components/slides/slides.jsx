import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { Link } from 'react-router-dom'
import './slides.scss'
import { ChevLeftIcon, ChevRightIcon } from '../../assets/fluent-icons'

function Slides({ bg }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const slideMap = Array(10).fill('').map((_, i) => (
    <div className="keen-slider__slide" key={i}>
      <Card/>
    </div>
  ))

  const [refCallback, instanceRef] = useKeenSlider({
    mode: "snap",
    breakpoints: {
      '(min-width: 300px)': {
        slides: {
          origin: 0.065,
          perView: bg ? 2.34 : 3.5,
          spacing: bg ? 15 : 10
        },
        range: {
          min: 0,
          max: bg ? 8 : 7,
          align: false
        }
      },
      '(min-width: 520px)': {
        slides: {
          origin: bg ? 0.07 : 0.07,
          perView: bg ? 3.5 : 4.67,
          spacing: bg ? 15 : 12
        },
        range: {
          min: 0,
          max: bg ? 7 : 6,
          align: false
        }
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  const prev = (e) => e.stopPropagation() || instanceRef.current?.prev()
  const next = (e) => e.stopPropagation() || instanceRef.current?.next()

  return (
    <div className='slides'>
      <div className='slides-header'>
        <h1>Popular</h1>
        <Link to='/'>View All</Link>
      </div>
      <div ref={refCallback} className={`keen-slider ${bg ? 'bg' : ''}`}>
        {slideMap}
      </div>
      {loaded && instanceRef.current && (
        <>
          <ChevLeftIcon 
            onClick={prev} 
            className={currentSlide === 0 ? 'disabled' : ''}
          />
          <ChevRightIcon 
            onClick={next} 
            className={currentSlide === slideMap.length - 2 ? 'disabled' : ''}
          />
        </>
      )}
    </div>
  )
}

export default Slides

const Card = () => (
  <>
    <img src='https://i.imgur.com/wLJbKBZ.png' alt='' />
    <div className='card-info'>
      <h3>Super Mario Odyssey</h3>
    </div>
  </>
)