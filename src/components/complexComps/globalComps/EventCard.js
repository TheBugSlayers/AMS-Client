import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import eventImage from "../../../utils/static/images/event.png"
import location from "../../../utils/static/images/location.png"



const StyledDiv = styled(Card)`
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    border-color: transparent;
    width: 366px;
    
    img{
        /* width: 2em; */
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 366px;
    }
`;

const StyledContent = styled.div`
width: 100%;
padding: 1.5em;

.heading{
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
}

img{
    width: 24px;
    height: 24px;
}

.descDiv{
    display: flex;
    gap: 0.5em;
    margin: 1em 0;
    align-items: center;
}

.descText{
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #4D4D4D;
}

.priceDiv{
    display: flex;
    gap: 1em;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #8B8B8B;
}
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

const EventCard = () => {
    return (
        <StyledDiv>
            <img src={eventImage} alt="eventImage" />
            <StyledContent>
                <div className='heading'>
                    DMask-the truth
                    <StyledChip>Music</StyledChip>
                </div>

                <div className='descDiv'>
                    <img src={location} alt="eventImage" />
                    <div className='descText'>
                    28 Wall Avenue, Las Cruces,nm, 88001  United States
                    </div>
                </div>

                <div className='priceDiv'>
                $100  |  26, Aug
                </div>
            </StyledContent>
        </StyledDiv>
    )
}

export default EventCard