import React from 'react'
import './GameDecider.css';

export const GameDecider = ({onGameClick}) => {
  return (
    <div className="GameDecider-container">
      <div className="GameDecider-game" onClick={() => onGameClick('numbers')} style={{background: 'red'}}>
        Numbers
      </div>
      <div className="GameDecider-game" onClick={() => onGameClick('letters')} style={{background: 'blue'}}>
        Letters (WIP)
      </div>
    </div>
  )
}
