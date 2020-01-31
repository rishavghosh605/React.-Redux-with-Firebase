//npm run build creates a production build in a folder called build

import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import{ Redirect } from 'react-router-dom'
 // We use redirect to redirect users to different components
//Here we use redirect because if the person is not logged in he cannot see the projectList nd thus will be redirected to the login or
//signup pages

class Dashboard extends Component {
  render() {

    // console.log(this.props);
    const { projects,auth, notifications } = this.props;
    //This form of redirect after checking if the user is not logged in or not is called route guarding
    if (!auth.uid)
      return <Redirect to="/signin" />;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects',limit:4,orderBy:['createdAt','desc']},
    {collection: 'notifications', limit: 3,orderBy:['time','desc']}
  ])
)(Dashboard)
