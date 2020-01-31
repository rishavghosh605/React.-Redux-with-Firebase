//When data comes via props we can simply use functional components
import React from 'react'

const ProjectSummary = ({project}) =>{
    return(
        <div className="card z-depth-0 project-summary">
                <div className="car card-content grey-text text-darken-3">
    <span className="card-title">{project.title}</span>
                    <p>Posted by Rishav</p>
                    <p className = "grey-txt">3rd September, 2am</p>
                </div>
            </div>
    )
}

export default ProjectSummary;