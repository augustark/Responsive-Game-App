import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { Link } from 'react-router-dom'
import Loading from '../loading/loading'
import './news-overview.scss'

function NewsOverview({ response }) {
  const { data, isFetching, isError } = response
  const [sliderRef] = useKeenSlider({
    mode: "snap",
    breakpoints: {
      '(min-width: 300px)': {
        slides: {
          origin: 0.07,
          perView: 1.15,
          spacing: 15
        },
        range: {
          min: 0,
          max: 1,
          align: false
        }
      },
      '(min-width: 420px)': {
        slides: () => [
          {
            size: 0.75,
            spacing: 0.04,
            origin: 0.065
          },
          {
            size: 0.75,
            spacing: 0.04,
            origin: 0.19
          },
        ],
      },
      '(min-width: 700px)': {
        slides: {
          origin: 'auto',
          perView: 2,
          spacing: 25
        },
      },
    }
  })

  if (isFetching) return <Loading/>
  if (isError) return <h1>Error</h1>

  return (
    <div className='news-overview'>
      <div className='news-header'>
        <h1>Latest News</h1>
        <Link to='/news'>View All</Link>
      </div>
      <div ref={sliderRef} className="keen-slider">
      {data.articles.slice(0, 2).map((article, idx) => (
          <div className='keen-slider__slide' key={idx}>
            <a href={article.url} target='_blank' rel='noreferrer'>
              <img src={article.urlToImage} alt=''/>
              <h3>{article.title}</h3>
              <p>Source: {article.source.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsOverview

