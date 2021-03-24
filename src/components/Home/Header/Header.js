import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from './signature.png';
const Header = () => {
   return (
      <Navbar expand="lg"
         className="shadow-lg navbar">
         <Navbar.Brand href="#home" className="brand">
            <img src={logo} alt=""/>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
               <Nav.Link href="/">
                  <NavLink
                     exact
                     className="link px-4"
                     activeClassName="active_link" to="/">
                     Home
                  </NavLink>
               </Nav.Link>
               <Nav.Link href="/about">
                  <NavLink
                     className="link px-4"
                     activeClassName="active_link" to="/about">
                     About
                  </NavLink>
               </Nav.Link>
               <Nav.Link href="/project">
                  <NavLink 
                     className="link px-4"
                     activeClassName="active_link" to="/project">
                     Project
                  </NavLink>
               </Nav.Link>
               <Nav.Link href="/contact">
                  <NavLink
                     className="link px-4"
                     activeClassName="active_link" to="/contact">
                     Contact
                  </NavLink>
               </Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>
   );
};

export default Header;