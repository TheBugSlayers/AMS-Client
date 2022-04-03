import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/admin/Admin";
import Manager from "../pages/manager/Manager";
import Organizer from "../pages/organizer/Organizer";
import { useSelector } from "react-redux";

const RouteBuilder = (props) => {
  const userRole = useSelector((state) => state.login.userDetails.role);
  const userToken = useSelector((state) => state.login.userDetails.authToken);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  console.log(userRole);
  console.log(userToken);
  console.log(isLoggedIn);
  // let userDetails = null;

  // useEffect(() => {
  //   userDetails = localStorage.getItem("userDetails");
  //   console.log(userDetails);
  // }, []);

  return (
    // <Routes>
    //   {props.userDetails=== null && <Route path="/" element={<Home />}></Route>}
    //   {props.userDetails && userRole === "admin" &&
    //     <Route path="/admin/*" element={<Admin />}></Route>}
    //   {props.userDetails && userRole === "manager" &&
    //     <Route path="/manager/*" element={<Manager />}></Route>}
    //   {props.userDetails && userRole === "Event Organizer" &&
    //     <Route path="/organizer/*" element={<Organizer />}></Route>}
    // </Routes>

    // <Routes>
    //   <Route path="/" element={<Home /> }></Route>
    //   <Route path="/admin/*" element={<Admin />}></Route>
    //   <Route path="/manager/*" element={<Manager />}></Route>
    //   <Route path="/organizer/*" element={<Organizer />}></Route>
    // </Routes>

    <Routes>
      <Route path="/" element={!isLoggedIn ? <Home /> : userRole === "admin" ? <Navigate to="/admin/*" /> :
        userRole === "manager" ? <Navigate to="/manager/*" /> : <Navigate to="/organizer/*" />
      }></Route>
      <Route path="/admin/*" element={<Admin />}></Route>
      <Route path="/manager/*" element={<Manager />}></Route>
      <Route path="/organizer/*" element={<Organizer />}></Route>
    </Routes>
  );
};

export default RouteBuilder;
