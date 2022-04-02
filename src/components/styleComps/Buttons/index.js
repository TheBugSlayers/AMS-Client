import styled from "styled-components";
import React from "react";
import { Button } from "react-bootstrap";

const PrimaryBigButton = styled(Button)`
  min-width: 107px;
  justify-content: center;
  display: flex;
  background: #296df1;
  border-radius: 4px;
`;

const SecBigButton = styled(Button)`
  color: #296df1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 107px;
  padding: 9px 20px;
  background: transparent;
  border: 1px solid #296df1;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const PrimaryButton = (props) => {
  return (
    <PrimaryBigButton onClick={props.onClick}>
      {props.children}
    </PrimaryBigButton>
  );
};

export const SecondaryButton = (props) => {
    return (
      <SecBigButton onClick={props.onClick}>{props.children}</SecBigButton>
    );
}

