import React from 'react'
import styled, {css} from 'styled-components'
import LayoutWrapper from '../../styleComps/Wrapper/LayoutWrapper'
import eventImage from "../../../utils/static/images/event.png";


const StyledTitle = styled.div`
font-weight: 600;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
color: #3D3D3D;
`;

const StyledContentDiv = styled.div`
padding: 2em 4em;
margin: 2em 0;
background-color: #fff;

.contentHeader {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 0.5em;
  color: #8b8b8b;
}

`;

const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
margin: 2em 0;


    .imgDiv{
        display: flex;
        gap: 2em;
        flex: 1 1 auto;
        align-items: flex-start;
        img{
            width: 200px;
            height: 150px;
            border-radius: 10px;
        }
    }

    .price{
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

/* Primary/Primary */

    color: #296DF1;

    }
`;

const StyledDesc = styled.div`
    width: 70%;
    margin: 0.7em 0;
`;

const StyledChip = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 2px 13px;
font-size: 12px;
/* Primary/Primary */
border: 1px solid #296DF1;
box-sizing: border-box;
border-radius: 16px;
color: #296DF1;

:hover{
    background-color: #296DF1;
    color: #fff;
}
`;

const StyledOptions = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
/* flex: 1 1 50%; */
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
  /* width: 100%; */
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

const checkboxComp = css`
background: #FFFFFF;
width: 23px;
height: 23px;
/* Primary/Primary */
border: 1px solid #296DF1;
box-sizing: border-box;
border-radius: 4px;
`;

const StyledBorderComp = styled.div`
${checkboxComp}
`;
const StyledFilledComp = styled.div`
${checkboxComp}
background: #296DF1;
`;
const StyledDisableComp = styled.div`
${checkboxComp}
border: 1px solid #C1C1C1;
`;

const StyledCheckDiv = styled.div`
display: flex;
gap: 2em;
`;

const StyledTimePickerDiv = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    margin: 2em auto;
    flex-wrap: wrap;
    gap: 2em;
`;

const StyledTimeChip = styled.button`
${checkboxComp}
width: 156px;
display: flex;
justify-content: center;
padding: 15px 30px;
width: auto;
height: auto;
cursor: pointer;
`;

const StyledFilledChip = styled(StyledTimeChip)`
    background-color: #296DF1;
    color: white;
`;

const StyledRentDiv = styled.div`
display: flex;
width: 100%;
justify-content: flex-end;

.innterRendDiv{
    align-items: center;
    display: flex;
    gap: 2em;
}
.rent{
    color: #000000;
    font-weight: 400;
    font-size: 32px;
}
`;


const OrganizerBook = () => {
    const list = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2];
    return (
        <LayoutWrapper>
            <div>Add Event / Book your slot</div>
            <StyledContentDiv>
                <StyledTitle>Book your slot</StyledTitle>
                <StyledHeader>
                    <div className='imgDiv'>
                        <img src={eventImage} />
                        <div>
                        <StyledTitle>Apple Auditorium</StyledTitle>
                            <StyledDesc>28 Wall Avenue, Las Cruces,nm, 88001  United States</StyledDesc>
                            <StyledChip>260 sheats</StyledChip>
                        </div>
                    </div>

                    <div className='price'>
                        $400/slot
                    </div>
                </StyledHeader>

                <hr style={{ width: "100%", margin: "3em 0" }} />
                
                <div className='contentHeader'>Date</div>
                <StyledOptions>
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
                    <StyledCheckDiv>

                        <div style={{display: "flex", gap: "0.8em"}}>
                            <StyledBorderComp />
                            Available
                        </div>

                        <div style={{display: "flex", gap: "0.8em"}}>
                            <StyledFilledComp />
                            Selected
                        </div>

                        <div style={{display: "flex", gap: "0.8em"}}>
                            <StyledDisableComp />
                            Not Available
                        </div>
                    </StyledCheckDiv>

                </StyledOptions>

                <StyledTimePickerDiv>
                    {list.map(() => {
                        return <StyledTimeChip> 2:30 - 3:00PM</StyledTimeChip>
                    })}
                </StyledTimePickerDiv>

                <hr style={{ width: "100%", margin: "3em 0" }} />
                <StyledRentDiv>
                    <div className='innterRendDiv'>
                        <div>
                            Total Payable Amount
                        </div>
                        <div className='rent'>
                            $800
                        </div>
                    </div>
                </StyledRentDiv> 

            <div style={{ margin: "1.3em 0" }}></div>
                
                <StyledRentDiv>
                    <div className='innterRendDiv'>
                        <StyledTimeChip>Cancel</StyledTimeChip>
                        <StyledFilledChip>Book</StyledFilledChip>
                    </div>
                </StyledRentDiv> 
            </StyledContentDiv>
        </LayoutWrapper>
    )
}

export default OrganizerBook