import React from 'react'
import styled from 'styled-components'
import AdminDashboardSideNav from '../AdminDashboardSideNav';
import AdminDashboardNav from '../AdminDashboardNav';
import SideNavbar from '../../styleComps/Navbar/SideNavbar';

const StyledNavDiv = styled.div`
    justify-content: space-between;
    .mainContent{
        display: flex;
    }
`;

const Navbar = (props) => {
  return (
    <StyledNavDiv>
    <AdminDashboardNav />
    <div className="mainContent">
      <SideNavbar />
      {props.children}
    </div>
  </StyledNavDiv>
  )
}

export default Navbar