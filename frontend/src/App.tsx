import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Community from './pages/Community';
import Login from './pages/Login';
import Register from './pages/Register';
import Store from './pages/Store';

function App() {
  return (
    <>
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
