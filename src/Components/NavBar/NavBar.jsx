import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Offcanvas } from 'react-bootstrap';
import Veg from '../../Assets/Veg.png';
import NonVeg from '../../Assets/non-veg.jpg';
import BTlogo from '../../Assets/Bellytreats-bg.png';
import './NavBar.css';
import LoginPage from '../Login/Login';
import SignupPage from '../SignUp/Signup';

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  // Handle mouse enter and leave for dropdown
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  // Functions to control the login and signup modals
  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
    setShowSignupModal(false); // Close signup modal if it's open
  };
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const handleOpenSignUpModal = () => {
    setShowSignupModal(true);
    setShowLoginModal(false); // Close login modal if it's open
  };
  const handleCloseSignUpModal = () => setShowSignupModal(false);

  return (
    <>
      <Navbar variant="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/BellyTreats-Food-Delivery" className="logo-body">
            <img src={BTlogo} alt="BellyTreats Logo" className="logo" />
          </Navbar.Brand>
          <h2 className='title'> <span className='text-warning'>B</span>elly<span className='text-warning'>T</span>reats</h2>
          <Navbar.Toggle aria-controls="offcanvas-navbar" className="custom-toggle" />
          <Navbar.Offcanvas
            id="offcanvas-navbar"
            aria-labelledby="offcanvas-navbar-label"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvas-navbar-label">
                <div className="logo-tab mx-4">
                  <img src={BTlogo} alt="BellyTreats Logo" style={{ width: '100%' }} />
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/BellyTreats-Food-Delivery" className="mx-4 px-4 fw-bold">
                  Home
                </Nav.Link>
                <Nav.Link onClick={handleOpenLoginModal} className="mx-4 px-4 fw-bold">
                  Log-In
                </Nav.Link>
                <Nav.Link onClick={handleOpenSignUpModal} className="mx-4 px-4 fw-bold">
                  Sign Up
                </Nav.Link>
                <NavDropdown
                  title="Preferred Food Type"
                  id="collasible-nav-dropdown"
                  show={showDropdown}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="mx-4 px-4 fw-bold"
                >
                  <NavDropdown.Item href="#dropdown" className="mb-2">
                    <div className="veg">
                      <img src={Veg} alt="Veg" style={{ width: '10%' }} /> Veg
                    </div>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#dropdown">
                    <div className="veg">
                      <img src={NonVeg} alt="Non-Veg" style={{ width: '10%' }} /> Non-Veg
                    </div>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Passing modal state and functions as props */}
      <LoginPage
        show={showLoginModal}
        handleClose={handleCloseLoginModal}
        handleShow={handleOpenSignUpModal} // To switch to signup page
      />
      <SignupPage
        show={showSignupModal}
        handleClose={handleCloseSignUpModal}
        handleShow={handleOpenLoginModal} // To switch to login page
      />
    </>
  );
};

export default NavBar;
