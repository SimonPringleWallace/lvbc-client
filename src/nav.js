import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import './nav.css'
const NavBar = () => {
    return (
      <div className='nav-class'>
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand"><img className='logo' alt='lit vol logo' src={require('./images/litvol.jpg')}/> </a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem animateOut='true' eventKey={1} href="#">
        About Us
      </NavItem>
      <NavItem eventKey={2} href="#">
        Events
      </NavItem >
      <NavDropdown eventKey={3} title="Volunteer" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>About Volunteering</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Attend an Orientation</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Donate
      </NavItem>
      <NavItem eventKey={2} href="#">
        Contact Us
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
}

export default NavBar;
