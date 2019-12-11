import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">

        <li><NavLink to='/'>Forums</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating green lighten-1">TM</NavLink></li>
        
      </ul>
    </div>
  )
}

export default SignedInLinks