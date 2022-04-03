import React, { useState } from "react";
import styles from "../../../components/complexComps/AdminDashboardSideNav.module.css";
import { Link } from "react-router-dom";

const SideNavbar = ({ sideNavData }) => {
  console.log(sideNavData);
  const [sideNavItem, setSideNavItem] = useState(0);
  const activeItem = "nav-link active AdminDashboard-sideNav-a text-white";
  const nonActiveItem = "nav-link AdminDashboard-sideNav-a text-muted";
  return (
    <div className={styles.AdminDashboardSideNav}>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: 280, backgroundColor: "white" }}
      >
        <ul className="nav nav-pills flex-column mb-auto">
          {sideNavData.map((obj, index) => {
            console.log(obj);
            return (
              <li
                className="nav-item AdminDashboard-sideNav-li"
                onClick={() => {
                  setSideNavItem(index);
                }}
              >
                <Link
                  to={obj.link}
                  className={sideNavItem === index ? activeItem : nonActiveItem}
                  aria-current="page"
                >
                  <div className={styles.navDiv}>
                    <img src={obj.icon} alt="" className={styles.img} />
                    <div className={styles.navTitle}>{obj.title}</div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
