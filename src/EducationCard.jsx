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
            Right side
          </span>
          <span>
            <i className="user icon"></i>
            Nr. {education.id}
          </span>
        </div>
      </div>
    </>
  )
}

export default EducationCard