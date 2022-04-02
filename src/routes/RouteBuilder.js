import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'

const RouteBuilder = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default RouteBuilder;
