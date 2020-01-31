import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { signIn } from '../../store/actions/authActions'
//We import actions in components to make changes in the state
class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
    console.log(this.state);
  }
  render() {
    const { authError,auth } = this.props;
    if (auth.uid) return <Redirect to="/"/>
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              { authError ? <p>{ authError }</p> :null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) =>{
  //We basically create a function in our props that takes an argument and passes it to the action we have created
  return {
    signIn: (creds) => dispatch (signIn(creds))
  }
}
//WE pass in null as that is the first parameter is for mapStateToProps
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
