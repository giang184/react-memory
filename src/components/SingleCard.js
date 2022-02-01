import './SingleCard.css'
import React from 'react';

export default function SingleCard({card}) {
  return (          
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="front" />
        <img className="back" src="/img/cover.png" alt="back" />
      </div>
    </div>
  )
}