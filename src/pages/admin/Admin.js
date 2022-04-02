import React from 'react'
import AdminDashboardNav from '../../components/complexComps/AdminDashboardNav';
import AdminDashboardSideNav from '../../components/complexComps/AdminDashboardSideNav';
import AdminDashboard from '../../components/complexComps/adminComps/AdminDashboard'
import { Route, Routes } from 'react-router-dom';
import style from '../../components/complexComps/adminComps/AdminDashboard.module.css';

const Admin = () => {
  return (
    <div className={style.adminDashMain}>
      <AdminDashboardNav />
      <div className={style.AdminDashboardMiddleMain}>
        <AdminDashboardSideNav />
        <Routes>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />}/>          
        </Routes>
      </div>
    </div>
  )
}

export default Admin