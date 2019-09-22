import React from "react"

const ProjectCard = (props) => {
  let project = props.project;
  return (
    <>
      <div className="ui card" id="card-div">
        <div className="image">
          <img src={project.image} />
        </div>
        <div className="content">
          <h3 className="ui header">{project.name}</h3>

          <div className="description">
            {project.description}
            <br />
            <a href={project.link}>
              <i className="github alternate icon"></i>
              Visit Github repo
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard