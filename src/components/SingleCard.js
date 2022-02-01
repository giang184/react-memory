import './SingleCard.css'
import React from 'react';

export default function SingleCard({card, handleChoice}) {
  const handleClick = () => {
    handleChoice(card)
  }

  return (          
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="front" />
        <img 
          className="back" 
          src="/img/cover.png" 
          onClick={handleClick} 
          alt="back" 
        />
      </div>
    </div>
  )
}
