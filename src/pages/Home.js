import React from 'react'
import {
  PrimaryButton,
  SecondaryButton,
} from "../components/styleComps/Buttons";

const Home = () => {

      const handleClick = () => {
        console.log("Button clicked");
      };

    return (
      <>
        <div>Home</div>
        <PrimaryButton onClick={handleClick}>Hello</PrimaryButton>
        <SecondaryButton>Hii there</SecondaryButton>
      </>
    );
}

export default Home