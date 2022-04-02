import React from 'react'
import AuditoriaLogo from "../../../utils/static/images/auditoriaLogo.png";
import notifictionIcon from "../../../utils/static/images/notifictionIcon.png";
import adminAvatar from "../../../utils/static/images/adminAvatar.png";
import style from "./EditProfile.module.css";
import { Button } from "react-bootstrap";

const ProfileNav = () => {
  return (
    <div>
         <div className={style.EditProfile}>
            <div className={style.adminDashMain}>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid container">
                        <div className={style.navLeft}>
                            <img src={AuditoriaLogo} className="navbar-brand" alt="" />
                            <div className={style.menus}>
                                <Button
                                    variant="light"
                                    className="cursor: pointer navbar-brand"
                                    disabled
                                >
                                    Home
                                </Button>
                                <Button variant="primary">Book Tickets </Button>
                                <Button disabled variant="light">
                                    {" "}
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                        <div className={style.navRight}>
                            <div>
                                {" "}
                                <img
                                    src={notifictionIcon}
                                    className="admin-profile-image"
                                    alt=""
                                />{" "}
                            </div>
                            <div>
                                {" "}
                                <img src={adminAvatar} className="admin-profile-image" alt="" />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default ProfileNav