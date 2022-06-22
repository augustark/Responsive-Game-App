import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import { Link } from 'react-router-dom'
import './news-overview.scss'


function NewsOverview() {
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

  return (
    <div className='news-overview'>
      <div className='news-header'>
        <h1>Latest News</h1>
        <Link to='/news'>View All</Link>
      </div>
      <div ref={sliderRef} className="keen-slider">
      {Array(2).fill('').map((child, idx) => (
          <div className='keen-slider__slide' key={idx}>
            <img src='https://i.imgur.com/YetHT0m.png' alt=''/>
            <h3>‘Avatar: The Way of Water’ Teaser Trailer Nabs Huge 148.6M Views on First Day</h3>
            <p>Source: Hollywood Reporter</p>
          </div>
        ))}
      </div>
    </div>
  )
  // return (
  //   <div className='news-overview'>
  //     <div className='news-header'>
  //       <h1>Latest News</h1>
  //       <span>View All</span>
  //     </div>
  //     <div ref={sliderRef} className='keen-slider'>
  //       {Array(5).fill('').map((child, idx) => (
  //         <div className='keen-slider__slide news-card bg' key={idx}>
  //           <img src='https://i.imgur.com/YetHT0m.png' alt=''/>
  //           <h3>‘Avatar: The Way of Water’ Teaser Trailer Nabs Huge 148.6M Views on First Day</h3>
  //           <p>Source: Hollywood Reporter</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // )
}

export default NewsOverview

