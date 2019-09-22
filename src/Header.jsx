import React from "react"
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='ui fixed menu'>
      <div className="ui container">
        <Link className="header item" to='/'>My Portfolio</Link>
        <div className="right menu">
          <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/about'>About Me</NavLink>
          <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/projects'>Projects</NavLink>
          <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/cv'>CV</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header