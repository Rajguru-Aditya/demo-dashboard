import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home1 from "./components/Home1";
import Product from "./pages/master/inventory/Product";
import Nav from "./components/Nav";
import Subscription from "./pages/master/inventory/Subscription";
import Brand from "./pages/master/inventory/Brand";
import { WithoutNav } from "./components/WithoutNav";
import { WithNav } from "./components/WithNav";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<Login />} />
        </Route>
        {/* <Route path="/nav" element={<Nav />} /> */}
        {/* <Route path="/nav" element={<Home1 />} /> */}
        <Route element={<WithNav />}>
          <Route path="/home1" element={<Home1 />} />
        </Route>
        {/* Master */}
        {/* Inventory */}
        <Route element={<WithNav />}>
          <Route path="/product" element={<Product />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/subscription" element={<Subscription />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/brand" element={<Brand />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
