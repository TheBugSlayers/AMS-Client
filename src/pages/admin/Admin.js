import React from "react";
import AdminDashboard from "../../components/complexComps/adminComps/AdminDashboard";
import { Route, Routes } from "react-router-dom";
import AdminUserList from "../../components/complexComps/adminComps/AdminUserList";
import AdminEventReservation from "../../components/complexComps/adminComps/AdminEventReservation";
import Navbar from "../../components/complexComps/globalComps/Navbar";
import dashboard from "../../utils/static/images/dashboard.png";
import user from "../../utils/static/images/user.png";
import eventRegNavIcon from "../../utils/static/images/eventRegNavIcon.png";


const Admin = () => {

  const adminNavContent = [
    {
      title: "Dashboard",
      link: "dashboard",
      icon: dashboard,
    },
    {
      title: "User List",
      link: "userlist",
      icon: user,
    },
    {
      title: "Event Reservation",
      link: "eventreservation",
      icon: eventRegNavIcon,
    },
  ];
  return (
    <Navbar sideNavData={adminNavContent} pageTitle="Admin">
      <Routes>
           <Route path="dashboard" element={<AdminDashboard />} />
           <Route path="userlist" element={<AdminUserList />} />
           <Route path="eventreservation" element={<AdminEventReservation />} />
         </Routes>
    </Navbar>
    // <div className={style.adminDashMain}>
    //   <AdminDashboardNav navTitle="Admin" />
    //   <div className={style.AdminDashboardMiddleMain}>
    //     <AdminDashboardSideNav />
    //     <Routes>
    //       <Route path="dashboard" element={<AdminDashboard />} />
    //       <Route path="userlist" element={<AdminUserList />} />
    //       <Route path="eventreservation" element={<AdminEventReservation />} />
    //     </Routes>
    //   </div>
    // </div>
  );
};

export default Admin;
