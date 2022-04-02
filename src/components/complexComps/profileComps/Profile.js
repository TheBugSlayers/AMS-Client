import React from 'react'
import ProfileNav from './ProfileNav'
import ProfileSideNav from './ProfileSideNav'
import style from './EditProfile.module.css';
import EditProfileMain from './EditProfileMain';
import { Link, Route, Routes } from "react-router-dom";
import adminAvatarLarge from "../../../utils/static/images/adminIconLarge.png";


const EditProfile = () => {
  return (
    <div className={style.ProfileView}>

      <div className={style.ProfileViewImageMain}>

        <div> <img src={adminAvatarLarge} alt="" />
        </div>
        <div className={style.ProfileViewTitle}>
          <div className={style.ProfileViewTitleUpper}>
            <h4>Joe Doe</h4> <p>ADMIN</p></div>

          <div><p>@London</p></div>
        </div>


        <Link to="/user/profile/editprofile" style={{ height: '100%' }}>
          <button type="submit" className="btn btn-primary"
           >Edit</button>
        </Link>
      </div>

      <div>

        <form className="row g-3">

          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder='joedoe@gmail.com' />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="number" placeholder='+91 9429198720' />
          </div>



        </form>
      </div>
    </div>
    // <div className={style.EditProfile}>
    //   <ProfileNav />
    //   <div className='container'>
    //     <h4>Profile</h4>
    //     <div className={style.EditProfileMainSection}>
    //       <ProfileSideNav />

    //       <div className={style.ProfileView}>

    //         <div className={style.ProfileViewImageMain}>

    //           <div> <img src={adminAvatarLarge} alt="" />
    //           </div>
    //           <div className={style.ProfileViewTitle}>
    //             <div className={style.ProfileViewTitleUpper}>
    //                <h4>Joe Doe</h4> <p>ADMIN</p></div>

    //             <div><p>@London</p></div>
    //           </div>


    //           <button type="submit" className="btn btn-primary"
    //             style={{ height: '100%' }}>Edit</button> </div>

    //         <div>

    //           <form className="row g-3">

    //             <div className="col-md-6">
    //               <label for="inputEmail4" className="form-label">Email</label>
    //               <input type="email" className="form-control" id="inputEmail4" placeholder='joedoe@gmail.com' />
    //             </div>
    //             <div className="col-md-6">
    //               <label for="Number4" className="form-label">Phone Number</label>
    //               <input type="number" className="form-control" id="number" placeholder='+91 9429198720' />
    //             </div>



    //           </form>
    //         </div>
    //       </div>

    //       <Routes>
    //         <Route path="editprofile" element={<EditProfileMain />}></Route>
    //       </Routes>

    //     </div>
    //   </div>
    // </div>
  )
}

export default EditProfile