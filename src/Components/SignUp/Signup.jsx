import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Signup.css';

const SignupPage = ({ show, handleClose, handleShow }) => {

    const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle signup logic
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {/* Form fields */}
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className='f-int'
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className='f-int'
              required
            />
          </Form.Group>

          <div className="d-flex align-items-center mb-3">
            <div className="country-code me-2">+91</div>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="f-int flex-grow-1"
              required
            />
          </div>

          <Form.Group className="mb-3 position-relative">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className='f-int'
              required
            />
            <Button
              variant=""
              onClick={togglePasswordVisibility}
              className="eye translate-middle-y me-3"
              style={{ background: 'transparent', border: 'none' }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Button>
          </Form.Group>

          <Button variant="warning" type="submit" className="w-100 mb-3">
            Sign Up
          </Button>

          <div className="d-flex align-items-center mb-3">
            <hr className="flex-grow-1" />
            <span className="mx-2 text-muted">or</span>
            <hr className="flex-grow-1" />
          </div>

          <Button variant="outline-secondary" className="w-100">
            <i className="bi bi-google me-2"></i>
            Sign up with Google
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="text-center">
        <div className="w-100">
          Already have an account?{' '}
          <a href="#login" onClick={() => handleShow()}>
            Log in
          </a>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupPage;
