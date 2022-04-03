import React from 'react'
import style from './ManagerBooking.module.css'
import vector from '../../../utils/static/images/Vector.png'



function ManagerBooking() {
    return (
        <div style={{ width: "90%"}}>
            <div className={style.AdminRecentRequests}>
                <div className="text-md-left">
                    <h2>Bookings</h2>
                    <div className="input-group">
                        <div className="form-outline">
                            <input
                                type="search"
                                id="form1"
                                placeholder="search"
                                className="form-control"
                            />
                        </div>
                        <button type="button" className="btn btn-primary">
                            <div>
                                Manager
                                <img src={vector} alt="" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <table
                id={style.RecentRequestsTable}
                className="table table-striped"
                style={{ width: "90%",textAlign: 'center' }}
            >
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Booked by</th>  
                        <th>Contact No</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Ticket price</th>
                        <th>Total cost</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>

                    <tr >
                        <td>Apple</td>
                        <td>Tim cook</td>
                        <td>9825532154</td>
                        <td>23/4/2022</td>
                        <td>Manager</td>
                        <td>500</td>
                        <td>30,000</td>
                        <td>
                            <div className={style.buttons}>
                                <button type="button" style={{ borderRadius: 50 }} disabled className="btn btn-outline-success">
                                    Success
                                </button>
                            </div>
                        </td>

                        <td>
                            <div className={style.buttons}>
                                <button type="button" className="btn btn-outline-danger">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default ManagerBooking