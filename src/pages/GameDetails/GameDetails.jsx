import React from 'react'
import { StarIcon } from '../../assets/fluent-icons'
import { Overview } from '../../components'
import './GameDetails.scss'

function GameDetails() {
  return (
    <div className='game-details'>
      <div className='image-container'>
        <img className='backdrop' src='https://i.imgur.com/jvqiYpa.png' alt=''/>
      </div>
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
      <Overview/>
    </div>
  )
}

export default GameDetails