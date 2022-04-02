import React from 'react'
import adminAvatarLarge from "../../../utils/static/images/adminIconLarge.png";
import style from './EditProfileMain.module.css';

const EditProfileMain = () => {
  return (
    <div className={style.EditProfileMain}>
        <img src={adminAvatarLarge} alt="" />
        <div className={style.EditProfileMainForm}>
        <form className="row g-3">
  <div className="col-md-6">
    <label for="Name4" className="form-label">Name</label>
    <input type="text" className="form-control" id="Name4" />
  </div>
  <div className="col-md-6">
    <label for="Location4" className="form-label">Location</label>
    <input type="text" className="form-control" id="Location" /> 
  </div>

  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" />
  </div>
  <div className="col-md-6">
    <label for="Number4" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="number" /> 
  </div>


  <div className="col-12" id={style.EditProfileButtons}>
    <button type="submit" className="btn btn-outline-primary">Cancel</button>
    <button type="submit" className="btn btn-primary">Save</button>
  </div>
</form>
        </div>
    </div>
  )
}

export default EditProfileMain