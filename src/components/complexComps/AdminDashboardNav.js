import React from 'react'
import notifictionIcon from '../../utils/static/images/notifictionIcon.png';
import AuditoriaLogo from '../../utils/static/images/auditoriaLogo.png';

import adminAvatar from '../../utils/static/images/adminAvatar.png';
import style from './../complexComps/adminComps/AdminDashboard.module.css';
import { Link } from 'react-router-dom';
const AdminDashboardNav = (props) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light"
      >
        <div
          className="container-fluid container justify-content-between"
          id={style.adminNavContainer}
          style={{  maxWidth: "100%", margin: "0 1em"}}
        >
          <div className={style.navLeft}>
            <div>
              {" "}
              <Link to="/">
                <img src={AuditoriaLogo} className="navbar-brand" alt="" />
              </Link>{" "}
            </div>
            <div>
              <Link to="" className="navbar-brand">
                {props.pageTitle}
              </Link>{" "}
            </div>
          </div>
          <div className={style.navRight}>
            <div>
              {" "}
              <img
                src={notifictionIcon}
                className="admin-profile-image"
                alt=""
              />{" "}
            </div>
            <div>
              {" "}
              <Link to="/user/profile">
                <img src={adminAvatar} className="admin-profile-image" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminDashboardNav