import React from "react";
import AdminDashboardNav from "../../components/complexComps/AdminDashboardNav";
import AdminDashboardSideNav from "../../components/complexComps/AdminDashboardSideNav";
import ManagerDashboard from "../../components/complexComps/managerComps/ManagerDashboard";
import { Route, Routes } from "react-router-dom";
import style from "../../components/complexComps/adminComps/AdminDashboard.module.css";
import ManagerAuditorium from "../../components/complexComps/managerComps/ManagerAuditorium";
import ManagerAudiEdit from "../../components/complexComps/managerComps/ManagerAudiEdit";
import ManagerBooking from "../../components/complexComps/managerComps/ManagerBooking";
import ManageTransactHist from "../../components/complexComps/managerComps/ManageTransactHist";
import Navbar from "../../components/complexComps/globalComps/Navbar";
import dashboard from "../../utils/static/images/dashboard.png";
import auditorium from "../../utils/static/images/auditorium.png";
import bookings from "../../utils/static/images/bookings.png";
import transaction from "../../utils/static/images/transaction.png";



const Manager = () => {

  const managerNavContent = [
    {
      title: "Dashboard",
      link: "dashboard",
      icon: dashboard,
    },
    {
      title: "Auditorium",
      link: "auditorium",
      icon: auditorium,
    },
    {
      title: "Booking",
      link: "booking",
      icon: bookings,
    },
    {
      title: "Transaction History",
      link: "transactions",
      icon: transaction,
    },
  ];

  return (
    <Navbar sideNavData={managerNavContent} pageTitle="Manager">
      <Routes>
           <Route path="dashboard" element={<ManagerDashboard />} />
           <Route path="auditorium" element={<ManagerAuditorium />} />
           <Route path="auditorium/edit" element={<ManagerAudiEdit />} />
           <Route path="booking" element={<ManagerBooking />} />
           <Route path="transactions" element={<ManageTransactHist />} />
         </Routes>
    </Navbar>
  );
};

export default Manager;
