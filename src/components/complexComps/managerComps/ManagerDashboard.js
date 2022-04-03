
import style from './managerdashboard.module.css'
import vector from '../../../utils/static/images/Vector.png'

const ManagerDashboard = () => {
    return (
        <div style={{ width: '100%' }}>
            <div className={style.ManagerRecentRequests}>
                <div className='text-md-left'>
                    <h2>Recent Requests</h2>
                    <div className="input-group">
                        <div className="form-outline">
                            <input type="search" id="form1" placeholder='search' className="form-control" />
                        </div>
                        <button type="button" className="btn btn-primary">
                            <div>
                                Name
                                <img src={vector} alt="" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <table id={style.RecentRequestsTable} className="table table-striped"
                style={{ width: '90%',textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>Booked By</th>
                        <th>Email</th>
                        <th>Contact No</th>
                        <th>Payment</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Total Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jon Doe</td>
                        <td>Apple theatre</td>
                        <td>9865652365</td>
                        <td>
                            <div className={style.buttons}>
                                <button style={{borderRadius:70}} disabled type="button" className="btn btn-outline-danger">Unpaid</button>
                            </div>

                        </td>
                        <td>22000</td>
                        <td>New York</td>
                        <td>
                            24,000  
                        </td>
                    </tr>
                    <tr>
                        <td>Jon Doe</td>
                        <td>Apple theatre</td>
                        <td>9865652365</td>
                        <td>
                            <div className={style.buttons}>
                                <button style={{borderRadius:70}} disabled type="button" className="btn btn-outline-success">Paid</button>
                            </div>

                        </td>
                        <td>22000</td>
                        <td>New York</td>
                        <td>
                            24,000  
                        </td>
                    </tr>
                </tbody>
            </table>

            <div>
                <h3 className='text-left'>This Week</h3>
                <br />
                <div className={style.Bookinfo}>
                    <div>
                        <p>Total Booking</p>
                        <h4>120</h4>
                    </div>
                    <div className={style.profitinfo}>
                        <p>Total Profit</p>

                        <h4>1,20,000</h4>
                    </div>
                </div>
            </div>

        </div>

    );
}
export default ManagerDashboard;