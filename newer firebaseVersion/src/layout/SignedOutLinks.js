import React from 'react'
import { NavLink } from 'react-router-dom'
//() Symbol means that the component is a functional component instead of a class component
const SignedInLinks = () =>{
    return(
        <ul className='right'>
            <li><NavLink to='/signup'>Signup</NavLink></li>
            <li><NavLink to='/signin'>Log In</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating-pink lighten-1'>RG</NavLink></li>
        </ul>
    );
}

export default SignedInLinks;