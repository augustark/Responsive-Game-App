import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import Loading from '../loading/loading'

function NewsSlides({ response }) {
  const { data, isFetching, isError } = response
  const [sliderRef] = useKeenSlider(
    {
      mode: 'snap',
      loop: true,
      initial: 0,
      slides: {
        origin: 'center',
        perView: 1,
        spacing: 15,
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
            slider?.next()
          }, 5000)
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
  if (isError) return <h1>Error...</h1>

  return (
    <div className='news-slides'>
      <h2>Top Rated This Month</h2>
      <div ref={sliderRef} className='keen-slider'>
        {data.map((game) => {
          const cardImg = !game.artworks ? game.screenshots[0] : game.artworks[0]

          return (
            <div className="keen-slider__slide card" key={game.id}>
              <img src={cardImg.url.replace('t_thumb', 't_1080p')} alt='game artwork'/>
              <h1>{game.name}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NewsSlides