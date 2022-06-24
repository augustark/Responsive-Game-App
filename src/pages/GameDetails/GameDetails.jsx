import React from 'react'
import { StarIcon } from '../../assets/fluent-icons'
import {Slides } from '../../components'
import useViewport from '../../utils/custom-hooks/useViewport'
import './GameDetails.scss'

function GameDetails() {
  const { width, breakpoint } = useViewport('700px')
  return (
    <div className='game-details'>
      <div className='image-container'>
        <img className='backdrop' src='https://i.imgur.com/jvqiYpa.png' alt=''/>
      </div>
      <div className='info'>
        { width < breakpoint ? <MobileLayout/> : <DesktopLayout/> }
      </div>
      <Slides bg title={'Similar Games'}/>
    </div>
  )
}

export default GameDetails

const DesktopLayout = () => (
  <>
    <div className='info-wrapper sidebar'>
      <img src='https://i.imgur.com/7HGPYY4.png' alt='game poster'/>
      <div className='genres'>
        <span>Adventure</span>
        &#8226;
        <span>Surivival</span>
        &#8226;
        <span>RPG (Role Playing Game)</span>
      </div>
      <p className='platforms'>Platforms: <span>PC, Xbox, PlayStation</span></p>
      <div className='buttons'>
        <div className='rating'>
          <span><StarIcon/>76%</span>
          Overall Rating
        </div>
        <div className='date'>
          <span>2022</span>
          Feb 04
        </div>
      </div>
      <div className='external'>
        <h2>External Links</h2>
        <div className='links'>
          <span><a>Official Website</a></span>
          <span><a>Epic Games</a></span>
          <span><a>Steam</a></span>
          <span><a>Wikipedia</a></span>
          <span><a>Twitch</a></span>
          <span><a>Wikia</a></span>
          <span><a>Twitter</a></span>
          <span><a>Facebook</a></span>
        </div>
      </div>
    </div>
    <div className='info-wrapper'>
      <h1>Dying Light 2: Stay Human</h1>
      <div className='summary'>
        <p>Nulla neque, tortor suscipit id aliquet integer lacinia quisque. Donec pretium condimentum sed dictum in quisque. Lacus sit posuere tempor, habitasse aliquam sed diam suspendisse. Justo, commodo sem viverra a, sagittis. Condimentum sodales senectus eu sagittis. Ut posuere risus tristique in lobortis ac libero. Arcu sed at risus, lacinia bibendum amet elementum posuere senectus.</p>
        <p>Aliquet in ut ultrices penatibus sit aliquet nunc. Justo nisl, mattis iaculis dictum. Urna, sed fusce congue nulla. Nisi, mattis elementum, nulla vitae dictumst duis sem gravida porta. Ultricies mollis viverra nisi.</p>
      </div>
      <div className='gallery'>
        <img src='https://i.imgur.com/PU9dYV4.png' alt=''/>
        <img src='https://i.imgur.com/keZRdxy.png' alt=''/>
        <img src='https://i.imgur.com/8P1M7La.png' alt=''/>
      </div>
    </div>
  </>
)

const MobileLayout = () => (
  <>
    <div className='info'>
      <img src='https://i.imgur.com/7HGPYY4.png' alt='game poster'/>
      <h1>Dying Light 2: Stay Human</h1>
      <div className='genres'>
        <span>Adventure</span>
        &#8226;
        <span>Surivival</span>
        &#8226;
        <span>RPG (Role Playing Game)</span>
      </div>
      <div className='buttons'>
        <div className='rating'>
          <span><StarIcon/>76%</span>
          Overall Rating
        </div>
        <div className='date'>
          <span>2022</span>
          Feb 04
        </div>
      </div>
      <p className='platforms'>Platforms: <span>PC, Xbox, PlayStation</span></p>
      <div className='summary'>
        <p>Nulla neque, tortor suscipit id aliquet integer lacinia quisque. Donec pretium condimentum sed dictum in quisque. Lacus sit posuere tempor, habitasse aliquam sed diam suspendisse. Justo, commodo sem viverra a, sagittis. Condimentum sodales senectus eu sagittis. Ut posuere risus tristique in lobortis ac libero. Arcu sed at risus, lacinia bibendum amet elementum posuere senectus.</p>
        <p>Aliquet in ut ultrices penatibus sit aliquet nunc. Justo nisl, mattis iaculis dictum. Urna, sed fusce congue nulla. Nisi, mattis elementum, nulla vitae dictumst duis sem gravida porta. Ultricies mollis viverra nisi.</p>
      </div>
      <div className='gallery'>
        <img src='https://i.imgur.com/PU9dYV4.png' alt=''/>
        <img src='https://i.imgur.com/keZRdxy.png' alt=''/>
        <img src='https://i.imgur.com/8P1M7La.png' alt=''/>
      </div>
      <div className='external'>
        <h2>External Links</h2>
        <div className='links'>
          <span><a>Official Website</a></span>
          <span><a>Epic Games</a></span>
          <span><a>Steam</a></span>
          <span><a>Wikipedia</a></span>
          <span><a>Twitch</a></span>
          <span><a>Wikia</a></span>
          <span><a>Twitter</a></span>
          <span><a>Facebook</a></span>
        </div>
      </div>
    </div>
  </>
)