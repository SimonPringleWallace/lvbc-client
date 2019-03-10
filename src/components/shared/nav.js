import React from 'react';
import { Link }  from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './nav.css';


class NavBar extends React.Component {

  handleItemClick = () => (
    console.log('foo')
  )

  render () {
    return (
        <Navbar collapseOnSelect expand="xl" bg="light" variant="light" fixed="top">
          <Navbar.Brand>
          {/*adding link effects styling*/}
              {/*<Link exact to='/'>*/}
                <img src={require('./../../images/Logo-horizontal-red.png')}/>
              {/*</Link>*/}
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
              <NavDropdown.Item>Find an Orientation</NavDropdown.Item>
              <NavDropdown.Item>Meet our Tutors</NavDropdown.Item>
              <NavDropdown.Item>About Tutoring with LVBC</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Our Students</NavDropdown.Item>
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
