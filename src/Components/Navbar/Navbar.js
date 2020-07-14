import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const navBar = () => {
  return (
    <div>
      <nav id="navbar">
        <h1 className="logo">Jose Hernandez</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>    {/*As you click around on the different <Link>s, the router renders the matching <Route>.} */}
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default withRouter(navBar)