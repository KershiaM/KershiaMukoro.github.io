import React from 'react'
import videoBg from '/src/assets/VideoBg.mp4'
import './main.module.css';

function heroBg () {
  return (
    <div className='heroBg'>
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="container">
            <h1>Welcome</h1>
            <h2>To my site.</h2>
        </div>
    </div>
  )
}

export default heroBg