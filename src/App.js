import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Product from './pages/master/inventory/Product';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Master */}
        {/* Inventory */}
        <Route path="/product" element={<Product />} /> 
      </Routes>
    </div>
  );
};

export default App;
