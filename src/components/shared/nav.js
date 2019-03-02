import React from 'react';
import { Link }  from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './nav.css'


class NavBar extends React.Component {

  handleItemClick = () => (
    console.log('foo')
  )

  render () {
    return (
      <div className='nav-wrapper'>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
          <Navbar.Brand>
            {/*<Link exact to='/'>*/}
              <img src={require('./../../images/Logo-horizontal-red.png')}/>
            {/*</Link>*/}
          </Navbar.Brand>
          <div className='menu'>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
          </Nav>
          <Nav>
            <Nav.Link>
            <Link exact to='/donate'>
             Donate
             </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        </Navbar>
      </div>
    );
   }
  }

export default NavBar;
