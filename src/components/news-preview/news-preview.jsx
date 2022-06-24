import './news-preview.scss'

import React from 'react'

function NewsPreview() {
  return (
    <div className='news-preview'>
      <h1>Latest News</h1>
      <div className='news-cards'>
        {Array(8).fill('').map((_, idx) => (
          <div key={idx} className='news-card'>
            <img src='https://i.imgur.com/PU9dYV4.png' alt=''/>
            <div className='info'>
              <span>14d ago</span>
              <h2>Simon Pegg and Minnie Driver to Star in...</h2>
              <p>Magnam tenetur rerum sit. Unde unde repellat optio ut. Eligendi perferendis laborum earum. Voluptatibus quisquam et ducimus et quisquam pariatur tempora dolorum.</p>
              <span>Source: Hollywood Reporter</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewsPreview