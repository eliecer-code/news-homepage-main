import React from 'react'
import './Info.css'
const Info = ({ title, paragraph }) => {
    return (
        <div className='info-card'>
            <a href="#" className='info-card_title'>{title}</a>
            <p className="info-card_paragraph">{paragraph}</p>
        </div>
    )
}

export default Info