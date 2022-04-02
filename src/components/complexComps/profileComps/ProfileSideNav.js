import React from 'react'
import { Link } from 'react-router-dom';
import style from './ProfileSideNav.module.css';

const ProfileSideNav = () => {
  return (
    <div className={style.ProfileSideNav} >
      <div className='ProfileSideNav container'>
        <div className="d-flex align-items-start">
          <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <Link to="profile">   
             <button style={{ borderRadius: '0', padding: '9px 100px' }}
              className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                Profile</button>
            </Link><Link to="profile/resetpassword"> <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Reset Password</button>
            </Link><Link to="">  <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Privacy Policy</button>
            </Link></div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSideNav