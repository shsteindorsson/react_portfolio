import React from "react"

const EducationCard = (props) => {
  let education = props.education
  return(
    <>
      <div className="ui card" id="card-div">
        <div className="image">
          <img src={education.image} />
        </div>
        <div className="content">
          <h3 className="header">{education.institution}</h3>
          <div className="description">{education.subject}</div>
        </div>
        <div className="extra content">
          <span className="right floated">
            {education.time}
            <i className="university icon"></i>
          </span>
          <span>
            <a href={education.link} target="_blank"><i className="linkify icon"></i></a>
          </span>
        </div>
      </div>
    </>
  )
}

export default EducationCard