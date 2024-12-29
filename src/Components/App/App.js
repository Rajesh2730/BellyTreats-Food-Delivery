import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar'; // Assuming NavBar is in the components folder
import LoginPage from '../Login/Login';
import SignupPage from '../SignUp/Signup';
import LandingPage from './LandingPage';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleOpenModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setModalType(null);
    setShowModal(false);
  };

  return (
    <div>
      <NavBar handleOpenModal={handleOpenModal} />
      
      {/* Conditional rendering for login or signup modal */}
      {modalType === 'login' && (
        <LoginPage show={showModal} handleClose={handleCloseModal} />
      )}
      {modalType === 'signup' && (
        <SignupPage show={showModal} handleClose={handleCloseModal} />
      )}

      <Routes>
        <Route path='/BellyTreats-Food-Delivery' element={<LandingPage/>} />
        <Route path='/Login' element={<LoginPage/>} />
        <Route path='/Signup' element={<SignupPage/>} />
      </Routes>
    </div>
  );
};

export default App;
