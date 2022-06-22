import React, { useState } from 'react'
import { IoLogoYoutube } from 'react-icons/io5'
import { useKeenSlider } from 'keen-slider/react'
import './new-carousel.scss'


function Carousel() {
  const dataArr = Array(3).fill('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className='carousel-wrapper'>
      <div ref={sliderRef} className='keen-slider carousel'>
        {dataArr.map((child, i) => (
          <div className='slide keen-slider__slide' key={i}>
            <img src='https://i.imgur.com/O7QA1q4.png' alt=''/>
            <div className='info'>
              <h1>Dying Light 2: Stay Human</h1>
              <div className='genres'>
                <span>Adventure</span>
                &#8226;
                <span>Surivival</span>
                &#8226;
                <span>RPG (Role Playing Game)</span>
              </div>
              <div className='buttons'>
                <button>
                  <IoLogoYoutube/>
                  <span>Watch Trailer</span>
                </button>
                <button>Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Carousel