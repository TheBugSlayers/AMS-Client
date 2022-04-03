import React from 'react'
import LayoutWrapper from '../../styleComps/Wrapper/LayoutWrapper';
import styled from 'styled-components';
import { Dropdown } from 'react-bootstrap';
import filterIcon from '../../../utils/static/images/filter.png';
import Card from '../globalComps/EventCard';


const StyledTitle = styled.div`
font-weight: 600;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
color: #3D3D3D;
`;

const StyledFilterDiv = styled.div`
padding: 2em 4em;
margin: 2em 0;
background-color: #fff;
display: flex;
flex: 0 0 33.33%;
justify-content: space-between;
align-items: center;

.contentHeader {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 0.5em;
  color: #8b8b8b;
}

`;

const StyledDropdown = styled(Dropdown)`
    background: #F4F4F4;
/* shadow-1 */

box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.03);
border-radius: 4px;

/* Inside auto layout */
width: 341px;
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 6px 0px;
`;

const StyledInputDate = styled.input`
  appearance: none;
  box-sizing: border-box;
  width: 341px;
  border: 0;
  background: #F4F4F4;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.03);
  border-radius: 4px;
  font-size: 0.7rem;
  padding: 8px;
  
  /* color-scheme: dark; */
  width: 100%;
  ::-webkit-datetime-edit-text {
    padding: 0 0.2rem;
  }
  ::-webkit-datetime-edit-month-field {
    text-transform: uppercase;
  }
  ::-webkit-datetime-edit-day-field {
    text-transform: uppercase;
  }
  ::-webkit-datetime-edit-year-field {
    text-transform: uppercase;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
  ::-webkit-calendar-picker-indicator {
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin-left: 100px;
  }
`;

const StyledCardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
`;

const OrganizerAddEvent = () => {

    const list = [1, 2, 3, 4, 5, 6, 7, 4];


    return (
        <LayoutWrapper>
            <StyledTitle>Select an Auditorium</StyledTitle>
            <StyledFilterDiv>
                <div>
                    <div classname="contentHeader">
                        City
                    </div>
                    <StyledDropdown>
                        <Dropdown.Toggle variant="default" id="dropdown-basic">
                            New York
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Delhi</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Punjab</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Gujarat</Dropdown.Item>
                        </Dropdown.Menu>
                    </StyledDropdown>
                </div>

                <div>
                    <div classname="contentHeader">
                        Date
                    </div>
                    <StyledInputDate
                        type="datetime-local"
                        name="date"
                        onInput={(e) => {
                            const d = new Date(e.target.value);
                            // setDate(
                            //     `${d.getDate()} ${Months[d.getMonth()]} ${d.getFullYear()}`
                            // );
                        }}
                    />
                </div>

                <div>
                    <img style={{ width: "44px", height: "44px", cursor: "pointer" }} src={filterIcon} />
                </div>
            </StyledFilterDiv>

            <StyledTitle>Auditoriums in New York</StyledTitle>
            <div style={{ margin: "1.3em 0" }}></div>
            <StyledCardDiv>
                {/* <Card /> */}
                {list.map((obj, index) => {
                    return <Card isButton={true} link={`./book/${index}`} />
                })}
            </StyledCardDiv>

        </LayoutWrapper>
    )
}

export default OrganizerAddEvent