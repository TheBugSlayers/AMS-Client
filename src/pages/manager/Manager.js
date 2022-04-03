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

const Manager = () => {
  return (
    <div className={style.adminDashMain}>
      <AdminDashboardNav navTitle="Manager" />
      <div className={style.AdminDashboardMiddleMain}>
        <AdminDashboardSideNav />
        <Routes>
          <Route path="dashboard" element={<ManagerDashboard />} />
          <Route path="auditorium" element={<ManagerAuditorium />} />
          <Route path="auditorium/edit" element={<ManagerAudiEdit />} />
          <Route path="booking" element={<ManagerBooking />} />
          <Route path="transactions" element={<ManageTransactHist />} />


        </Routes>
      </div>
    </div>
  );
};

export default Manager;
