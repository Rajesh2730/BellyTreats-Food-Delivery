import React , { useState }from 'react';
import { Navbar, Nav , NavDropdown, Container, Offcanvas } from 'react-bootstrap';
import Veg from '../../Assets/Veg.png'
import NonVeg from '../../Assets/non-veg.jpg'
import BTlogo from '../../Assets/Bellytreats-bg.png'
import './NavBar.css'

const ResponsiveNavbar = () => {

    const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);
  return (
    <Navbar variant="light" expand="lg" className="navbar">
        <Container>
        <Navbar.Brand href="/BellyTreats-Food-Delivery">
        <div className='logo'>
        <img src={BTlogo} alt="" style={{width:"100%"}} />
        </div> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvas-navbar" />
        <Navbar.Offcanvas
          id="offcanvas-navbar"
          aria-labelledby="offcanvas-navbar-label"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvas-navbar-label">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/BellyTreats-Food-Delivery" className='mx-4 px-4'>Home</Nav.Link>
              <Nav.Link href="#login" className='mx-4 px-4'>Log-In</Nav.Link>
              <Nav.Link href="#signup" className='mx-4 px-4'>Sign Up</Nav.Link>
              <NavDropdown
              title=" Prefered Food Type"
              id="collasible-nav-dropdown"
              show={showDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className='mx-4 px-4 fw-bold'
            >
            <NavDropdown.Item href="#dropdown" >
            <div className='veg'>
             <img src={Veg} alt="" style={{width:'10%'}} /> Veg
            </div>
            </NavDropdown.Item>
            <NavDropdown.Item href="#dropdown" >
            <div className='veg'>
             <img src={NonVeg} alt="" style={{width:'10%'}} /> Non-Veg
            </div>
            </NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
