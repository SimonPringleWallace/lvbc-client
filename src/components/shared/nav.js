import React from 'react';
import {Link}  from 'react-router-dom'
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import './nav.css'


const NavBar = () => {
    return (
      <div className='nav-class'>
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem animateOut='true' eventKey={1} >
        <Link exact to='/about'>
          About Us
        </Link>
      </NavItem>

      <NavItem eventKey={2} >
        <Link exact to='/events'>
          Events
        </Link>
      </NavItem>

      <NavDropdown eventKey={3} title="Volunteer" id="basic-nav-dropdown">

        <MenuItem eventKey={3.1}>
          <Link exact to='/about-volunteering'>
            About Volunteering
          </Link>
        </MenuItem>

        <MenuItem divider />

        <MenuItem eventKey={3.3}>
          <Link exact to='/orientation'>
            Attend an Orientation
          </Link>
        </MenuItem>
      </NavDropdown>
    </Nav>

    <Nav pullRight>

      <NavItem eventKey={4} >
        <Link exact to='/donate'>
          Donate
        </Link>
      </NavItem>

      <NavItem eventKey={5} >
        <Link exact to='/contact'>
          Contact Us
        </Link>
      </NavItem>

    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
}

export default NavBar;
