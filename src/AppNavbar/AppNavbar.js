import React from 'react'
import { NavLink } from 'react-router-dom'


function AppNavbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/create">Create User</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/show">Show User</NavLink>
                    </li>
                    
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default AppNavbar
