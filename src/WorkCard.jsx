import React from "react"

const WorkCard = (props) => {
  let work = props.work
  return(
    <>
      <div className="ui card" id="card-div">
        <div className="image">
          <img src={work.image} />
        </div>
        <div className="content">
          <h3 className="header">{work.company}</h3>
          <div className="description">{work.description}</div>
        </div>
        <div className="extra content">
          <span className="right floated">
            {work.time}
          </span>
          <span>
            <a href={work.link} target="_blank"><i className="linkify icon"></i></a>
          </span>
        </div>
      </div>
    </>
  )
}

export default WorkCard