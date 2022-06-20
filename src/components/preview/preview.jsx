import './preview.scss'

import React from 'react'

function Preview() {
  return (
    <div className='preview'>
      <h1>Coming this Week</h1>
      <div className='cards'>
        {Array(8).fill('').map((_, idx) => (
          <div key={idx} className='card'>
            <img src='https://i.imgur.com/CnD6wKL.png' alt=''/>
            <h3>Souldiers</h3>
            <span>June 04</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Preview