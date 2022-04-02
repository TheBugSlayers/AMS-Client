import React from 'react'
import { Link } from 'react-router-dom'
import style from './EditProfileMain.module.css'
const ResetPassword = () => {
    return (
        <div>
            <div className={style.EditProfileMain}>
                <div className={style.EditProfileMainForm}>
                    <form className="row g-3">
                      
                        <div className="col-md-12">
                            <label  className="form-label">Current Password</label>
                            <input type="password" className="form-control" id="cpassword" />
                        </div>
                        <div className="col-md-12">
                            <label  className="form-label">New Password</label>
                            <input type="password" className="form-control" id="newpassword" />
                        </div>
                        <div className="col-md-12">
                            <label  className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmpassword" />
                        </div>
                        <div className="col-12" id={style.EditProfileButtons}>
                            <Link to="/user/profile/">
                                <button type="submit" className="btn btn-outline-primary">Cancel</button> </Link>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ResetPassword