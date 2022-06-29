import React, { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { Link } from 'react-router-dom'
import './slides.scss'
import { ChevLeftIcon, ChevRightIcon } from '../../assets/fluent-icons'
import Loading from '../loading/loading'
import Card from '../card/card'
import slidesBreakpoints from './slidesBreakpoints'

function Slides({ bg, title, response, linkTo }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const { data, isFetching, isError } = response
  
  const [refCallback, instanceRef] = useKeenSlider({
    mode: "snap",
    renderMode: 'performance',
    breakpoints: slidesBreakpoints(bg),
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
   created() {
      setLoaded(true)
    },
  })

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