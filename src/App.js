import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Product from './pages/master/inventory/Product';
import Nav from './components/Nav';

const App = () => {

  return (
    <div>
      <Routes>  
        <Route path="/" element={<Login />} />
        <Route path="/nav" element={<Nav />} />
        {/* Master */}
        {/* Inventory */}
        <Route path="/product" element={<Product />} /> 
      </Routes>
    </div>
  );
};

export default App;
