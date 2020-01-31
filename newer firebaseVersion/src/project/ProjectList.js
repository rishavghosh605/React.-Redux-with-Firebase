import React from 'react'
import ProjectSummary from './ProjectSummary'


const ProjectList = ({projects}) =>{
    return (
        <div className="project-list-section">
            {/*We are gonna cycle through the projects onject and we use the statement projects && cause if we have no projects in the projects component then we dont bother to map through that component */}
            { projects && projects.map(project => {
                return(
                    <Link to={'/project/'+project.id}>
                    <ProjectSummary project={project} key={project.id}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList;