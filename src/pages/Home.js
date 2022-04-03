import React from 'react'
import { Link } from 'react-router-dom';
import {
  PrimaryButton,
  SecondaryButton,
} from "../components/styleComps/Buttons";
import style from "./Home.module.css";
const Home = () => {


  return (
    <>
    <div className={style.HomeMain}>
      <Link to="/admin/dashboard" >  <PrimaryButton >Admin Dashboard</PrimaryButton> </Link>
      <Link to="/manager/dashboard" >  <PrimaryButton>Manager Dashboard</PrimaryButton> </Link>
      <Link to="/organizer/dashboard" >  <PrimaryButton>Organizer Dashboard</PrimaryButton></Link>
      </div>
    </>
  );
}

export default Home