import React from 'react'
import { useQuery } from 'react-query'
import { NavLink, Outlet } from 'react-router-dom'
import { useKeenSlider } from "keen-slider/react"
import { topRatedParams, upcomingParams } from '../../utils/fetchApi/gameParams'
import fetchGames from '../../utils/fetchApi/gameApi'
import useViewport from '../../utils/custom-hooks/useViewport'
import { Loading, NewsPreview, Preview } from '../../components'
import './News.scss'

function News() {
  const { width, breakpoint } = useViewport('700px')
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
            slider.next()
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

  const { data, isFetching, isError } = useQuery(['top-rated', {body: topRatedParams}], fetchGames, { keepPreviousData: true})
  const res2 = useQuery(['top-rated', {body: upcomingParams}], fetchGames, { keepPreviousData: true})

  if (isFetching) return <Loading/>
  if (isError) return <h1>Error...</h1>

  const activeClassName = ({ isActive }) => isActive ? 'active' : ''

  return (
    <div className='news'>
      {width < breakpoint && (
        <div className='toggle-content'>
          <NavLink className={activeClassName} to='/news' end>Latest News</NavLink>
          <NavLink className={activeClassName} to='/news/upcoming-games' end>Coming Soon</NavLink>
        </div>
      )}
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
      {width < breakpoint ? <Outlet context={res2}/> : <NewsPreview/>}
      { width > breakpoint && <Preview oneCol response={res2} title={'Coming this week'}/> }
    </div>

  )
}

export default News