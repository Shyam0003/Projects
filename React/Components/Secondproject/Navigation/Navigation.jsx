import React from 'react'
import './Navigation.css'

function Navigation() {
  return (
    <>
    <div className="container">
      <div className="logo">
        <h2>24/7SERVICE</h2>
      </div>
      <div className="navbar">
        <nav>
          <div className="header">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a> </li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    </>
    )
}

export default Navigation