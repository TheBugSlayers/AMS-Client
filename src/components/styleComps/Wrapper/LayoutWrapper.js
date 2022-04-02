import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
     width: 100%;
    margin: 2em 7em;
`;

const LayoutWrapper = (props) => {
  return (
    <StyledDiv>{props.children}</StyledDiv>
  )
}

export default LayoutWrapper