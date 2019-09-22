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
            <h1 className="ui header">My Curriculum vitae</h1>
            <p>I bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
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