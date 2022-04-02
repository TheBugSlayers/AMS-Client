import style from './AdminDashboard.module.css';
import AdminDashboardNav from '../AdminDashboardNav';
import AdminDashboardCard from '../AdminDashboardCard';
import AdminRecentRequests from './AdminRecentRequests';
import AdminDashboardSideNav from '../AdminDashboardSideNav';
import "../Admin.css";


const AdminDashboard = () => {
    return (
        <div className={style.adminDashMain}>
            <AdminDashboardNav />
            <div className={style.AdminDashboardMiddleMain}>
                <AdminDashboardSideNav />
                {
                    
                }
                <div className={style.AdminDashboardMiddle}>
                    <AdminDashboardCard />
                    <AdminRecentRequests />
                </div>
            </div>
        </div>

    );
}
export default AdminDashboard;