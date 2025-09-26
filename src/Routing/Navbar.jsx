import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <h3>
        This is Navbar component
      </h3>
      <nav style={{ display: 'flex', width: '800px', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to={'/'}>Home</Link>
        <Link to={'/About'}>About</Link>
        <Link to={'/Contactus'}>ContactUs</Link>
        <Link to={'/Career'}>Career</Link>
        <Link to={'/Login'}>Login</Link>
      </nav>
    </div>
  )
}

export default Navbar
