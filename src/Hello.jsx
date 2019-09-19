import React from "react"
import { NavLink, Link } from 'react-router-dom'

const Hello = () => {
  return (
    <div id="hello-site">
      <div id="greeting-div">
        <h1>Greetings, I'm Sverrir</h1>
        <p>I prefer to work under the hood and let other people deal with the exterior.</p>  
      </div>
      <br></br>
      <img id="img-hello" src="https://github.com/shsteindorsson/shsteindorsson.github.io/blob/master/images/8bit_shs.png?raw=true"></img>
    </div>
  )
}

export default Hello