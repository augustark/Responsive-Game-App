import React from 'react'
// import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { IoLogoYoutube } from 'react-icons/io5'
import './carousel.scss'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: 'carousel',
    dotsClass: 'pagination',
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      <div className='slide'>
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
      <div className='slide'>
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
      <div className='slide'>
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
    </Slider>
  )
}

export default Carousel