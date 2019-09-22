import React from "react"
import { UndrawMaintenance } from 'react-undraw-illustrations'

const About = () => {
  return (
    <div className="ui container"> 
      <div className="ui stackable two column grid">
        <div className="column">
          <UndrawMaintenance primaryColor='#77216F' />
        </div>
        <div className="column">
          <h1 className="ui header">About Me</h1>
          <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
        </div>
      </div>
    </div>
  )
}

export default About