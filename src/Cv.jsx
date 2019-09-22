import React, { Component } from "react"
import axios from "axios"
import WorkCard from "./WorkCard"


class Cv extends Component {
  constructor() {
    super();
    this.state = {
      cv: []
    };
  }

  componentDidMount() {
    axios.get('./src/data/work_exp.json')
      .then(response => {
        this.setState({
          cv: response.data
        })
      })
    }

  render() {
    const cv = this.state.cv
    let cvList

    if (cv.length > 0) {
      cvList = cv.map(work => {
        return (
          <div key={work.id}>
            <WorkCard work={work} />
          </div>
        )
      })
    }

    return (

      <div className="ui main container" id="projects-div">
        <div className="ui stackable two column grid">
          <div className="column">
            
          </div>
          <div className="column">
            <h1 className="ui header">My Curriculum vitae</h1>
            <p>I bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
          </div>
        </div>
        <h2 className="ui header">Work experience</h2>
        <div className="ui stackable four column grid">
          {cvList}
        </div>
      </div>
    )
  }
}

export default Cv