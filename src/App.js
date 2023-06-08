import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NestedSubitem1 from './components/NestedSubitem1';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/nested-subitem-1" element={<NestedSubitem1 />} /> 
      </Routes>
    </div>
  );
};

export default App;
