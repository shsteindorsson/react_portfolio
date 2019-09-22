import React, { Component } from "react"
import axios from "axios"
import WorkCard from "./WorkCard"
import EducationCard from "./EducationCard"
import { UndrawBackToSchool } from "react-undraw-illustrations"


class Cv extends Component {
  constructor() {
    super();
    this.state = {
      workExp: [],
      edu: []
    };
  }

  componentDidMount() {
    axios.get('./src/data/work_exp.json')
      .then(response => {
        this.setState({
          workExp: response.data
        })
      })

    axios.get('./src/data/education.json')
      .then(response => {
        this.setState({
          edu: response.data
        })
      })
    }

  render() {
    const workExp = this.state.workExp
    const edu = this.state.edu
    let workExpList
    let eduList      

    if (workExp.length > 0) {
      workExpList = workExp.map(work => {
        return (
          <div key={work.id}>
            <WorkCard work={work} />
          </div>
        )
      })
    }
    if (edu.length > 0) {
      eduList = edu.map(education => {
        return (
          <div key={education.id}>
            <EducationCard education={education} />
          </div>
        )
      })
    }
    return (

      <div className="ui main container" id="projects-div">
        <div className="ui stackable two column grid">
          <div className="column">
            <UndrawBackToSchool primaryColor='#E95420' />
          </div>
          <div className="column">
            <h1 className="ui header">Curriculum Vitae</h1>
            <p>
              Diverce, not-so-engaging personality which leaves a strong aftertaste of success. Enjoys taking care of problems and getting away with ridiculous things. Also, has a good sense of humor (IMHO). Enthusiastic about learning, teaching and technology.<br />
            </p>
            <p>
              Is allowed to drive a forklift.
            </p>
          </div>
        </div>
        <h2 className="ui header">Work experience</h2>
        <div className="ui stackable four column grid">
          {workExpList}
        </div>
        <h2 className="ui header">Education</h2>
        <div className="ui stackable four column grid">
          {eduList}
        </div>
      </div>
    )
  }
}

export default Cv