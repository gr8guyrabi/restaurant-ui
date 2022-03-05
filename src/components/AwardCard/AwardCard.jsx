import React from 'react'

import './AwardCard.css'

const AwardCard = ({ imgUrl, title, subtitle }) => {
  return (
    <div className="award__card">
        <img src={imgUrl} alt="award" />
        <div className="award__card-content">
            <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
            <p className="p__cormorant">{subtitle}</p>
        </div>
    </div>
  )
}

export default AwardCard