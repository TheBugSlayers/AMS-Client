import React from 'react'
import notifictionIcon from '../../utils/static/images/notifictionIcon.png';
import AuditoriaLogo from '../../utils/static/images/auditoriaLogo.png';

import adminAvatar from '../../utils/static/images/adminAvatar.png';
import style from './../complexComps/adminComps/AdminDashboard.module.css';
import { Link } from 'react-router-dom';
const AdminDashboardNav = () => {
  return (
    <div>
         <nav className="navbar navbar-light bg-light">
  <div className="container-fluid container" id={style.adminNavContainer} style={{  maxWidth: '1300px' }}>
      <div className={style.navLeft}>
   <div> <img src={AuditoriaLogo} className="navbar-brand" alt=""/> </div>
    <div><Link to="" className="navbar-brand">Admin</Link>  </div>
    </div>
    <div className={style.navRight}>
     <div> <img src={notifictionIcon} className="admin-profile-image" alt="" /> </div>
     <div> <img src={adminAvatar} className="admin-profile-image"  alt="" /></div>
        </div>
  </div>
</nav>

    </div>
  )
}

export default AdminDashboardNav