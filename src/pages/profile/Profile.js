import React from 'react'
import { Route, Routes } from 'react-router-dom';
import EditProfileMain from '../../components/complexComps/profileComps/EditProfileMain';
import EditProfile from '../../components/complexComps/profileComps/Profile';
import style from "../../components/complexComps/profileComps/EditProfile.module.css"
import ProfileNav from '../../components/complexComps/profileComps/ProfileNav';
import ProfileSideNav from '../../components/complexComps/profileComps/ProfileSideNav';
import adminAvatarLarge from "../../utils/static/images/adminIconLarge.png";
import ResetPassword from '../../components/complexComps/profileComps/ResetPassword';

function Profile() {
  return (
    <div className={style.EditProfile}>
    {/* <ProfileNav page="profilehome" /> */}
    <div className='container'>
      <div className={style.ProfileMainContainer}>
      <h4 style={{padding:'27px 0'}}>Profile</h4>
      <div className={style.EditProfileMainSection}>
        <ProfileSideNav />
        <Routes>
          <Route path="profile" element={<EditProfile/>}></Route>
          <Route path="profile/editprofile" element={<EditProfileMain />}></Route>
          <Route path="profile/resetpassword" element={<ResetPassword />}></Route>
        </Routes>

        {/* <div className={style.ProfileView}>

          <div className={style.ProfileViewImageMain}>

            <div> <img src={adminAvatarLarge} alt="" />
            </div>
            <div className={style.ProfileViewTitle}>
              <div className={style.ProfileViewTitleUpper}>
                 <h4>Joe Doe</h4> <p>ADMIN</p></div>

              <div><p>@London</p></div>
            </div>


            <button type="submit" className="btn btn-primary"
              style={{ height: '100%' }}>Edit</button> </div>

          <div>

            <form className="row g-3">

              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder='joedoe@gmail.com' />
              </div>
              <div className="col-md-6">
                <label for="Number4" className="form-label">Phone Number</label>
                <input type="number" className="form-control" id="number" placeholder='+91 9429198720' />
              </div>



            </form>
          </div>
        </div> */}

      
      </div>
    </div>
  </div>
  </div>
  )
}

export default Profile