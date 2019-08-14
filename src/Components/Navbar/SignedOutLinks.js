import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/signin'>Login</NavLink></li>
        <li><NavLink to='/courses'>Courses</NavLink></li>
        <li><NavLink to='/recources'>Resources</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks