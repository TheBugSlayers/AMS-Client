import React from 'react'
import styles from '../../../components/complexComps/AdminDashboardSideNav.module.css';
import icon1 from '../../../utils/static/images/dashboardNavIcon.png';
import icon2 from '../../../utils/static/images/eventRegNavIcon.png';
import icon3 from '../../../utils/static/images/profileNavIcon.png';
import { Link } from 'react-router-dom';



const SideNavbar = () => {
  return (
    <div className={styles.AdminDashboardSideNav}>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: 280 }}>

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item AdminDashboard-sideNav-li">
            <Link to="dashboard" className="nav-link active AdminDashboard-sideNav-a" aria-current="page">
              <svg className="bi me-2" width="16" height="20"></svg>
              <img src={icon1} alt="" /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="userlist" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="20"></svg>
              <img src={icon3} alt="" />  User list
            </Link>
          </li>

          <li>
            <Link to="eventreservation" className="nav-link link-dark">
              <svg className="bi me-2" width="16" height="20"></svg>
              <img src={icon2} alt="" />   Event Reservation
            </Link>
          </li>

        </ul>

      </div>

    </div>
  )
}

export default SideNavbar