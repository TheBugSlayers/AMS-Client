import React from 'react'
import {
  PrimaryButton,
  SecondaryButton,
} from "../components/styleComps/Buttons";
import Login from './login/Login';

const Home = () => {

    return (
      <>
        <Login/>
        {/* <div>Home</div>
        <PrimaryButton onClick={handleClick}>Hello</PrimaryButton>
        <SecondaryButton>Hii there</SecondaryButton> */}
      </>
    );
}

export default Home;