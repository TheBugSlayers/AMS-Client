import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/admin/Admin";
import Manager from "../pages/manager/Manager";
import Organizer from "../pages/organizer/Organizer";
import PageNotFound from "../pages/ErrorPage/PageNotFound";

const RouteBuilder = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin/*" element={<Admin />}></Route>
      <Route path="/manager/*" element={<Manager />}></Route>
      <Route path="/organizer/*" element={<Organizer />}></Route>
      <Route path="/manager/*" element={<Manager />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default RouteBuilder;
