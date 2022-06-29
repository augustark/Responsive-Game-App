import React from 'react'
import { useNavigate } from 'react-router-dom'
import Placeholder from '../../assets/fluent-icons'
import './card.scss'

function Card(props) {
  const { cover, name, first_release_date, id } = props
  const navigate = useNavigate()
  let options = {
    month: 'short',
    day: 'numeric'
  }

  return (
    <div className='card' onClick={() => navigate(`/games/${id}`)}>
      <img src={cover?.url?.replace('t_thumb', 't_cover_big') || Placeholder} alt=''/>
      <h3>{name}</h3>
      <span>
        {new Date(first_release_date * 1000).toLocaleDateString(undefined, options)}
      </span>
    </div>
  )
}

export default Card