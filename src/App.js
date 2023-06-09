import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home1 from './components/Home1';
import Product from './pages/master/inventory/Product';
import Nav from './components/Nav';
import Subscription from './pages/master/inventory/Subscription';
import Brand from './pages/master/inventory/Brand';

const App = () => {

  return (
    <div>
      <Routes>  
        <Route path="/" element={<Login />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/home1" element={<Home1 />} />
        {/* Master */}
        {/* Inventory */}
        <Route path="/product" element={<Product />} /> 
        <Route path="/subscription" element={<Subscription />} /> 
        <Route path="/brand" element={<Brand />} /> 
      </Routes>
    </div>
  );
};

export default App;
