import React from 'react'
import './Card.css'

const Card = ({ image, number, title, paragraph }) => {
  return (
    <div className='container-content_card'>
      <img src={image} className='card_image' alt="" />
      <div className="container-card_body">
        <span className='number_card'>{number}</span>
        <a href='#' className='title_card'>{title}</a>
        <p className="paragraph_card">
          {paragraph}
        </p>
      </div>
    </div>
  )
}

export default Card