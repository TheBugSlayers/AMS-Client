import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Admin from "../pages/admin/Admin";
import Profile from "../components/complexComps/profileComps/Profile";

const RouteBuilder = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin/*" element={<Admin />}></Route>
      <Route path="/profile/*" element={<Profile />}></Route>
    </Routes>
  );
};

export default RouteBuilder;
