import React from 'react'
import AdminDashboardNav from '../../components/complexComps/AdminDashboardNav';
import AdminDashboardSideNav from '../../components/complexComps/AdminDashboardSideNav';
import AdminDashboard from '../../components/complexComps/adminComps/AdminDashboard'
import { Route, Routes } from 'react-router-dom';
import style from '../../components/complexComps/adminComps/AdminDashboard.module.css';
import AdminUserList from '../../components/complexComps/adminComps/AdminUserList';
import AdminEventReservation from '../../components/complexComps/adminComps/AdminEventReservation';

const Admin = () => {
  return (
    <div className={style.adminDashMain}>
      <AdminDashboardNav />
      <div className={style.AdminDashboardMiddleMain}>
        <AdminDashboardSideNav />
        <Routes>
          <Route path="dashboard" element={<AdminDashboard  />} />
          <Route path="userlist" element={<AdminUserList />} />
          <Route path="eventreservation" element={<AdminEventReservation />} />
        </Routes>
      </div>
    </div>

    //     <div>

    //     <AdminDashboard/> 
    //     </div>




    // <div className={style.adminDashMain}>
    //         <AdminDashboardNav />
    //         <div className={style.AdminDashboardMiddleMain}>
    //             <AdminDashboardSideNav />
    //             {/* <div className={style.AdminDashboardMiddle}>
    //                 <AdminDashboardCard />
    //                 <AdminRecentRequests />
    //             </div> */}

    //         </div>
    //     </div>
  )
}

export default Admin