//We connect this component to firebase And the state
import React from 'react'
//To connect or redux state we use connect and fireStore
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'
const ProjectDetails = (props) => {
  const { project } = props; //We take the project property from props
  if(project){
    return(
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - { project.title }</span>
            <p>{  project.content }</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by { project.authorFirstName } { project.authorLastName }</div>
          <div>{moment(project.createdAt.toDate().toString()).calendar()}</div>
        </div>
      </div>
    </div>
    )
  }
  else{
  return (
   <div className = "container center">
     <p>Loading project....</p>
     </div>
  )
  }
}

const mapStateToProps = (state,ownProps) =>{
  console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null; // We use the projects variable to check if there are any projects already in the firestore using the ternary operator and we then store the required project else we return null

  return{
    project
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails)


