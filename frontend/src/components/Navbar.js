import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{marginBottom: "1rem"}}>
      <Navbar.Brand href="#home"><h3>CycList</h3></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to='/home' style={{textDecoration: 'none', color: '#f8f9fa'}}><h5>Home</h5></Link></Nav.Link>
            <Nav.Link><Link to='/profile' style={{textDecoration: 'none', color: '#f8f9fa'}}><h5>Profile</h5></Link></Nav.Link>
            <Nav.Link><Link to='/create-post' style={{textDecoration: 'none', color: '#f8f9fa'}}><h5>Post</h5></Link></Nav.Link>
      
        </Nav>
    </Navbar>
  )
}


export default NavBar;