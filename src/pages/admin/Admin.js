import React from 'react'
import AdminDashboardNav from '../../components/complexComps/AdminDashboardNav';
import AdminDashboardSideNav from '../../components/complexComps/AdminDashboardSideNav';
import AdminDashboard from '../../components/complexComps/adminComps/AdminDashboard'


const Admin = () => {
  return (
    <AdminDashboard/>
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