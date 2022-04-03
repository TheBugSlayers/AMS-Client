import style from "./AdminDashboard.module.css";
import AdminDashboardNav from "../AdminDashboardNav";
import AdminDashboardCard from "../AdminDashboardCard";
import AdminRecentRequests from "./AdminRecentRequests";
import AdminDashboardSideNav from "../AdminDashboardSideNav";
import "../Admin.css";
import AdminUserList from "./AdminUserList";

const AdminDashboard = () => {
  return (
    <div className={style.AdminDashboardMiddle}>
      <AdminDashboardCard />
      <AdminRecentRequests />
    </div>
  );
};
export default AdminDashboard;
