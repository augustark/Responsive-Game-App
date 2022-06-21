import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from 'react-icons/io5'
import './Page404.scss'

function Page404() {
  return (
    <div className='not-found'>
      <div className='not-found-header'>
        <h1>404</h1>
        <span>Page not found</span>
      </div>
      <Link to='/'><IoArrowBackOutline/> Go back</Link>
    </div>
  )
}

export default Page404