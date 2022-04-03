import React from 'react'
import style from './ManagerTransactHist.module.css';
import vector from '../../../utils/static/images/Vector.png'


function ManageTransactHist() {
  return (
    <div style={{ width: "90%"}}>
        <div className={style.AdminRecentRequests}>
                <div className="text-md-left">
                    <h2>Transaction</h2>
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
                                Events
                                <img src={vector} alt="" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <table
                id={style.RecentRequestsTable}
                className="table table-striped"
                style={{ width: "90%" ,textAlign: 'center' }}
            >
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Booking date</th>
                        <th>Booking amount</th>
                        <th>Payment date</th>
                        <th>Status</th>
                        
                    </tr>
                </thead>
                <tbody>

                    <tr >
                        
                        <td>Apple</td>
                        <td>23/5/2022</td>
                        <td>2,300</td>
                        <td>4/5/2022</td>

                        <td>
                        <div className={style.buttons}>
                                <button type="button" style={{ borderRadius: 50 }} disabled className="btn btn-outline-warning">
                                    Pending
                                </button>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
    </div>
  )
}

export default ManageTransactHist