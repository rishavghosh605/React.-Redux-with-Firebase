import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
//We need to take input of props in SignedInLinks instead of this.props as it is a functional component
const SignedInLinks = (props) => {
  const {profile} = props;
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        {/*Do not write props.signOut() in the onClick part as parentheses:() are not required*/}
        <li><a onClick = {props.signOut}>Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">{profile.initials}</NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return{
    signOut: () => dispatch(signOut())
  }
}
export default connect(null,mapDispatchToProps)(SignedInLinks);
