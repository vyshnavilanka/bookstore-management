import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav className ='navbar'>
      <div className ='navbar-left'>
        <span className='navbar-brand'>Book store</span>
      </div>
      <div className='navbar-right' >
        <Link to="/books" className='navbar-link'>Books</Link>
        <Link to="/login" className='navbar-link'>Login</Link>
        <Link to ="/addbook" className ="navbar-link">Add Book</Link>
        <Link to ="/addstudent" className ="navbar-link">Add Student</Link>
        <Link to ="/dashboard" className ="navbar-link">Dasboard</Link>
      </div>
    </nav>
  )
}

export default Navbar