import React from "react"
import { UndrawWelcome } from 'react-undraw-illustrations'

const About = () => {
  return (
    <div className="ui container"> 
      <div className="ui stackable two column grid">
        <div className="column">
          <UndrawWelcome primaryColor='#77216F' />
        </div>
        <div className="column">
          <h1 className="ui header">About the man</h1>
          <p>
            Born in Iceland and grew up on the north-east coast in a small town called Vopnafjörður.
          </p>
          <p>
            Classically trained by a Nintendo Entertainment System. First PC was a 486 running Windows 3.11. Is an avid 
            GNU/Linux user today and cares deeply about the philosophy behind free and open source software.
          </p>
          <p>
            Followed his wife to Sweden, along with their son, during the summer of 2019. Whether or not that was a good idea remains to be seen.
          </p>
        </div>
        <div className="ui centered large image">
          <img id="about-img" src="https://github.com/shsteindorsson/react_portfolio/blob/master/src/img/classically_trained.png?raw=true" />
        </div>
      </div>
    </div>
  )
}

export default About