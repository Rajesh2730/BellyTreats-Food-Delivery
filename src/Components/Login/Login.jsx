import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons
import './Login.css';

const LoginPage = ({ show, handleClose, handleShow }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle login logic
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 position-relative">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
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
            Log In
          </Button>

          <div className="d-flex align-items-center mb-3">
            <hr className="flex-grow-1" />
            <span className="mx-2 text-muted">or</span>
            <hr className="flex-grow-1" />
          </div>

          <Button variant="outline-secondary" className="w-100">
            <i className="bi bi-google me-2"></i>
            Log in with Google
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="text-center">
        <div className="w-100">
          New to our service?{' '}
          <a href="#create-account" onClick={() => handleShow()}>
            Create account
          </a>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginPage;
