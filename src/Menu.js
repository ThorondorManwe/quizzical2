import React from 'react'

function Menu(props) {
  return (
    <div className="menu">
      <h1 className='page-title'>Quizzical</h1>
      <span className='page-description'>A SPA made with React</span>
      <button className='start-button' onClick={() => props.start()}>Start Quizzical</button>
    </div>
  )
}

export default Menu;