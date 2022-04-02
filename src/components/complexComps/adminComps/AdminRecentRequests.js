import React from 'react'
import style from './AdminRecentRequests.module.css';
import vector from '../../../utils/static/images/Vector.png';

const AdminRecentRequests = () => {
    return (
       <>
        <div className={style.AdminRecentRequests}>
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
         style={{ width: '90%' }}>

        <thead>
        
        <tr>
        <th>Manager Name</th>
        <th>Auditorium Name</th>
        <th>Manager Contact</th>
        <th>Capacity</th>
        <th>Cost/hr</th>
        <th>City</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
        
        <tr>
        
        <td>Jon Doe</td>
        
        <td>Apple theatre</td>
        
        <td>9865652365</td>
        
        <td>820</td>
        
        <td>22000</td>
        
        <td>New York</td>
        
        <td>
        <div className={style.buttons}>

<button type="button" className="btn btn-outline-primary">Accept</button>

<button type="button" className="btn btn-outline-danger">Reject</button>

</div>

</td>

</tr>

</tbody>

</table>

       </>

  )
}

export default AdminRecentRequests