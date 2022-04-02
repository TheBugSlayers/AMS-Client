import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Admin from "../pages/admin/Admin";
import Profile from "../pages/profile/Profile";
import Organizer from "../pages/organizer/Organizer";

const RouteBuilder = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin/*" element={<Admin />}></Route>
      <Route path="/user/*" element={< Profile/>}></Route>
      <Route path="/organizer/*" element={<Organizer />}></Route>
    </Routes>
  );
};

export default RouteBuilder;
