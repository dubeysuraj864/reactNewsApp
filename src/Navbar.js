import React from 'react'
import './Navbar.css'
import logo from './assets/white.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    
  return (
    <>
    <div>
      <nav>
          <div className="logo">
          <img src={logo} alt="" />
          <span>News+</span>
          </div>
          <div className="sign-in">
            Sign In
          </div>
      </nav>
    </div>
    </>
  )
}
