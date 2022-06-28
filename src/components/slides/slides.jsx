import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { Link } from 'react-router-dom'
import './slides.scss'
import { ChevLeftIcon, ChevRightIcon } from '../../assets/fluent-icons'
import Loading from '../loading/loading'
import Card from '../card/card'

function Slides({ bg, title, response, linkTo, resArr }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  
  const [refCallback, instanceRef] = useKeenSlider({
    mode: "snap",
    renderMode: 'performance',
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
      '(min-width: 700px)': {
        slides: {
          origin: 'auto',
          perView: bg ? 3 : 4,
          spacing: bg ? 15 : 12
        }
      },
      '(min-width: 800px)': {
        slides: {
          origin: 'auto',
          perView: bg ? 4 : 4,
          spacing: bg ? 15 : 12
        }
      },
      '(min-width: 1000px)': {
        slides: {
          origin: 'auto',
          perView: 5,
          spacing: 15
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

  const { data, isFetching, isError } = response
  
  if (isFetching) return <Loading/>
  if (isError) return <h1>Error</h1>

  const slideMap = data.map((item, i) => (
    <div className="keen-slider__slide" key={item.id}>
      <Card {...item}/>
    </div>
  ))

  const prev = (e) => e.stopPropagation() || instanceRef.current?.prev()
  const next = (e) => e.stopPropagation() || instanceRef.current?.next()

  return (
    <div className='slides'>
      <div className='slides-header'>
        <h1>{title || 'Popular'}</h1>
        {linkTo && <Link to={`/games/${linkTo}`}>View All</Link>}
      </div>
      <div ref={refCallback} className={`keen-slider ${bg ? 'bg' : ''}`}>
        {slideMap}
      </div>
      {loaded && instanceRef.current && (
        <div className='controls'>
          <ChevLeftIcon 
            onClick={prev} 
            className={currentSlide === 0 ? 'disabled' : ''}
          />
          <ChevRightIcon 
            onClick={next} 
            className={currentSlide === instanceRef.current.track.details.maxIdx ? 'disabled' : ''}
          />
        </div>
      )}
    </div>
  )
}

export default Slides