import React from 'react'
import Card from '../card/card'
import './preview.scss'


function Preview({ title, oneCol }) {
  //max-width: 539px => 10 items
  //min-width: 540px => 15 items
  //min-width: 900px => 20 items

  return (
    <div className={`preview ${oneCol ? 'one-col' : ''}`}>
      {title && <h1>Coming this Week</h1>}
      <div className='cards'>
        {Array(15).fill('').map((_, idx) => (
          <Card key={idx}/>
        ))}
      </div>
    </div>
  )
}

export default Preview

{/* <div key={idx} className='card'>
  <img src='https://i.imgur.com/CnD6wKL.png' alt=''/>
  <h3>Souldiers</h3>
  <span>June 04</span>
</div> */}