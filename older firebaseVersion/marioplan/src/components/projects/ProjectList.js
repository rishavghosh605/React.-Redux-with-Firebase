import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom' //Used to basically rerote tags to different pages or components
//Key should be given to the parent tag of an iterating code
const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { projects && projects.map(project => {
        return (
          <Link to={`/project/${project.id}`} key={project.id}>
          <ProjectSummary project={project} />
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectList
