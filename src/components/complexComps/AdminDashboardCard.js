import React from "react";
import style from "./AdminDashboardCard.module.css";
import cardIcon1 from "../../utils/static/images/pending.png";
import cardIcon2 from "../../utils/static/images/likeIcon.png";
import cardIcon3 from "../../utils/static/images/unlikeIcon.png";
import AdminDashboardCardItem from "./AdminDashboardCardItem";
import { useSelector } from "react-redux";

const AdminDashboardCard = () => {
  const state = useSelector((state) => state.admin);
  return (
    <div className={style.AdminDashboardCard}>
      <div className="row" id="AdminCardrow">
        <AdminDashboardCardItem
          image={cardIcon1}
          title={"Pending Verification"}
          count={state.pendingVerification}
        />
        <AdminDashboardCardItem
          image={cardIcon2}
          title={"Verified Managers"}
          count={state.verifiedManagers}
        />
        <AdminDashboardCardItem
          image={cardIcon3}
          title={"Rejected Managers"}
          count={state.rejectedManagers}
        />
      </div>
    </div>
  );
};

export default AdminDashboardCard;
