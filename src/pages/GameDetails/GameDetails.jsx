import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { StarIcon } from '../../assets/fluent-icons'
import {ExternalLinks, Loading, Slides } from '../../components'
import useViewport from '../../utils/custom-hooks/useViewport'
import { findGame } from '../../utils/fetchApi/gameParams'
import fetchGames from '../../utils/fetchApi/gameApi'
import './GameDetails.scss'

function GameDetails() {
  const { width, breakpoint } = useViewport('700px')
  const { gameid } = useParams() 
  const config = {
    body: findGame(gameid),
    request: 1
  }

  const { data, isFetching, isError } = useQuery(['game', config], fetchGames, { keepPreviousData: true })

  if (isFetching) return <Loading/>
  if (isError) return <div>Error</div>

  const backdrop = !data[0].artworks ? data[0].screenshots[0] : data[0].artworks[0]

  return (
    <div className='game-details'>
      <div className='image-container'>
        <img 
          className='backdrop skeleton' 
          src={backdrop.url.replace('t_thumb', 't_1080p')} 
          alt=''
        />
      </div>
      <div className='info'>
        { width < breakpoint ? 
          <MobileLayout {...data[0]}/> : 
          <DesktopLayout {...data[0]}/> 
        }
      </div>
      <Slides 
        bg 
        title={'Similar Games'} 
        response={{
          data: data[0].similar_games, 
          isFetching: isFetching, 
          isError: isError
        }}
      />
    </div>
  )
}

export default GameDetails

const DesktopLayout = (props) => {
  const {
    cover,
    genres, 
    platforms,
    first_release_date,
    total_rating,
    websites,
    name,
    summary,
    screenshots,
    storyline
  } = props

  const url = cover.url.replace('t_thumb', 't_cover_big')
  const rating = Math.floor(total_rating)

  const genre = genres
    .filter((_, i) => i < 4)
    .map(({id, name}, idx) => {
      if (idx !== genres.length - 1) {
        return (
          <React.Fragment key={id}>
            <span>{name}</span>
            &#8226;
          </React.Fragment>
        )
      } else return <span key={id}>{name}</span>
    })

  return (
    <>
      <div className='info-wrapper sidebar'>
        <img src={url} alt='game poster'/>
        <div className='genres'>{genre}</div>
        <p className='platforms'>Platforms: <span>{platforms.map(item => item.name).join(', ')}</span></p>
        <div className='buttons'>
          <div className='rating'>
            {!total_rating ? 'No Rating' : (<><span><StarIcon/>{rating}%</span>Overall Rating</>)}
          </div>
          <div className='date'>
            <span>{new Date(first_release_date * 1000).getFullYear()}</span>
            {new Date(first_release_date * 1000).toLocaleDateString(undefined, { month: 'short', day: 'numeric'})}
          </div>
        </div>
        <ExternalLinks websites={websites}/>
      </div>
      <div className='info-wrapper'>
        <h1>{name}</h1>
        <div className='summary'>
          <p>{summary}</p>
          <p>{storyline}</p>
        </div>
        <div className='gallery'>
          {screenshots.map(shot => 
            <img 
              key={shot.image_id} 
              src={shot.url.replace('t_thumb', 't_screenshot_huge')} 
              alt={shot.checksum}
              className='skeleton'
            />
          )}
        </div>
      </div>
    </>
  )
}

const MobileLayout = (props) => {
  const {
    cover,
    genres, 
    platforms,
    first_release_date,
    total_rating,
    websites,
    name,
    summary,
    screenshots,
    storyline
  } = props

  const url = cover.url.replace('t_thumb', 't_cover_big')
  const rating = Math.floor(total_rating)

  const genre = genres
    .filter((_, i) => i < 4)
    .map(({id, name}, idx) => {
      if (idx !== genres.length - 1) {
        return (
          <React.Fragment key={id}>
            <span>{name}</span>
            &#8226;
          </React.Fragment>
        )
      } else return <span key={id}>{name}</span>
    })

  return (<>
      <div className='info'>
        <img src={url} alt='game poster'/>
        <h1>{name}</h1>
        <div className='genres'>
          {genre}
        </div>
        <div className='buttons'>
          <div className='rating'>
            {!total_rating ? 'No Rating' : (<><span><StarIcon/>{rating}%</span>Overall Rating</>)}
          </div>
          <div className='date'>
            <span>{new Date(first_release_date * 1000).getFullYear()}</span>
            {new Date(first_release_date * 1000).toLocaleDateString(undefined, { month: 'short', day: 'numeric'})}
          </div>
        </div>
        <p className='platforms'>Platforms: <span>{platforms.map(item => item.name).join(', ')}</span></p>
        <div className='summary'>
          <p>{summary}</p>
          <p>{storyline}</p>
        </div>
        <div className='gallery'>
          {screenshots.map(shot => 
            <img 
              key={shot.image_id} 
              src={shot.url.replace('t_thumb', 't_cover_big')} 
              alt={shot.checksum}
            />
          )}
        </div>
        <ExternalLinks websites={websites}/>
      </div>
    </>
  )
}