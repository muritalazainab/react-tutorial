import React from 'react'
import './Hero.js'

const Hero = () => {
    const clasWork = ()=>{
        console.log( " i was clicked")
      }
  return (
    <div>
      <header style={{background: 'green'}} >
         <h1>Today is bright</h1>
         <button onClick={clasWork}>Click me</button>
      </header>
    </div>
  )
  
}

export default Hero
