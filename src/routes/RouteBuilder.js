import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Admin from "../pages/admin/Admin";
import Organizer from "../pages/organizer/Organizer";
import Manager from '../pages/manager/Manager'

const RouteBuilder = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin/*" element={<Admin />}></Route>
      <Route path="/organizer/*" element={<Organizer />}></Route>
      <Route path="/manager/*" element={<Manager />}></Route> 
    </Routes>
  );
};

export default RouteBuilder;
