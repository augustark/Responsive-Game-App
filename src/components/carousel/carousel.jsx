import React, { useState } from 'react'
import { IoLogoYoutube } from 'react-icons/io5'
import { useKeenSlider } from 'keen-slider/react'
import { StarIcon } from '../../assets/fluent-icons'
import './carousel.scss'
import { useNavigate } from 'react-router-dom'
import useViewport from '../../utils/custom-hooks/useViewport'
import Loading from '../loading/loading'


function Carousel({ response }) {
  const { data, isFetching, isError } = response
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 6000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  if (isFetching) return <Loading/>
  if (isError) return <h1>Error occured</h1>

  return (
    <div className='carousel-wrapper'>
      <div ref={sliderRef} className='keen-slider carousel'>
        {data?.map(slide => (
          <Slide key={slide.id} {...slide}/>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
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

function Slide(props) {
  const { width, breakpoint } = useViewport('700px')
  const navigate = useNavigate()
  const { artworks, cover, first_release_date, id, name, summary, themes, total_rating, videos } = props

  const image = width < breakpoint ? cover.url : artworks[0]?.url
  const url = image.replace('t_thumb', 't_1080p')
  const rating = Math.floor(total_rating)
  const date = new Date(first_release_date * 1000).toLocaleDateString()
  const desc = summary.length > 400 ? summary.slice(0, 400) + '...' :  summary
  const theme = themes
    ?.filter((_, i) => i < 4)
    ?.map(({id, name}, idx) => {
      if (idx !== themes.length - 1) {
        return (
          <React.Fragment key={id}>
            <span>{name}</span>
            &#8226;
          </React.Fragment>
        )
      } else return <span key={id}>{name}</span>
    })

  return (
    <div className='slide keen-slider__slide'>
      <img src={url} alt=''/>
      <div className='info'>
        <h1>{name}</h1>
        <div className='ratings'>
          <p className='rating'><StarIcon/>{rating}%</p>
          <p>{date}</p>
        </div>
        <p className='description'>{desc}</p>
        <div className='genres'>
          {theme}
        </div>
        <div className='buttons'>
          <button>
            <a 
              className='yt-link'
              href={`https://www.youtube.com/watch?v=${videos[0].video_id}`} 
              target='_blank' 
              rel='noreferrer'
            >
              <IoLogoYoutube/>
              <span>Watch Trailer</span>
            </a>
          </button>
          <button onClick={() => navigate(`/games/${id}`)}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}