import style from './AdminDashboard.module.css';
import AdminDashboardCard from '../AdminDashboardCard';
import AdminRecentRequests from './AdminRecentRequests';
import "../Admin.css";


const AdminDashboard = () => {
    return (
        <div className={style.AdminDashboardMiddle}>
            <AdminDashboardCard />
            <AdminRecentRequests />
        </div>
    );
}
export default AdminDashboard;