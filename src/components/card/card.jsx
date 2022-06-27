import React from 'react'
import { useNavigate } from 'react-router-dom'
import './card.scss'

function Card(props) {
  const { cover, name, first_release_date, id } = props
  const navigate = useNavigate()
  let options = {
    // weekday: 'short',
    // year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  return (
    <div className='card' onClick={() => navigate(`/games/${id}`)}>
      <img src={cover.url.replace('t_thumb', 't_cover_big')} alt=''/>
      <h3>{name}</h3>
      <span>{new Date(first_release_date * 1000).toLocaleDateString(undefined, options)}</span>
    </div>
  )
}

export default Card

{/* <div key={idx} className='card'>
  <img src='https://i.imgur.com/CnD6wKL.png' alt=''/>
  <h3>Souldiers</h3>
  <span>June 04</span>
</div> */}