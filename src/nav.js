import React, { Component } from 'react';
import './App.css';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'

const NavBar = () => {
    return (
      <React.Fragment>
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Literacy Voluneteers <br/>of Berkshire County</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        About Us
      </NavItem>
      <NavItem eventKey={2} href="#">
        Events
      </NavItem>
      <NavDropdown eventKey={3} title="Volunteer" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>About Volunteering</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Attend an Orientation</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </React.Fragment>
    );
}

export default NavBar;
