import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

//Firebase auth is a free authentication service using jsonwebtokens it will store them email id photo url an uid and display name
// we cannot store sprecial things like last and first name for that we connect the uid to the database
//firebase.auth.isEmpty = true means there is no profile

//We keep track of the auth state of the user by checking if state.firebase.auth has a property uid or not
const Navbar = (props) => {
  const { auth, profile } = props;
  const links =  auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps =(state)=>{
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Navbar);
