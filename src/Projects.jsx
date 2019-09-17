import React, { Component } from "react"
import axios from "axios"
import ProjectCard from "./ProjectCard"
import { UndrawDesigner } from "react-undraw-illustrations"

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
    }

  render() {
    const projects = this.state.projects
    let projectsList

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        )
      })
    }


    return (

      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
            <UndrawDesigner />
          </div>
          <div className="column">
            <h1 className="ui header">My Projects</h1>
            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
          </div>
        </div>
        <div className="ui stackable four column grid">
          {projectsList}
        </div>
      </div>
    )
  }
}

export default Projects