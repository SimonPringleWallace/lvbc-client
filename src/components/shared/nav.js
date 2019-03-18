import React from 'react';
import { Link }  from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Collapse } from 'react-bootstrap';
import './nav.css';


class NavBar extends React.Component {

  render () {
    return (
        <Navbar collapseOnSelect expand="xl" bg="light" variant="light" fixed="top">
          <Navbar.Brand>
          {/*adding link effects styling*/}
              <Link exact to='/'>
                <div className='logo-container'></div>
              </Link>
          </Navbar.Brand>
          {/*wrapping the below in a div to space the menu properly effects styling*/}
          <Container bsPrefix='icon-wrapper'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link>
              <Link exact to='/about'>
                About Us
                </Link>
              </Nav.Link>
              <NavDropdown title="Volunteer" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link exact to='/orientation'>Find an Orientation</Link></NavDropdown.Item>
              <NavDropdown.Item><Link exact to='./about-tutoring'>About Tutoring with LVBC</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link exact to='./about-our-students'>Our Students</Link></NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link exact to='/events'>
                  Events
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link exact to='/contact'>
                 Contact Us
                 </Link>
              </Nav.Link>
              <Nav.Link>
              <Link exact to='/donate'>
              Donate
              </Link>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
   }
  }

export default NavBar;
